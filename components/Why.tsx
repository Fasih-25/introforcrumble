const reasons = [
  {
    n: "01",
    title: "I've baked a bakery site",
    text: "Led delivery of Shimla Bakers, a full bakery e-commerce site on Next.js and MySQL, running design, development and QA through an AI-assisted workflow, and shipped it to the client.",
    tag: "Next.js · MySQL",
  },
  {
    n: "02",
    title: "I speak headless commerce",
    text: "Hands-on with MedusaJS and headless CMS integration, with JWT-secured REST APIs, query optimisation and caching behind them so storefronts stay fast.",
    tag: "MedusaJS · REST · Caching",
  },
  {
    n: "03",
    title: "I've handled the rush",
    text: "Built a digital E-Contract platform for Unilever, L'Oreal, Reckitt and Engro, generating store-level contracts across 2,500+ stores per client, hosted on AWS.",
    tag: "Node.js · React · AWS",
  },
  {
    n: "04",
    title: "I love delivery (the app kind)",
    text: "Conceived, managed and built Munchly, a Foodpanda-style platform: a React Native customer app plus a React dashboard where restaurants manage menus and live orders in real time.",
    tag: "React Native · Firebase",
  },
];

export default function Why() {
  return (
    <section className="sec dark">
      <div className="wrap">
        <span className="hand kicker rv">why crumble?</span>
        <h2 className="rv">I&apos;ve already been in a few bakeries (digitally).</h2>
        <div className="why">
          {reasons.map((r) => (
            <div key={r.n} className="wcard rv">
              <div className="n">{r.n}</div>
              <h3>{r.title}</h3>
              <p>{r.text}</p>
              <span className="tag">{r.tag}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
