import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import de from './locales/de/translation.json'
import en from './locales/en/translation.json'
import es from './locales/es/translation.json'

function getDomainLang() {
  if (typeof window === 'undefined') return 'de'
  const host = window.location.hostname.toLowerCase()
  if (host.endsWith('.com')) return 'en'
  if (host.endsWith('.de')) return 'de'
  return 'de'
}

const initialLang = (() => {
  // optional: wenn User manuell umstellt, merken wir es
  if (typeof window === 'undefined') return 'de'
  return localStorage.getItem('lang') || getDomainLang()
})()

i18n.use(initReactI18next).init({
  resources: {
    de: { translation: de },
    en: { translation: en },
    es: { translation: es },
  },
  lng: initialLang,
  fallbackLng: 'de',
  interpolation: { escapeValue: false },
})

export default i18n
