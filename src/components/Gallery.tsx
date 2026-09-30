import { ChevronLeft, ChevronRight, X } from "lucide-react"
import { motion } from "motion/react"
import { useEffect, useState } from "react"

import { restaurant } from "../data/restaurant"
import { useLanguage } from "../i18n/useLanguage"

function Gallery() {
  const { t, text } = useLanguage()
  const images = restaurant.gallery?.images ?? []

  const [selectedIndex, setSelectedIndex] = useState<number | null>(
    null,
  )

  const selectedImage =
    selectedIndex !== null ? images[selectedIndex] : null

  const closeLightbox = () => {
    setSelectedIndex(null)
  }

  const showPrevious = () => {
    if (selectedIndex === null || images.length === 0) {
      return
    }

    setSelectedIndex(
      (selectedIndex - 1 + images.length) % images.length,
    )
  }

  const showNext = () => {
    if (selectedIndex === null || images.length === 0) {
      return
    }

    setSelectedIndex((selectedIndex + 1) % images.length)
  }

  useEffect(() => {
    if (selectedIndex === null) {
      return
    }

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setSelectedIndex(null)
        return
      }

      if (event.key === "ArrowLeft") {
        setSelectedIndex(
          (selectedIndex - 1 + images.length) % images.length,
        )
        return
      }

      if (event.key === "ArrowRight") {
        setSelectedIndex(
          (selectedIndex + 1) % images.length,
        )
      }
    }

    document.addEventListener("keydown", handleKeyDown)

    return () => {
      document.removeEventListener("keydown", handleKeyDown)
    }
  }, [selectedIndex, images.length])

  useEffect(() => {
    document.body.style.overflow =
      selectedIndex !== null ? "hidden" : ""

    return () => {
      document.body.style.overflow = ""
    }
  }, [selectedIndex])

  if (images.length === 0) {
    return null
  }

  return (
    <>
      <section className="section" id="gallery">
        <div className="container">
          <div className="section__header">
            <p className="section__eyebrow">
              {t("gallery")}
            </p>

            <h2 className="section__title">
              {t("gallery")}
            </h2>
          </div>

          <div className="gallery__grid">
            {images.map((image, index) => (
              <motion.button
                key={`${image.src}-${index}`}
                className="gallery__item"
                type="button"
                onClick={() => setSelectedIndex(index)}
                whileHover={{ y: -4 }}
                whileTap={{ scale: 0.98 }}
                aria-label={text(image.alt)}
              >
                <img
                  src={image.src}
                  alt={text(image.alt)}
                />
              </motion.button>
            ))}
          </div>
        </div>
      </section>

      {selectedImage && (
        <div
          className="gallery-lightbox"
          role="dialog"
          aria-modal="true"
          aria-label={t("gallery")}
          onClick={closeLightbox}
        >
          <button
            className="gallery-lightbox__close"
            type="button"
            onClick={closeLightbox}
            aria-label={t("closeMenu")}
          >
            <X size={28} />
          </button>

          {images.length > 1 && (
            <button
              className="gallery-lightbox__navigation gallery-lightbox__navigation--previous"
              type="button"
              onClick={(event) => {
                event.stopPropagation()
                showPrevious()
              }}
              aria-label={t("previousImage")}
            >
              <ChevronLeft size={32} />
            </button>
          )}

          <motion.img
            key={selectedImage.src}
            className="gallery-lightbox__image"
            src={selectedImage.src}
            alt={text(selectedImage.alt)}
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.2 }}
            onClick={(event) => event.stopPropagation()}
          />

          {images.length > 1 && (
            <button
              className="gallery-lightbox__navigation gallery-lightbox__navigation--next"
              type="button"
              onClick={(event) => {
                event.stopPropagation()
                showNext()
              }}
              aria-label={t("nextImage")}
            >
              <ChevronRight size={32} />
            </button>
          )}
        </div>
      )}
    </>
  )
}

export default Gallery