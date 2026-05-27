import { createFileRoute, Link } from "@tanstack/react-router";
import { ObfuscatedEmail } from "@/components/ObfuscatedEmail";

export const Route = createFileRoute("/kontakt")({
  component: Kontakt,
  head: () => ({
    meta: [
      { title: "Kontakt | Physiotherapie Katrin Schulte Büren" },
      { name: "description", content: "Kontaktieren Sie die Physiotherapie Katrin Schulte in Büren." },
    ],
  }),
});

function Kontakt() {
  return (
    <div className="c-content">
      <h1>
        <img
          className="alignleft"
          src="http://www.physio-bueren.de/wp-content/uploads/2014/02/physio-bueren-kontakt-kreis.png"
          alt=""
          width={247}
          height={324}
        />
        Kontaktieren Sie uns
      </h1>
      <p>
        Physiotherapie<br />
        Katrin Schulte B. A.<br />
        Im Therapiezentrum Büren<br />
        Bruchstr. 9<br />
        33142 Büren<br />
        Tel.: +49 (0)2951 932897<br />
        Fax: +49 (0)2951 932896<br />
        <ObfuscatedEmail className="unscheinbar" email="info@physio-bueren.de" /><br />
        <a className="unscheinbar" href="https://www.physio-bueren.de" target="_blank" rel="noopener">www.physio-bueren.de</a>
      </p>
      <p>&nbsp;</p>
      <p>
        <Link to="/anfahrt">So finden Sie zu uns</Link>
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
