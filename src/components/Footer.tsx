import { restaurant } from "../data/restaurant"
import { useLanguage } from "../i18n/useLanguage"

function Footer() {
  const { t, text } = useLanguage()

  const currentYear = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__inner">
          <div className="footer__brand">
            {text(restaurant.name)}
          </div>

          <nav className="footer__links">
            {restaurant.menu &&
              restaurant.menu.categories.length > 0 && (
                <a href="#menu">{t("menu")}</a>
              )}

            {restaurant.about && (
              <a href="#about">{t("about")}</a>
            )}

            <a href="#location">{t("location")}</a>

            <a href="#contact">{t("contact")}</a>
          </nav>
        </div>

        <p className="footer__copyright">
          © {currentYear} {text(restaurant.name)}.
        </p>
      </div>
    </footer>
  )
}

export default Footer