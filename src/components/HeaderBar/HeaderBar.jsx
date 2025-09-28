import { useEffect, useRef, useState } from "react";
import css from "./HeaderBar.module.css";
import CalcModal from "../CalcModal/CalcModal.jsx";
import PositionSizeCalc from "../PositionSizeCalc/PositionSizeCalc.jsx";

/**
 * Хедер із бургер-меню для мобілки/планшета.
 * Десктоп: кнопки в ряд.
 * Мобілка/планшет: кнопки у випадаючому меню + затемнення.
 *
 * props:
 *  - onOpenJournal()
 *  - onClearAll()
 *  - onLogout()
 *  - entriesCount (кількість записів у журналі)
 */
export default function HeaderBar({
  onOpenJournal,
  onClearAll,
  onLogout,
  entriesCount = 0,
}) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [calcOpen, setCalcOpen] = useState(false);
  const menuRef = useRef(null);

  // Закриття меню по Escape
  useEffect(() => {
    if (!menuOpen) return;
    const onKey = (e) => e.key === "Escape" && setMenuOpen(false);
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [menuOpen]);

  const openCalc = () => {
    setMenuOpen(false);
    setCalcOpen(true);
  };

  return (
    <>
      <header className={css.header}>
        <div className={css.inner}>
          <div className={css.brand}>Дерево рішень</div>

          {/* Десктопні кнопки */}
          <div className={css.actionsDesktop} role="toolbar" aria-label="Дії">
            <button className={css.btn} onClick={onOpenJournal}>
              Журнал{entriesCount > 0 ? ` (${entriesCount})` : ""}
            </button>
            <button className={css.btn} onClick={onClearAll}>
              Очистити всі записи
            </button>
            <button className={css.btn} onClick={openCalc}>
              Калькулятор
            </button>
            <button className={css.danger} onClick={onLogout}>
              Вийти
            </button>
          </div>

          {/* Бургер (мобілка/планшет) */}
          <button
            className={`${css.burger} ${menuOpen ? css.burgerActive : ""}`}
            aria-label="Меню"
            aria-expanded={menuOpen}
            aria-controls="header-menu"
            onClick={() => setMenuOpen((v) => !v)}
          >
            <span />
            <span />
            <span />
          </button>
        </div>

        {/* Мобільне меню */}
        <div
          id="header-menu"
          ref={menuRef}
          className={`${css.menu} ${menuOpen ? css.menuOpen : ""}`}
        >
          <button
            className={css.menuItem}
            onClick={() => {
              setMenuOpen(false);
              onOpenJournal();
            }}
          >
            Журнал{entriesCount > 0 ? ` (${entriesCount})` : ""}
          </button>
          <button
            className={css.menuItem}
            onClick={() => {
              setMenuOpen(false);
              onClearAll();
            }}
          >
            Очистити всі записи
          </button>
          <button className={css.menuItem} onClick={openCalc}>
            Калькулятор
          </button>
          <button
            className={`${css.menuItem} ${css.menuDanger}`}
            onClick={() => {
              setMenuOpen(false);
              onLogout();
            }}
          >
            Вийти
          </button>
        </div>
      </header>

      {/* Оверлей під меню */}
      {menuOpen && (
        <div className={css.scrim} onClick={() => setMenuOpen(false)} />
      )}

      {/* Модалка калькулятора */}
      <CalcModal open={calcOpen} onClose={() => setCalcOpen(false)}>
        <PositionSizeCalc />
      </CalcModal>
    </>
  );
}
