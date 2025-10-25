import { useOutletContext } from 'react-router-dom'
import { Hero, HowItWorks, ServicesSection, Offerings, Testimonials, ContactCTA } from '../components/Sections'

export default function Home(){
  const { content } = useOutletContext()
  const lang = content.i18n?.default || 'de'
  return (
    <div className="min-h-screen">
      <Hero content={content} lang={lang} />
      <HowItWorks content={content} lang={lang} />
      <ServicesSection content={content} lang={lang} />
      <Offerings content={content} lang={lang} />
      <Testimonials content={content} />
      <ContactCTA content={content} lang={lang} />
    </div>
  )
}
