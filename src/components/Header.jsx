import { Link, useLocation } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import * as Fi from 'react-icons/fi'

export default function Header({ content }) {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobile, setIsMobile] = useState(false)
  const [lang, setLang] = useState('de')
  const location = useLocation()

  // Scroll-Effekt für Schatten
  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 50)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Google Translate Script einbinden
  useEffect(() => {
    const id = 'google-translate-script'
    if (!document.getElementById(id)) {
      const s = document.createElement('script')
      s.id = id
      s.src =
        'https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit'
      document.body.appendChild(s)
    }

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
  }, [content])

  // eigene Sprach-Auswahl → Google-Select im Hintergrund ansteuern
  const handleLangChange = (code) => {
    setLang(code)
    const select = document.querySelector('.goog-te-combo')
    if (select) {
      select.value = code
      select.dispatchEvent(new Event('change'))
    }
  }

  return (
    <motion.header
      className={`fixed top-0 left-0 right-0 z-50 transition-all ${
        isScrolled
          ? 'bg-white/95 backdrop-blur shadow-sm'
          : 'bg-white/95 backdrop-blur'
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

        {/* Desktop-Navigation */}
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

        {/* Rechte Seite: Sprachwahl + Mobile-Button */}
        <div className="flex items-center gap-4">
          {/* Google-Widget im Hintergrund (unsichtbar) */}
          <div id="google_translate_element" className="hidden" />

          {/* Eigene, elegante Sprach-Auswahl */}
          <div className="relative hidden sm:block">
            <select
              value={lang}
              onChange={(e) => handleLangChange(e.target.value)}
              className="appearance-none bg-sand/40 hover:bg-sand/60 border border-sand/60 text-sm font-poppins text-gray-700 rounded-full pl-3 pr-7 py-1 cursor-pointer focus:outline-none focus:ring-2 focus:ring-turquoise"
            >
              <option value="de">DE</option>
              <option value="en">EN</option>
              <option value="es">ES</option>
            </select>
            <span className="pointer-events-none absolute right-2 top-1.5 text-[10px] text-gray-500">
              ▾
            </span>
            <span className="block text-[10px] text-gray-400 mt-1 text-right">
              Powered by Google&nbsp;Translate
            </span>
          </div>

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

      {/* Mobile-Navigation */}
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
