import { apiUrl } from "./api.js";

export async function uploadScreenshot(file) {
  const fd = new FormData();
  fd.append("file", file);

  const r = await fetch(apiUrl("/upload"), {
    method: "POST",
    body: fd,
    credentials: "include",
  });

  if (!r.ok) throw new Error("upload failed");
  return r.json();
}
