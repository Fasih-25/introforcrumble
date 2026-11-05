const ideas = [
  {
    label: "idea 01",
    title: "Corporate gift-box builder",
    text: "Pick flavours, add a logo and postcard message, and see the box update live before ordering.",
  },
  {
    label: "idea 02",
    title: "The Monthly Drop, hyped",
    text: "Countdown, waitlist and sold-out states so every drop feels like an event.",
  },
  {
    label: "idea 03",
    title: "Where's my cookie box?",
    text: "A friendly order-tracking page for nationwide courier deliveries, so customers always know it's coming.",
  },
];

export default function Ideas() {
  return (
    <section className="sec ideas">
      <div className="wrap">
        <span className="hand kicker rv">my test kitchen</span>
        <h2 className="rv">Ideas I&apos;d love to bake for Crumble</h2>
        <div className="igrid">
          {ideas.map((idea) => (
            <div key={idea.label} className="idea rv">
              <span className="hand">{idea.label}</span>
              <h3>{idea.title}</h3>
              <p>{idea.text}</p>
            </div>
          ))}
        </div>
        <p className="hand note rv">Just ideas from a fan. I&apos;d love to hear what you actually need.</p>
      </div>
    </section>
  );
}
