import React, { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "./ui/button";
import "/src/style.css";

import CCAMLogo from "../assets/CCAMLogo.jpg";
import BenchtopBefore from "../assets/BenchtopBefore.jpg";
import BenchtopAfter from "../assets/BenchtopAfter.jpg";
import DeckBefore from "../assets/DeckBefore.jpg";
import DeckAfter from "../assets/DeckAfter.jpg";

export function ImageCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const totalSlides = 5;

  // Auto-rotate every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === totalSlides - 1 ? 0 : prevIndex + 1
      );
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? totalSlides - 1 : prevIndex - 1
    );
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === totalSlides - 1 ? 0 : prevIndex + 1
    );
  };

  // Hard-coded image + caption per index
  const renderImage = () => {
    switch (currentIndex) {
      case 0:
        return (
          <>
            <img
              src={CCAMLogo}
              alt="Capital Craft and Maintenance Logo"
              className="w-auto h-full object-center"
            />
          </>
        );
      case 1:
        return (
          <>
            <img
              src={BenchtopBefore}
              alt="Bench Before"
              className="w-auto h-full object-center"
            />
            <div className="absolute inset-0 flex justify-center items-top">
              <span className="text-white text-5xl font-bold drop-shadow-lg">
                Before
              </span>
            </div>
          </>
        );
      case 2:
        return (
          <>
            <img
              src={BenchtopAfter}
              alt="Carpenter working on custom furniture"
              className="w-auto h-full object-center"
            />
            <div className="absolute inset-0 flex justify-center items-top">
              <span className="text-white text-5xl font-bold drop-shadow-lg">
                After
              </span>
            </div>
          </>
        );
      case 3:
        return (
          <>
            <img
              src={DeckBefore}
              alt="Home renovation and repairs"
              className="w-auto h-full object-center"
            />
            <div className="absolute inset-0 flex justify-center items-top">
              <span className="text-white text-5xl font-bold drop-shadow-lg">
                Before
              </span>
            </div>
          </>
        );
      case 4:
        return (
          <>
            <img
              src={DeckAfter}
              alt="Professional carpentry tools"
              className="w-auto h-full object-center"
            />
            <div className="absolute inset-0 flex justify-center items-top">
              <span className="text-white text-5xl font-bold drop-shadow-lg">
                After
              </span>
            </div>
          </>
        );
      default:
        return null;
    }
  };

  return (
    <div className="relative w-full rounded-lg overflow-hidden">
      {/* Main Image */}
      <div className="w-full h-full bg-white">
        <div className="flex justify-center items-center w-full h-full bg-white relative">
          {/* Dark overlay for contrast */}
          <div className="absolute inset-0 bg-black/20" />
          {/* Hard-coded image + caption */}
          {renderImage()}
        </div>
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
        {Array.from({ length: totalSlides }).map((_, index) => (
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
