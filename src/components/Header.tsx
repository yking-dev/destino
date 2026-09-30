import { Menu, X } from "lucide-react"
import { useState } from "react"

import { restaurant } from "../data/restaurant"
import { useLanguage } from "../i18n/useLanguage"

function Header() {
  const { language, setLanguage, t, text } = useLanguage()
  const [menuOpen, setMenuOpen] = useState(false)

  const closeMenu = () => {
    setMenuOpen(false)
  }

  return (
    <header className="header">
      <div className="container header__inner">
        <a
          className="header__logo"
          href="#"
          onClick={closeMenu}
        >
          {restaurant.logo ? (
            <img
              className="header__logo-image"
              src={restaurant.logo}
              alt={text(restaurant.name)}
            />
          ) : (
            text(restaurant.name)
          )}
        </a>

        <nav
          className={`header__nav ${
            menuOpen ? "header__nav--open" : ""
          }`}
        >
          {restaurant.menu &&
            restaurant.menu.categories.length > 0 && (
              <a href="#menu" onClick={closeMenu}>
                {t("menu")}
              </a>
            )}

          {restaurant.about && (
            <a href="#about" onClick={closeMenu}>
              {t("about")}
            </a>
          )}

          <a href="#location" onClick={closeMenu}>
            {t("location")}
          </a>

          <a href="#contact" onClick={closeMenu}>
            {t("contact")}
          </a>
        </nav>

        <div className="header__actions">
          {restaurant.languages.available.length > 1 && (
            <div className="header__languages">
              {restaurant.languages.available.map(
                (availableLanguage) => (
                  <button
                    key={availableLanguage}
                    className={
                      availableLanguage === language
                        ? "header__language header__language--active"
                        : "header__language"
                    }
                    onClick={() =>
                      setLanguage(availableLanguage)
                    }
                    aria-pressed={
                      availableLanguage === language
                    }
                  >
                    {availableLanguage.toUpperCase()}
                  </button>
                ),
              )}
            </div>
          )}

          <button
            className="header__menu-button"
            onClick={() => setMenuOpen((open) => !open)}
            aria-label={
              menuOpen ? t("closeMenu") : t("openMenu")
            }
            aria-expanded={menuOpen}
          >
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
    </header>
  )
}

export default Header