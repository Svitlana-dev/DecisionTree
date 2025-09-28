import css from "./CalcModal.module.css";

export default function CalcModal({ open, onClose, children }) {
  if (!open) return null;
  return (
    <div className={css.overlay} onClick={onClose}>
      <div className={css.modal} onClick={(e) => e.stopPropagation()}>
        <div className={css.head}>
          <h2>Калькулятор позиції</h2>
          <div className={css.headActions}>
            <button className={css.btn} onClick={onClose}>
              Закрити
            </button>
          </div>
        </div>
        <div className={css.content}>{children}</div>
      </div>
    </div>
  );
}
