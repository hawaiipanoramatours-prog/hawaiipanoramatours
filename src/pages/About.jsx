import { useOutletContext } from 'react-router-dom' 
import { motion } from 'framer-motion'

export function About() {
  const { content } = useOutletContext()
  const a = content.about
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
            Über mich
          </h1>
          <p className="font-poppins text-xl text-white/90 max-w-3xl mx-auto">
            Lernen Sie die Person hinter Hawaii Panorama Tours kennen
          </p>
        </div>
      </motion.div>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-6 max-w-4xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            
            {/* ✅ Dein eigenes Bild */}
            <img
              src="/About%20me%20pic.jpg"
              alt="Nazia – Hawaii Panorama Tours"
              className="w-full h-96 object-cover rounded-2xl shadow-lg"
            />

            <div>
              <h2 className="font-playfair text-3xl md:text-4xl font-bold text-gray-800 mb-6">
                {a.headline.de}
              </h2>
              {a.paras.map((p, i) => (
                <p key={i} className="font-poppins text-gray-600 mb-4">
                  {p.de}
                </p>
              ))}
              <a
                href={content.brand.social.calendly}
                target="_blank"
                rel="noreferrer"
                className="bg-turquoise text-white px-8 py-3 rounded-full font-poppins font-semibold inline-block"
              >
                Lernen wir uns kennen!
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
