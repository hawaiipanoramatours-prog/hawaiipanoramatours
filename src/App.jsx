import { Outlet, useLocation } from 'react-router-dom'
import { useEffect, useMemo, useState } from 'react'
import Header from './components/Header'
import { Footer } from './components/Sections.impl'
import ScrollToTop from './components/ScrollToTop'

function getDomainLang() {
  const host = window.location.hostname.toLowerCase()
  if (host.endsWith('.com')) return 'en'
  if (host.endsWith('.de')) return 'de'
  return 'de'
}

function shouldUseGoogleTranslate() {
  const host = window.location.hostname.toLowerCase()
  return host.endsWith('.com') // ✅ NUR .com
}

function GoogleTranslateInit({ defaultLang = 'en', languages = ['de', 'en', 'es'] }) {
  useEffect(() => {
    const id = 'google-translate-script'

    // ✅ Init-Funktion MUSS VOR Script-Load existieren (cb=...)
    window.googleTranslateElementInit = function () {
      if (!window.google || !window.google.translate) return

      // ✅ Falls Google das Widget schon mal erstellt hat, nicht doppelt initialisieren
      const el = document.getElementById('google_translate_element')
      if (!el) return

      // Optional: clean (verhindert doppelte Dropdowns bei Hot reloads)
      // el.innerHTML = ''

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

    if (!document.getElementById(id)) {
      const s = document.createElement('script')
      s.id = id
      s.src =
        'https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit'
      document.body.appendChild(s)
    } else {
      // Script ist schon da → direkt versuchen zu initialisieren
      window.googleTranslateElementInit()
    }
  }, [defaultLang, languages])

  return null // ✅ WICHTIG: KEIN zweites google_translate_element rendern
}

export default function App() {
  const [content, setContent] = useState(null)
  const location = useLocation()

  const lang = useMemo(() => getDomainLang(), [])
  const useGT = useMemo(() => shouldUseGoogleTranslate(), [])

  useEffect(() => {
    // ✅ HTML lang korrekt setzen (auch wenn index.html lang="de" hat)
    document.documentElement.lang = lang
  }, [lang])

  useEffect(() => {
    const local = localStorage.getItem('siteContent')
    if (local) setContent(JSON.parse(local))
    else import('./content/siteContent.json').then((m) => setContent(m.default || m))
  }, [])

  // 🔹 SPA: nach Route-Wechsel ggf. erneut übersetzen (nur .com)
  useEffect(() => {
    if (!useGT) return
    const select = document.querySelector('.goog-te-combo')
    if (select) {
      const currentLang = select.value
      setTimeout(() => {
        select.value = currentLang
        select.dispatchEvent(new Event('change'))
      }, 500)
    }
  }, [location, useGT])

  if (!content) return null

  if (window.location.pathname.startsWith('/admin')) {
    const Admin = require('./pages/Admin.jsx').default
    return <Admin content={content} setContent={setContent} />
  }

  return (
    <div className="min-h-screen">
      <ScrollToTop />

      {/* ✅ Google Translate NUR auf .com */}
      {useGT && <GoogleTranslateInit defaultLang={lang} languages={['de', 'en', 'es']} />}

      <Header content={content} lang={lang} />

      <Outlet context={{ content, lang }} />

      <Footer content={content} lang={lang} />
    </div>
  )
}

