import { useOutletContext } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ServicesSection, Offerings } from '../components/Sections'

export function Services() {
  const { content } = useOutletContext()
  const lang = content.i18n?.default || 'de'

  return (
    <div className="min-h-screen pt-20">
      <motion.div
        className="bg-gradient-to-r from-turquoise to-light-blue py-20"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <div className="container mx-auto px-6 text-center">
          <h1 className="font-playfair text-4xl md:text-6xl font-bold text-white mb-6">
            Meine Dienstleistungen
          </h1>
          <p className="font-poppins text-xl text-white/90 max-w-3xl mx-auto">
            Von der ersten Planung bis zur Betreuung vor Ort
          </p>
        </div>
      </motion.div>

      {/* ✅ HIER: Titel/Subtitel der Section ausblenden */}
      <ServicesSection content={content} lang={lang} hideTitle={true} />

      <Offerings content={content} lang={lang} />
    </div>
  )
}
