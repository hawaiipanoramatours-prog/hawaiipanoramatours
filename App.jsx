import { Outlet, useLocation } from 'react-router-dom'
import { useEffect, useState } from 'react'
import Header from './components/Header'
import Footer from './components/Sections.impl'
import ScrollToTop from './components/ScrollToTop'

function GoogleTranslateInit({ defaultLang = 'de', languages = ['de', 'en', 'fr'] }) {
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
          pageLanguage: defaultLang,
          includedLanguages: languages.join(','),
          layout: window.google.translate.TranslateElement.InlineLayout.SIMPLE,
          autoDisplay: false
        }, 'google_translate_element')
      }
    }

    const checkInterval = setInterval(() => {
      if (window.google && window.google.translate) {
        clearInterval(checkInterval)
        window.googleTranslateElementInit()
      }
    }, 1000)

    return () => clearInterval(checkInterval)
  }, [defaultLang, languages])

  return <div id="google_translate_element" style={{ display: 'none' }} />
}

export default function App() {
  const [content, setContent] = useState(null)
  const location = useLocation()

  useEffect(() => {
    const local = localStorage.getItem('siteContent')
    if (local) setContent(JSON.parse(local))
    else import('./content/siteContent.json').then((m) => setContent(m.default || m))
  }, [])

  // 🔹 Google Translate bei jedem Seitenwechsel neu triggern
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

  return (
    <div className="min-h-screen">
      <ScrollToTop />
      <GoogleTranslateInit defaultLang="de" languages={['de', 'en', 'fr']} />
      <Header content={content} />
      <Outlet context={{ content }} />
      <Footer content={content} />
    </div>
  )
}
