const boxes = [
  {
    name: "The Frontend Box",
    skills: ["JavaScript", "TypeScript", "React.js", "Next.js", "Angular", "Tailwind CSS", "Responsive UI"],
    note: "Warm & crunchy",
  },
  {
    name: "The Backend Box",
    skills: ["Node.js", "Express", "NestJS", "REST APIs", "JWT auth", "Laravel / PHP", "MedusaJS"],
    note: "Rich & reliable",
  },
  {
    name: "The Data Box",
    skills: ["MySQL", "MongoDB", "PostgreSQL", "Oracle", "Query tuning", "Caching"],
    note: "Gooey centre",
  },
  {
    name: "The Cloud & Craft Box",
    skills: ["AWS", "Docker", "Git", "Unit testing", "Figma", "Claude Code & Copilot"],
    note: "Ships on time",
  },
];

export default function Menu() {
  return (
    <section className="sec menu">
      <div className="wrap">
        <span className="hand kicker rv" style={{ color: "var(--choc)" }}>
          the menu
        </span>
        <h2 className="rv">Pick your box</h2>
        <div className="boxes">
          {boxes.map((box) => (
            <div key={box.name} className="box rv">
              <div className="lid">{box.name}</div>
              <ul>
                {box.skills.map((skill) => (
                  <li key={skill}>{skill}</li>
                ))}
              </ul>
              <div className="price hand">{box.note}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
