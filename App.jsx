import { Outlet, useLocation } from 'react-router-dom'
import { useEffect, useMemo, useState } from 'react'
import Header from './components/Header'
import ScrollToTop from './components/ScrollToTop'

// ✅ wichtig: i18n importieren, damit changeLanguage möglich ist
import i18n from './i18n'

function getDomainLang() {
  const host = window.location.hostname.toLowerCase()
  if (host.endsWith('.com')) return 'en'
  if (host.endsWith('.de')) return 'de'
  return 'de'
}

function GoogleTranslateInit({ defaultLang = 'de', languages = ['de', 'en', 'es'] }) {
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
      if (window.google && window.google.translate) {
        new window.google.translate.TranslateElement(
          {
            pageLanguage: defaultLang,
            includedLanguages: languages.join(','),
            layout: window.google.translate.TranslateElement.InlineLayout.SIMPLE,
            autoDisplay: false,
          },
          'google_translate_element'
        )
      }
    }

    const checkInterval = setInterval(() => {
      if (window.google && window.google.translate) {
        clearInterval(checkInterval)
        window.googleTranslateElementInit()
      }
    }, 500)

    return () => clearInterval(checkInterval)
  }, [defaultLang, languages])

  return <div id="google_translate_element" style={{ display: 'none' }} />
}

export default function App() {
  const [content, setContent] = useState(null)
  const location = useLocation()

  const domainLang = useMemo(() => {
    if (typeof window === 'undefined') return 'de'
    return localStorage.getItem('lang') || getDomainLang()
  }, [])

  useEffect(() => {
    const local = localStorage.getItem('siteContent')
    if (local) setContent(JSON.parse(local))
    else import('./content/siteContent.json').then((m) => setContent(m.default || m))
  }, [])

  // ✅ i18next Sprache beim Start fix setzen (domain-basiert)
  useEffect(() => {
    i18n.changeLanguage(domainLang)
  }, [domainLang])

  // 🔹 Google Translate bei jedem Seitenwechsel neu triggern (dein bestehender Fix)
  useEffect(() => {
    const select = document.querySelector('.goog-te-combo')
    if (select) {
      const currentLang = select.value
      setTimeout(() => {
        select.value = currentLang
        select.dispatchEvent(new Event('change'))
      }, 800)
    }
  }, [location])

  if (!content) return null

  if (window.location.pathname.startsWith('/admin')) {
    const Admin = require('./pages/Admin.jsx').default
    return <Admin content={content} setContent={setContent} />
  }

  // ⚠️ dein Footer-Import war bei dir: Footer from './components/Sections.impl'
  // In deiner Struktur ist Footer ein named export. Am saubersten:
  // import { Footer } from './components/Sections'
  // -> ich lasse es hier bewusst wie du es aktuell nutzt, wenn es bei dir läuft.
  const Footer = require('./components/Sections.impl').Footer

  return (
    <div className="min-h-screen">
      <ScrollToTop />

      {/* ✅ jetzt domain-basiert: .com -> en, .de -> de */}
      <GoogleTranslateInit defaultLang={domainLang} languages={['de', 'en', 'es']} />

      <Header content={content} />
      <Outlet context={{ content }} />
      <Footer content={content} />
    </div>
  )
}
