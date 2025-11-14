import { Link, useLocation } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import * as Fi from 'react-icons/fi'

export default function Header({ content }) {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobile, setIsMobile] = useState(false)
  const location = useLocation()

  // Scroll-Effekt
  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 50)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // GOOGLE TRANSLATE LADEN
  useEffect(() => {
    window.googleTranslateElementInit = function () {
      if (!window.google || !window.google.translate) return
      new window.google.translate.TranslateElement(
        {
          pageLanguage: 'de',
          includedLanguages: 'de,en,es',
          layout: window.google.translate.TranslateElement.InlineLayout.SIMPLE,
          autoDisplay: false,
        },
        'google_translate_element'
      )
    }

    const id = 'google-translate-script'
    if (!document.getElementById(id)) {
      const s = document.createElement('script')
      s.id = id
      s.src =
        'https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit'
      document.body.appendChild(s)
    }
  }, [])

  return (
    <motion.header
      className={`fixed top-0 left-0 right-0 z-50 transition-all ${
        isScrolled ? 'bg-white shadow-md' : 'bg-white'
      }`}
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo + Name */}
        <Link to="/" className="flex items-center gap-3">
          <img
            src="/githup%20upload%20Hawaii%20Panorama%20Tours.png"
            alt="Hawaii Panorama Tours Logo"
            className="w-12 h-12 object-contain rounded-full"
          />
          <span className="font-playfair text-xl font-bold text-turquoise">
            {content.brand.siteName}
          </span>
        </Link>

        {/* Desktop-Menü */}
        <nav className="hidden md:flex items-center gap-8">
          {content.header.nav.map((n) => (
            <Link
              key={n.path}
              to={n.path}
              className={`font-poppins ${
                location.pathname === n.path
                  ? 'text-turquoise'
                  : 'text-gray-700 hover:text-turquoise'
              }`}
            >
              {n.name.de}
            </Link>
          ))}
        </nav>

        {/* Rechte Seite: Globe + versteckter Google-Translator + Mobile-Menü */}
        <div className="flex items-center gap-4">
          {/* 🌍 Globe-Icon – klickt das versteckte Dropdown */}
          <button
            onClick={() => {
              const select = document.querySelector('.goog-te-combo')
              if (select) select.click()
            }}
            className="text-turquoise hover:text-gray-800 text-2xl"
            title="Sprache wählen"
          >
            <Fi.FiGlobe />
          </button>

          {/* Google-Translate-DIV – wird versteckt gestylt */}
          <div id="google_translate_element" className="google-hidden"></div>

          {/* Mobile-Menü Button */}
          <button
            onClick={() => setIsMobile((s) => !s)}
            className="md:hidden text-turquoise text-2xl"
          >
            {isMobile ? <Fi.FiX /> : <Fi.FiMenu />}
          </button>
        </div>
      </div>

      {/* Mobile-Navigation */}
      {isMobile && (
        <div className="md:hidden mx-4 mb-4 bg-white rounded-lg shadow p-4">
          <nav className="flex flex-col gap-3">
            {content.header.nav.map((n) => (
              <Link
                key={n.path}
                to={n.path}
                onClick={() => setIsMobile(false)}
                className="text-gray-700 hover:text-turquoise font-poppins py-2"
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
