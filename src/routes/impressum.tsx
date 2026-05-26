import { createFileRoute } from "@tanstack/react-router";
import { ObfuscatedEmail } from "@/components/ObfuscatedEmail";

export const Route = createFileRoute("/impressum")({
  component: Impressum,
  head: () => ({
    meta: [
      { title: "Impressum | Physiotherapie Katrin Schulte Büren" },
      { name: "description", content: "Impressum der Physiotherapie Katrin Schulte B.A. in Büren." },
    ],
  }),
});

function Impressum() {
  return (
    <div className="c-content">
      <div style={{ float: "left", paddingRight: 20 }}>
        <img
          src="http://www.physio-bueren.de/wp-content/uploads/2014/02/physio-bueren-impressum-kreis.png"
          alt=""
          width={247}
          height={324}
        />
      </div>
      <h1>Impressum</h1>
      <p>
        Angaben gemäß § 5 TMG:<br />
        Physiotherapiepraxis<br />
        Katrin Schulte B.A.<br />
        Physiotherapeutin (verliehen durch die BRD)<br />
        Bruchstraße 9<br />
        33142 Büren<br />
        Tel.: +49 (0)2951 932897<br />
        Fax: +49 (0)2951 932896<br />
        <a className="unscheinbar" href="mailto:info@physio-bueren.de">info@physio-bueren.de</a><br />
        <a className="unscheinbar" href="https://www.physio-bueren.de/">www.physio-bueren.de</a>
      </p>
      <p>
        <strong>Zuständige Aufsichtsbehörde</strong><br />
        Gesundheitsamt Paderborn, Aldegreverstr. 10-14, 33102 Paderborn
      </p>
      <p>
        <strong>Berufsgesetz</strong><br />
        Masseur- und Physiotherapeutengesetz (MPhG), einsehbar unter{" "}
        <a href="http://www.gesetze-im-internet.de" target="_blank" rel="noopener">
          www.gesetze-im-internet.de
        </a>
      </p>
      <p>
        <strong>Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV:</strong><br />
        Katrin Schulte<br />
        Bruchstraße 9<br />
        33142 Büren
      </p>
      <p><strong>Haftung für Inhalte</strong></p>
      <p>
        Als Diensteanbieter sind wir gemäß § 7 Abs. 1 TMG für eigene Inhalte auf diesen
        Seiten nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir
        als Diensteanbieter jedoch nicht verpflichtet, übermittelte oder gespeicherte
        fremde Informationen zu überwachen oder nach Umständen zu forschen, die auf eine
        rechtswidrige Tätigkeit hinweisen. Verpflichtungen zur Entfernung oder Sperrung der
        Nutzung von Informationen nach den allgemeinen Gesetzen bleiben hiervon unberührt.
        Eine diesbezügliche Haftung ist jedoch erst ab dem Zeitpunkt der Kenntnis einer
        konkreten Rechtsverletzung möglich. Bei Bekanntwerden von entsprechenden
        Rechtsverletzungen werden wir diese Inhalte umgehend entfernen.
      </p>
      <p><strong>Haftung für Links</strong></p>
      <p>
        Unser Angebot enthält Links zu externen Webseiten Dritter, auf deren Inhalte wir
        keinen Einfluss haben. Deshalb können wir für diese fremden Inhalte auch keine
        Gewähr übernehmen. Für die Inhalte der verlinkten Seiten ist stets der jeweilige
        Anbieter oder Betreiber der Seiten verantwortlich. Die verlinkten Seiten wurden
        zum Zeitpunkt der Verlinkung auf mögliche Rechtsverstöße überprüft. Rechtswidrige
        Inhalte waren zum Zeitpunkt der Verlinkung nicht erkennbar. Eine permanente
        inhaltliche Kontrolle der verlinkten Seiten ist jedoch ohne konkrete Anhaltspunkte
        einer Rechtsverletzung nicht zumutbar. Bei Bekanntwerden von Rechtsverletzungen
        werden wir derartige Links umgehend entfernen.
      </p>
      <p><strong>Urheberrecht</strong></p>
      <p>
        Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten
        unterliegen dem deutschen Urheberrecht. Die Vervielfältigung, Bearbeitung,
        Verbreitung und jede Art der Verwertung außerhalb der Grenzen des Urheberrechtes
        bedürfen der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers.
        Downloads und Kopien dieser Seite sind nur für den privaten, nicht kommerziellen
        Gebrauch gestattet. Soweit die Inhalte auf dieser Seite nicht vom Betreiber
        erstellt wurden, werden die Urheberrechte Dritter beachtet. Insbesondere werden
        Inhalte Dritter als solche gekennzeichnet. Sollten Sie trotzdem auf eine
        Urheberrechtsverletzung aufmerksam werden, bitten wir um einen entsprechenden
        Hinweis. Bei Bekanntwerden von Rechtsverletzungen werden wir derartige Inhalte
        umgehend entfernen.
      </p>
      <p>
        Ein großes Dankeschön an die tollen kleinen Fotomodels der Fotografin{" "}
        <a href="http://www.kirchhoff-fotografie.de" target="_blank" rel="noopener">
          Sonja Maschkio
        </a>{" "}
        und an das{" "}
        <a href="https://studio-kirchner.de" target="_blank" rel="noopener">
          Studio Kirchner
        </a>
        .
      </p>
      <p>
        <strong>Webdesign, Konzept, Gestaltung und Umsetzung</strong><br />
        Zuggerbebbche GRAFIK DESIGN &amp; FASHION<br />
        Nadine Brüggert<br />
        Mobil +49 (0)171 6482245<br />
        <a href="mailto:info@zuggerbebbche.com">info@zuggerbebbche.com</a><br />
        <a href="http://www.zuggerbebbche.com" target="_blank" rel="noopener">www.zuggerbebbche.com</a>
      </p>
      <div className="down" />
    </div>
  );
}
