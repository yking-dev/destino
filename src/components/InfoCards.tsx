import {
  Clock3,
  MapPin,
  Phone,
} from "lucide-react"
import { motion } from "motion/react"

import { restaurant } from "../data/restaurant"
import { useLanguage } from "../i18n/useLanguage"

function InfoCards() {
  const { t, text } = useLanguage()

  const phoneLink = `tel:${restaurant.contact.phone.replace(
    /\s/g,
    "",
  )}`

  return (
    <section className="section info">
      <div className="container">
        <div className="info__grid">
          <motion.div
            className="info-card"
            whileHover={{ y: -4 }}
          >
            <div className="info-card__icon">
              <MapPin size={22} />
            </div>

            <div>
              <div className="info-card__title">
                {t("location")}
              </div>

              <div className="info-card__content">
                {text(restaurant.location.address)}
              </div>
            </div>
          </motion.div>

          <motion.div
            className="info-card"
            whileHover={{ y: -4 }}
          >
            <div className="info-card__icon">
              <Phone size={22} />
            </div>

            <div>
              <div className="info-card__title">
                {t("contact")}
              </div>

              <a
                className="info-card__content"
                href={phoneLink}
              >
                {restaurant.contact.phone}
              </a>
            </div>
          </motion.div>

          <motion.div
            className="info-card"
            whileHover={{ y: -4 }}
          >
            <div className="info-card__icon">
              <Clock3 size={22} />
            </div>

            <div>
              <div className="info-card__title">
                {t("schedule")}
              </div>

              {restaurant.schedule.map((schedule) => (
                <div
                  className="info-card__content"
                  key={`${text(schedule.days)}-${text(
                    schedule.hours,
                  )}`}
                >
                  {text(schedule.days)}
                  <span className="info-card__secondary">
                    {text(schedule.hours)}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default InfoCards