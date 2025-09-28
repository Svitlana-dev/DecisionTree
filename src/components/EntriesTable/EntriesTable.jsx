// src/components/EntriesTable/EntriesTable.jsx
import css from "./EntriesTable.module.css";

const fmt = (iso) => {
  const val = iso || "";
  try {
    return val ? new Date(val).toLocaleString() : "—";
  } catch {
    return "—";
  }
};

// службові заголовки рівнів і категорії, які треба прибрати зі старих записів
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

// зі старого формату лишаємо лише обрані користувачем опції
function extractChoices(fields = []) {
  return fields.filter(
    (x) => x && !TITLE_TOKENS.has(x) && !ROOT_CATEGORIES.has(x)
  );
}

/**
 * Нормалізує запис у єдину структуру:
 * { date, coin, trigger, confirmation, goal, poi, entryModel, rr, screenshotUrl, _id }
 * 1) Спочатку читаємо значення з fields (старий формат)
 * 2) Прямі поля (новий формат) перекривають значення з fields, якщо присутні
 * Так ми не втрачаємо дані, навіть якщо бекенд зберіг лише fields.
 */
function normalizeEntry(e = {}) {
  const date = e.date || e.createdAt;

  // 1) значення зі старого формату (fields)
  const choices = Array.isArray(e.fields) ? extractChoices(e.fields) : [];
  const fromFields = {
    confirmation: choices[0] || "",
    goal: choices[1] || "",
    poi: choices[2] || "",
    entryModel: choices[3] || "",
  };

  // RR: пряме поле або з note
  let rr = e.rr ?? e.RR ?? "";
  if ((rr === null || rr === "") && typeof e.note === "string") {
    rr = e.note.match(/([+-]?\d+(?:[.,]\d+)?)/)?.[1] ?? "";
  }

  // 2) прямі поля перекривають
  return {
    date,
    coin: e.coin || "",
    trigger: e.trigger || "",
    confirmation: e.confirmation || fromFields.confirmation,
    goal: e.goal || fromFields.goal,
    poi: e.poi || fromFields.poi,
    entryModel: e.entryModel || fromFields.entryModel,
    rr,
    screenshotUrl: e.screenshotUrl || null,
    _id: e._id || e.id || date, // запасний ключ
  };
}

export default function EntriesTable({ entries = [], onDeleteOne }) {
  // нормалізуємо та сортуємо: нові зверху
  const normalized = (entries || []).map(normalizeEntry).sort((a, b) => {
    const da = a.date ? new Date(a.date).getTime() : 0;
    const db = b.date ? new Date(b.date).getTime() : 0;
    return db - da;
  });

  return (
    <div className={css.wrap}>
      <table className={css.table}>
        <thead>
          <tr>
            <th>Дата</th>
            <th>Монета</th>
            <th>Тригер</th>
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
          {normalized.length === 0 && (
            <tr>
              <td colSpan={10} className={css.empty}>
                Поки що немає записів.
              </td>
            </tr>
          )}

          {normalized.map((e) => (
            <tr key={e._id}>
              <td>{fmt(e.date)}</td>
              <td>{e.coin || "—"}</td>
              <td>{e.trigger || "—"}</td>
              <td>{e.confirmation || "—"}</td>
              <td>{e.goal || "—"}</td>
              <td>{e.poi || "—"}</td>
              <td>{e.entryModel || "—"}</td>
              <td>{e.rr || "—"}</td>
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
                  onClick={() => onDeleteOne?.(e._id)}
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
          ))}
        </tbody>
      </table>
    </div>
  );
}
