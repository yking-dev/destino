import { motion } from "motion/react"

import { restaurant } from "../data/restaurant"
import { useLanguage } from "../i18n/useLanguage"

function About() {
  const { text } = useLanguage()

  if (!restaurant.about) {
    return null
  }

  return (
    <section className="section" id="about">
      <div className="container">
        <motion.div
          className="about__content"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
        >
          <div>
            <h2 className="about__title">
              {restaurant.about.title
                ? text(restaurant.about.title)
                : ""}
            </h2>
          </div>

          <div className="about__paragraphs">
            {restaurant.about.paragraphs.map(
              (paragraph, index) => (
                <p
                  className="about__paragraph"
                  key={index}
                >
                  {text(paragraph)}
                </p>
              ),
            )}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default About