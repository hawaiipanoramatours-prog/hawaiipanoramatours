import { Link, useLocation } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import * as Fi from 'react-icons/fi'
import SafeIcon from './SafeIcon'

export default function Header({ content }) {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobile, setIsMobile] = useState(false)
  const [lang, setLang] = useState(content.i18n?.default || 'de')
  const location = useLocation()

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 50)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    if (!content.header?.googleTranslate?.enabled) return
    const id = 'google-translate-script'
    if (!document.getElementById(id)) {
      const s = document.createElement('script')
      s.id = id
      s.src = '//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit'
      document.body.appendChild(s)
    }
    window.googleTranslateElementInit = function () {
      new window.google.translate.TranslateElement({
        pageLanguage: content.i18n?.default || 'de',
        includedLanguages: content.i18n?.languages?.join(',') || 'de,en',
        layout: window.google.translate.TranslateElement.InlineLayout.SIMPLE,
        autoDisplay: false
      }, 'google_translate_element')
    }
  }, [content])

  const changeLang = (l) => {
    setLang(l)
    const select = document.querySelector('.goog-te-combo')
    if (select) { 
      select.value = l
      select.dispatchEvent(new Event('change')) 
    }
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

        <nav className="hidden md:flex items-center gap-8">
          {content.header.nav.map(n => (
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
              {n.name[lang] || n.name.de}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <div id="google_translate_element" />

          {/* Sprach-Buttons vorübergehend ausgeblendet */}
          <div className="hidden"></div>

          <button
            onClick={() => setIsMobile(s => !s)}
            className={`${
              isScrolled ? 'text-gray-700' : 'text-white'
            } md:hidden p-2`}
          >
            {isMobile ? (
              <Fi.FiX className="w-6 h-6" />
            ) : (
              <Fi.FiMenu className="w-6 h-6" />
            )}
          </button>
        </div>
      </div>

      {isMobile && (
        <div className="md:hidden mx-6 mb-4 bg-white rounded-lg shadow p-4">
          <nav className="flex flex-col gap-2">
            {content.header.nav.map(n => (
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
                {n.name[lang] || n.name.de}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </motion.header>
  )
}
