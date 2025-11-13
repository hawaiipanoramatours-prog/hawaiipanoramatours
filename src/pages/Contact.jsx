import { useOutletContext } from 'react-router-dom'
import { motion } from 'framer-motion'

export function Contact() {
  const { content } = useOutletContext()

  return (
    <div className="min-h-screen pt-20">
      {/* Hero-Bereich */}
      <motion.div
        className="bg-gradient-to-r from-turquoise to-light-blue py-20"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <div className="container mx-auto px-6 text-center">
          <h1 className="font-playfair text-4xl md:text-6xl font-bold text-white mb-6">
            Kontakt
          </h1>
          <p className="font-poppins text-xl text-white/90 max-w-3xl mx-auto">
            Lassen Sie uns Ihre Traumreise planen
          </p>
        </div>
      </motion.div>

      {/* Inhalt */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6 max-w-6xl grid lg:grid-cols-2 gap-12">
          {/* Linke Seite: Kontaktinfos */}
          <div>
            <h2 className="font-playfair text-3xl font-bold text-gray-800 mb-8">
              Nehmen Sie Kontakt auf
            </h2>
            <div className="space-y-4 font-poppins text-gray-600">
              <p>{content.brand.social.email}</p>
              <p>{content.brand.social.phone}</p>
              <p>{content.brand.social.place}</p>
              <a
                href={content.brand.social.calendly}
                target="_blank"
                rel="noreferrer"
                className="mt-4 inline-block bg-turquoise text-white px-6 py-3 rounded-full"
              >
                Beratung buchen
              </a>
            </div>
          </div>

          {/* Rechte Seite: Formular (Formspree) */}
          <form
            action="https://formspree.io/f/mwpapqeq"
            method="POST"
            className="bg-gradient-to-br from-sand/30 to-light-blue/20 rounded-2xl p-8 space-y-6"
          >
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label className="block font-poppins text-sm font-medium text-gray-700 mb-2">
                  Name *
                </label>
                <input
                  type="text"
                  name="name"
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-turquoise"
                />
              </div>

              <div>
                <label className="block font-poppins text-sm font-medium text-gray-700 mb-2">
                  E-Mail *
                </label>
                <input
                  type="email"
                  name="email"
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-turquoise"
                />
              </div>
            </div>

            <div>
              <label className="block font-poppins text-sm font-medium text-gray-700 mb-2">
                Betreff
              </label>
              <input
                type="text"
                name="subject"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-turquoise"
              />
            </div>

            <div>
              <label className="block font-poppins text-sm font-medium text-gray-700 mb-2">
                Nachricht *
              </label>
              <textarea
                name="message"
                rows="5"
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-turquoise"
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full bg-turquoise text-white py-3 rounded-lg font-poppins font-semibold"
            >
              Nachricht senden
            </button>
          </form>
        </div>
      </section>
    </div>
  )
}
