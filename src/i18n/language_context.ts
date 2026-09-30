import { createContext } from "react"

import type { Language, LocalizedText } from "./types"
import type { TranslationKey } from "./translations"

export interface LanguageContextValue {
  language: Language
  setLanguage: (language: Language) => void
  t: (key: TranslationKey) => string
  text: (value: LocalizedText) => string
}

export const LanguageContext = createContext<
  LanguageContextValue | undefined
>(undefined)