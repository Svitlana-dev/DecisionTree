import { useEffect, useMemo, useState } from "react";
import { DECISION_TREE, TREE_META } from "../../data/decisionTree.js";
import ScreenshotInput from "../ScreenshotInput/ScreenshotInput.jsx";
import JournalModal from "../JournalModal/JournalModal.jsx";
import PathDiagram from "../PathDiagram/PathDiagram.jsx";
import {
  fetchEntries,
  createEntryApi,
  deleteEntryApi,
  deleteAllApi,
} from "../../utils/api.js";
import { uploadScreenshot } from "../../utils/cloudinary.js";
import css from "./DecisionTreeLogger.module.css";

function findChildById(parent, id) {
  return (parent?.children || []).find((c) => c.id === id) || null;
}

// зібрати заголовки колонок для поточного шляху
function collectLevelTitles(rootTitle, path) {
  const titles = [];
  if (rootTitle) titles.push(rootTitle);
  for (const n of path) {
    if (n?.nextTitle) titles.push(n.nextTitle);
  }
  // заголовків може бути на 1 більше за fields; обріжемо до довжини path
  return titles.slice(0, path.length > 0 ? path.length : 1);
}

export default function DecisionTreeLogger() {
  const [entries, setEntries] = useState([]);
  const [path, setPath] = useState([]);
  const [shot, setShot] = useState(null); // {file, url}
  const [journalOpen, setJournalOpen] = useState(false);
  const [pendingTail, setPendingTail] = useState(null);
  const [rr, setRr] = useState("");

  const nextOptions = useMemo(() => {
    if (path.length === 0) return DECISION_TREE;
    const last = path[path.length - 1];
    return last?.children ?? [];
  }, [path]);

  const atLeaf = path.length > 0 && nextOptions.length === 0;

  useEffect(() => {
    fetchEntries().then(setEntries).catch(console.error);
  }, []);

  const beginEditAt = (idx) => {
    setPendingTail(path.slice(idx + 1));
    setPath(path.slice(0, idx));
  };

  const handlePickLevel = (node, level) => {
    setPath((prev) => {
      const next = [...prev.slice(0, level), node];
      if (pendingTail?.length) {
        let ptr = node;
        for (const t of pendingTail) {
          const f = findChildById(ptr, t.id);
          if (!f) break;
          next.push(f);
          ptr = f;
        }
        setPendingTail(null);
      }
      return next;
    });
  };

  const resetFlow = () => {
    if (shot?.url) URL.revokeObjectURL(shot.url);
    setShot(null);
    setPendingTail(null);
    setPath([]);
    setRr("");
  };

  const createEntry = async () => {
    if (!atLeaf) return;
    try {
      let screenshotUrl = null;
      let screenshotPublicId = null;
      if (shot?.file) {
        const up = await uploadScreenshot(shot.file);
        screenshotUrl = up.url;
        screenshotPublicId = up.public_id;
      }

      const payload = {
        fields: path.map((n) => n.label),
        note: rr ? `RR: ${rr}` : "",
        screenshotUrl,
        screenshotPublicId,
      };

      const saved = await createEntryApi(payload);
      setEntries((prev) => [saved, ...prev]);
      resetFlow();
    } catch (e) {
      console.error(e);
      alert("Помилка створення запису");
    }
  };

  const deleteOne = async (id) => {
    try {
      await deleteEntryApi(id);
      setEntries((prev) => prev.filter((e) => String(e._id) !== String(id)));
    } catch (e) {
      console.error(e);
      alert("Не вдалося видалити");
    }
  };

  const deleteAll = async () => {
    if (!confirm("Очистити всі записи в базі?")) return;
    try {
      await deleteAllApi();
      setEntries([]);
    } catch (e) {
      console.error(e);
      alert("Не вдалося очистити");
    }
  };

  const handleRrChange = (e) => {
    const val = e.target.value.replace(",", ".");
    if (/^\d*\.?\d*$/.test(val) || val === "") setRr(val);
  };

  const levelTitles = collectLevelTitles(TREE_META.rootTitle, path);

  return (
    <div className={css.wrapper}>
      <h1 className={css.title}>Дерево рішень</h1>

      <div className={css.topActions}>
        <button onClick={() => setJournalOpen(true)}>
          Відкрити журнал{entries.length ? ` (${entries.length})` : ""}
        </button>
        <button onClick={deleteAll}>Очистити всі записи</button>
      </div>

      <section className={css.section}>
        <div className={css.headRow}>
          <h2>Кроки</h2>
          {path.length > 0 && (
            <button className={css.linkBtn} onClick={resetFlow}>
              Скинути все
            </button>
          )}
        </div>

        <PathDiagram
          rootOptions={DECISION_TREE ?? []}
          path={path ?? []}
          onPick={handlePickLevel}
          onEdit={beginEditAt}
          rootTitle={TREE_META.rootTitle}
        />

        {atLeaf && (
          <div className={css.finalRow}>
            <div className={css.rrGroup}>
              <div className={css.rrLabel}>Введіть значення RR</div>
              <input
                className={css.rrInput}
                type="text"
                inputMode="decimal"
                placeholder="наприклад 12.5 або 12,5"
                value={rr}
                onChange={handleRrChange}
              />
              <div className={css.rrHint}>
                Можна вводити з комою або крапкою
              </div>
            </div>

            <ScreenshotInput onPick={setShot} previewUrl={shot?.url} />

            <button className={css.primary} onClick={createEntry}>
              Створити запис
            </button>
          </div>
        )}
      </section>

      <JournalModal
        open={journalOpen}
        onClose={() => setJournalOpen(false)}
        entries={entries}
        onDeleteOne={deleteOne}
        onDeleteAll={deleteAll}
        levelTitles={levelTitles}
      />
    </div>
  );
}
