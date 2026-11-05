const entries = [
  {
    when: "Jan 2025 → 2026",
    title: "Software Engineer",
    at: "CEE Solutions, Karachi",
    chips: [
      [21, 23, 4.5],
      [38, 21, 4],
      [37, 38, 5],
      [23, 40, 4],
    ],
    points: [
      "Built Node.js backends and JWT-secured REST APIs for 13 client-facing enterprise portals, plus the React interfaces, databases and AWS deployments.",
      "Optimised queries, caching and API response times across production portals.",
      "Architected the E-Contract platform for Unilever, L'Oreal, Reckitt and Engro.",
    ],
  },
  {
    when: "2022 → 2024",
    title: "Senior Front End Developer",
    at: "REGEX.GLOBAL, Karachi",
    chips: [
      [22, 21, 4.5],
      [39, 26, 4],
      [30, 40, 5],
    ],
    points: [
      "Independently delivered 4 complete React.js single-page apps from first commit to production.",
      "Built reusable React component libraries, NestJS APIs, Angular features and custom WordPress plugins.",
      "Turned Figma and Adobe XD designs into responsive production apps.",
    ],
  },
  {
    when: "2022",
    title: "PHP Developer",
    at: "XauZit, Karachi",
    chips: [
      [24, 24, 4.5],
      [37, 36, 5],
    ],
    points: ["Object-oriented, unit-tested PHP and RESTful APIs on MySQL, with clean-code habits that stuck."],
  },
  {
    when: "2018 → 2022",
    title: "BS Information Technology",
    at: "University of Sindh",
    chips: [
      [22, 26, 4],
      [36, 22, 4.5],
      [34, 38, 4],
    ],
    points: ["CGPA 3.86 / 4.00 and a Silver Medal for the highest academic achievement."],
  },
];

export default function Timeline() {
  return (
    <section className="sec">
      <div className="wrap">
        <span className="hand kicker rv">fresh from the oven</span>
        <h2 className="rv">Baking timeline</h2>
        <div className="tl">
          <div className="rail" aria-hidden="true">
            <i />
          </div>
          {entries.map((entry) => (
            <div key={entry.title} className="item rv">
              <div className="mk">
                <svg viewBox="0 0 60 60">
                  <circle cx="30" cy="30" r="26" fill="#E5A650" stroke="#3A1E14" strokeWidth="4" />
                  {entry.chips.map(([cx, cy, r]) => (
                    <circle key={`${cx}-${cy}`} cx={cx} cy={cy} r={r} fill="#4A2518" />
                  ))}
                </svg>
              </div>
              <div className="when hand">{entry.when}</div>
              <h3>{entry.title}</h3>
              <div className="at">{entry.at}</div>
              <ul>
                {entry.points.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
