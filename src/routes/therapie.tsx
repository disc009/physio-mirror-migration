import { createFileRoute } from "@tanstack/react-router";

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

function Therapie() {
  return (
    <div className="c-content">
      <h1>
        <img
          className="alignleft"
          src="http://www.physio-bueren.de/wp-content/uploads/physio-bueren-therapie-1-kreis.png"
          alt=""
          width={247}
          height={360}
        />
        Bei uns sind Sie in den besten Händen
      </h1>
      <p>
        Durch unsere qualifizierten Ausbildungsgänge, sowie laufende Fort- und
        Weiterbildungen bieten wir neben der klassischen
        Physiotherapie/Krankengymnastik folgende Therapien an:
      </p>
      <p>
        <img
          className="alignright"
          src="http://www.physio-bueren.de/wp-content/uploads/2014/02/physio-bueren-therapie-2-kreis.png"
          alt=""
          width={295}
          height={417}
        />
      </p>
      <ul>
        <li>
          <a
            href="http://www.vojta.com/de/vojta-prinzip/vojta-prinzip-2"
            target="_blank"
            rel="noopener"
          >
            Vojta für Säuglinge, Kinder und Erwachsene
          </a>
        </li>
        <li>
          <a
            href="https://www.bobath-vereinigung.de/das-bobath-konzept/"
            target="_blank"
            rel="noopener"
          >
            Bobath für Säuglinge, Kinder und Erwachsene
          </a>
        </li>
        <li>
          <a
            href="http://castillomoralesvereinigung.de/Castillodata/Deutsch/Konzept.html"
            target="_blank"
            rel="noopener"
          >
            Castillo Morales® für Säuglinge, Kinder und Erwachsene
          </a>
        </li>
        <li>
          <a
            href="http://www.zukunft-huber.de/angebot.php?nid=5&hnaviid=3"
            target="_blank"
            rel="noopener"
          >
            Dreidimensionale manuelle Fußtherapie
          </a>
        </li>
        <li>
          <a
            href="http://lymphklinik.com/"
            target="_blank"
            rel="noopener"
          >
            Manuelle Lymphdrainage
          </a>
        </li>
        <li>
          <a
            href="http://www2.k-taping.eu/information-zu-k-taping"
            target="_blank"
            rel="noopener"
          >
            Kinesio-Taping
          </a>
        </li>
        <li>Kinderrückenschule nach Felix Fit®</li>
      </ul>
      <div className="down" />
    </div>
  );
}
