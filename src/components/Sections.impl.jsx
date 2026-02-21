import { motion } from 'framer-motion'
import * as Fi from 'react-icons/fi'
import SafeIcon from './SafeIcon'

/* ✅ helper: supports strings OR {de,en,es} */
const pick = (val, lang = 'de') => {
  if (!val) return ''
  if (typeof val === 'string') return val
  return val?.[lang] || val?.de || ''
}

/* =========================================================
   HERO – Hybrid Positioning + Trusted Partners + 1 CTA
   ========================================================= */
export function Hero({ content, lang = 'de' }) {
  const h = content.hero || {}
  const bg = h.bg

  const subtitleFallback = {
    de: 'Individuelle Oʻahu-Reiseplanung – optional private Guiding-Tage & vertrauenswürdige lokale Partner. Auf Deutsch, Englisch & Spanisch.',
    en: 'Custom Oʻahu trip planning with optional private guided days and carefully selected trusted local partners — in English, German & Spanish.',
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
      title: 'Ideal for you if you:',
      good: [
        'want stress-free planning without endless research',
        'want to make the most of limited time on Oʻahu',
        'want one clear custom trip blueprint (one-time)',
        'may want an optional private orientation day',
        'value trusted local partners & curated options',
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
                      <span className="mt-[2px]">
                        <SafeIcon className="w-4 h-4 text-turquoise" />
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
   HOW IT WORKS – No duplicates, clear entry (Start here)
   ========================================================= */
export function HowItWorks({ content, lang = 'de' }) {
  const copy = {
    de: {
      title: 'So funktioniert es',
      steps: [
        {
          title: '1) Anfrage senden',
          desc: 'Reisedaten, Personenanzahl, Stil & Prioritäten. Ich bestätige den Fit und die nächsten Schritte.',
          icon: 'FiMail',
        },
        {
          title: '2) Ihr Reise-Blueprint entsteht',
          desc: 'Ein klarer Plan mit Timing, Routenlogik und Optionen, passend zu Ihnen — ohne Overload.',
          icon: 'FiCompass',
        },
        {
          title: '3) Optional: Orientation Day / VIP',
          desc: 'Starten Sie stressfrei mit einem privaten Orientierungstag oder wählen Sie VIP-Betreuung & Premium-Zugang.',
          icon: 'FiStar',
        },
      ],
    },
    en: {
      title: 'How it works',
      steps: [
        {
          title: '1) Send your request',
          desc: 'Share dates, group size, style & priorities. I confirm fit and next steps.',
          icon: 'FiMail',
        },
        {
          title: '2) We design your blueprint',
          desc: 'A clear plan with timing, route logic, and curated options — tailored to you.',
          icon: 'FiCompass',
        },
        {
          title: '3) Optional: Orientation Day / VIP',
          desc: 'Start stress-free with a private orientation day, or upgrade to VIP support & premium access.',
          icon: 'FiStar',
        },
      ],
    },
  }

  const t = copy[lang] || copy.de

  const getIcon = (name) => {
    const Icon = Fi[name]
    return Icon ? <Icon className="w-5 h-5" /> : <Fi.FiCheck className="w-5 h-5" />
  }

  return (
    <section className="bg-white py-16">
      <div className="container mx-auto px-6 max-w-5xl">
        <h2 className="font-playfair text-3xl md:text-4xl font-bold text-gray-900 mb-10 text-center">
          {t.title}
        </h2>

        <div className="grid md:grid-cols-3 gap-6">
          {t.steps.map((s, i) => (
            <div key={i} className="rounded-2xl border border-gray-200 p-6 shadow-sm">
              <div className="w-11 h-11 rounded-xl bg-turquoise/15 grid place-items-center text-turquoise mb-4">
                {getIcon(s.icon)}
              </div>
              <h3 className="font-poppins font-semibold text-gray-900 mb-2">{s.title}</h3>
              <p className="font-poppins text-gray-600">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

/* =========================================================
   SERVICES – Reframed as Step 1/2/3 (not 3 random products)
   Uses your existing content.services array
   ========================================================= */
export function Services({ content, lang = 'de' }) {
  const services = content?.services || []

  const header = {
    de: { title: 'Wählen Sie Ihre Betreuung', sub: 'Starten Sie mit Planung — und ergänzen Sie bei Bedarf persönliche Begleitung.' },
    en: { title: 'Choose your level of support', sub: 'Start with planning — then add personal support if you want.' },
  }
  const h = header[lang] || header.de

  // labels to make the flow obvious without changing layout
  const labels = {
    0: { de: 'Start here', en: 'Start here' },
    1: { de: 'Optional Add-on', en: 'Optional add-on' },
    2: { de: 'Premium Upgrade', en: 'Premium upgrade' },
  }

  const getIcon = (iconName) => {
    const Icon = Fi[iconName]
    return Icon ? <Icon className="w-6 h-6" /> : <Fi.FiCheck className="w-6 h-6" />
  }

  return (
    <section className="bg-gray-50 py-16" id="services">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="text-center mb-10">
          <h2 className="font-playfair text-3xl md:text-4xl font-bold text-gray-900">
            {h.title}
          </h2>
          <p className="font-poppins text-gray-600 mt-3">
            {h.sub}
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {services.map((s, idx) => (
            <div key={idx} className="rounded-2xl bg-white border border-gray-200 p-6 shadow-sm">
              <div className="flex items-start justify-between gap-4 mb-4">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-2xl bg-turquoise/15 grid place-items-center text-turquoise">
                    {getIcon(s.icon)}
                  </div>
                  <div>
                    <div className="text-xs font-poppins font-semibold text-gray-500 uppercase tracking-wide">
                      {(labels[idx]?.[lang] || labels[idx]?.de) ?? ''}
                    </div>
                    <h3 className="font-poppins font-semibold text-gray-900 text-lg">
                      {pick(s.title, lang)}
                    </h3>
                  </div>
                </div>
                <div className="font-poppins font-semibold text-gray-900 whitespace-nowrap">
                  {pick(s.price, lang)}
                </div>
              </div>

              <p className="font-poppins text-gray-600 mb-5">
                {pick(s.desc, lang)}
              </p>

              <ul className="space-y-2">
                {(s.features?.[lang] || s.features?.de || []).map((f, i) => (
                  <li key={i} className="flex items-start gap-2 text-gray-700">
                    <span className="mt-[2px] text-turquoise">
                      <Fi.FiCheck className="w-4 h-4" />
                    </span>
                    <span className="font-poppins text-sm">{f}</span>
                  </li>
                ))}
              </ul>

              {/* Small clarifier for guided day: planning included (if you add it in JSON this will show) */}
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <a
            href={content?.brand?.cta?.booking}
            target="_blank"
            rel="noreferrer"
            className="bg-turquoise text-white px-7 py-3 rounded-full font-poppins font-semibold hover:opacity-95 transition"
          >
            {lang === 'en' ? 'Request your plan' : 'Plan anfragen'}
          </a>
        </div>
      </div>
    </section>
  )
}

/* =========================================================
   FOOTER – your original footer (kept, lightly cleaned)
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
