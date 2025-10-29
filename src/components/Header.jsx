import { Link, useLocation } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import * as Fi from 'react-icons/fi'

export default function Header({ content }) {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobile, setIsMobile] = useState(false)
  const [gtReady, setGtReady] = useState(false)
  const [gtOpen, setGtOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 50)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // helper: wait for an element to exist
  const waitFor = (selector, timeout = 10000) =>
    new Promise((resolve, reject) => {
      const start = Date.now()
      const tick = () => {
        const el = document.querySelector(selector)
        if (el) return resolve(el)
        if (Date.now() - start > timeout) return reject(new Error('timeout'))
        requestAnimationFrame(tick)
      }
      tick()
    })

  // load and init Google Translate
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
          autoDisplay: false
        },
        'google_translate_element'
      )
      // when the combo exists, mark ready
      waitFor('.goog-te-combo')
        .then(() => setGtReady(true))
        .catch(() => setGtReady(false))
    }

    // safety: if script already loaded before we mounted
    if (window.google && window.google.translate) {
      window.googleTranslateElementInit()
    }
  }, [content])

  const toggleTranslate = () => {
    if (!gtReady) return
    const container = document.getElementById('google_translate_element')
    if (!container) return
    const next = !gtOpen
    setGtOpen(next)
    container.style.display = next ? 'block' : 'none'
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
            <span className="text-white font-bold text-lg">
              {content.brand.tagEmoji}
            </span>
          </div>
          <span
            className={`font-playfair font-bold text-xl ${
              isScrolled ? 'text-gray-800' : 'text-white'
            }`}
          >
            {content.brand.siteName}
          </span>
        </Link>

        {/* Desktop-Navigation */}
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

        {/* Right side: pretty button + hidden GT container */}
        <div className="flex items-center gap-3 relative">
          <button
            onClick={toggleTranslate}
            disabled={!gtReady}
            className={`px-3 py-1 rounded-full text-sm transition ${
              gtReady
                ? 'bg-white/20 text-white hover:bg-white/40'
                : 'bg-gray-300 text-gray-600 cursor-not-allowed'
            }`}
            title={gtReady ? 'Sprache wählen' : 'Lädt…'}
          >
            🌐 Sprache wählen
          </button>

          {/* Hidden container for Google widget (we control visibility) */}
          <div
            id="google_translate_element"
            style={{
              position: 'absolute',
              right: 0,
              top: '3rem',
              zIndex: 1000,
              background: 'white',
              borderRadius: '0.5rem',
              padding: '0.5rem',
              boxShadow: '0 4px 10px rgba(0,0,0,0.15)',
              display: 'none'
            }}
          />

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMobile((s) => !s)}
            className={`${isScrolled ? 'text-gray-700' : 'text-white'} md:hidden p-2`}
          >
            {isMobile ? <Fi.FiX className="w-6 h-6" /> : <Fi.FiMenu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile nav */}
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
