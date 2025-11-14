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

  // ✅ Google Translate Script laden & Widget einbinden
  useEffect(() => {
    const id = 'google-translate-script'

    // Callback MUSS global sein
    window.googleTranslateElementInit = function () {
      if (!window.google || !window.google.translate) return
      new window.google.translate.TranslateElement(
        {
          pageLanguage: content?.i18n?.default || 'de',
          includedLanguages: 'de,en,es',
          layout: window.google.translate.TranslateElement.InlineLayout.SIMPLE,
          autoDisplay: false,
        },
        'google_translate_element'
      )
    }

    if (!document.getElementById(id)) {
      const s = document.createElement('script')
      s.id = id
      s.src =
        'https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit'
      document.body.appendChild(s)
    }
  }, [content])

  return (
    <motion.header
      className={`fixed top-0 left-0 right-0 z-50 transition-all ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md shadow-sm'
          : 'bg-white/90 backdrop-blur'
      }`}
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo + Name */}
        <Link to="/" className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full overflow-hidden shadow-sm">
            <img
              src="/githup%20upload%20Hawaii%20Panorama%20Tours.png"
              alt="Hawaii Panorama Tours Logo"
              className="w-full h-full object-contain"
            />
          </div>
          <span className="font-playfair font-bold text-xl text-turquoise">
            {content.brand.siteName}
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          {content.header.nav.map((n) => (
            <Link
              key={n.path}
              to={n.path}
              className={`font-poppins text-sm ${
                location.pathname === n.path
                  ? 'text-turquoise'
                  : 'text-gray-700 hover:text-turquoise'
              }`}
            >
              {n.name.de}
            </Link>
          ))}
        </nav>

        {/* Rechte Seite: kleines Google-Gadget + Mobile Menü */}
        <div className="flex items-center gap-4">
          {/* 👉 hier rendert Google sein Widget */}
          <div id="google_translate_element" className="google-translate-minimal" />

          {/* Mobile-Menü-Button */}
          <button
            onClick={() => setIsMobile((s) => !s)}
            className="md:hidden text-turquoise p-2"
          >
            {isMobile ? (
              <Fi.FiX className="w-6 h-6" />
            ) : (
              <Fi.FiMenu className="w-6 h-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMobile && (
        <div className="md:hidden mx-4 mb-4 bg-white rounded-lg shadow p-4">
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
