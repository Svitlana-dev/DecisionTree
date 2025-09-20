/* eslint-disable no-undef */
import { getDb } from "./_mongo.js";
import crypto from "crypto";

const CLOUD = {
  name: process.env.CLOUDINARY_CLOUD_NAME,
  key: process.env.CLOUDINARY_API_KEY,
  secret: process.env.CLOUDINARY_API_SECRET,
};

function assertCloudEnv() {
  if (!CLOUD.name || !CLOUD.key || !CLOUD.secret) {
    throw new Error("Cloudinary env vars missing (CLOUDINARY_*).");
  }
}

async function deleteFromCloudinary(public_id) {
  if (!public_id) return { result: "no_public_id" };

  assertCloudEnv();

  const ts = Math.floor(Date.now() / 1000);
  const stringToSign = `public_id=${public_id}&timestamp=${ts}${CLOUD.secret}`;
  const signature = crypto
    .createHash("sha1")
    .update(stringToSign)
    .digest("hex");

  const form = new URLSearchParams();
  form.set("public_id", public_id);
  form.set("timestamp", ts);
  form.set("api_key", CLOUD.key);
  form.set("signature", signature);

  const url = `https://api.cloudinary.com/v1_1/${CLOUD.name}/image/destroy`;
  const r = await fetch(url, { method: "POST", body: form });
  const data = await r.json().catch(() => ({}));
  // data: { result: 'ok' | 'not found' | ... }
  return data;
}

function readBody(req) {
  return new Promise((resolve) => {
    let data = "";
    req.on("data", (d) => (data += d));
    req.on("end", () => {
      try {
        resolve(data ? JSON.parse(data) : {});
      } catch {
        resolve({});
      }
    });
  });
}

export default async function handler(req, res) {
  // На майбутнє: якщо додаси справжні CORS — тут зручно їх повісити
  if (req.method === "OPTIONS") {
    res.status(204).end();
    return;
  }

  const db = await getDb();
  const col = db.collection("entries");

  // GET: список
  if (req.method === "GET") {
    try {
      const list = await col.find({}).sort({ _id: -1 }).toArray();
      return res.status(200).json(list);
    } catch (e) {
      console.error("GET /api/entries error:", e);
      return res.status(500).json({ error: "Failed to fetch entries" });
    }
  }

  // POST: створення
  if (req.method === "POST") {
    try {
      const body = await readBody(req);
      const doc = {
        fields: Array.isArray(body.fields) ? body.fields : [],
        note: typeof body.note === "string" ? body.note : "",
        screenshotUrl: body.screenshotUrl ?? null,
        screenshotPublicId: body.screenshotPublicId ?? null,
        createdAt: new Date().toISOString(),
      };
      const r = await col.insertOne(doc);
      doc._id = r.insertedId;
      return res.status(201).json(doc);
    } catch (e) {
      console.error("POST /api/entries error:", e);
      return res.status(500).json({ error: "Failed to create entry" });
    }
  }

  // DELETE: очистити всі записи (з видаленням скрінів у Cloudinary)
  if (req.method === "DELETE") {
    try {
      const all = await col
        .find({})
        .project({ screenshotPublicId: 1 })
        .toArray();

      const tasks = all
        .map((d) => d.screenshotPublicId)
        .filter(Boolean)
        .map((pid) => deleteFromCloudinary(pid));

      // не ламаємо всю операцію через 1 невдале видалення
      const results = await Promise.allSettled(tasks);
      const failed = results.filter((r) => r.status === "rejected");
      if (failed.length) {
        console.warn("Some Cloudinary deletes failed:", failed.length);
      }

      await col.deleteMany({});
      return res.status(204).end();
    } catch (e) {
      console.error("DELETE /api/entries error:", e);
      return res.status(500).json({ error: "Failed to delete all entries" });
    }
  }

  return res.status(405).json({ error: "Method Not Allowed" });
}
