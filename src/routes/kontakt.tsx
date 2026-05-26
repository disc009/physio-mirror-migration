import { createFileRoute, Link } from "@tanstack/react-router";

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
        <a className="unscheinbar" href="mailto:info@physio-bueren.de">info@physio-bueren.de</a><br />
        <a className="unscheinbar" href="https://www.physio-bueren.de" target="_blank" rel="noopener">www.physio-bueren.de</a>
      </p>
      <p>&nbsp;</p>
      <p>
        <Link to="/anfahrt">So finden Sie zu uns</Link>
      </p>
      <div className="down" />
    </div>
  );
}
