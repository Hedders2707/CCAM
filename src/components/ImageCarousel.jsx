import React, { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "./ui/button";

import CCAMLogo from "../assets/CCAMLogo.jpg";
import BenchtopBefore from "../assets/BenchtopBefore.jpg";
import BenchtopAfter from "../assets/BenchtopAfter.jpg";
import DeckBefore from "../assets/DeckBefore.jpg";
import DeckAfter from "../assets/DeckAfter.jpg";

export function ImageCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  // ⬇️ MOVE IMAGES **INSIDE** THE COMPONENT
  const carouselImages = [
    {
      src: CCAMLogo,
      alt: "Capital Craft and Maintenance Logo",
    },
    {
      src: BenchtopBefore,
      alt: "Bench Before",
      cap: "Before",
    },
    {
      src: BenchtopAfter,
      alt: "Carpenter working on custom furniture",
      cap: "After",
    },
    {
      src: DeckBefore,
      alt: "Home renovation and repairs",
      cap: "Before",
    },
    {
      src: DeckAfter,
      alt: "Professional carpentry tools",
      cap: "After",
    },
  ];

  // Auto-rotate every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === carouselImages.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const goToPrevious = () => {
    setCurrentIndex(
      currentIndex === 0 ? carouselImages.length - 1 : currentIndex - 1
    );
  };

  const goToNext = () => {
    setCurrentIndex(
      currentIndex === carouselImages.length - 1 ? 0 : currentIndex + 1
    );
  };

  return (
    <div className="relative w-full rounded-lg overflow-hidden">
      {/* Main Image */}
      <div className="w-full h-full bg-white">
        <div className="flex justify-center items-center w-full h-full bg-white">
          <img
            src={carouselImages[currentIndex].src}
            alt={carouselImages[currentIndex].alt}
            className="w-auto h-full object-center"
          />
        </div>

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/20" />

        {/* Caption */}
        {carouselImages[currentIndex].cap && (
          <div className="absolute inset-0 flex justify-center items-top">
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

      {/* Dots */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {carouselImages.map((_, index) => (
          <button
            key={index}
            className={`w-3 h-3 rounded-full transition-colors ${index === currentIndex ? "bg-white" : "bg-white/50"
              }`}
            onClick={() => setCurrentIndex(index)}
          />
        ))}
      </div>
    </div>
  );
}
