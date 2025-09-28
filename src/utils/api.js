const BASE = (
  import.meta.env.VITE_API_BASE_URL || "https://decisiontree-b.onrender.com"
).replace(/\/$/, "");
const url = (p) => `${BASE}/api${p}`;

const tokenKey = "dt_token";
export const tokenStore = {
  get: () => localStorage.getItem(tokenKey),
  set: (t) => localStorage.setItem(tokenKey, t),
  clear: () => localStorage.removeItem(tokenKey),
};

async function parseJsonSafe(res) {
  const ct = res.headers.get("content-type") || "";
  if (!ct.includes("application/json")) return null;
  try {
    return await res.json();
  } catch {
    return null;
  }
}

async function request(
  path,
  { method = "GET", body, headers = {}, timeoutMs = 20000 } = {}
) {
  const auth = tokenStore.get();
  const controller = new AbortController();
  const t = setTimeout(() => controller.abort(), timeoutMs);

  let res;
  try {
    res = await fetch(url(path), {
      method,
      headers: {
        "Content-Type": "application/json",
        ...(auth ? { Authorization: `Bearer ${auth}` } : {}),
        ...headers,
      },
      body: body ? JSON.stringify(body) : undefined,
      signal: controller.signal,
    });
  } catch (e) {
    const err = new Error(
      e?.name === "AbortError"
        ? "Час очікування вичерпано."
        : "Сервер недоступний. Перевірте зʼєднання."
    );
    err.status = 0;
    throw err;
  } finally {
    clearTimeout(t);
  }

  if (res.status === 204) return null;

  if (!res.ok) {
    const payload = await parseJsonSafe(res);
    const err = new Error(
      payload?.message || res.statusText || "Request failed"
    );
    err.status = res.status;
    throw err;
  }

  const data = await parseJsonSafe(res);
  return data ?? null;
}

export const authApi = {
  me: () => request("/auth/me"),
  login: (email, password) =>
    request("/auth/login", { method: "POST", body: { email, password } }),
  register: (email, password, name) =>
    request("/auth/register", {
      method: "POST",
      body: { email, password, name },
    }),
  logout: async () => {
    tokenStore.clear();
    return { ok: true };
  },
};

export const entriesApi = {
  list: () => request("/entries"),
  create: (payload) => request("/entries", { method: "POST", body: payload }),
  remove: (id) => request(`/entries/${id}`, { method: "DELETE" }),
  removeAll: () => request(`/entries`, { method: "DELETE" }),
};

export async function uploadFile(file, { timeoutMs = 30000 } = {}) {
  const form = new FormData();
  form.append("file", file);
  const auth = tokenStore.get();

  const controller = new AbortController();
  const t = setTimeout(() => controller.abort(), timeoutMs);

  let res;
  try {
    res = await fetch(url("/upload"), {
      method: "POST",
      body: form,
      headers: auth ? { Authorization: `Bearer ${auth}` } : {},
      signal: controller.signal,
    });
  } catch (e) {
    const err = new Error(
      e?.name === "AbortError"
        ? "Час очікування вичерпано."
        : "Сервер недоступний. Перевірте зʼєднання."
    );
    err.status = 0;
    throw err;
  } finally {
    clearTimeout(t);
  }

  if (!res.ok) {
    const payload = await parseJsonSafe(res);
    const err = new Error(payload?.message || "Upload failed");
    err.status = res.status;
    throw err;
  }
  const data = await parseJsonSafe(res);
  return data ?? null;
}

export { url as apiUrl };
