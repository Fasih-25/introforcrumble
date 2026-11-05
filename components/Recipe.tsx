import type { CSSProperties } from "react";

const chips = [
  { left: "22%", top: "26%", width: 56, height: 44 },
  { left: "56%", top: "44%", width: 62, height: 48 },
  { left: "30%", top: "62%", width: 50, height: 40 },
  { left: "62%", top: "18%", width: 44, height: 34 },
  { left: "12%", top: "48%", width: 40, height: 32 },
];

const bites = [
  { w: "34%", l: "70%", t: "-8%" },
  { w: "26%", l: "84%", t: "18%" },
  { w: "30%", l: "-8%", t: "70%" },
  { w: "20%", l: "82%", t: "72%" },
];

const ingredients = [
  { amount: "~5 yrs", text: "of JavaScript, baked fresh daily" },
  { amount: "13", text: "enterprise portals delivered to production" },
  { amount: "2,500+", text: "stores per client on one E-Contract platform" },
  { amount: "~6,500", text: "active users across production environments" },
  { amount: "1", text: "bakery e-commerce site shipped (Shimla Bakers)" },
  { amount: "3.86", text: "CGPA with a Silver Medal, University of Sindh" },
];

export default function Recipe() {
  return (
    <section className="sec" id="recipe">
      <div className="wrap rgrid">
        <div className="bigc rv">
          <div className="body" />
          {chips.map((chip) => (
            <i key={chip.left} className="chip" style={chip} />
          ))}
          {bites.map((b) => (
            <i
              key={b.l + b.t}
              className="bt bite"
              style={{ "--w": b.w, "--l": b.l, "--t": b.t } as CSSProperties}
            />
          ))}
        </div>
        <div className="rv">
          <span className="hand kicker">the recipe</span>
          <h2>Ingredients for one Fasih</h2>
          <div className="card" style={{ marginTop: 34 }}>
            <h3>Serves 1 growing team</h3>
            <ul className="ing">
              {ingredients.map((item) => (
                <li key={item.amount}>
                  <b>{item.amount}</b>
                  <span>{item.text}</span>
                </li>
              ))}
            </ul>
            <p className="hand method">Method: listen first, ship clean, unit-test it, serve warm.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
