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
    </div>
  );
};

export default Carousel;
