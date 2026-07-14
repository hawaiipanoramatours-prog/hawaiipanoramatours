import { useOutletContext } from 'react-router-dom'
import {
  Hero,
  HowItWorks,
  ServicesSection,
  Offerings,
  Gallery,
  Testimonials,
  ContactCTA,
  MalamaAina,
} from '../components/Sections.impl'
export default function Home() {
  const { content, lang } = useOutletContext()
  return (
    <>
      <Hero content={content} lang={lang} />
      {/* <HowItWorks content={content} lang={lang} /> */}
      <Offerings content={content} lang={lang} />
      <Gallery lang={lang} />
      <Testimonials content={content} lang={lang} />
      <MalamaAina lang={lang} />
      <ContactCTA content={content} lang={lang} />
    </>
  )
}

