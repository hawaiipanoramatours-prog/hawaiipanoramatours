import { Outlet } from 'react-router-dom'
import { useEffect, useState } from 'react'
import Header from './components/Header'
import Footer from './components/Sections.impl'
import ScrollToTop from './components/ScrollToTop'

function GoogleTranslateInit({ defaultLang = 'de', languages = ['de','en'] }) {
  useEffect(() => {
    const id = 'google-translate-script'
    if (!document.getElementById(id)) {
      const s = document.createElement('script')
      s.id = id
      s.src = '//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit'
      document.body.appendChild(s)
    }

    window.googleTranslateElementInit = function () {
      new window.google.translate.TranslateElement({
        pageLanguage: defaultLang,
        includedLanguages: languages.join(','),
        layout: window.google.translate.TranslateElement.InlineLayout.SIMPLE,
        autoDisplay: false
      }, 'google_translate_element')
    }
  }, [])

  return <div id="google_translate_element" style={{ display: 'none' }} />
}

export default function App() {
  const [content, setContent] = useState(null)

  useEffect(() => {
    const local = localStorage.getItem('siteContent')
    if (local) setContent(JSON.parse(local))
    else import('./content/siteContent.json').then(m => setContent(m.default || m))
  }, [])

  if (!content) return null

  if (window.location.pathname.startsWith('/admin')) {
    const Admin = require('./pages/Admin.jsx').default
    return <Admin content={content} setContent={setContent} />
  }

  return (
    <div className="min-h-screen">
      <ScrollToTop />
      <GoogleTranslateInit defaultLang="de" languages={['de','en','fr']} />
      <Header content={content} />
      <Outlet context={{ content }} />
      <Footer content={content} />
    </div>
  )
}

import { Outlet } from 'react-router-dom'
import { useEffect, useState } from 'react'
import Header from './components/Header'
import { Footer } from './components/Sections.impl'
import ScrollToTop from './components/ScrollToTop'

export default function App(){
  const [content, setContent] = useState(null)

  useEffect(() => {
    const local = localStorage.getItem('siteContent')
    if (local) setContent(JSON.parse(local))
    else import('./content/siteContent.json').then(m => setContent(m.default || m))
  }, [])

  if (!content) return null

  if (window.location.pathname.startsWith('/admin')) {
    const Admin = require('./pages/Admin.jsx').default
    return <Admin content={content} setContent={setContent} />
  }

  return (
    <div className="min-h-screen">
      <ScrollToTop />
      <Header content={content} />
      <Outlet context={{ content }} />
      <Footer content={content} />
    </div>
  )
}

return (
  <div className="min-h-screen">
    <ScrollToTop />
    <GoogleTranslateInit defaultLang="de" languages={['de','en']} />   {/* <-- HIER */}
    <Header content={content} />
    <Outlet context={{ content }} />
    <Footer content={content} />
  </div>
)
