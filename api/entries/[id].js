/* eslint-disable no-undef */
import { getDb } from "./_mongo.js";
import { ObjectId } from "mongodb";
import crypto from "crypto";

const CLOUD = {
  name: process.env.CLOUDINARY_CLOUD_NAME,
  key: process.env.CLOUDINARY_API_KEY,
  secret: process.env.CLOUDINARY_API_SECRET,
};

async function deleteFromCloudinary(public_id) {
  if (!public_id) return { result: "no_public_id" };

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
  const data = await r.json(); // { result: 'ok' | 'not found' | ... }
  return data;
}

export default async function handler(req, res) {
  if (req.method !== "DELETE") return res.status(405).end();
  const { id } = req.query;

  try {
    const db = await getDb();
    const col = db.collection("entries");
    const _id = new ObjectId(String(id));
    const doc = await col.findOne({ _id });

    if (!doc) return res.status(404).json({ error: "Not found" });

    // 1) Видаляємо з Cloudinary (якщо є public_id)
    try {
      if (doc.screenshotPublicId) {
        await deleteFromCloudinary(doc.screenshotPublicId);
      }
    } catch (e) {
      // лог і продовжуємо (не блокуємо видалення з БД)
      console.error("Cloudinary delete error:", e);
    }

    // 2) Видаляємо з БД
    await col.deleteOne({ _id });

    return res.status(204).end();
  } catch (e) {
    console.error(e);
    return res.status(500).json({ error: "Server error" });
  }
}
