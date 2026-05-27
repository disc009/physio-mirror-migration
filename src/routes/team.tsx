import { createFileRoute } from "@tanstack/react-router";
import katrin from "@/assets/wp/10x1596-dpiimg6140-200x300.jpg";
import julia from "@/assets/wp/physio-bueren-team-3-200x300.jpg";
import beate from "@/assets/wp/physio-bueren-team-4-200x300.jpg";
import caroline from "@/assets/wp/physio-bueren-team-6-200x300.jpg";

const TEAM = [
  { name: "Katrin Schulte", img: katrin },
  { name: "Julia Röseler", img: julia },
  { name: "Beate Siedhoff", img: beate },
  { name: "Caroline Stallmeister", img: caroline },
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
            <img src={p.img} alt={p.name} width={200} height={300} />
            <figcaption>{p.name}</figcaption>
          </figure>
        ))}
      </div>
    </div>
  );
}
