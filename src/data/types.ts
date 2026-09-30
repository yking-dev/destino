import type { Language, LocalizedText } from "../i18n/types"

export interface MenuItem {
  name: LocalizedText
  description?: LocalizedText
  price?: string
}

export interface MenuCategory {
  name: LocalizedText
  items: MenuItem[]
}

export interface GalleryImage {
  src: string
  alt: LocalizedText
}

export interface Restaurant {
  languages: {
    default: Language
    available: Language[]
  }

  logo?: string

  name: LocalizedText

  hero: {
    eyebrow?: LocalizedText
    image?: string
  }

  description: LocalizedText

  about?: {
    title?: LocalizedText
    paragraphs: LocalizedText[]
  }

  menu?: {
    categories: MenuCategory[]
  }

  gallery?: {
    images: GalleryImage[]
  }

  contact: {
    phone: string
    whatsapp: string
    email?: string
  }

  location: {
    address: LocalizedText
    mapsUrl: string
  }

  schedule: {
    days: LocalizedText
    hours: LocalizedText
  }[]

  social: {
    instagram?: string
    facebook?: string
    tiktok?: string
  }

  theme: {
    primary: string
    secondary: string
    accent: string
    textOnPrimary: string
    textOnAccent: string
  }
}