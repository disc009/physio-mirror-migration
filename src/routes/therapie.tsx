import { createFileRoute } from "@tanstack/react-router";
import { ExternalLink } from "lucide-react";
import therapie1 from "@/assets/wp/physio-bueren-therapie-1-kreis.png";
import therapie2 from "@/assets/wp/physio-bueren-therapie-2-kreis.png";

export const Route = createFileRoute("/therapie")({
  component: Therapie,
  head: () => ({
    meta: [
      { title: "Physiotherapieangebot | Physiotherapie Katrin Schulte Büren" },
      {
        name: "description",
        content:
          "Unser Therapieangebot: Vojta, Bobath, Castillo Morales, manuelle Lymphdrainage, Kinesio-Taping u. v. m.",
      },
    ],
  }),
});

type Therapy = {
  title: string;
  description: string;
  audience: string;
  link?: string;
};

const neuro: Therapy[] = [
  {
    title: "Vojta",
    description:
      "Reflexlokomotion zur Aktivierung angeborener Bewegungsmuster im zentralen Nervensystem.",
    audience: "Säuglinge, Kinder & Erwachsene",
    link: "http://www.vojta.com/de/vojta-prinzip/vojta-prinzip-2",
  },
  {
    title: "Bobath",
    description:
      "Individuelles Therapiekonzept für Menschen jeden Alters mit neurologisch bedingten Bewegungsstörungen – von Frühgeborenen über Kinder bis zu Erwachsenen.",
    audience: "Säuglinge, Kinder & Erwachsene",
    link: "https://www.bobath-vereinigung.de/",
  },
  {
    title: "Castillo Morales®",
    description:
      "Neurophysiologisches Konzept mit Schwerpunkt auf Körperhaltung, Mimik und orofazialer Funktion.",
    audience: "Säuglinge, Kinder & Erwachsene",
    link: "http://castillomoralesvereinigung.de/Castillodata/Deutsch/Konzept.html",
  },
];

const manuell: Therapy[] = [
  {
    title: "Dreidimensionale manuelle Fußtherapie",
    description:
      "Behandlung von Fußfehlstellungen nach Zukunft-Huber – sanft, gezielt und in alle Bewegungsebenen.",
    audience: "Säuglinge & Kinder",
    link: "http://www.zukunft-huber.de/angebot.php?nid=5&hnaviid=3",
  },
  {
    title: "Manuelle Lymphdrainage",
    description:
      "Sanfte Grifftechnik zur Anregung des Lymphflusses bei Schwellungen und Ödemen.",
    audience: "Kinder & Erwachsene",
    link: "http://lymphklinik.com/",
  },
];

const ergaenzend: Therapy[] = [
  {
    title: "Kinesio-Taping",
    description:
      "Elastische Tapes zur Unterstützung von Muskeln, Gelenken und Lymphsystem im Alltag.",
    audience: "Kinder & Erwachsene",
    link: "http://www2.k-taping.eu/information-zu-k-taping",
  },
  {
    title: "Kinderrückenschule nach Felix Fit®",
    description:
      "Spielerisches Präventionsprogramm für eine starke Haltung und gesunden Rücken.",
    audience: "Kinder",
  },
];

function TherapyCard({ t }: { t: Therapy }) {
  return (
    <article className="therapy-card">
      <h3>{t.title}</h3>
      <p className="therapy-audience">{t.audience}</p>
      <p className="therapy-desc">{t.description}</p>
      {t.link && (
        <a
          href={t.link}
          target="_blank"
          rel="noopener noreferrer"
          className="therapy-link"
        >
          Mehr Info <ExternalLink size={14} />
        </a>
      )}
    </article>
  );
}

function Section({ title, items }: { title: string; items: Therapy[] }) {
  return (
    <section className="therapy-section">
      <h2>{title}</h2>
      <div className="therapy-grid">
        {items.map((t) => (
          <TherapyCard key={t.title} t={t} />
        ))}
      </div>
    </section>
  );
}

function Therapie() {
  return (
    <div className="c-content">
      <div className="therapy-hero">
        <img
          src={therapie1}
          alt="Therapie in Büren"
          className="therapy-hero-img"
        />
        <div>
          <h1>Bei uns sind Sie in den besten Händen</h1>
          <p>
            Durch unsere qualifizierten Ausbildungsgänge sowie laufende Fort-
            und Weiterbildungen bieten wir neben der klassischen
            Physiotherapie/Krankengymnastik folgende Therapien an:
          </p>
        </div>
      </div>

      <Section title="Neurophysiologische Konzepte" items={neuro} />

      <figure className="therapy-figure">
        <img
          src={therapie2}
          alt="Behandlung in der Praxis"
        />
      </figure>

      <Section title="Manuelle Therapien" items={manuell} />
      <Section title="Ergänzende Angebote" items={ergaenzend} />

      <div className="down" />
    </div>
  );
}

