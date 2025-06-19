// src/components/quality/CircularCarousel.jsx
import { useRef, useState, useEffect } from "react";
import ProductCard from "./ProductCard";

import product1 from "../../assets/QualityProducts/flower1.webp";
import product2 from "../../assets/QualityProducts/flower2.webp";

import product3 from "../../assets/QualityProducts/flower3.webp";
import product4 from "../../assets/QualityProducts/flower4.webp";

// src/components/quality/productData.js
export const products = [
  {
    /** Path (or import) to the portrait image */
    image: product1,
    /** Label that appears under the portrait */
    name: "Apples",
  },
  {
    image: product2,
    name: "Tomatoes",
  },
  {
    image: product3,
    name: "Cucumbers",
  },
  {
    image: product4,
    name: "Carrots",
  },
];

const radius = 160; // radius in px for circular orbit

export default function CircularCarousel() {
  const [angle, setAngle] = useState(0);
  const startX = useRef(null);
  const startAngle = useRef(0);
  const containerRef = useRef(null);

  // Handle drag
  const handleMouseDown = (e) => {
    startX.current = e.clientX;
    startAngle.current = angle;
    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseup", handleMouseUp);
  };

  const handleMouseMove = (e) => {
    if (startX.current !== null) {
      const dx = e.clientX - startX.current;
      setAngle(startAngle.current + dx * 0.3); // adjust sensitivity here
    }
  };

  const handleMouseUp = () => {
    startX.current = null;
    window.removeEventListener("mousemove", handleMouseMove);
    window.removeEventListener("mouseup", handleMouseUp);
  };

  useEffect(() => {
    const el = containerRef.current;
    el.addEventListener("touchstart", onTouchStart, { passive: false });
    el.addEventListener("touchmove", onTouchMove, { passive: false });
    el.addEventListener("touchend", onTouchEnd);
    return () => {
      el.removeEventListener("touchstart", onTouchStart);
      el.removeEventListener("touchmove", onTouchMove);
      el.removeEventListener("touchend", onTouchEnd);
    };
  }, [angle]);

  let touchStartX = 0;

  const onTouchStart = (e) => {
    touchStartX = e.touches[0].clientX;
  };

  const onTouchMove = (e) => {
    const touchX = e.touches[0].clientX;
    const dx = touchX - touchStartX;
    setAngle((prev) => prev + dx * 0.2);
    touchStartX = touchX;
  };

  const onTouchEnd = () => {
    touchStartX = 0;
  };

  return (
    <div
      className="relative w-[400px] h-[400px] mx-auto"
      onMouseDown={handleMouseDown}
      ref={containerRef}
    >
      {products.map((product, i) => {
        const theta = (360 / products.length) * i + angle;
        const rad = (theta * Math.PI) / 180;
        const x = radius * Math.cos(rad);
        const y = radius * Math.sin(rad);

        return (
          <div
            key={product.name + i}
            className="absolute transition-transform duration-200"
            style={{
              transform: `translate(${x + 150}px, ${y + 150}px)`,
            }}
          >
            <ProductCard {...product} />
          </div>
        );
      })}
    </div>
  );
}
