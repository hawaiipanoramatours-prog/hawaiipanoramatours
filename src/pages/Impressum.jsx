import { useOutletContext } from 'react-router-dom'

export default function Impressum() {
  const { content } = useOutletContext()
  return (
    <div className="min-h-screen bg-white pt-24 px-6 max-w-4xl mx-auto font-poppins text-gray-700 leading-relaxed">
      <h1 className="font-playfair text-4xl font-bold text-turquoise mb-6">Impressum</h1>

      <p><strong>Angaben gemäß § 5 TMG</strong></p>
      <p>
       Hawaii Panorama Tours LLC<br />
       Nasia Edwards<br />
       200 N Vineyard Blvd<br />
       Ste A325 -265<br />
       Honolulu, HI 96817, USA
      </p>

      <p className="mt-4">
        <strong>Kontakt</strong><br />
        E-Mail: <a href="mailto:hawaiipanoramatours@gmail.com" className="text-turquoise hover:underline">info@hawaiipanoramatours.com</a><br />
        Telefon: — (auf Anfrage)<br />
        Website: <a href="https://hawaiipanoramatours.de" className="text-turquoise hover:underline">www.hawaiipanoramatours.de</a>
      </p>

      <p className="mt-6">
        <strong>Vertretungsberechtigt</strong><br />
        Nasia Edwards (Inhaberin)
      </p>

      <p className="mt-6">
        <strong>Haftungsausschluss (Disclaimer)</strong><br />
        Trotz sorgfältiger inhaltlicher Kontrolle übernehmen wir keine Haftung für die Inhalte externer Links.
        Für den Inhalt der verlinkten Seiten sind ausschließlich deren Betreiber verantwortlich.
      </p>

      <p className="mt-6">
        <strong>Hinweis zur Online-Streitbeilegung</strong><br />
        Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit:
        <a href="https://ec.europa.eu/consumers/odr/" target="_blank" rel="noreferrer" className="text-turquoise hover:underline">
          https://ec.europa.eu/consumers/odr/
        </a>.
        Wir sind nicht verpflichtet und nicht bereit, an einem Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen.
      </p>

      <p className="mt-6">
        <strong>Rechtlicher Hinweis</strong><br />
        Diese Website dient ausschließlich Informationszwecken. Alle genannten Preise und Angebote sind unverbindlich.
        Die Buchung von Touren oder Dienstleistungen erfolgt ausschließlich über direkte Kontaktaufnahme oder externe Partner.
      </p>
    </div>
  )
}
