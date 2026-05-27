import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Lightbox } from "@/components/Lightbox";
import img1 from "@/assets/wp/BUR_230315_0482.jpg";
import img2 from "@/assets/wp/BUR_230315_0474.jpg";
import img3 from "@/assets/wp/BUR_230315_0455.jpg";
import img4 from "@/assets/wp/BUR_230315_0415.jpg";
import img5 from "@/assets/wp/BUR_230315_0468-1.jpg";
import img6 from "@/assets/wp/BUR_230315_0376.jpg";
import img7 from "@/assets/wp/BUR_230315_0374.jpg";
import img8 from "@/assets/wp/BUR_230315_0367.jpg";
import img9 from "@/assets/wp/BUR_230315_0440-scaled.jpg";
import img10 from "@/assets/wp/BUR_230315_0446-scaled.jpg";
import img11 from "@/assets/wp/BUR_230315_0443.jpg";
import img12 from "@/assets/wp/BUR_230315_0445.jpg";

const IMAGES = [img1, img2, img3, img4, img5, img6, img7, img8, img9, img10, img11, img12];

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
  const [openIndex, setOpenIndex] = useState<number | null>(null);

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
        {IMAGES.map((src, i) => (
          <button
            key={src}
            type="button"
            className="gallery-item"
            onClick={() => setOpenIndex(i)}
            aria-label={`Bild ${i + 1} öffnen`}
          >
            <img src={src} alt="" loading="lazy" />
          </button>
        ))}
      </div>
      {openIndex !== null && (
        <Lightbox
          images={IMAGES}
          index={openIndex}
          onClose={() => setOpenIndex(null)}
          onChange={setOpenIndex}
        />
      )}
    </div>
  );
}
