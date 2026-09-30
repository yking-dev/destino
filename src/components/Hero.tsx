import { ArrowDown, MapPin } from "lucide-react"
import { motion } from "motion/react"

import { restaurant } from "../data/restaurant"
import { useLanguage } from "../i18n/useLanguage"

function Hero() {
  const { t, text } = useLanguage()

  const hasMenu =
    restaurant.menu &&
    restaurant.menu.categories.length > 0

  const backgroundImage = restaurant.hero.image
    ? {
        backgroundImage: `
          linear-gradient(
            120deg,
            rgb(0 0 0 / 0.72),
            rgb(0 0 0 / 0.38)
          ),
          url("${restaurant.hero.image}")
        `,
      }
    : undefined

  return (
    <section className="hero" style={backgroundImage}>
      <div className="container hero__content">
        {restaurant.hero.eyebrow && (
          <motion.p
            className="hero__eyebrow"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
          >
            {text(restaurant.hero.eyebrow)}
          </motion.p>
        )}

        <motion.h1
          className="hero__title"
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
        >
          {text(restaurant.name)}
        </motion.h1>

        <motion.p
          className="hero__description"
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          {text(restaurant.description)}
        </motion.p>

        <motion.div
          className="hero__actions"
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          {hasMenu && (
            <a className="button button--primary" href="#menu">
              {t("viewMenu")}
              <ArrowDown size={18} />
            </a>
          )}

          <a
            className="button button--secondary"
            href="#location"
          >
            <MapPin size={18} />
            {t("directions")}
          </a>
        </motion.div>
      </div>
    </section>
  )
}

export default Hero