"use client"

import { useState } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight, X } from "lucide-react"

interface PropertyGalleryProps {
  images: string[]
  title: string
}

export default function PropertyGallery({ images, title }: PropertyGalleryProps) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [lightboxOpen, setLightboxOpen] = useState(false)

  const prev = () => setCurrentIndex((i) => (i === 0 ? images.length - 1 : i - 1))
  const next = () => setCurrentIndex((i) => (i === images.length - 1 ? 0 : i + 1))

  return (
    <>
      <div className="relative">
        <div
          className="relative h-[50vh] md:h-[60vh] rounded-2xl overflow-hidden cursor-pointer group"
          onClick={() => setLightboxOpen(true)}
        >
          <Image
            src={images[currentIndex]}
            alt={`${title} - Image ${currentIndex + 1}`}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
            sizes="100vw"
            priority
          />
          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors" />
        </div>

        <button
          onClick={(e) => { e.stopPropagation(); prev() }}
          className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/90 hover:bg-white shadow-lg flex items-center justify-center transition-all opacity-0 group-hover:opacity-100"
        >
          <ChevronLeft className="h-5 w-5 text-gray-800" />
        </button>
        <button
          onClick={(e) => { e.stopPropagation(); next() }}
          className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/90 hover:bg-white shadow-lg flex items-center justify-center transition-all opacity-0 group-hover:opacity-100"
        >
          <ChevronRight className="h-5 w-5 text-gray-800" />
        </button>

        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-2">
          {images.map((_, i) => (
            <button
              key={i}
              onClick={(e) => { e.stopPropagation(); setCurrentIndex(i) }}
              className={`w-2 h-2 rounded-full transition-all ${
                i === currentIndex ? "bg-white w-6" : "bg-white/50 hover:bg-white/80"
              }`}
            />
          ))}
        </div>

        <div className="absolute top-4 right-4 bg-black/50 text-white text-xs px-3 py-1.5 rounded-full">
          {currentIndex + 1} / {images.length}
        </div>
      </div>

        <div className="grid grid-cols-4 gap-2 mt-2">
          {images.slice(0, 4).map((img, i) => (
            <button
              key={i}
              onClick={() => setCurrentIndex(i)}
              className={`relative h-20 rounded overflow-hidden border transition-all ${
                i === currentIndex ? "border-terracotta" : "border-transparent hover:border-gray-300"
              }`}
            >
              <Image
                src={img}
                alt={`${title} - Thumbnail ${i + 1}`}
                fill
                className="object-cover"
                sizes="25vw"
              />
            </button>
          ))}
        </div>

      {lightboxOpen && (
        <div
          className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center"
          onClick={() => setLightboxOpen(false)}
        >
          <button className="absolute top-4 right-4 text-white/80 hover:text-white z-10">
            <X className="h-8 w-8" />
          </button>
          <button
            onClick={(e) => { e.stopPropagation(); prev() }}
            className="absolute left-4 top-1/2 -translate-y-1/2 text-white/80 hover:text-white"
          >
            <ChevronLeft className="h-10 w-10" />
          </button>
          <button
            onClick={(e) => { e.stopPropagation(); next() }}
            className="absolute right-4 top-1/2 -translate-y-1/2 text-white/80 hover:text-white"
          >
            <ChevronRight className="h-10 w-10" />
          </button>
          <div
            className="relative w-full max-w-5xl aspect-[16/10] mx-8"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={images[currentIndex]}
              alt={`${title} - Lightbox ${currentIndex + 1}`}
              fill
              className="object-contain"
              sizes="100vw"
              priority
            />
          </div>
          <div className="absolute bottom-6 text-white/60 text-sm">
            {currentIndex + 1} / {images.length}
          </div>
        </div>
      )}
    </>
  )
}
