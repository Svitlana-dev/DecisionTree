// src/components/EntriesTable/EntriesTable.jsx
import css from "./EntriesTable.module.css";

const fmt = (iso) => {
  if (!iso) return "—";
  try {
    return new Date(iso).toLocaleString();
  } catch {
    return "—";
  }
};

// службові заголовки рівнів і категорії, які треба прибрати з breadcrumbs
const TITLE_TOKENS = new Set([
  "Тригер 1W",
  "Підтвердження 1Д",
  "Підтвердження 4Н",
  "Ціль 1Д",
  "Ціль 1W",
  "POI 4H",
  "POI 1Д",
  "Модель входу",
]);
const ROOT_CATEGORIES = new Set(["Фрактал", "IMB", "OB"]);

// лишаємо лише обрані користувачем опції
function extractChoices(fields = []) {
  return fields.filter(
    (x) => x && !TITLE_TOKENS.has(x) && !ROOT_CATEGORIES.has(x)
  );
}

export default function EntriesTable({ entries = [], onDeleteOne }) {
  return (
    <div className={css.wrap}>
      <table className={css.table}>
        <thead>
          <tr>
            <th>Дата</th>
            <th>Підтвердження</th>
            <th>Ціль</th>
            <th>POI</th>
            <th>Модель входу</th>
            <th>RR</th>
            <th>Скрін</th>
            <th></th>
          </tr>
        </thead>

        <tbody>
          {entries.length === 0 && (
            <tr>
              <td colSpan={8} className={css.empty}>
                Поки що немає записів.
              </td>
            </tr>
          )}

          {entries.map((e) => {
            const choices = extractChoices(e.fields);
            const confirm = choices[0] ?? "—";
            const target = choices[1] ?? "—";
            const poi = choices[2] ?? "—";
            const model = choices[3] ?? "—";
            const rr =
              e.rr ?? e.note?.match(/([+-]?\d+(?:[.,]\d+)?)/)?.[1] ?? "—";

            return (
              <tr key={e._id || e.id || e.createdAt}>
                <td>{fmt(e.createdAt)}</td>
                <td>{confirm}</td>
                <td>{target}</td>
                <td>{poi}</td>
                <td>{model}</td>
                <td>{rr}</td>
                <td className={css.screenCell}>
                  {e.screenshotUrl ? (
                    <a
                      className={css.link}
                      href={e.screenshotUrl}
                      target="_blank"
                      rel="noreferrer"
                    >
                      Відкрити
                    </a>
                  ) : (
                    "—"
                  )}
                </td>
                <td>
                  <button
                    className={css.trashBtn}
                    onClick={() => onDeleteOne?.(e._id || e.id)}
                    aria-label="Видалити запис"
                    title="Видалити запис"
                  >
                    <svg
                      viewBox="0 0 24 24"
                      width="18"
                      height="18"
                      fill="currentColor"
                    >
                      <path d="M3 6h18v2H3V6zm2 3h14l-1.5 12.5c-.1.8-.8 1.5-1.6 1.5H8.1c-.8 0-1.5-.7-1.6-1.5L5 9zm5 2v9h2v-9h-2zm4 0v9h2v-9h-2zM9 4V2h6v2h5v2H4V4h5z" />
                    </svg>
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
