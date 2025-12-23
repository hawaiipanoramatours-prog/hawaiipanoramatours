import { useOutletContext } from 'react-router-dom'

export default function Datenschutz() {
  const { content } = useOutletContext()
  return (
    <div className="min-h-screen bg-white pt-24 px-6 max-w-4xl mx-auto font-poppins text-gray-700 leading-relaxed">
      <h1 className="font-playfair text-4xl font-bold text-turquoise mb-6">Datenschutzerklärung</h1>

      <p>
        Wir freuen uns über Ihr Interesse an unserer Website. Der Schutz Ihrer persönlichen Daten ist uns sehr wichtig.
        Nachfolgend informieren wir Sie gemäß Art. 13 DSGVO über die Erhebung und Verarbeitung personenbezogener Daten
        beim Besuch dieser Website.
      </p>

      <h2 className="font-playfair text-2xl font-semibold text-gray-800 mt-8 mb-2">1. Verantwortliche Stelle</h2>
      <p>
  Hawaii Panorama Tours LLC<br />
  Inhaberin: Nasia Edwards<br />
  E-Mail:{' '}
  <a
    href="mailto:info@hawaiipanoramatours.com"
    className="text-turquoise hover:underline"
  >
    info@hawaiipanoramatours.com
  </a>
</p>

<p>
  Weitere Angaben finden Sie im{' '}
  <a href="/impressum" className="text-turquoise hover:underline">
    Impressum
  </a>.
</p>

      <h2 className="font-playfair text-2xl font-semibold text-gray-800 mt-8 mb-2">2. Erhebung und Verarbeitung personenbezogener Daten</h2>
      <p>
        Beim Besuch dieser Website werden keine personenbezogenen Daten erhoben, außer Sie übermitteln uns diese freiwillig
        (z.&nbsp;B. über E-Mail, Instagram oder durch Terminbuchung über Calendly). Diese Daten werden ausschließlich zur
        Bearbeitung Ihrer Anfrage verwendet und nicht an Dritte weitergegeben.
      </p>

      <h2 className="font-playfair text-2xl font-semibold text-gray-800 mt-8 mb-2">3. Cookies und Tracking</h2>
      <p>
        Unsere Website verwendet keine Cookies oder Tracking-Dienste zur Analyse oder Werbung. Die Google Translate-Funktion
        dient ausschließlich der Übersetzung der Inhalte und wird von Google bereitgestellt.
      </p>

      <h2 className="font-playfair text-2xl font-semibold text-gray-800 mt-8 mb-2">4. Externe Dienste</h2>
      <p>
        Wenn Sie auf externe Links (z.&nbsp;B. Instagram, Facebook, Calendly) klicken, gelten die Datenschutzbestimmungen
        der jeweiligen Anbieter.
      </p>

      <h2 className="font-playfair text-2xl font-semibold text-gray-800 mt-8 mb-2">5. Ihre Rechte</h2>
      <p>
        Sie haben das Recht auf Auskunft, Berichtigung, Löschung und Einschränkung der Verarbeitung Ihrer personenbezogenen Daten.
        Bitte wenden Sie sich hierfür per E-Mail an uns.
      </p>

      <h2 className="font-playfair text-2xl font-semibold text-gray-800 mt-8 mb-2">6. Datensicherheit</h2>
      <p>
        Wir verwenden technische und organisatorische Sicherheitsmaßnahmen, um Ihre Daten gegen Manipulation, Verlust oder
        unbefugten Zugriff zu schützen.
      </p>

      <h2 className="font-playfair text-2xl font-semibold text-gray-800 mt-8 mb-2">7. Änderungen dieser Datenschutzerklärung</h2>
      <p>
        Wir behalten uns vor, diese Datenschutzerklärung bei Bedarf anzupassen, um sie an geänderte rechtliche Anforderungen
        oder neue Funktionen auf unserer Website anzupassen.
      </p>

      <p className="mt-8 text-gray-500 text-sm">Letzte Aktualisierung: Oktober 2025</p>
    </div>
  )
}
