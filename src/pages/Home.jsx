import { useOutletContext } from 'react-router-dom'
import {
  Hero,
  HowItWorks,
  ServicesSection,
  Offerings,
  Gallery,
  Testimonials,
  ContactCTA,
} from '../components/Sections.impl'

export default function Home() {
  const { content } = useOutletContext()
  const lang = content.i18n?.default || 'de'

  return (
    <>
      <Hero content={content} lang={lang} />
      <HowItWorks content={content} lang={lang} />
      <ServicesSection content={content} lang={lang} />
      <Offerings content={content} lang={lang} />

      {/* 👇 NEU: Deine Bilder-Galerie zwischen Offers & Testimonials */}
      <Gallery />

      <Testimonials content={content} />
      <ContactCTA content={content} lang={lang} />
    </>
  )
}
