import { useMemo, useRef, useLayoutEffect, useState } from "react";
import css from "./PathDiagram.module.css";

/**
 * props:
 * - rootOptions: масив кореневих вузлів
 * - path: масив обраних вузлів по рівнях [{id,label,children,nextTitle}, ...]
 * - onPick(node, level): клік по вузлу рівня
 * - onEdit(level): клік по крихті (стрибок для редагування)
 * - rootTitle: назва 1-го рівня (між заголовком і першим рядом)
 */
export default function PathDiagram({
  rootOptions = [],
  path = [],
  onPick,
  onEdit,
  rootTitle = "Категорія",
}) {
  // формуємо ряди: 0 — корені, далі children від активного вузла попереднього рівня
  const rows = useMemo(() => {
    const r = [];
    r.push(rootOptions || []);
    for (let i = 0; i < path.length; i++) r.push(path[i]?.children || []);
    return r;
  }, [rootOptions, path]);

  const titleFor = (level) => {
    if (level === 0) return rootTitle;
    return path[level - 1]?.nextTitle || null;
  };

  // refs на кнопки кожного рівня, щоб намалювати лінії
  const containerRef = useRef(null);
  const nodeRefs = useRef([]); // [ {id:element}, {id:element}, ... ]
  nodeRefs.current = rows.map((_, i) => nodeRefs.current[i] || {});

  const [lines, setLines] = useState([]);

  useLayoutEffect(() => {
    if (!containerRef.current) return;

    const contRect = containerRef.current.getBoundingClientRect();
    const newLines = [];

    // малюємо лінії лише від АКТИВНОГО вузла рівня i до всіх вузлів рівня i+1
    for (let i = 0; i < rows.length - 1; i++) {
      const activeParent = path[i];
      if (!activeParent) break; // якщо рівень не обрано — далі ліній немає

      const parentEl = nodeRefs.current[i]?.[activeParent.id];
      if (!parentEl) continue;

      const p = parentEl.getBoundingClientRect();
      const targets = Object.values(nodeRefs.current[i + 1] || {});
      for (const tEl of targets) {
        const c = tEl.getBoundingClientRect();
        newLines.push({
          x1: p.left + p.width / 2 - contRect.left,
          y1: p.bottom - contRect.top,
          x2: c.left + c.width / 2 - contRect.left,
          y2: c.top - contRect.top,
        });
      }
    }

    setLines(newLines);
  }, [rows, path]);

  // оновлюємо лінії при ресайзі
  useLayoutEffect(() => {
    const onResize = () => {
      // форсимо перерахунок через зміну стану rows.length
      setLines((ls) => [...ls]);
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  const isPicked = (i, node) => path[i]?.id === node.id;

  return (
    <div className={css.diagram} ref={containerRef}>
      {/* SVG шар із лініями */}
      <svg className={css.lines}>
        {lines.map((l, i) => (
          <line key={i} x1={l.x1} y1={l.y1} x2={l.x2} y2={l.y2} />
        ))}
      </svg>

      {/* Хлібні крихти */}
      <div className={css.breadcrumbs}>
        {path.length === 0 ? (
          <span className={css.bcMuted}>Рівні ще не обрані</span>
        ) : (
          path.map((n, i) => (
            <button
              key={n.id}
              className={css.bc}
              onClick={() => onEdit?.(i)}
              title="Редагувати з цього рівня"
            >
              {n.label}
            </button>
          ))
        )}
      </div>

      {/* Всі рівні одразу: заголовок-рівня + кнопки вузлів */}
      {rows.map((nodes, level) => (
        <div key={level} className={css.levelBlock}>
          {titleFor(level) && (
            <div className={css.levelTitle} aria-hidden>
              {titleFor(level)}
            </div>
          )}

          <div className={css.row}>
            {nodes.length === 0 ? (
              <div className={css.empty}>—</div>
            ) : (
              nodes.map((n) => (
                <button
                  key={n.id}
                  ref={(el) => {
                    if (el) nodeRefs.current[level][n.id] = el;
                  }}
                  className={`${css.node} ${
                    isPicked(level, n) ? css.active : ""
                  }`}
                  onClick={() => onPick?.(n, level)}
                >
                  {n.label}
                </button>
              ))
            )}
          </div>
        </div>
      ))}
    </div>
  );
}
