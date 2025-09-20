import css from "./NodeButtons.module.css";

export default function NodeButtons({ nodes = [], onPick }) {
  return (
    <div className={css.wrapper}>
      {nodes.map((n) => (
        <button key={n.id} onClick={() => onPick(n)} className={css.button}>
          {n.label}
        </button>
      ))}
    </div>
  );
}
