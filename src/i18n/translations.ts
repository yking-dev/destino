import type { Language } from "./types"

export const translations = {
  menu: {
    es: "Menú",
    en: "Menu",
  },

  about: {
    es: "Sobre nosotros",
    en: "About us",
  },

  location: {
    es: "Ubicación",
    en: "Location",
  },

  contact: {
    es: "Contacto",
    en: "Contact",
  },

  schedule: {
    es: "Horario",
    en: "Hours",
  },

  directions: {
    es: "Cómo llegar",
    en: "Get directions",
  },

  call: {
    es: "Llamar",
    en: "Call",
  },

  whatsapp: {
    es: "WhatsApp",
    en: "WhatsApp",
  },

  viewMenu: {
    es: "Ver menú",
    en: "View menu",
  },

  gallery: {
    es: "Galería",
    en: "Gallery",
  },

  followUs: {
    es: "Síguenos",
    en: "Follow us",
  },

  openMenu: {
    es: "Abrir menú",
    en: "Open menu",
  },

  closeMenu: {
    es: "Cerrar menú",
    en: "Close menu",
  },

  sendEmail: {
    es: "Enviar correo",
    en: "Send email",
  },

  visitWebsite: {
    es: "Visitar sitio",
    en: "Visit website",
  },

  previousImage: {
  es: "Imagen anterior",
  en: "Previous image",
},

nextImage: {
  es: "Imagen siguiente",
  en: "Next image",
},
} as const

export type TranslationKey = keyof typeof translations

export function t(
  key: TranslationKey,
  language: Language,
): string {
  return translations[key][language] ?? translations[key].es
}

export function localized(
  value: {
    es: string
    en?: string
  },
  language: Language,
  fallback: Language = "es",
): string {
  return value[language] ?? value[fallback] ?? value.es
}