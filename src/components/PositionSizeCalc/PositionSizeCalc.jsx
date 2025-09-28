import { useMemo, useState } from "react";
import css from "./PositionSizeCalc.module.css";

/**
 * Формула:
 *   Обсяг $ = ((A * B/100) * 100) / (C * D)
 *   A — баланс депозиту ($)
 *   B — % ризику
 *   C — розмір SL %
 *   D — плече (x)
 */
export default function PositionSizeCalc() {
  const [dep, setDep] = useState("");
  const [risk, setRisk] = useState("");
  const [sl, setSl] = useState("");
  const [lev, setLev] = useState("");

  const toNum = (v) => Number(String(v).replace(",", ".")) || 0;

  const result = useMemo(() => {
    const A = toNum(dep);
    const B = toNum(risk);
    const C = toNum(sl);
    const D = toNum(lev) || 1;
    if (A <= 0 || B <= 0 || C <= 0 || D <= 0) return 0;
    return (A * (B / 100) * 100) / (C * D);
  }, [dep, risk, sl, lev]);

  return (
    <div className={css.form}>
      <div className={css.grid}>
        <label className={css.row}>
          <span>Баланс депозиту ($)</span>
          <input
            value={dep}
            onChange={(e) => setDep(e.target.value)}
            inputMode="decimal"
            placeholder="1000"
          />
        </label>
        <label className={css.row}>
          <span>% ризику</span>
          <input
            value={risk}
            onChange={(e) => setRisk(e.target.value)}
            inputMode="decimal"
            placeholder="1"
          />
        </label>
        <label className={css.row}>
          <span>Розмір SL %</span>
          <input
            value={sl}
            onChange={(e) => setSl(e.target.value)}
            inputMode="decimal"
            placeholder="2.5"
          />
        </label>
        <label className={css.row}>
          <span>Плече (x)</span>
          <input
            value={lev}
            onChange={(e) => setLev(e.target.value)}
            inputMode="decimal"
            placeholder="25"
          />
        </label>
      </div>

      <div className={css.result}>
        <div className={css.resultLabel}>Обсяг позиції ($)</div>
        <div className={css.resultVal}>{result ? result.toFixed(2) : "—"}</div>
      </div>

      <div className={css.hint}>
        У відсоткових полях вводьте <b>лише число</b> (1 = 1%).
      </div>
    </div>
  );
}
