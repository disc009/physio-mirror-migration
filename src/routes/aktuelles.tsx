import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/aktuelles")({
  component: Aktuelles,
  head: () => ({
    meta: [
      { title: "Aktuelles | Physiotherapie Katrin Schulte Büren" },
      { name: "description", content: "Aktuelle Informationen aus unserer Praxis." },
    ],
  }),
});

function Aktuelles() {
  return (
    <div className="c-content">
      <h1>Aktuelles</h1>
      <p>Zurzeit keine aktuellen Meldungen.</p>
    </div>
  );
}
