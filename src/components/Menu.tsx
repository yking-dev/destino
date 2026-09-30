import { motion } from "motion/react"

import { restaurant } from "../data/restaurant"
import { useLanguage } from "../i18n/useLanguage"

function Menu() {
  const { t, text } = useLanguage()

  if (
    !restaurant.menu ||
    restaurant.menu.categories.length === 0
  ) {
    return null
  }

  return (
    <section className="section menu" id="menu">
      <div className="container">
        <div className="section__header">
          <p className="section__eyebrow">
            {t("menu")}
          </p>

          <h2 className="section__title">
            {t("menu")}
          </h2>
        </div>

        <div className="menu__categories">
          {restaurant.menu.categories.map((category) => (
            <div
              className="menu-category"
              key={text(category.name)}
            >
              <h3 className="menu-category__title">
                {text(category.name)}
              </h3>

              <div className="menu-category__items">
                {category.items.map((item) => (
                  <motion.article
                    className="menu-item"
                    key={text(item.name)}
                    initial={{ opacity: 0, y: 18 }}
                    whileInView={{
                      opacity: 1,
                      y: 0,
                    }}
                    viewport={{
                      once: true,
                      amount: 0.2,
                    }}
                  >
                    <div>
                      <h4 className="menu-item__name">
                        {text(item.name)}
                      </h4>

                      {item.description && (
                        <p className="menu-item__description">
                          {text(item.description)}
                        </p>
                      )}
                    </div>

                    {item.price && (
                      <div className="menu-item__price">
                        {item.price}
                      </div>
                    )}
                  </motion.article>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Menu