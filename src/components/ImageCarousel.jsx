import React from "react";
import { ChevronLeft, ChevronRight } from "lucide-react"
import { useState, useEffect } from "react"
import { Button } from "./ui/button"
import "/src/style.css"


const carouselImages = [
  {
    src: "/images/CAPITAL CRAFT_ logo_blue.jpg",
    alt: "Capital Craft and Maintaince Logo"
  },
  {
    src: "/images/BenchtopBefore.jpg",
    alt: "Bench Before",
    cap: "Before"
  },
  {
    src: "/images/BenchtopAfter.jpg",
    alt: "Carpenter working on custom furniture",
    cap: "After"
  },
  {
    src: "/images/DeckBefore.jpg",
    alt: "Home renovation and repairs",
    cap: "Before"
  },
  {
    src: "/images/DeckAfter.jpg",
    alt: "Professional carpentry tools",
    cropBottom: true,
    cap: "After"
  }
]

export function ImageCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0)

  // Auto-rotate every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === carouselImages.length - 1 ? 0 : prevIndex + 1
      )
    }, 5000)

    return () => clearInterval(interval)
  }, [])

  const goToPrevious = () => {
    setCurrentIndex(currentIndex === 0 ? carouselImages.length - 1 : currentIndex - 1)
  }

  const goToNext = () => {
    setCurrentIndex(currentIndex === carouselImages.length - 1 ? 0 : currentIndex + 1)
  }

  return (
    <div className="relative w-full  rounded-lg overflow-hidden ">
      {/* Main Image */}
      <div className="  w-full h-full bg-white">
        <div className="flex justify-center items-center w-full h-full bg-white">
          <img
            src={carouselImages[currentIndex].src}
            alt={carouselImages[currentIndex].alt}
            className={`w-auto h-full object-center `}
          />

        </div>



        {/* Overlay for better text contrast */}
        <div className="absolute inset-0 bg-black/20" />

        {/* Caption for Before/After */}
        {carouselImages[currentIndex].cap && (
          <div className="absolute inset-0 flex justify-center">
            <span className="text-white text-5xl font-bold drop-shadow-lg">
              {carouselImages[currentIndex].cap}
            </span>
          </div>
        )}
      </div>

      {/* Navigation Arrows */}
      <Button
        variant="ghost"
        size="icon"
        className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white text-black"
        onClick={goToPrevious}
      >
        <ChevronLeft className="w-5 h-5" />
      </Button>

      <Button
        variant="ghost"
        size="icon"
        className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white text-black"
        onClick={goToNext}
      >
        <ChevronRight className="w-5 h-5" />
      </Button>

      {/* Dots Indicator */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {carouselImages.map((_, index) => (
          <button
            key={index}
            className={`w-3 h-3 rounded-full transition-colors ${index === currentIndex ? 'bg-white' : 'bg-white/50'
              }`}
            onClick={() => setCurrentIndex(index)}
          />
        ))}
      </div>
    </div>
  )
}