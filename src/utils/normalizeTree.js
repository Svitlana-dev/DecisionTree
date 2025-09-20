function slug(s) {
  return String(s || "")
    .toLowerCase()
    .replace(/\s+/g, "-")
    .replace(/[^a-z0-9\-а-яіїєґ]/gi, "");
}

export function normalizeTree(nodes, titles = [], parentPath = []) {
  return (nodes || []).map((node, idx) => {
    const path = [...parentPath, idx];
    const id = path.join("-") + "-" + slug(node.label);
    const level = path.length - 1;
    const nextTitle = titles[level + 1] || node.nextTitle || null;

    const out = { ...node, id, nextTitle };

    if (node.children?.length) {
      out.children = normalizeTree(node.children, titles, path);
    }
    return out;
  });
}
