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
