const projects = [
  { name: "Shimla Bakers", text: "Full bakery e-commerce site, shipped to the client.", stack: "Next.js · MySQL" },
  { name: "Munchly", text: "Foodpanda-style delivery platform, built end to end.", stack: "React Native · Firebase" },
  { name: "Edital", text: "WordPress-style course-building platform.", stack: "Angular · TypeScript" },
  { name: "Optilingo", text: "Frontend of a language learning platform.", stack: "React.js" },
  { name: "Easy SCORM", text: "Web app for creating and managing SCORM content.", stack: "React.js" },
];

export default function Projects() {
  return (
    <section className="sec">
      <div className="wrap">
        <span className="hand kicker rv">taste test</span>
        <h2 className="rv">A few cookies I&apos;ve baked</h2>
        <div className="projs">
          {projects.map((project) => (
            <div key={project.name} className="pj rv">
              <div className="c">{project.name}</div>
              <p>{project.text}</p>
              <small>{project.stack}</small>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
