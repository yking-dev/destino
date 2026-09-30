import {
  ExternalLink,
  Mail,
  MessageCircle,
  Phone,
} from "lucide-react"
import { motion } from "motion/react"

import { restaurant } from "../data/restaurant"
import { useLanguage } from "../i18n/useLanguage"

function Contact() {
  const { t } = useLanguage()

  const phoneLink = `tel:${restaurant.contact.phone.replace(
    /\s/g,
    "",
  )}`

  const whatsappLink = `https://wa.me/${restaurant.contact.whatsapp}`

  return (
    <section className="section" id="contact">
      <div className="container">
        <div className="section__header">
          <p className="section__eyebrow">
            {t("contact")}
          </p>

          <h2 className="section__title">
            {t("contact")}
          </h2>
        </div>

        <div className="contact__grid">
          <motion.a
            className="contact-card"
            href={phoneLink}
            whileHover={{ y: -4 }}
          >
            <div className="contact-card__icon">
              <Phone size={22} />
            </div>

            <div>
              <div className="contact-card__label">
                {t("call")}
              </div>

              <div className="contact-card__value">
                {restaurant.contact.phone}
              </div>
            </div>
          </motion.a>

          <motion.a
            className="contact-card"
            href={whatsappLink}
            target="_blank"
            rel="noreferrer"
            whileHover={{ y: -4 }}
          >
            <div className="contact-card__icon">
              <MessageCircle size={22} />
            </div>

            <div>
              <div className="contact-card__label">
                {t("whatsapp")}
              </div>

              <div className="contact-card__value">
                {t("whatsapp")}
              </div>
            </div>
          </motion.a>

          {restaurant.contact.email && (
            <motion.a
              className="contact-card"
              href={`mailto:${restaurant.contact.email}`}
              whileHover={{ y: -4 }}
            >
              <div className="contact-card__icon">
                <Mail size={22} />
              </div>

              <div>
                <div className="contact-card__label">
                  {t("sendEmail")}
                </div>

                <div className="contact-card__value">
                  {restaurant.contact.email}
                </div>
              </div>
            </motion.a>
          )}
        </div>

        <div className="contact__social">
          {restaurant.social.instagram && (
            <a
              className="social-link"
              href={restaurant.social.instagram}
              target="_blank"
              rel="noreferrer"
            >
              Instagram
              <ExternalLink size={16} />
            </a>
          )}

          {restaurant.social.facebook && (
            <a
              className="social-link"
              href={restaurant.social.facebook}
              target="_blank"
              rel="noreferrer"
            >
              Facebook
              <ExternalLink size={16} />
            </a>
          )}

          {restaurant.social.tiktok && (
            <a
              className="social-link"
              href={restaurant.social.tiktok}
              target="_blank"
              rel="noreferrer"
            >
              TikTok
              <ExternalLink size={16} />
            </a>
          )}
        </div>
      </div>
    </section>
  )
}

export default Contact