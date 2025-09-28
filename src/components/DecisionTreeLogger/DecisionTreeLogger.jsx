// src/components/DecisionTreeLogger/DecisionTreeLogger.jsx
import { useEffect, useMemo, useState } from "react";
import { DECISION_TREE, TREE_META } from "../../data/decisionTree.js";
import ScreenshotInput from "../ScreenshotInput/ScreenshotInput.jsx";
import JournalModal from "../JournalModal/JournalModal.jsx";
import PathDiagram from "../PathDiagram/PathDiagram.jsx";
import { entriesApi, uploadFile } from "../../utils/api.js";
import { useAuth } from "../../hooks/useAuth.js";
import HeaderBar from "../HeaderBar/HeaderBar.jsx";
// import PositionSizeCalc from "../PositionSizeCalc/PositionSizeCalc.jsx"; // не потрібен, якщо HeaderBar показує калькулятор сам
import css from "./DecisionTreeLogger.module.css";

import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

/** Містки, які підставляються як неклікабельні піли */
const BRIDGE_LABELS = new Set([
  "Ціль 1Д",
  "Ціль 1W",
  "POI 1Д",
  "POI 4H",
  "Модель входу",
]);

/** Побудувати ланцюжок авто-вузлів, починаючи від node */
function buildAutoChain(node) {
  const chain = [];
  let cur = node;
  while (cur && Array.isArray(cur.children)) {
    const bridge = cur.children.find((c) => BRIDGE_LABELS.has(c.label));
    if (!bridge) break;
    chain.push({ ...bridge, auto: true });
    cur = bridge;
  }
  return chain;
}

// заголовки колонок для модалки журналу
function collectLevelTitles(rootTitle, path) {
  const titles = [];
  if (rootTitle) titles.push(rootTitle);
  for (const n of path) if (n?.nextTitle) titles.push(n.nextTitle);
  return titles.slice(0, path.length > 0 ? path.length : 1);
}

export default function DecisionTreeLogger() {
  const { logout } = useAuth();

  const [entries, setEntries] = useState([]);
  const [path, setPath] = useState([]);
  const [shot, setShot] = useState(null); // {file, url}
  const [journalOpen, setJournalOpen] = useState(false);

  const [coin, setCoin] = useState(""); // монета
  const [rr, setRr] = useState("");

  const nextOptions = useMemo(() => {
    if (path.length === 0) return DECISION_TREE;
    const last = path[path.length - 1];
    return last?.children ?? [];
  }, [path]);

  const atLeaf = path.length > 0 && nextOptions.length === 0;

  useEffect(() => {
    entriesApi
      .list()
      .then(setEntries)
      .catch((e) => {
        console.error(e);
        toast.error("Не вдалося завантажити записи");
      });
  }, []);

  /** Вибір на рівні з урахуванням автопереходів */
  const handlePickLevel = (node, level) => {
    setPath((prev) => {
      const next = [...prev.slice(0, level), node];
      const autoChain = buildAutoChain(node);
      if (autoChain.length) next.push(...autoChain);
      return next;
    });
  };

  const resetFlow = () => {
    if (shot?.url) URL.revokeObjectURL(shot.url);
    setShot(null);
    setPath([]);
    setRr("");
    setCoin("");
  };

  const createEntry = async () => {
    if (!atLeaf) return;

    const cleanCoin = coin.trim();
    if (!cleanCoin) {
      toast.warn("Вкажіть монетку (наприклад: BTC, ETH, SOL)");
      return;
    }

    try {
      let screenshotUrl = null;
      let screenshotPublicId = null;
      if (shot?.file) {
        const up = await uploadFile(shot.file);
        screenshotUrl = up.url;
        screenshotPublicId = up.public_id;
      }

      // тригер — перший вибір у дереві (Фрактал/IMB/OB)
      const trigger = path[0]?.label || "";

      const payload = {
        // для зворотної сумісності
        fields: path.map((n) => n.label),
        note: rr ? `RR: ${rr}` : "",
        screenshotUrl,
        screenshotPublicId,

        // нові поля
        coin: cleanCoin,
        trigger,
        rr: rr || "",
      };

      const saved = await entriesApi.create(payload);
      setEntries((prev) => [saved, ...prev]);
      resetFlow();
      toast.success("Запис створено");
    } catch (e) {
      console.error(e);
      toast.error("Помилка створення запису");
    }
  };

  const deleteOne = async (id) => {
    try {
      await entriesApi.remove(id);
      setEntries((prev) => prev.filter((e) => String(e._id) !== String(id)));
      toast.success("Запис видалено");
    } catch (e) {
      console.error(e);
      toast.error("Не вдалося видалити");
    }
  };

  const deleteAll = async () => {
    if (!confirm("Очистити всі записи в базі?")) return;
    try {
      await entriesApi.removeAll();
      setEntries([]);
      toast.success("Усі записи очищено");
    } catch (e) {
      console.error(e);
      toast.error("Не вдалося очистити");
    }
  };

  const handleRrChange = (e) => {
    const val = e.target.value.replace(",", ".");
    if (/^\d*\.?\d*$/.test(val) || val === "") setRr(val);
  };

  const levelTitles = collectLevelTitles(TREE_META.rootTitle, path);

  return (
    <>
      {/* ХЕДЕР на всю ширину */}
      <HeaderBar
        onOpenJournal={() => setJournalOpen(true)}
        onClearAll={deleteAll}
        onLogout={logout}
        entriesCount={entries.length}
      />

      {/* Основний контент сторінки */}
      <div className={css.wrapper}>
        {/* КРОКИ */}
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
          />

          {atLeaf && (
            <div className={css.finalRow}>
              {/* Монета */}
              <div className={css.rrGroup}>
                <div className={css.rrLabel}>Монета</div>
                <input
                  className={css.rrInput}
                  type="text"
                  placeholder="наприклад BTC"
                  value={coin}
                  onChange={(e) => setCoin(e.target.value.toUpperCase())}
                />
              </div>

              {/* RR */}
              <div className={css.rrGroup}>
                <div className={css.rrLabel}>RR</div>
                <input
                  className={css.rrInput}
                  type="text"
                  inputMode="decimal"
                  placeholder="наприклад 5.5"
                  value={rr}
                  onChange={handleRrChange}
                />
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
        <ToastContainer position="top-right" autoClose={3000} />
      </div>
    </>
  );
}
