import { createFileRoute } from "@tanstack/react-router";

const IMAGES = [
  "BUR_230315_0482.jpg",
  "BUR_230315_0474.jpg",
  "BUR_230315_0455.jpg",
  "BUR_230315_0415.jpg",
  "BUR_230315_0468-1.jpg",
  "BUR_230315_0376.jpg",
  "BUR_230315_0374.jpg",
  "BUR_230315_0367.jpg",
  "BUR_230315_0440-scaled.jpg",
  "BUR_230315_0446-scaled.jpg",
  "BUR_230315_0443.jpg",
  "BUR_230315_0445.jpg",
];

export const Route = createFileRoute("/praxis")({
  component: Praxis,
  head: () => ({
    meta: [
      { title: "Praxis | Physiotherapie Katrin Schulte Büren" },
      {
        name: "description",
        content:
          "Unsere Praxis in Büren – moderne Räume, freundliche Atmosphäre, interdisziplinäre Zusammenarbeit.",
      },
    ],
  }),
});

function Praxis() {
  return (
    <div className="c-content">
      <h1>Bei uns steht der individuelle Patient im Mittelpunkt</h1>
      <p>
        Unter einem Dach vereint finden Sie{" "}
        <a href="http://www.logopädie-büren.de/logopaedie.php" target="_blank" rel="noopener">
          Logopädie
        </a>
        ,{" "}
        <a href="https://osteopathie-bueren.de" target="_blank" rel="noopener">
          Osteopathie
        </a>
        ,{" "}
        <a href="http://ergo-ramroth.de/" target="_blank" rel="noopener">
          Ergotherapie
        </a>{" "}
        und Physiotherapie. So wird eine interdiziplinäre Zusammenarbeit möglich, die
        unseren Patienten zu Gute kommt.
      </p>
      <p>
        Die freundlichen, hellen neuen Praxisräume bieten dank einer modernen Ausstattung
        eine angenehme Atmosphäre. Schauen Sie sich um und überzeugen sich selbst!
      </p>
      <div className="gallery">
        {IMAGES.map((src) => (
          <a
            key={src}
            href={`https://www.physio-bueren.de/wp-content/uploads/${src}`}
            target="_blank"
            rel="noopener"
          >
            <img
              src={`https://www.physio-bueren.de/wp-content/uploads/${src}`}
              alt=""
              loading="lazy"
            />
          </a>
        ))}
      </div>
    </div>
  );
}
