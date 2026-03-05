import { motion } from 'framer-motion'
import * as Fi from 'react-icons/fi'
import SafeIcon from './SafeIcon'

/* helper: supports strings OR {de,en,es} */
const pick = (val, lang = 'de') => {
  if (!val) return ''
  if (typeof val === 'string') return val
  return val?.[lang] || val?.de || ''
}

/* =========================================================
   HERO
   ========================================================= */
export function Hero({ content, lang = 'de' }) {
  const h = content?.hero || {}
  const bg = h.bg

  const subtitleFallback = {
    de: 'Individuelle Oʻahu-Reiseplanung – optional private Guiding-Tage & vertrauenswürdige lokale Partner. Auf Deutsch, Englisch & Spanisch.',
    en: 'Custom Oʻahu trip planning with optional private guiding and trusted local partners — in English, German & Spanish.',
  }

  const trust = {
    de: {
      title: 'Ideal für Sie, wenn Sie…',
      good: [
        'Stressfrei planen möchten – ohne stundenlange Recherche',
        'Ihre begrenzte Zeit auf Oʻahu optimal nutzen wollen',
        'Einen klaren Reise-Blueprint (einmalig) möchten',
        'Optional privat begleitet starten möchten (Orientierungstag)',
        'Zugang zu passenden, geprüften lokalen Partnern schätzen',
      ],
    },
    en: {
      title: 'This is perfect for you if you…',
      good: [
        'want stress-free planning without endless research',
        'want to avoid crowded bus tours',
        'prefer flexibility instead of fixed schedules',
        'value personal attention and real local insight',
        'want your time on Oʻahu to feel effortless and special',
      ],
    },
  }

  const t = trust[lang] || trust.de

  return (
    <section
      className="relative min-h-screen flex justify-center overflow-hidden"
      style={{
        backgroundImage: bg ? `url(${bg})` : undefined,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'scroll',
      }}
    >
      <div className="absolute inset-0 bg-black/40" />

      <div className="relative z-10 w-full px-6 pt-20 md:pt-24 pb-14 flex items-start md:items-center">
        <div className="text-center text-white max-w-4xl mx-auto w-full">
          <motion.div
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="font-playfair text-5xl md:text-7xl font-bold mb-5 leading-[0.95]">
              {pick(h.title, lang)}
              <span className="block text-turquoise mt-2">
                {pick(h.highlight, lang)}
              </span>
            </h1>

            <p className="font-poppins text-xl md:text-2xl mb-4 text-gray-200">
              {pick(h.subtitle, lang) || subtitleFallback[lang] || subtitleFallback.de}
            </p>

            {/* Trust Block */}
            <div className="mx-auto max-w-md sm:max-w-lg text-left mb-9">
              <div className="rounded-2xl bg-white/10 border border-white/15 backdrop-blur-sm p-5">
                <p className="font-poppins text-sm md:text-base font-semibold text-white/95 mb-3">
                  {t.title}
                </p>

                <ul className="space-y-2">
                  {t.good.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-white/90">
                      <span className="mt-[2px] text-turquoise">
                        <Fi.FiCheck className="w-4 h-4" />
                      </span>
                      <span className="font-poppins text-sm md:text-base">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Primary CTA */}
            <div className="flex flex-col items-center gap-3">
              <a
                href={content?.brand?.cta?.booking}
                target="_blank"
                rel="noreferrer"
                className="border-2 border-white text-white px-8 py-4 rounded-full font-poppins font-semibold text-lg hover:bg-white hover:text-black transition"
              >
                {lang === 'en' ? 'Request Your Custom Plan' : 'Individuell anfragen'}
              </a>

              <p className="font-poppins text-sm text-white/80">
                {lang === 'en'
                  ? 'Share your dates + travel style — I’ll confirm fit and outline next steps.'
                  : 'Teilen Sie Reisedaten + Reisestil — ich prüfe den Fit und sende die nächsten Schritte.'}
              </p>

              <div className="flex gap-4 mt-2">
                <a
                  href={content?.brand?.social?.instagram}
                  target="_blank"
                  rel="noreferrer"
                  className="w-10 h-10 bg-white/10 hover:bg-turquoise/30 rounded-lg grid place-items-center"
                >
                  <Fi.FiInstagram className="w-5 h-5" />
                </a>
                <a
                  href={content?.brand?.social?.facebook}
                  target="_blank"
                  rel="noreferrer"
                  className="w-10 h-10 bg-white/10 hover:bg-turquoise/30 rounded-lg grid place-items-center"
                >
                  <Fi.FiFacebook className="w-5 h-5" />
                </a>
                <a
                  href={`mailto:${content?.brand?.social?.email || ''}`}
                  className="w-10 h-10 bg-white/10 hover:bg-turquoise/30 rounded-lg grid place-items-center"
                >
                  <Fi.FiMail className="w-5 h-5" />
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

/* =========================================================
   HOW IT WORKS (uses your JSON: content.how)
   ========================================================= */
export function HowItWorks({ content, lang = 'de' }) {
  const how = content?.how
  if (!how) return null

  return (
    <section className="py-20 bg-gradient-to-b from-white to-sand/20">
      <div className="container mx-auto px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            {pick(how.title, lang)}
          </h2>
          <p className="font-poppins text-xl text-gray-600 max-w-2xl mx-auto">
            {pick(how.subtitle, lang)}
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {(how.steps || []).map((s, i) => {
            const Icon = Fi[s.icon] || Fi.FiCheck
            return (
              <motion.div
                key={i}
                className="relative"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: i * 0.2 }}
                viewport={{ once: true }}
              >
                <div className="absolute -top-4 -left-4 w-12 h-12 bg-turquoise text-white rounded-full grid place-items-center font-bold">
                  {s.step || String(i + 1).padStart(2, '0')}
                </div>

                <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all h-full">
                  <div className="w-16 h-16 bg-gradient-to-r from-turquoise to-light-blue rounded-2xl grid place-items-center mb-6 mx-auto">
                    <SafeIcon icon={Icon} className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="font-playfair text-2xl font-semibold text-gray-800 mb-4 text-center">
                    {pick(s.title, lang)}
                  </h3>
                  <p className="font-poppins text-gray-600 text-center">
                    {pick(s.desc, lang)}
                  </p>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

/* =========================================================
   SERVICESSECTION (keep name because Home.jsx imports it)
   Uses your JSON: content.services
   ========================================================= */
export function ServicesSection({ content, lang = 'de' }) {
  const services = content?.services || []
  if (!services.length) return null

  return (
    <section id="services" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            {lang === 'en' ? 'My services' : 'Meine Leistungen'}
          </h2>
          <p className="font-poppins text-xl text-gray-600 max-w-2xl mx-auto">
            {lang === 'en'
              ? 'Choose the service that fits you best'
              : 'Wählen Sie den Service, der perfekt zu Ihnen passt'}
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {services.map((s, i) => {
            const Icon = Fi[s.icon] || Fi.FiCheck
            return (
              <motion.div
                key={i}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl border border-gray-100 flex flex-col"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: i * 0.2 }}
                viewport={{ once: true }}
              >
                <div className="w-16 h-16 bg-gradient-to-r from-turquoise to-light-blue rounded-2xl grid place-items-center mb-6">
                  <SafeIcon icon={Icon} className="w-8 h-8 text-white" />
                </div>

                <h3 className="font-playfair text-2xl font-semibold text-gray-800 mb-3">
                  {pick(s.title, lang)}
                </h3>

                <p className="font-poppins text-gray-600 mb-4">
                  {pick(s.desc, lang)}
                </p>

                <div className="mb-6">
                  <span className="font-playfair text-3xl font-bold text-turquoise">
                    {pick(s.price, lang)}
                  </span>
                </div>

                <ul className="space-y-2 mb-6">
                  {(s.features?.[lang] || s.features?.de || []).map((f, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-gray-700">
                      <span className="mt-[2px] text-turquoise">
                        <Fi.FiCheck className="w-4 h-4" />
                      </span>
                      <span className="font-poppins text-sm">{f}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-auto">
                  <a
                    href={content?.brand?.cta?.booking}
                    target="_blank"
                    rel="noreferrer"
                    className="w-full bg-turquoise hover:bg-turquoise/90 text-white py-3 px-6 rounded-full font-poppins font-semibold block text-center"
                  >
                    {lang === 'en' ? 'Enquire' : 'Anfragen'}
                  </a>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

/* =========================================================
   OFFERINGS (Home.jsx expects this export)
   Uses your JSON: content.offerings
   ========================================================= */
export function Offerings({ content, lang = 'de' }) {
  const items = content?.offerings || []
  if (!items.length) return null

  return (
    <section className="py-20 bg-gradient-to-b from-sand/20 to-light-blue/10">
      <div className="container mx-auto px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            {lang === 'en' ? 'What I offer' : 'Meine Angebote'}
          </h2>
          <p className="font-poppins text-xl text-gray-600 max-w-2xl mx-auto">
            {lang === 'en'
              ? 'Comprehensive services for a perfect trip'
              : 'Umfassende Services für Ihr perfektes Hawaii-Erlebnis'}
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {items.map((o, i) => {
            const Icon = Fi[o.icon] || Fi.FiCheck
            return (
              <motion.div
                key={i}
                className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="w-12 h-12 bg-gradient-to-r from-turquoise to-light-blue rounded-xl grid place-items-center mb-4">
                  <SafeIcon icon={Icon} className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-playfair text-xl font-semibold text-gray-800 mb-3">
                  {pick(o.title, lang)}
                </h3>
                <p className="font-poppins text-gray-600">{pick(o.desc, lang)}</p>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

/* =========================================================
   GALLERY (Home.jsx expects this export)
   ========================================================= */
export function Gallery({ lang = 'de' }) {
  const images = [
    { src: '/Gallery1.JPG', alt: { de: 'Kunden auf Hawaii Tour 1', en: 'Guests on Hawai‘i tour 1' } },
    { src: '/Gallery2.jpg', alt: { de: 'Kunden auf Hawaii Tour 2', en: 'Guests on Hawai‘i tour 2' } },
    { src: '/Gallery3.jpg', alt: { de: 'Kunden auf Hawaii Tour 3', en: 'Guests on Hawai‘i tour 3' } },
    { src: '/Gallery4.jpg', alt: { de: 'Kunden auf Hawaii Tour 4', en: 'Guests on Hawai‘i tour 4' } },
    { src: '/Gallery5.jpg', alt: { de: 'Kunden auf Hawaii Tour 5', en: 'Guests on Hawai‘i tour 5' } },
    { src: '/Gallery6.JPG', alt: { de: 'Kunden auf Hawaii Tour 6', en: 'Guests on Hawai‘i tour 6' } },
  ]

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            {lang === 'en'
              ? 'Hawai‘i moments & guest impressions'
              : 'Hawaii-Momente & Gäste-Impressionen'}
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {images.map((img, i) => (
            <motion.div
              key={i}
              className="overflow-hidden rounded-2xl shadow-md bg-gray-100"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              viewport={{ once: true }}
            >
              <img
                src={img.src}
                alt={pick(img.alt, lang)}
                loading="lazy"
                className="w-full h-64 md:h-72 object-cover hover:scale-105 transition-transform duration-500"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

/* =========================================================
   TESTIMONIALS (Home.jsx expects this export)
   Uses your JSON: content.testimonials
   ========================================================= */
export function Testimonials({ content, lang = 'de' }) {
  const list = content?.testimonials || []
  if (!list.length) return null

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            {lang === 'en' ? 'What my guests say' : 'Was meine Gäste sagen'}
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {list.map((t, i) => (
            <motion.div
              key={i}
              className="bg-gradient-to-br from-sand/30 to-light-blue/20 rounded-2xl p-6 shadow-lg"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="flex mb-4">
                {Array.from({ length: t.rating || 5 }).map((_, k) => (
                  <Fi.FiStar key={k} className="w-5 h-5 text-yellow-400" />
                ))}
              </div>

              <p className="font-poppins text-gray-700 mb-6 italic">
                “{pick(t.text, lang)}”
              </p>

              <div>
                <h4 className="font-playfair font-semibold text-gray-800">{t.name}</h4>
                {t.location ? (
                  <p className="font-poppins text-sm text-gray-600">
                    {pick(t.location, lang)}
                  </p>
                ) : null}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

/* =========================================================
   CONTACT CTA (Home.jsx expects this export)
   Uses your JSON: content.cta + brand.cta.booking + brand.social.email
   ========================================================= */
export function ContactCTA({ content, lang = 'de' }) {
  const c = content?.cta
  if (!c) return null

  return (
    <section
      className="relative py-20 overflow-hidden"
      style={{
        backgroundImage: c.bg ? `url(${c.bg})` : undefined,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
      }}
    >
      <div className="absolute inset-0 bg-turquoise/80" />
      <div className="relative z-10 container mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-white mb-6">
            {pick(c.title, lang)}
          </h2>
          <p className="font-poppins text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            {pick(c.desc, lang)}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href={content?.brand?.cta?.booking}
              target="_blank"
              rel="noreferrer"
              className="bg-white text-turquoise px-8 py-4 rounded-full font-poppins font-semibold text-lg"
            >
              {lang === 'en' ? 'Book a call' : 'Jetzt Termin buchen'}
            </a>

            <a
              href={`mailto:${content?.brand?.social?.email || ''}`}
              className="border-2 border-white text-white px-8 py-4 rounded-full font-poppins font-semibold text-lg"
            >
              {lang === 'en' ? 'Email me' : 'E-Mail schreiben'}
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

/* =========================================================
   FOOTER (used by App.jsx)
   ========================================================= */
export function Footer({ content, lang = 'de' }) {
  return (
    <footer className="bg-gray-800 text-white py-12">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-12 h-12 rounded-full overflow-hidden">
                <img
                  src="/githup%20upload%20Hawaii%20Panorama%20Tours.png"
                  alt="Hawaii Panorama Tours Logo"
                  className="w-full h-full object-contain"
                />
              </div>
              <span className="font-playfair font-bold text-xl">
                {content?.brand?.siteName}
              </span>
            </div>

            <p className="font-poppins text-gray-300 mb-4">
              {lang === 'en'
                ? 'Authentic Hawai‘i experiences with personal support.'
                : 'Authentische Hawaii-Erlebnisse mit persönlicher Betreuung.'}
            </p>

            <div className="flex gap-4">
              <a
                href={content?.brand?.social?.instagram}
                target="_blank"
                rel="noreferrer"
                className="w-10 h-10 bg-turquoise/20 hover:bg-turquoise rounded-lg grid place-items-center"
              >
                <Fi.FiInstagram className="w-5 h-5" />
              </a>
              <a
                href={content?.brand?.social?.facebook}
                target="_blank"
                rel="noreferrer"
                className="w-10 h-10 bg-turquoise/20 hover:bg-turquoise rounded-lg grid place-items-center"
              >
                <Fi.FiFacebook className="w-5 h-5" />
              </a>
              <a
                href={`mailto:${content?.brand?.social?.email || ''}`}
                className="w-10 h-10 bg-turquoise/20 hover:bg-turquoise rounded-lg grid place-items-center"
              >
                <Fi.FiMail className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-playfair text-lg font-semibold mb-4">
              {lang === 'en' ? 'Navigation' : 'Navigation'}
            </h3>
            <ul className="space-y-2 font-poppins">
              <li>
                <a href="/" className="text-gray-300 hover:text-turquoise">
                  {lang === 'en' ? 'Home' : 'Home'}
                </a>
              </li>
              <li>
                <a href="/services" className="text-gray-300 hover:text-turquoise">
                  {lang === 'en' ? 'Services' : 'Dienstleistungen'}
                </a>
              </li>
              <li>
                <a href="/about" className="text-gray-300 hover:text-turquoise">
                  {lang === 'en' ? 'About' : 'Über mich'}
                </a>
              </li>
              <li>
                <a href="/contact" className="text-gray-300 hover:text-turquoise">
                  {lang === 'en' ? 'Contact' : 'Kontakt'}
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-playfair text-lg font-semibold mb-4">
              {lang === 'en' ? 'Contact' : 'Kontakt'}
            </h3>
            <div className="space-y-2 font-poppins text-gray-300">
              <p>{content?.brand?.social?.email}</p>
              <p>{content?.brand?.social?.phone}</p>
              <p>{content?.brand?.social?.place}</p>
            </div>

            <div className="mt-4">
              <a
                href={content?.brand?.cta?.booking}
                target="_blank"
                rel="noreferrer"
                className="bg-turquoise text-white px-4 py-2 rounded-lg font-poppins text-sm"
              >
                {lang === 'en' ? 'Request' : 'Anfragen'}
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="flex gap-6 font-poppins text-sm text-gray-400 mb-4 md:mb-0">
            <a href={content?.legal?.impressumPath} className="hover:text-turquoise">
              {lang === 'en' ? 'Imprint' : 'Impressum'}
            </a>
            <a href={content?.legal?.privacyPath} className="hover:text-turquoise">
              {lang === 'en' ? 'Privacy policy' : 'Datenschutz'}
            </a>
          </div>

          <p className="font-poppins text-sm text-gray-400">
            {lang === 'en' ? 'With Aloha from Hawai‘i 🌺' : 'Mit Aloha von Hawaii 🌺'}
          </p>
        </div>
      </div>
    </footer>
  )
}
