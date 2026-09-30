import type { Restaurant } from "./types"
/*
import logoP from "../assets/logo/"
import img1 from "../assets/images/"
*/

export const restaurant: Restaurant = {
  languages: {
    default: "es",
    available: ["es", "en"],
  },

  //logo: logoP,

  name: {
    es: "Nombre del restaurante",
    en: "Restaurant Name",
  },

  hero: {
    eyebrow: {
      es: "Bienvenidos",
      en: "Welcome",
    },
  },

  description: {
    es: "Una breve descripción del restaurante y de su propuesta gastronómica.",
    en: "A brief description of the restaurant and its culinary offering.",
  },

  about: {
    title: {
      es: "Sobre nosotros",
      en: "About us",
    },
    paragraphs: [
      {
        es: "Este texto representa el espacio destinado a la historia, filosofía o propuesta del restaurante.",
        en: "This text represents the space for the restaurant's story, philosophy, or concept.",
      },
      {
        es: "Durante la personalización este contenido será reemplazado por información real.",
        en: "During customization, this content will be replaced with real information.",
      },
    ],
  },

  menu: {
    categories: [
      {
        name: {
          es: "Categoría de ejemplo",
          en: "Example category",
        },
        items: [
          {
            name: {
              es: "Plato de ejemplo",
              en: "Example dish",
            },
            description: {
              es: "Descripción de ejemplo del plato.",
              en: "Example description of the dish.",
            },
            price: "₡4 500",
          },
          {
            name: {
              es: "Otro plato",
              en: "Another dish",
            },
            description: {
              es: "Otra descripción de ejemplo.",
              en: "Another example description.",
            },
            price: "₡5 000",
          },
        ],
      },
    ],
  },

  gallery: {
    images: [/*
       {
      src: img1,
      alt: {
        es: "Fotografía de prueba uno",
        en: "Test photograph one",
      },
    },
    {
      src: img2,
      alt: {
        es: "Fotografía de prueba dos",
        en: "Test photograph two",
      },
    },
    {
      src: img3,
      alt: {
        es: "Fotografía de prueba tres",
        en: "Test photograph three",
      },
    },*/
    ],
  },

  contact: {
    phone: "+506 0000-0000",
    whatsapp: "50600000000",
  },

  location: {
    address: {
      es: "Dirección del restaurante",
      en: "Restaurant address",
    },
    mapsUrl: "https://maps.google.com/",
  },

  schedule: [
    {
      days: {
        es: "Lunes a viernes",
        en: "Monday to Friday",
      },
      hours: {
        es: "11:00 AM - 9:00 PM",
        en: "11:00 AM - 9:00 PM",
      },
    },
    {
      days: {
        es: "Sábado y domingo",
        en: "Saturday and Sunday",
      },
      hours: {
        es: "10:00 AM - 10:00 PM",
        en: "10:00 AM - 10:00 PM",
      },
    },
  ],

  social: {
    instagram: "",
    facebook: "",
    tiktok: "",
  },

  theme: {
    primary: "#8B4513",
    secondary: "#F4E8D0",
    accent: "#D4A017",
    textOnPrimary: "#FFFFFF",
    textOnAccent: "#222222",
  },
}