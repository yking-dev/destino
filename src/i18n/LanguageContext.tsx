import {
  useMemo,
  useState,
  type ReactNode,
} from "react"

import { restaurant } from "../data/restaurant"
import {
  localized,
  t as translate,
} from "./translations"
import { LanguageContext } from "./language_context"
import type { Language } from "./types"

interface LanguageProviderProps {
  children: ReactNode
}

function getInitialLanguage(): Language {
  const storedLanguage = localStorage.getItem(
    "restaurant-language",
  ) as Language | null

  if (
    storedLanguage &&
    restaurant.languages.available.includes(storedLanguage)
  ) {
    return storedLanguage
  }

  const browserLanguage = navigator.language
    .slice(0, 2)
    .toLowerCase() as Language

  if (restaurant.languages.available.includes(browserLanguage)) {
    return browserLanguage
  }

  return restaurant.languages.default
}

export function LanguageProvider({
  children,
}: LanguageProviderProps) {
  const [language, setLanguageState] = useState<Language>(
    getInitialLanguage,
  )

  const setLanguage = (newLanguage: Language) => {
    if (!restaurant.languages.available.includes(newLanguage)) {
      return
    }

    setLanguageState(newLanguage)
    localStorage.setItem("restaurant-language", newLanguage)
  }

  const value = useMemo(
    () => ({
      language,
      setLanguage,
      t: (key: Parameters<typeof translate>[0]) =>
        translate(key, language),
      text: (value: Parameters<typeof localized>[0]) =>
        localized(value, language),
    }),
    [language],
  )

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  )
}