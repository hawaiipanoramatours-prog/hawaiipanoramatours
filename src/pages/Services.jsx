import { motion } from "framer-motion"
import { Link, useOutletContext } from "react-router-dom"
import { ServicesSection, Offerings } from "../components/Sections.impl"

function DecisionBlocks() {
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
          <h1 className="font-playfair text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Dienstleistungen
          </h1>
          <p className="font-poppins text-lg text-gray-600 max-w-3xl mx-auto">
            Wählen Sie, was am besten zu Ihrer Reise passt – geführte Touren oder individuelle Planung.
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
            <h2 className="font-playfair text-2xl md:text-3xl font-semibold text-gray-800 mb-3">
              🌴 Geführte Touren & Erlebnisse
            </h2>
            <p className="font-poppins text-gray-600 mb-6">
              Ausgewählte Touren auf Oʻahu – persönlich begleitet oder organisiert, authentisch & stressfrei.
            </p>

            <Link
              to="/contact"
              className="inline-block bg-turquoise hover:bg-turquoise/90 text-white px-7 py-3 rounded-full font-poppins font-semibold"
            >
              Tour anfragen
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
            <h2 className="font-playfair text-2xl md:text-3xl font-semibold text-gray-800 mb-3">
              ✨ Hawaii Concierge & Reiseberatung
            </h2>
            <p className="font-poppins text-gray-600 mb-6">
              Für Reisende, die ihre Hawaii-Reise individuell, exklusiv und ohne Zeitverlust planen möchten.
            </p>

            <Link
              to="/contact"
              className="inline-block bg-turquoise hover:bg-turquoise/90 text-white px-7 py-3 rounded-full font-poppins font-semibold"
            >
              Direkt anfragen
            </Link>
          </motion.div>
        </div>

        {/* Block 3 – Inspiration (klein, unten, nicht prominent) */}
        <div className="mt-10 text-center">
          <p className="font-poppins text-gray-600 mb-3">
            Inspiration & Tipps für Hawaii
          </p>
          <Link
            to="/"
            className="inline-block border border-turquoise text-turquoise hover:bg-turquoise hover:text-white px-6 py-2 rounded-full font-poppins font-semibold"
          >
            Entdecken
          </Link>
        </div>
      </div>
    </section>
  )
}

export default function ServicesPage() {
  const { content, lang } = useOutletContext()

  return (
    <div className="min-h-screen pt-20 overflow-x-hidden">
      <DecisionBlocks />

      {/* ✅ NUR 1x ServicesSection (kein doppeltes Rendering mehr) */}
      <ServicesSection content={content} lang={lang} hideTitle />

      <Offerings content={content} lang={lang} />
    </div>
  )
}
