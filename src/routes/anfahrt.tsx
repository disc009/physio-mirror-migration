import { createFileRoute } from "@tanstack/react-router";
import anfahrtKreis from "@/assets/wp/physio-bueren-anfahrt-kreis.png";

export const Route = createFileRoute("/anfahrt")({
  component: Anfahrt,
  head: () => ({
    meta: [
      { title: "Anfahrt | Physiotherapie Katrin Schulte Büren" },
      { name: "description", content: "So finden Sie zu unserer Praxis in Büren." },
    ],
  }),
});

function Anfahrt() {
  return (
    <div className="c-content">
      <h1>
        <img
          className="alignleft"
          src="http://www.physio-bueren.de/wp-content/uploads/2014/02/physio-bueren-anfahrt-kreis.png"
          alt=""
          width={247}
          height={324}
        />
        So finden Sie zu uns
      </h1>
      <p>
        Physiotherapie<br />
        Katrin Schulte B.A.<br />
        Therapiezentrum Büren<br />
        Bruchstraße 9<br />
        33142 Büren<br />
        Tel.: +49 (0)2951 932897<br />
        Fax: +49 (0)2951 932896<br />
        <a className="unscheinbar" href="mailto:info@physio-bueren.de">info@physio-bueren.de</a>
      </p>
      <p>
        Sie erreichen uns bequem mit dem Auto. Passieren Sie die Schranke und parken Sie ihr
        Auto kostenfrei direkt vor unserer Praxis. Mit dem Fahrstuhl gelangen Sie in unsere
        Räumlichkeiten.
      </p>
      <div className="map-wrap">
        <iframe
          title="Google Maps – Praxis Standort"
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d1805.680880652564!2d8.557410911182616!3d51.55133203199381!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47bbc8106a18d009%3A0xc63e3af18d544522!2sKatrin%20Schulte!5e0!3m2!1sde!2sde!4v1733562911790!5m2!1sde!2sde"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          allowFullScreen
        />
      </div>
      <div className="down" />
    </div>
  );
}
