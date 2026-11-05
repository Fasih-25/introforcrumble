import type { CSSProperties } from "react";
import Portrait from "./Portrait";

const crumbs = [
  { x: "6%", d: "11s", s: "9px", t: "-1s" },
  { x: "14%", d: "14s", s: "6px", t: "-6s" },
  { x: "22%", d: "9s", s: "12px", t: "-3s" },
  { x: "31%", d: "13s", s: "7px", t: "-8s" },
  { x: "39%", d: "10s", s: "10px", t: "-2s" },
  { x: "47%", d: "15s", s: "6px", t: "-10s" },
  { x: "55%", d: "12s", s: "11px", t: "-5s" },
  { x: "63%", d: "9.5s", s: "8px", t: "-7s" },
  { x: "71%", d: "14s", s: "12px", t: "-4s" },
  { x: "79%", d: "11s", s: "6px", t: "-9s" },
  { x: "86%", d: "13s", s: "9px", t: "-1.5s" },
  { x: "93%", d: "10s", s: "7px", t: "-6.5s" },
];

const plateChips = [
  { left: "14%", top: "20%", width: 46, height: 36 },
  { left: "70%", top: "14%", width: 40, height: 32 },
  { left: "80%", top: "48%", width: 52, height: 40 },
  { left: "8%", top: "56%", width: 44, height: 34 },
  { left: "62%", top: "80%", width: 50, height: 38 },
  { left: "26%", top: "84%", width: 36, height: 28 },
  { left: "44%", top: "6%", width: 34, height: 26 },
];

const steam = [
  { left: "30%", animationDelay: "0s" },
  { left: "50%", animationDelay: "1s" },
  { left: "68%", animationDelay: "2s" },
];

export default function Hero() {
  return (
    <header className="hero">
      {crumbs.map((c) => (
        <i
          key={c.x}
          className="crumb"
          style={{ "--x": c.x, "--d": c.d, "--s": c.s, "--t": c.t } as CSSProperties}
        />
      ))}
      <div className="wrap">
        <nav className="nav up">
          <a className="logo" href="#top">
            fasih<span> × </span>crumble
          </a>
          <span className="pill">
            <b />
            Available immediately · Islamabad
          </span>
        </nav>
        <div className="hgrid" id="top">
          <div>
            <span className="hand dear up d1">Dear Crumble Family,</span>
            <h1 className="up d2">
              Your cookies spread happiness. I build the <em>software</em> that delivers it.
            </h1>
            <p className="lede up d3">
              Hi, I&apos;m <b>Muhammad Fasih Rana</b>, a full-stack JavaScript developer with nearly five
              years of shipping production code. I&apos;ve built a bakery e-commerce site, a food-delivery
              platform and portals for 2,500+ stores. Now I&apos;d love to bake something with you.
            </p>
            <div className="ctas up d4">
              <a className="btn b-red" href="#order">
                Add me to cart
              </a>
              <a className="btn b-milk" href="#recipe">
                Peek at the recipe
              </a>
            </div>
          </div>
          <div className="stage up d3">
            <div className="plate">
              {plateChips.map((chip) => (
                <i key={chip.left} className="chip" style={chip} />
              ))}
            </div>
            {steam.map((s) => (
              <i key={s.left} className="steam" style={s} />
            ))}
            <div className="me-wrap">
              <Portrait />
            </div>
            <div className="ring" aria-hidden="true">
              <svg viewBox="0 0 200 200">
                <defs>
                  <path id="circ" d="M100,100 m-78,0 a78,78 0 1,1 156,0 a78,78 0 1,1 -156,0" />
                </defs>
                <text fontSize="17" fontWeight="700" fill="#3A1E14">
                  <textPath href="#circ" textLength="480" lengthAdjust="spacing">
                    FRESH OUT OF THE OVEN • ISLAMABAD •{" "}
                  </textPath>
                </text>
              </svg>
            </div>
            <div className="ringc" aria-hidden="true">
              <span>hire me!</span>
            </div>
            <div className="sticky hand">hi, I&apos;m Fasih!</div>
          </div>
        </div>
      </div>
    </header>
  );
}
