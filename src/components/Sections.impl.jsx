import { motion } from 'framer-motion'
import * as Fi from 'react-icons/fi'
import SafeIcon from './SafeIcon'

/* ✅ HERO – 1 CTA + Trust-Block (schmal) + Contact-Line + Social-Links */
export function Hero({ content, lang }) {
  const h = content.hero
  const bg = h.bg

  const trust = {
    de: {
      title: 'Ideal für Sie, wenn Sie:',
      good: [
        'lokale Insider-Tipss und besondere Orte entdecken möchten',
        'sicher und stressfrei planen und reisen möchten',
        'deutschsprachige Beratung statt Massenangebote schätzen',
        'zwischen persönlicher Reiseplanung oder privater Tourbegleitung mit Fahrzeug wählen möchten',
      ],
    },
    en: {
      title: 'Ideal if you:',
      good: [
        'want a personalized, thoughtfully planned Hawaiʻi trip',
        'prefer clear guidance over mass-tourism offers',
        'would like optional personal on-island support',
      ],
    },
  }

  const t = trust[lang] || trust.de

  return (
    <section
      className="relative min-h-screen flex justify-center overflow-hidden"
      style={{
        backgroundImage: `url(${bg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
      }}
    >
      <div className="absolute inset-0 bg-black/40" />

      {/* ✅ Header-Offset: damit die Headline NICHT “zu weit oben” sitzt */}
      <div className="relative z-10 w-full px-6 pt-28 md:pt-32 pb-14 flex items-start md:items-center">
        <div className="text-center text-white max-w-4xl mx-auto w-full">
          <motion.div
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* ✅ Headline etwas “ruhiger” */}
            <h1 className="font-playfair text-5xl md:text-7xl font-bold mb-5 leading-[0.95]">
              {h.title?.[lang] || h.title?.de}
              <span className="block text-turquoise mt-2">
                {h.highlight?.[lang] || h.highlight?.de}
              </span>
            </h1>

            <p className="font-poppins text-xl md:text-2xl mb-7 text-gray-200">
              {h.subtitle?.[lang] || h.subtitle?.de}
            </p>

            {/* ✅ TRUST-BLOCK: schmaler, scanbar, mobile clean */}
            <div className="mx-auto max-w-sm sm:max-w-md text-left mb-9">
              <div className="rounded-2xl bg-white/10 border border-white/15 backdrop-blur-sm px-5 py-4">
                <p className="font-poppins text-sm md:text-base font-semibold text-white/95 mb-3">
                  {t.title}
                </p>

                <ul className="space-y-2">
                  {t.good.map((item, idx) => (
                    <li
                      key={idx}
                      className="flex gap-2 font-poppins text-sm md:text-base text-white/90"
                    >
                      <span className="shrink-0">✔️</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.25 }}
            className="flex flex-col items-center justify-center"
          >
            {/* ✅ EIN klarer CTA */}
            <a
              href={content.brand.social.calendly}
              target="_blank"
              rel="noreferrer"
              className="bg-turquoise hover:bg-turquoise/90 text-white px-8 py-4 rounded-full font-poppins font-semibold text-lg"
            >
              {h.ctaPlan?.label?.[lang] ||
                h.ctaPlan?.label?.de ||
                'Kostenlos anfragen'}
            </a>

            {/* ✅ Direkt unter dem Button: Kontakt-Hinweis */}
            <p className="mt-3 font-poppins text-xs md:text-sm text-white/90">
              {lang === 'en'
                ? 'I’ll personally get back to you via email or WhatsApp (phone call on request).'
                : 'Persönliche Rückmeldung über Ihren bevorzugten Kontaktweg.'}
            </p>

            {/* ✅ Social-Links darunter */}
            <p className="mt-5 font-poppins text-sm text-white/90">
              {lang === 'en' ? (
                <>
                  More impressions & inspiration on{' '}
                  <a
                    href={content.brand.social.instagram}
                    target="_blank"
                    rel="noreferrer"
                    className="underline underline-offset-4 hover:text-white"
                  >
                    Instagram
                  </a>{' '}
                  and{' '}
                  <a
                    href={content.brand.social.facebook}
                    target="_blank"
                    rel="noreferrer"
                    className="underline underline-offset-4 hover:text-white"
                  >
                    Facebook
                  </a>
                  .
                </>
              ) : (
                <>
                  Mehr Eindrücke & Inspirationen auf{' '}
                  <a
                    href={content.brand.social.instagram}
                    target="_blank"
                    rel="noreferrer"
                    className="underline underline-offset-4 hover:text-white"
                  >
                    Instagram
                  </a>{' '}
                  und{' '}
                  <a
                    href={content.brand.social.facebook}
                    target="_blank"
                    rel="noreferrer"
                    className="underline underline-offset-4 hover:text-white"
                  >
                    Facebook
                  </a>
                  .
                </>
              )}
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
