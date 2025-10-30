import { Link, useLocation } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import * as Fi from 'react-icons/fi'

export default function Header({ content }) {
  const [isMobile, setIsMobile] = useState(false)
  const location = useLocation()

  // ✅ Google Translate automatisch laden
  useEffect(() => {
    const id = 'google-translate-script'
    if (!document.getElementById(id)) {
      const s = document.createElement('script')
      s.id = id
      s.src = 'https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit'
      document.body.appendChild(s)
    }

    window.googleTranslateElementInit = function () {
      if (!window.google || !window.google.translate) return
      new window.google.translate.TranslateElement(
        {
          pageLanguage: content?.i18n?.default || 'de',
          includedLanguages: 'de,en,es',
          layout: window.google.translate.TranslateElement.InlineLayout.SIMPLE,
          autoDisplay: true
        },
        'google_translate_element'
      )
    }
  }, [content])

  return (
    <motion.header
      className="fixed top-0 left-0 right-0 z-50 bg-white shadow-md"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="container mx-auto px-6 py-4 flex items-center justify-between">
        {/* 🔹 Logo + Website-Name */}
        <Link to="/" className="flex items-center gap-3">
          <img
            src="/githup%20upload%20Hawaii%20Panorama%20Tours.png"
            alt="Hawaii Panorama Tours Logo"
            className="h-10 w-auto object-contain"
          />
          <span className="font-playfair font-bold text-xl text-turquoise">
            {content.brand.siteName}
          </span>
        </Link>

        {/* 🔹 Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          {content.header.nav.map((n) => (
            <Link
              key={n.path}
              to={n.path}
              className={`font-poppins text-turquoise hover:text-light-blue transition ${
                location.pathname === n.path ? 'font-semibold underline underline-offset-4' : ''
              }`}
            >
              {n.name.de}
            </Link>
          ))}
        </nav>

        {/* 🔹 Google Translate Dropdown */}
        <div id="google_translate_element" className="text-sm" />

        {/* 🔹 Mobile Menü Button */}
        <button
          onClick={() => setIsMobile((s) => !s)}
          className="text-turquoise md:hidden p-2"
        >
          {isMobile ? <Fi.FiX className="w-6 h-6" /> : <Fi.FiMenu className="w-6 h-6" />}
        </button>
      </div>

      {/* 🔹 Mobile Navigation */}
      {isMobile && (
        <div className="md:hidden mx-6 mb-4 bg-white rounded-lg shadow p-4">
          <nav className="flex flex-col gap-2">
            {content.header.nav.map((n) => (
              <Link
                key={n.path}
                to={n.path}
                onClick={() => setIsMobile(false)}
                className={`font-poppins py-2 px-3 rounded text-turquoise hover:text-light-blue ${
                  location.pathname === n.path
                    ? 'font-semibold bg-turquoise/10'
                    : ''
                }`}
              >
                {n.name.de}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </motion.header>
  )
}
