// src/components/PathDiagram/PathDiagram.jsx
import { useMemo } from "react";
import css from "./PathDiagram.module.css";

export default function PathDiagram({ rootOptions = [], path = [], onPick }) {
  // 0 — корені; далі — children від обраних вузлів
  const rows = useMemo(() => {
    const r = [rootOptions || []];
    for (let i = 0; i < path.length; i++) r.push(path[i]?.children || []);
    return r;
  }, [rootOptions, path]);

  // Заголовок показуємо тільки починаючи з 1-го рівня
  const titleFor = (level) =>
    level === 0 ? null : path[level - 1]?.nextTitle || null;

  return (
    <div className={css.diagram}>
      {rows.map((nodes = [], level) => {
        const selectedHere = path[level];
        const autoHere = Boolean(selectedHere?.auto);

        return (
          <div key={level} className={css.levelBlock}>
            {titleFor(level) && (
              <div className={css.levelTitle} aria-hidden>
                {titleFor(level)}
              </div>
            )}

            {/* Неклікабельний піл для авто-вибраного вузла */}
            {autoHere && (
              <div className={css.autoPill} aria-hidden>
                {selectedHere.label}
              </div>
            )}

            <div className={css.row}>
              {autoHere ? null : nodes.length === 0 ? (
                <div className={css.empty}>—</div>
              ) : (
                nodes.map((n) => (
                  <button
                    key={n.id}
                    className={`${css.node} ${
                      path[level]?.id === n.id ? css.active : ""
                    }`}
                    onClick={() => onPick?.(n, level)}
                    type="button"
                  >
                    {n.label}
                  </button>
                ))
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
}
