import { createFileRoute } from "@tanstack/react-router";
import { ObfuscatedEmail } from "@/components/ObfuscatedEmail";

export const Route = createFileRoute("/datenschutz")({
  component: Datenschutz,
  head: () => ({
    meta: [
      { title: "Datenschutz | Physiotherapie Katrin Schulte Büren" },
      { name: "description", content: "Datenschutzerklärung der Physiotherapie Katrin Schulte B.A." },
    ],
  }),
});

function Datenschutz() {
  return (
    <div className="c-content">
      <h1>Datenschutzerklärung</h1>

      <p>
        Diese Datenschutzerklärung klärt Sie über die Art, den Umfang und Zweck der Verarbeitung
        von personenbezogenen Daten (nachfolgend kurz „Daten") innerhalb unseres Onlineangebotes
        und der mit ihm verbundenen Webseiten und Funktionen auf. Im Hinblick auf die verwendeten
        Begrifflichkeiten, wie z.&nbsp;B. „Verarbeitung" oder „Verantwortlicher", verweisen wir
        auf die Definitionen in Art.&nbsp;4 der Datenschutz-Grundverordnung (DSGVO).
      </p>

      <p><strong>Verantwortlicher</strong></p>
      <p>
        Katrin Schulte Physiotherapie<br />
        Bruchstraße 9<br />
        33142 Büren<br />
        <ObfuscatedEmail email="info@physio-bueren.de" /><br />
        Inhaberin
      </p>

      <p><strong>Arten der verarbeiteten Daten</strong></p>
      <p>
        – Bestandsdaten (z.&nbsp;B. Namen, Adressen).<br />
        – Kontaktdaten (z.&nbsp;B. E-Mail, Telefonnummern).<br />
        – Inhaltsdaten (z.&nbsp;B. Texteingaben in Anfragen).<br />
        – Nutzungsdaten (z.&nbsp;B. besuchte Webseiten, Zugriffszeiten).<br />
        – Meta-/Kommunikationsdaten (z.&nbsp;B. Geräte-Informationen, IP-Adressen).
      </p>

      <p><strong>Kategorien betroffener Personen</strong></p>
      <p>Besucher und Nutzer dieses Onlineangebotes (nachfolgend „Nutzer").</p>

      <p><strong>Zweck der Verarbeitung</strong></p>
      <p>
        – Zurverfügungstellung des Onlineangebotes, seiner Funktionen und Inhalte.<br />
        – Beantwortung von Kontaktanfragen und Kommunikation mit Nutzern.<br />
        – Sicherheitsmaßnahmen.
      </p>

      <p><strong>Maßgebliche Rechtsgrundlagen</strong></p>
      <p>
        Nach Maßgabe des Art.&nbsp;13 DSGVO teilen wir Ihnen die Rechtsgrundlagen unserer
        Datenverarbeitungen mit. Die Rechtsgrundlage für die Einholung von Einwilligungen ist
        Art.&nbsp;6 Abs.&nbsp;1 lit.&nbsp;a und Art.&nbsp;7 DSGVO, die Rechtsgrundlage für die
        Verarbeitung zur Erfüllung unserer Leistungen und Beantwortung von Anfragen ist
        Art.&nbsp;6 Abs.&nbsp;1 lit.&nbsp;b DSGVO, die Rechtsgrundlage für die Verarbeitung zur
        Erfüllung unserer rechtlichen Verpflichtungen ist Art.&nbsp;6 Abs.&nbsp;1 lit.&nbsp;c
        DSGVO und die Rechtsgrundlage für die Verarbeitung zur Wahrung unserer berechtigten
        Interessen ist Art.&nbsp;6 Abs.&nbsp;1 lit.&nbsp;f DSGVO.
      </p>

      <p><strong>Zusammenarbeit mit Auftragsverarbeitern und Dritten</strong></p>
      <p>
        Sofern wir im Rahmen unserer Verarbeitung Daten gegenüber anderen Personen und Unternehmen
        (Auftragsverarbeitern oder Dritten) offenbaren, sie an diese übermitteln oder ihnen sonst
        Zugriff auf die Daten gewähren, erfolgt dies nur auf Grundlage einer gesetzlichen
        Erlaubnis, wenn Sie eingewilligt haben, eine rechtliche Verpflichtung dies vorsieht oder
        auf Grundlage unserer berechtigten Interessen (z.&nbsp;B. beim Einsatz von Webhostern).
        Sofern wir Dritte mit der Verarbeitung von Daten auf Grundlage eines
        Auftragsverarbeitungsvertrages beauftragen, geschieht dies auf Grundlage des
        Art.&nbsp;28 DSGVO.
      </p>

      <p><strong>Übermittlungen in Drittländer</strong></p>
      <p>
        Sofern wir Daten in einem Drittland (außerhalb der EU bzw. des EWR) verarbeiten oder dies
        im Rahmen der Inanspruchnahme von Diensten Dritter geschieht, erfolgt dies nur unter den
        Voraussetzungen der Art.&nbsp;44&nbsp;ff. DSGVO. Eine Übermittlung in die USA stützen wir
        – soweit anwendbar – auf den Angemessenheitsbeschluss der EU-Kommission zum
        EU-US Data Privacy Framework (2023) oder auf die Standardvertragsklauseln der
        EU-Kommission.
      </p>

      <p><strong>Rechte der betroffenen Personen</strong></p>
      <p>
        Sie haben das Recht, eine Bestätigung darüber zu verlangen, ob betreffende Daten
        verarbeitet werden, und auf Auskunft über diese Daten sowie auf weitere Informationen und
        Kopie der Daten gemäß Art.&nbsp;15 DSGVO. Sie haben gemäß Art.&nbsp;16 DSGVO das Recht,
        die Vervollständigung der Sie betreffenden Daten oder die Berichtigung der unrichtigen
        Daten zu verlangen. Sie haben nach Maßgabe des Art.&nbsp;17 DSGVO das Recht zu verlangen,
        dass betreffende Daten unverzüglich gelöscht werden, bzw. alternativ nach Maßgabe des
        Art.&nbsp;18 DSGVO eine Einschränkung der Verarbeitung der Daten zu verlangen. Sie haben
        das Recht auf Datenübertragbarkeit gemäß Art.&nbsp;20 DSGVO. Sie haben ferner gemäß
        Art.&nbsp;77 DSGVO das Recht, eine Beschwerde bei der zuständigen Aufsichtsbehörde
        einzureichen.
      </p>

      <p><strong>Widerrufsrecht</strong></p>
      <p>
        Sie haben das Recht, erteilte Einwilligungen gemäß Art.&nbsp;7 Abs.&nbsp;3 DSGVO mit
        Wirkung für die Zukunft zu widerrufen.
      </p>

      <p><strong>Widerspruchsrecht</strong></p>
      <p>
        Sie können der künftigen Verarbeitung der Sie betreffenden Daten nach Maßgabe des
        Art.&nbsp;21 DSGVO jederzeit widersprechen. Der Widerspruch kann insbesondere gegen die
        Verarbeitung für Zwecke der Direktwerbung erfolgen.
      </p>

      <p><strong>Cookies</strong></p>
      <p>
        Diese Website verwendet keine Tracking- oder Marketing-Cookies. Es werden ausschließlich
        technisch notwendige Cookies eingesetzt, sofern diese für den Betrieb der Website
        erforderlich sind. Falls Sie nicht möchten, dass Cookies auf Ihrem Rechner gespeichert
        werden, können Sie die entsprechende Option in den Systemeinstellungen Ihres Browsers
        deaktivieren. Gespeicherte Cookies können in den Systemeinstellungen des Browsers
        gelöscht werden.
      </p>

      <p><strong>Löschung von Daten</strong></p>
      <p>
        Die von uns verarbeiteten Daten werden nach Maßgabe der Art.&nbsp;17 und 18 DSGVO
        gelöscht oder in ihrer Verarbeitung eingeschränkt. Sofern nicht in dieser
        Datenschutzerklärung ausdrücklich angegeben, werden die bei uns gespeicherten Daten
        gelöscht, sobald sie für ihre Zweckbestimmung nicht mehr erforderlich sind und der
        Löschung keine gesetzlichen Aufbewahrungspflichten entgegenstehen. Nach gesetzlichen
        Vorgaben in Deutschland erfolgt die Aufbewahrung insbesondere für 6 Jahre gemäß
        §&nbsp;257 Abs.&nbsp;1 HGB sowie für 10 Jahre gemäß §&nbsp;147 Abs.&nbsp;1 AO.
      </p>

      <p><strong>Hosting</strong></p>
      <p>
        Die von uns in Anspruch genommenen Hosting-Leistungen dienen der Zurverfügungstellung
        der folgenden Leistungen: Infrastruktur- und Plattformdienstleistungen, Rechenkapazität,
        Speicherplatz und Datenbankdienste sowie technische Wartungsleistungen, die wir zum
        Zwecke des Betriebs dieses Onlineangebotes einsetzen. Hierbei verarbeiten wir bzw. unser
        Hostinganbieter Bestands-, Kontakt-, Inhalts-, Nutzungs- sowie Meta- und
        Kommunikationsdaten von Besuchern dieses Onlineangebotes auf Grundlage unserer
        berechtigten Interessen an einer effizienten und sicheren Zurverfügungstellung dieses
        Onlineangebotes gemäß Art.&nbsp;6 Abs.&nbsp;1 lit.&nbsp;f DSGVO i.&nbsp;V.&nbsp;m.
        Art.&nbsp;28 DSGVO.
      </p>

      <p><strong>Erhebung von Zugriffsdaten und Logfiles</strong></p>
      <p>
        Unser Hostinganbieter erhebt auf Grundlage unserer berechtigten Interessen im Sinne des
        Art.&nbsp;6 Abs.&nbsp;1 lit.&nbsp;f DSGVO Daten über jeden Zugriff auf den Server
        (sogenannte Serverlogfiles). Zu den Zugriffsdaten gehören Name der abgerufenen Webseite,
        Datei, Datum und Uhrzeit des Abrufs, übertragene Datenmenge, Meldung über erfolgreichen
        Abruf, Browsertyp nebst Version, das Betriebssystem des Nutzers, Referrer URL, IP-Adresse
        und der anfragende Provider. Logfile-Informationen werden aus Sicherheitsgründen
        (z.&nbsp;B. zur Aufklärung von Missbrauchs- oder Betrugshandlungen) für die Dauer von
        maximal 7 Tagen gespeichert und danach gelöscht.
      </p>

      <p><strong>Kontaktaufnahme</strong></p>
      <p>
        Bei der Kontaktaufnahme mit uns (z.&nbsp;B. per E-Mail oder Telefon) werden die Angaben
        des Nutzers zur Bearbeitung der Kontaktanfrage und deren Abwicklung gemäß Art.&nbsp;6
        Abs.&nbsp;1 lit.&nbsp;b DSGVO verarbeitet. Wir löschen die Anfragen, sofern diese nicht
        mehr erforderlich sind. Wir überprüfen die Erforderlichkeit alle zwei Jahre; ferner
        gelten die gesetzlichen Archivierungspflichten.
      </p>

      <p><strong>Google Maps</strong></p>
      <p>
        Auf unserer Kontaktseite setzen wir Google Maps zur Darstellung unseres Standorts ein.
        Anbieter ist die Google Ireland Limited, Gordon House, Barrow Street, Dublin 4, Irland
        („Google"). Beim Aufruf der Seite, auf der die Karte eingebunden ist, wird eine
        Verbindung zu Servern von Google aufgebaut. Dabei wird Ihre IP-Adresse an Google
        übertragen und ggf. ein Cookie gesetzt. Eine Übermittlung in die USA kann dabei nicht
        ausgeschlossen werden; Grundlage ist der Angemessenheitsbeschluss der EU-Kommission zum
        EU-US Data Privacy Framework bzw. die Standardvertragsklauseln. Rechtsgrundlage ist
        Art.&nbsp;6 Abs.&nbsp;1 lit.&nbsp;f DSGVO. Unser berechtigtes Interesse liegt in der
        einfachen Auffindbarkeit unserer Praxis. Weitere Informationen finden Sie in der
        Datenschutzerklärung von Google unter{" "}
        <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer">
          policies.google.com/privacy
        </a>{" "}
        sowie in den Nutzungsbedingungen für Google Maps unter{" "}
        <a
          href="https://www.google.com/intl/de_de/help/terms_maps.html"
          target="_blank"
          rel="noopener noreferrer"
        >
          google.com/intl/de_de/help/terms_maps.html
        </a>
        .
      </p>

      <p><strong>SSL-Verschlüsselung</strong></p>
      <p>
        Diese Seite nutzt aus Gründen der Sicherheit eine SSL-/TLS-Verschlüsselung. Eine
        verschlüsselte Verbindung erkennen Sie daran, dass die Adresszeile des Browsers von
        „http://" auf „https://" wechselt und am Schloss-Symbol in Ihrer Browserzeile.
      </p>
    </div>
  );
}
