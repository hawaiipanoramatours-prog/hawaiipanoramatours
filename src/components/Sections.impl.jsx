import { motion } from 'framer-motion'
import * as Fi from 'react-icons/fi'
import SafeIcon from './SafeIcon'

/* ✅ HERO – 1 CTA + Trust-Block + Social-Textlink (Instagram + Facebook) */
export function Hero({ content, lang }) {
  const h = content.hero
  const bg = h.bg

  const trust = {
    de: {
      good: [
        'lokale Insider-Tipps statt Stardard-und Massentouren',
        'Besondere Orte erlebenm die viele verpassen',
        'Stressfrei planen - ohne lange Recherche',
        'Reiseplanung oder private Tour mir Fahrzeug',
      ],
    },
    en: {
      // optional: falls du später EN brauchst (kannst du auch löschen)
      title: 'Ideal for you if you:',
      good: [
        'want to discover local insider tips & special places',
        'want to plan and travel safely & stress-free',
        'value clear guidance over mass-tourism offers',
        'want to choose between personal planning or private tour guidance with a vehicle',
      ],
    },
  }

  const t = trust[lang] || trust.de

  return (
    <section
      className="relative min-h-screen flex justify-center overflow-hidden"
      style={{
        backgroundImage: `url(${bg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'scroll',
      }}
    >
      <div className="absolute inset-0 bg-black/40" />

      {/* ✅ Header-Offset: damit die Headline NICHT “zu weit oben” sitzt */}
      <div className="relative z-10 w-full px-6 pt-28 md:pt-32 pb-14 flex items-start md:items-center">
        <div className="text-center text-white max-w-4xl mx-auto w-full">
          <motion.div
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="font-playfair text-5xl md:text-7xl font-bold mb-5 leading-[0.95]">
              {h.title?.[lang] || h.title?.de}
              <span className="block text-turquoise mt-2">
                {h.highlight?.[lang] || h.highlight?.de}
              </span>
            </h1>

            <p className="font-poppins text-xl md:text-2xl mb-7 text-gray-200">
              {h.subtitle?.[lang] || h.subtitle?.de}
            </p>

            {/* ✅ TRUST-BLOCK: schmaler, scanbar, mobile clean */}
            <div className="mx-auto max-w-md sm:max-w-lg text-left mb-9">
              <div className="rounded-2xl bg-white/10 border border-white/15 backdrop-blur-sm p-5">
                <p className="font-poppins text-sm md:text-base font-semibold text-white/95 mb-3">
                  {t.title}
                </p>

                <ul className="space-y-2">
                  {t.good.map((item, idx) => (
                    <li
                      key={idx}
                      className="flex gap-2 font-poppins text-sm md:text-base text-white/90"
                    >
                      <span className="shrink-0">✔️</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.25 }}
            className="flex flex-col items-center justify-center"
          >
            {/* ✅ EIN klarer CTA */}
            <a
              href={content.brand.social.calendly}
              target="_blank"
              rel="noreferrer"
              className="bg-turquoise hover:bg-turquoise/90 text-white px-8 py-4 rounded-full font-poppins font-semibold text-lg"
            >
              {h.ctaPlan?.label?.[lang] ||
                h.ctaPlan?.label?.de ||
                'Kostenlos anfragen'}
            </a>

            {/* ✅ Ruhiger Social-Link (kein Button, kein Conversion-Bruch) */}
            <p className="mt-5 font-poppins text-sm text-white/90">
              {lang === 'en' ? (
                <>
                  More impressions & inspiration on{' '}
                  <a
                    href={content.brand.social.instagram}
                    target="_blank"
                    rel="noreferrer"
                    className="underline underline-offset-4 hover:text-white"
                  >
                    Instagram
                  </a>{' '}
                  and{' '}
                  <a
                    href={content.brand.social.facebook}
                    target="_blank"
                    rel="noreferrer"
                    className="underline underline-offset-4 hover:text-white"
                  >
                    Facebook
                  </a>
                  .
                </>
              ) : (
                <>
                  Mehr Eindrücke & Inspirationen auf{' '}
                  <a
                    href={content.brand.social.instagram}
                    target="_blank"
                    rel="noreferrer"
                    className="underline underline-offset-4 hover:text-white"
                  >
                    Instagram
                  </a>{' '}
                  und{' '}
                  <a
                    href={content.brand.social.facebook}
                    target="_blank"
                    rel="noreferrer"
                    className="underline underline-offset-4 hover:text-white"
                  >
                    Facebook
                  </a>
                  .
                </>
              )}
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export function HowItWorks({ content, lang }) {
  const h = content.how
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
            {h.title?.[lang] || h.title?.de}
          </h2>
          <p className="font-poppins text-xl text-gray-600 max-w-2xl mx-auto">
            {h.subtitle?.[lang] || h.subtitle?.de}
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {h.steps.map((s, i) => {
            const Icon = Fi[s.icon]
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
                  {s.step}
                </div>

                <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all h-full">
                  <div className="w-16 h-16 bg-gradient-to-r from-turquoise to-light-blue rounded-2xl grid place-items-center mb-6 mx-auto">
                    <SafeIcon icon={Icon} className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="font-playfair text-2xl font-semibold text-gray-800 mb-4 text-center">
                    {s.title?.[lang] || s.title?.de}
                  </h3>
                  <p className="font-poppins text-gray-600 text-center">
                    {s.desc?.[lang] || s.desc?.de}
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

/* 🔧 Neu ausgerichtete Karten, Buttons alle auf einer Linie */
export function ServicesSection({ content, lang }) {
  const items = content.services
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
          {items.map((s, i) => {
            const Icon = Fi[s.icon]
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
                  {s.title?.[lang] || s.title?.de}
                </h3>

                <p className="font-poppins text-gray-600 mb-4">
                  {s.desc?.[lang] || s.desc?.de}
                </p>

                <div className="mb-6">
                  <span className="font-playfair text-3xl font-bold text-turquoise">
                    {s.price}
                  </span>
                </div>

                <ul className="space-y-2 mb-6">
                  {s.features.map((f, idx) => (
                    <li
                      key={idx}
                      className="flex items-center font-poppins text-gray-600"
                    >
                      <div className="w-2 h-2 bg-turquoise rounded-full mr-3" />
                      {f}
                    </li>
                  ))}
                </ul>

                <div className="mt-auto">
                  <a
                    href={content.brand.social.calendly}
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

export function Offerings({ content, lang }) {
  const items = content.offerings
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
            const Icon = Fi[o.icon]
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
                  {o.title?.[lang] || o.title?.de}
                </h3>
                <p className="font-poppins text-gray-600">
                  {o.desc?.[lang] || o.desc?.de}
                </p>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

/* Galerie-Sektion */
export function Gallery() {
  const images = [
    { src: '/Gallery1.JPG', alt: 'Kunden auf Hawaii Tour 1' },
    { src: '/Gallery2.jpg', alt: 'Kunden auf Hawaii Tour 2' },
    { src: '/Gallery3.jpg', alt: 'Kunden auf Hawaii Tour 3' },
    { src: '/Gallery4.jpg', alt: 'Kunden auf Hawaii Tour 4' },
    { src: '/Gallery5.jpg', alt: 'Kunden auf Hawaii Tour 5' },
    { src: '/Gallery6.JPG', alt: 'Kunden auf Hawaii Tour 6' },
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
            Hawaii-Momente & Gäste-Impressionen
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
                alt={img.alt}
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

export function Testimonials({ content }) {
  const list = content.testimonials
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
            Was meine Gäste sagen
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
                {Array.from({ length: t.rating }).map((_, k) => (
                  <Fi.FiStar key={k} className="w-5 h-5 text-yellow-400" />
                ))}
              </div>
              <p className="font-poppins text-gray-700 mb-6 italic">“{t.text}”</p>
              <div>
                <h4 className="font-playfair font-semibold text-gray-800">
                  {t.name}
                </h4>
                <p className="font-poppins text-sm text-gray-600">
                  {t.location}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export function ContactCTA({ content, lang }) {
  const c = content.cta
  return (
    <section
      className="relative py-20 overflow-hidden"
      style={{
        backgroundImage: `url(${c.bg})`,
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
            {c.title?.[lang] || c.title?.de}
          </h2>
          <p className="font-poppins text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            {c.desc?.[lang] || c.desc?.de}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href={content.brand.social.calendly}
              target="_blank"
              rel="noreferrer"
              className="bg-white text-turquoise px-8 py-4 rounded-full font-poppins font-semibold text-lg"
            >
              {lang === 'en' ? 'Book a call' : 'Jetzt Termin anfragen'}
            </a>
            <a
              href={`mailto:${content.brand.social.email}`}
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

export function Footer({ content }) {
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
                {content.brand.siteName}
              </span>
            </div>
            <p className="font-poppins text-gray-300 mb-4">
              Authentische Hawaii-Erlebnisse mit persönlicher Betreuung.
            </p>
            <div className="flex gap-4">
              <a
                href={content.brand.social.instagram}
                target="_blank"
                rel="noreferrer"
                className="w-10 h-10 bg-turquoise/20 hover:bg-turquoise rounded-lg grid place-items-center"
              >
                <Fi.FiInstagram className="w-5 h-5" />
              </a>
              <a
                href={content.brand.social.facebook}
                target="_blank"
                rel="noreferrer"
                className="w-10 h-10 bg-turquoise/20 hover:bg-turquoise rounded-lg grid place-items-center"
              >
                <Fi.FiFacebook className="w-5 h-5" />
              </a>
              <a
                href={`mailto:${content.brand.social.email}`}
                className="w-10 h-10 bg-turquoise/20 hover:bg-turquoise rounded-lg grid place-items-center"
              >
                <Fi.FiMail className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-playfair text-lg font-semibold mb-4">
              Navigation
            </h3>
            <ul className="space-y-2 font-poppins">
              <li>
                <a href="/" className="text-gray-300 hover:text-turquoise">
                  Home
                </a>
              </li>
              <li>
                <a href="/services" className="text-gray-300 hover:text-turquoise">
                  Dienstleistungen
                </a>
              </li>
              <li>
                <a href="/about" className="text-gray-300 hover:text-turquoise">
                  Über mich
                </a>
              </li>
              <li>
                <a href="/contact" className="text-gray-300 hover:text-turquoise">
                  Kontakt
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-playfair text-lg font-semibold mb-4">Kontakt</h3>
            <div className="space-y-2 font-poppins text-gray-300">
              <p>{content.brand.social.email}</p>
              <p>{content.brand.social.phone}</p>
              <p>{content.brand.social.place}</p>
            </div>
            <div className="mt-4">
              <a
                href={content.brand.social.calendly}
                target="_blank"
                rel="noreferrer"
                className="bg-turquoise text-white px-4 py-2 rounded-lg font-poppins text-sm"
              >
                Kostenlos anfragen
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="flex gap-6 font-poppins text-sm text-gray-400 mb-4 md:mb-0">
            <a
              href={content.legal.impressumPath}
              className="hover:text-turquoise"
            >
              Impressum
            </a>
            <a href={content.legal.privacyPath} className="hover:text-turquoise">
              Datenschutz
            </a>
          </div>
          <p className="font-poppins text-sm text-gray-400">
            Mit Aloha von Hawaii 🌺
          </p>
        </div>
      </div>
    </footer>
  )
}
