import { useEffect, type CSSProperties } from "react"

import About from "./components/About"
import Contact from "./components/Contact"
import Footer from "./components/Footer"
import Gallery from "./components/Gallery"
import Header from "./components/Header"
import Hero from "./components/Hero"
import InfoCards from "./components/InfoCards"
import Location from "./components/Location"
import Menu from "./components/Menu"

import { restaurant } from "./data/restaurant"
import { useLanguage } from "./i18n/useLanguage"

function App() {
  const { language, text } = useLanguage()

  const themeStyle = {
    "--color-primary": restaurant.theme.primary,
    "--color-secondary": restaurant.theme.secondary,
    "--color-accent": restaurant.theme.accent,
    "--color-text-on-primary":
      restaurant.theme.textOnPrimary,
    "--color-text-on-accent":
      restaurant.theme.textOnAccent,
  } as CSSProperties

  useEffect(() => {
    document.documentElement.lang = language

    document.title = text(restaurant.name)

    let metaDescription = document.querySelector(
      'meta[name="description"]',
    )

    if (!metaDescription) {
      metaDescription = document.createElement("meta")
      metaDescription.setAttribute("name", "description")
      document.head.appendChild(metaDescription)
    }

    metaDescription.setAttribute(
      "content",
      text(restaurant.description),
    )
  }, [language, text])

  return (
    <div style={themeStyle}>
      <Header />
      <main>
        <Hero />
        <InfoCards />
        <About />
        <Menu />
        <Gallery />
        <Location />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default App