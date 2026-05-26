import { createFileRoute } from "@tanstack/react-router";

const TEAM = [
  { name: "Katrin Schulte", img: "10x1596-dpiimg6140-200x300.jpg", folder: "" },
  { name: "Julia Röseler", img: "physio-bueren-team-3-200x300.jpg", folder: "" },
  { name: "Beate Siedhoff", img: "physio-bueren-team-4-200x300.jpg", folder: "" },
  { name: "Caroline Stallmeister", img: "physio-bueren-team-6-200x300.jpg", folder: "" },
];

export const Route = createFileRoute("/team")({
  component: Team,
  head: () => ({
    meta: [
      { title: "Physiotherapeuten | Physiotherapie Katrin Schulte Büren" },
      { name: "description", content: "Unser Team – gemeinsam zum Ziel." },
    ],
  }),
});

function Team() {
  return (
    <div className="c-content">
      <h1 style={{ textAlign: "center" }}>Gemeinsam zum Ziel</h1>
      <div className="team-grid">
        {TEAM.map((p) => (
          <figure key={p.name}>
            <img
              src={`https://www.physio-bueren.de/wp-content/uploads/${p.img}`}
              alt={p.name}
              width={200}
              height={300}
            />
            <figcaption>{p.name}</figcaption>
          </figure>
        ))}
      </div>
    </div>
  );
}
