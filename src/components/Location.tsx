import {
  ExternalLink,
  MapPin,
} from "lucide-react"
import { motion } from "motion/react"

import { restaurant } from "../data/restaurant"
import { useLanguage } from "../i18n/useLanguage"

function Location() {
  const { t, text } = useLanguage()

  return (
    <section className="section location" id="location">
      <div className="container">
        <div className="location__content">
          <motion.div
            className="location__text"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div>
              <p className="section__eyebrow">
                {t("location")}
              </p>

              <h2 className="section__title">
                {t("directions")}
              </h2>
            </div>

            <p className="location__address">
              {text(restaurant.location.address)}
            </p>

            <div>
              <a
                className="button button--primary"
                href={restaurant.location.mapsUrl}
                target="_blank"
                rel="noreferrer"
              >
                <MapPin size={18} />
                {t("directions")}
                <ExternalLink size={16} />
              </a>
            </div>
          </motion.div>

          <motion.div
            className="location__visual"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <MapPin size={72} strokeWidth={1.2} />
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Location