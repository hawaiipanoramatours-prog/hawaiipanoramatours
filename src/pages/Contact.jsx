import { useOutletContext } from 'react-router-dom'
import { motion } from 'framer-motion'
import React from 'react'

const FORM_ENDPOINT = 'https://formspree.io/f/mwpapqeq' // <-- ggf. deine eigene Formspree-URL einsetzen

export function Contact() {
  const { content } = useOutletContext()
  const [formData, setFormData] = React.useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  })
  const [status, setStatus] = React.useState('idle') // idle | submitting | success | error

  const handleChange = (field) => (e) => {
    const value = e.target.value
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (status === 'submitting') return
    setStatus('submitting')

    try {
      const res = await fetch(FORM_ENDPOINT, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          subject: formData.subject,
          message: formData.message,
        }),
      })

      if (res.ok) {
        setStatus('success')
        setFormData({ name: '', email: '', subject: '', message: '' })
      } else {
        setStatus('error')
      }
    } catch (err) {
      console.error(err)
      setStatus('error')
    }
  }

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
            Kontakt
          </h1>
          <p className="font-poppins text-xl text-white/90 max-w-3xl mx-auto">
            Lassen Sie uns Ihre Traumreise planen
          </p>
        </div>
      </motion.div>

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

          {/* Rechte Seite: Formular ODER Danke-Box */}
          <motion.div
            key={status === 'success' ? 'success' : 'form'}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            {status === 'success' ? (
              // Danke-Box nach erfolgreichem Absenden
              <motion.div
                className="bg-gradient-to-br from-sand/40 to-light-blue/30 rounded-2xl p-8 shadow-lg text-center flex flex-col items-center space-y-4"
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.4 }}
              >
                <div className="text-5xl mb-2">🌺</div>
                <h3 className="font-playfair text-2xl font-bold text-gray-800">
                  Vielen Dank!
                </h3>
                <p className="font-poppins text-gray-700 max-w-md">
                  Deine Nachricht wurde erfolgreich gesendet.
                  <br />
                  Ich melde mich so schnell wie möglich bei dir.
                </p>
                <button
                  type="button"
                  onClick={() => setStatus('idle')}
                  className="mt-4 px-6 py-2 rounded-full border border-turquoise text-turquoise font-poppins text-sm hover:bg-turquoise hover:text-white transition"
                >
                  Neue Nachricht schreiben
                </button>
              </motion.div>
            ) : (
              // Formular (Standard / idle / submitting / error)
              <motion.form
                onSubmit={handleSubmit}
                className="bg-gradient-to-br from-sand/30 to-light-blue/20 rounded-2xl p-8 space-y-6 shadow-lg"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
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
                      value={formData.name}
                      onChange={handleChange('name')}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-turquoise outline-none"
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
                      value={formData.email}
                      onChange={handleChange('email')}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-turquoise outline-none"
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
                    value={formData.subject}
                    onChange={handleChange('subject')}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-turquoise outline-none"
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
                    value={formData.message}
                    onChange={handleChange('message')}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-turquoise outline-none"
                  ></textarea>
                </div>

                {status === 'error' && (
                  <p className="text-sm text-red-500 font-poppins">
                    Ups, etwas ist schiefgelaufen. Bitte versuche es später noch einmal
                    oder schreibe direkt an {content.brand.social.email}.
                  </p>
                )}

                <button
                  type="submit"
                  disabled={status === 'submitting'}
                  className={`w-full bg-turquoise text-white py-3 rounded-lg font-poppins font-semibold transition ${
                    status === 'submitting'
                      ? 'opacity-70 cursor-not-allowed'
                      : 'hover:bg-turquoise/90'
                  }`}
                >
                  {status === 'submitting' ? 'Wird gesendet…' : 'Nachricht senden'}
                </button>
              </motion.form>
            )}
          </motion.div>
        </div>
      </section>
    </div>
  )
}
