const BASE = (
  import.meta.env.VITE_API_BASE_URL || "https://decisiontree-b.onrender.com"
).replace(/\/$/, "");

const u = (path) => `${BASE}/api${path}`;

export async function fetchEntries() {
  const r = await fetch(u("/entries"));
  if (!r.ok) throw new Error("fetchEntries failed");
  return r.json();
}

export async function createEntryApi(payload) {
  const r = await fetch(u("/entries"), {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  });
  if (!r.ok) throw new Error("createEntry failed");
  return r.json();
}

export async function deleteEntryApi(id) {
  const r = await fetch(u(`/entries/${id}`), { method: "DELETE" });
  if (!r.ok && r.status !== 204) throw new Error("deleteEntry failed");
}

export async function deleteAllApi() {
  const r = await fetch(u("/entries"), { method: "DELETE" });
  if (!r.ok && r.status !== 204) throw new Error("deleteAll failed");
}

export { u as apiUrl };
