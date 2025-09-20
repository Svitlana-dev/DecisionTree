import css from "./BreadCrumbs.module.css";

export default function BreadCrumbs({ path, onJump }) {
  if (!path?.length) return null;
  return (
    <div className={css.crumbs}>
      {path.map((n, i) => (
        <button key={n.id} onClick={() => onJump(i)} className={css.btn}>
          {n.label}
        </button>
      ))}
    </div>
  );
}
