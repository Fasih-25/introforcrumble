const items = [
  "Classic Chocolate Chip",
  "Next.js",
  "S'Mores",
  "Node.js",
  "Red Velvet",
  "MySQL",
  "Oreo Cheesecake Overload",
  "TypeScript",
  "Lotus Lava",
  "AWS",
  "Kunafa Double Chocolate",
  "React",
  "Hazelnut",
  "MedusaJS",
];

export default function Marquee() {
  // The list is rendered twice so the -50% slide loops seamlessly.
  const loop = [...items, ...items];
  return (
    <div className="band" aria-hidden="true">
      <div className="track">
        {loop.map((item, i) => (
          <span key={i}>{item}</span>
        ))}
      </div>
    </div>
  );
}
