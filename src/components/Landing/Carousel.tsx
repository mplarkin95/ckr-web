import React, { useState, useEffect, useRef } from "react";

interface ItemProps {
  component: React.ReactNode;
  url: string;
}

interface CarouselProps {
  items: ItemProps[];
}

const Carousel: React.FC<CarouselProps> = ({ items }) => {
  const [currentItemIndex, setCurrentItemIndex] = useState(0);
  const [scrollInterval, setScrollInterval] = useState<NodeJS.Timeout | null>(
    null
  );
  const carouselRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    startAutoScroll();
    return () => {
      stopAutoScroll();
    };
  }, []);

  const startAutoScroll = () => {
    setScrollInterval(
      setInterval(() => {
        if (currentItemIndex === items.length - 1) {
          setCurrentItemIndex(0);
        } else {
          setCurrentItemIndex(currentItemIndex + 1);
        }
      }, 3000)
    );
  };

  const stopAutoScroll = () => {
    if (scrollInterval) {
      clearInterval(scrollInterval);
      setScrollInterval(null);
    }
  };

  const handleDotClick = (index: number) => {
    setCurrentItemIndex(index);
    stopAutoScroll();
  };

  const handlePrevClick = () => {
    if (currentItemIndex === 0) {
      setCurrentItemIndex(items.length - 1);
    } else {
      setCurrentItemIndex(currentItemIndex - 1);
    }
    stopAutoScroll();
  };

  const handleNextClick = () => {
    if (currentItemIndex === items.length - 1) {
      setCurrentItemIndex(0);
    } else {
      setCurrentItemIndex(currentItemIndex + 1);
    }
    stopAutoScroll();
  };

  return (
    <div className="relative">
      <div className="flex overflow-hidden" ref={carouselRef}>
        {items.map(({ component: Component, url }, index) => (
          <div
            key={index}
            className={`w-full ${index === currentItemIndex ? "" : "hidden"}`}
          >
            {Component}
          </div>
        ))}
      </div>
      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2">
        <div className="flex justify-center">
          {items.map((_, index) => (
            <button
              key={index}
              className={`w-3 h-3 hover:bg-gray-700 rounded-full mx-1 focus:outline-none${
                index === currentItemIndex ? " bg-gray-700" : ""
              }`}
              onClick={() => handleDotClick(index)}
            />
          ))}
        </div>
      </div>
      <button
        className="absolute z-10 top-1/2 left-0 transform -translate-y-1/2 hover:bg-gray-700 rounded-full focus:outline-none"
        onClick={handlePrevClick}
      >
        <svg className="w-6 h-6" viewBox="0 0 24 24">
          <path
            fill="currentColor"
            d="M15.41,7.42L10.83,12L15.41,16.59L14,18L8,12L14,6L15.41,7.42Z"
          />
        </svg>
      </button>
      <button
        className="absolute z-10 top-1/2 right-0 transform -translate-y-1/2 hover:bg-gray-700 rounded-full focus:outline-none"
        onClick={handleNextClick}
      >
        <svg className="w-6 h-6" viewBox="0 0 24 24">
          <path
            fill="currentColor"
            d="M8,7.42L9.41,6L15.41,12L9.41,18L8,16.59L12.58,12L8,7.42Z"
          />
        </svg>
      </button>
    </div>
  );
};

export default Carousel;
