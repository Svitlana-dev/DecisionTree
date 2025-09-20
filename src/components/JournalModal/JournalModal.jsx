import EntriesTable from "../EntriesTable/EntriesTable.jsx";
import css from "./JournalModal.module.css";

export default function JournalModal({
  open,
  onClose,
  entries,
  onDeleteAll,
  onDeleteOne,
}) {
  if (!open) return null;
  return (
    <div className={css.overlay}>
      <div className={css.modal}>
        <div className={css.head}>
          <h2>Повний журнал</h2>
          <div className={css.headActions}>
            <button onClick={onDeleteAll}>Очистити</button>
            <button onClick={onClose}>Закрити</button>
          </div>
        </div>
        <div className={css.content}>
          <EntriesTable entries={entries} onDeleteOne={onDeleteOne} />
        </div>
      </div>
    </div>
  );
}
