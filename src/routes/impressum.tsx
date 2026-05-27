import { createFileRoute } from "@tanstack/react-router";
import { ObfuscatedEmail } from "@/components/ObfuscatedEmail";
import impressumKreis from "@/assets/wp/physio-bueren-impressum-kreis.png";

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
          src={impressumKreis}
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
        <ObfuscatedEmail className="unscheinbar" email="info@physio-bueren.de" /><br />
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
        <strong>Webdesign, Konzept, Gestaltung und Umsetzung</strong><br />
        Discher IT-Service<br />
        Zur Sauerkanzel 21<br />
        33165 Lichtenau<br />
        Tel.: +49 (0)172 4495902<br />
        <ObfuscatedEmail email="info@it-discher.de" /><br />
        <a href="https://www.it-discher.de" target="_blank" rel="noopener noreferrer">
          www.it-discher.de
        </a>
      </p>
      <p>
        <strong>Fotografie</strong><br />
        Sonja Maschkio / Studio Kirchner
      </p>

      <div className="down" />
    </div>
  );
}
