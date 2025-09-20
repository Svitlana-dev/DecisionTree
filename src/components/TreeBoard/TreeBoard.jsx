import { useEffect, useMemo, useRef, useState } from "react";
import css from "./TreeBoard.module.css";

/**
 * Рендерить дерево рядками (рівнями).
 * На кожному рівні показує ВСІ варіанти цього рівня.
 * Підсвічує активний вузол (з path[level]).
 * Малює тонкий конектор від активного вузла попереднього рівня до наступного ряду.
 */
export default function TreeBoard({
  rootOptions,
  path,
  onPick,
  onEditAttempt,
}) {
  // Обчислюємо ряди: [level0 options, level1 options, ...]
  const rows = useMemo(() => {
    const out = [];
    // 0 рівень — це rootOptions
    out.push(rootOptions);
    // далі — діти кожного вибраного у path вузла
    for (let i = 0; i < path.length; i++) {
      const parent = path[i];
      const children = parent?.children ?? [];
      if (children.length) out.push(children);
    }
    return out;
  }, [rootOptions, path]);

  // Знаходимо центр активної кнопки на кожному рівні (щоб поставити вертикальну «гілку»)
  const btnRefs = useRef({});
  const [anchors, setAnchors] = useState({}); // {level: px-from-row-left}

  useEffect(() => {
    const next = {};
    rows.forEach((_, level) => {
      const el = btnRefs.current?.[level];
      if (!el) return;
      const row = el.closest(`.${css.row}`);
      if (!row) return;
      const rowBox = row.getBoundingClientRect();
      const box = el.getBoundingClientRect();
      next[level] = box.left - rowBox.left + box.width / 2;
    });
    setAnchors(next);
  }, [rows, path]);

  return (
    <div className={css.tree}>
      {rows.map((nodes, level) => {
        const active = path[level]; // може бути undefined на останньому рівні
        const hasNext = level < rows.length - 1;
        const anchorX = anchors[level]; // центр активного вузла цього рівня

        return (
          <div
            key={level}
            className={css.row}
            style={
              hasNext && anchorX != null
                ? { ["--anchor-x"]: `${anchorX}px` }
                : undefined
            }
          >
            {nodes.map((n) => {
              const isActive = active?.id === n.id;
              return (
                <button
                  key={n.id}
                  ref={(el) => {
                    // зберігаємо ref тільки для активної кнопки рівня
                    if (isActive && el) btnRefs.current[level] = el;
                  }}
                  className={`${css.node} ${isActive ? css.active : ""}`}
                  title={n.label}
                  onClick={() => {
                    // Якщо клацаємо вже активний — вважаємо це "редагування рівня"
                    if (isActive) onEditAttempt?.(level);
                    onPick(n, level);
                  }}
                >
                  {n.label}
                </button>
              );
            })}
            {/* вертикальна лінія від активного вузла до наступного рівня */}
            {hasNext && active && <i className={css.connector} aria-hidden />}
          </div>
        );
      })}
    </div>
  );
}
