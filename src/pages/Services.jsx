import { useOutletContext, Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ServicesSection, Offerings } from '../components/Sections.impl'

function DecisionBlocks({ lang }) {
  return (
    <section className="py-14 bg-white">
      <div className="container mx-auto px-6 max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45 }}
          viewport={{ once: true }}
          className="text-center mb-10"
        >
          <h2 className="font-playfair text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            {lang === 'en' ? 'Choose what fits you best' : 'Wählen Sie, was am besten zu Ihnen passt'}
          </h2>

          <p className="font-poppins text-lg text-gray-600 max-w-3xl mx-auto">
            {lang === 'en'
              ? 'Guided experiences on Oʻahu or premium trip planning — both lead to the same contact form.'
              : 'Geführte Erlebnisse auf Oʻahu oder Premium-Reiseplanung — beides führt zum gleichen Kontaktformular.'}
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-6">
          {/* Block 1 – Konkrete Touren */}
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, delay: 0.05 }}
            viewport={{ once: true }}
            className="rounded-2xl border border-gray-100 shadow-lg p-8 bg-white"
          >
            <h3 className="font-playfair text-2xl md:text-3xl font-semibold text-gray-800 mb-3">
              {lang === 'en' ? '🌴 Guided tours & experiences' : '🌴 Geführte Touren & Erlebnisse'}
            </h3>

            <p className="font-poppins text-gray-600 mb-6">
              {lang === 'en'
                ? 'Selected tours on Oʻahu — personally guided or organized, authentic & stress-free.'
                : 'Ausgewählte Touren auf Oʻahu – persönlich begleitet oder organisiert, authentisch & stressfrei.'}
            </p>

            <Link
              to="/contact"
              className="inline-block bg-turquoise hover:bg-turquoise/90 text-white px-7 py-3 rounded-full font-poppins font-semibold"
            >
              {lang === 'en' ? 'Enquire about a tour' : 'Tour anfragen'}
            </Link>
          </motion.div>

          {/* Block 2 – Concierge / Beratung */}
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, delay: 0.1 }}
            viewport={{ once: true }}
            className="rounded-2xl border border-gray-100 shadow-lg p-8 bg-white"
          >
            <h3 className="font-playfair text-2xl md:text-3xl font-semibold text-gray-800 mb-3">
              {lang === 'en' ? '✨ Hawaii concierge & trip consulting' : '✨ Hawaii Concierge & Reiseberatung'}
            </h3>

            <p className="font-poppins text-gray-600 mb-6">
              {lang === 'en'
                ? 'For travelers who want a fully tailored Hawaii trip — exclusive, efficient, and beautifully planned.'
                : 'Für Reisende, die ihre Hawaii-Reise individuell, exklusiv und ohne Zeitverlust planen möchten.'}
            </p>

            <Link
              to="/contact"
              className="inline-block bg-turquoise hover:bg-turquoise/90 text-white px-7 py-3 rounded-full font-poppins font-semibold"
            >
              {lang === 'en' ? 'Enquire directly' : 'Direkt anfragen'}
            </Link>
          </motion.div>
        </div>

export function Services() {
  const { content, lang } = useOutletContext()

  return (
    <div className="min-h-screen pt-20 overflow-x-hidden">
      {/* Dein Gradient Header bleibt */}
      <motion.div
        className="bg-gradient-to-r from-turquoise to-light-blue py-20"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <div className="container mx-auto px-6 text-center">
          <h1 className="font-playfair text-4xl md:text-6xl font-bold text-white mb-6">
            {lang === 'en' ? 'My services' : 'Meine Dienstleistungen'}
          </h1>
          <p className="font-poppins text-xl text-white/90 max-w-3xl mx-auto">
            {lang === 'en'
              ? 'From first planning to on-island support'
              : 'Von der ersten Planung bis zur Betreuung vor Ort'}
          </p>
        </div>
      </motion.div>

      {/* Entscheidungs-Blöcke */}
      <DecisionBlocks lang={lang} />

      {/* Services-Karten: nur 1x (Titel versteckt) */}
      <ServicesSection content={content} lang={lang} hideTitle />

      {/* Angebots-Kacheln */}
      <Offerings content={content} lang={lang} />
    </div>
  )
}

