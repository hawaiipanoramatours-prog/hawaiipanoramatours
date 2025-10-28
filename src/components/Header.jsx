import { Link, useLocation } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import * as Fi from 'react-icons/fi'

export default function Header({ content }) {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobile, setIsMobile] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 50)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // ✅ Google Translate Script einfügen
  useEffect(() => {
    const id = 'google-translate-script'
    if (!document.getElementById(id)) {
      const s = document.createElement('script')
      s.id = id
      s.src = 'https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit'
      document.body.appendChild(s)
    }

    window.googleTranslateElementInit = function () {
      if (window.google && window.google.translate) {
        new window.google.translate.TranslateElement({
          pageLanguage: content.i18n?.default || 'de',
          includedLanguages: 'de,en,fr,es,it,pt',
          layout: window.google.translate.TranslateElement.InlineLayout.SIMPLE,
          autoDisplay: false
        }, 'google_translate_element')
      }
    }
  }, [content])

  // 💎 Klick auf unseren Button öffnet das echte Dropdown
  const handleTranslateClick = () => {
    const select = document.querySelector('.goog-te-combo')
    if (select) select.style.display = select.style.display === 'block' ? 'none' : 'block'
  }

  return (
    <motion.header
      className={`fixed top-0 left-0 right-0 z-50 transition-all ${
        isScrolled ? 'bg-white/95 backdrop-blur-md shadow' : 'bg-transparent'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="container mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2">
          <div className="w-10 h-10 bg-gradient-to-r from-turquoise to-light-blue rounded-full grid place-items-center">
            <span className="text-white font-bold text-lg">{content.brand.tagEmoji}</span>
          </div>
          <span
            className={`font-playfair font-bold text-xl ${
              isScrolled ? 'text-gray-800' : 'text-white'
            }`}
          >
            {content.brand.siteName}
          </span>
        </Link>

        {/* Navigation Desktop */}
        <nav className="hidden md:flex items-center gap-8">
          {content.header.nav.map((n) => (
            <Link
              key={n.path}
              to={n.path}
              className={`font-poppins ${
                location.pathname === n.path
                  ? 'text-turquoise'
                  : isScrolled
                  ? 'text-gray-700 hover:text-turquoise'
                  : 'text-white hover:text-light-blue'
              }`}
            >
              {n.name.de}
            </Link>
          ))}
        </nav>

        {/* Rechte Seite */}
        <div className="flex items-center gap-3">
          {/* ✅ Unser schöner Button */}
          <button
            onClick={handleTranslateClick}
            className="px-3 py-1 rounded-full bg-white/20 text-white text-sm hover:bg-white/40 transition"
          >
            🌐 Sprache wählen
          </button>

          {/* 🧩 Das echte Google-Element (versteckt, aber funktionsfähig) */}
          <div
            id="google_translate_element"
            style={{
              position: 'absolute',
              right: '1rem',
              top: '4rem',
              zIndex: 1000,
              background: 'white',
              borderRadius: '0.5rem',
              padding: '0.5rem',
              boxShadow: '0 2px 6px rgba(0,0,0,0.1)',
              display: 'none'
            }}
          />

          {/* Menü Button für Mobile */}
          <button
            onClick={() => setIsMobile((s) => !s)}
            className={`${isScrolled ? 'text-gray-700' : 'text-white'} md:hidden p-2`}
          >
            {isMobile ? <Fi.FiX className="w-6 h-6" /> : <Fi.FiMenu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Navigation Mobile */}
      {isMobile && (
        <div className="md:hidden mx-6 mb-4 bg-white rounded-lg shadow p-4">
          <nav className="flex flex-col gap-2">
            {content.header.nav.map((n) => (
              <Link
                key={n.path}
                to={n.path}
                onClick={() => setIsMobile(false)}
                className={`font-poppins py-2 px-3 rounded ${
                  location.pathname === n.path
                    ? 'text-turquoise bg-turquoise/10'
                    : 'text-gray-700 hover:bg-gray-50'
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
