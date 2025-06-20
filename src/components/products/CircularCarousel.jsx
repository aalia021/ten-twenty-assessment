import { useRef, useState } from "react";
import ProductCard from "./ProductCard";

import product1 from "../../assets/QualityProducts/flower1.webp";
import product2 from "../../assets/QualityProducts/flower2.webp";
import product3 from "../../assets/QualityProducts/flower3.webp";
import product4 from "../../assets/QualityProducts/flower4.webp";

// src/components/quality/productData.js
export const products = [
  { image: product1, name: "Apples" },
  { image: product2, name: "Tomatoes" },
  { image: product3, name: "Cucumbers" },
  { image: product4, name: "Carrots" },
];

/* CONFIG */
// Adjusted values for MUCH LARGER cards
const HORIZONTAL_SPREAD = 450; // Increased significantly for larger cards
const VERTICAL_OFFSET_SIDE_CARDS = 80; // Increased for more vertical separation
const ROTATION_DEG = 10; // Slightly reduced or kept for subtle tilt

const STEP = 60; // pixels to drag before rotation triggers (can keep this)
const CARD_BASE_TOP_POSITION = 50; // Adjusted higher to center the much larger cards vertically

// Significantly increased base scale factor for all cards
const BASE_CARD_SCALE = 1.8; // e.g., 180% of original ProductCard size

export default function CircularCarousel() {
  const [index, setIndex] = useState(0); // active (center) card
  const startX = useRef(null);
  const startIdx = useRef(0);
  const CARD_COUNT = products.length;

  const clampIndex = (i) => (i + CARD_COUNT) % CARD_COUNT;

  const beginDrag = (clientX) => {
    startX.current = clientX;
    startIdx.current = index;
    document.body.style.cursor = "move";
    window.addEventListener("pointermove", onMove);
    window.addEventListener("pointerup", endDrag);
  };

  const onMove = (e) => {
    const dx = e.clientX - startX.current;
    const delta = Math.round(dx / STEP);
    setIndex(clampIndex(startIdx.current - delta));
  };

  const endDrag = () => {
    window.removeEventListener("pointermove", onMove);
    window.removeEventListener("pointerup", endDrag);
    startX.current = null;
    document.body.style.cursor = "default";
  };

  // Removed stepRotate as buttons are being removed, but keeping it if you want to use it programmatically
  // const stepRotate = (dir) => setIndex((prev) => clampIndex(prev + dir));

  const visible = [-1, 0, 1].map((offset) => clampIndex(index + offset));

  return (
    <div className="relative w-full h-[380px] flex items-center justify-center select-none mt-10">
      {/* Removed Arrows */}
      {/* <button
        aria-label="prev"
        onClick={() => stepRotate(-1)}
        className="absolute left-4 md:left-20 top-1/2 -translate-y-1/2 text-2xl bg-white rounded-full shadow w-10 h-10 flex items-center justify-center z-30"
      >
        ❮
      </button>
      <button
        aria-label="next"
        onClick={() => stepRotate(1)}
        className="absolute right-4 md:right-20 top-1/2 -translate-y-1/2 text-2xl bg-white rounded-full shadow w-10 h-10 flex items-center justify-center z-30"
      >
        ❯
      </button> */}

      {/* Cards */}
      {visible.map((idx, i) => {
        const offset = i - 1; // -1 (left) 0 (center) 1 (right)

        let translateX = 0;
        let translateY = 0;
        let rotateDeg = 0;
        let zIndex = 10;
        let scaleFactor = BASE_CARD_SCALE;

        if (offset === -1) {
          translateX = -HORIZONTAL_SPREAD / 2;
          translateY = VERTICAL_OFFSET_SIDE_CARDS;
          rotateDeg = -ROTATION_DEG;
          zIndex = 5;
          scaleFactor *= 0.8; // Make side cards 80% of BASE_CARD_SCALE
        } else if (offset === 1) {
          translateX = HORIZONTAL_SPREAD / 2;
          translateY = VERTICAL_OFFSET_SIDE_CARDS; // CORRECTED: This was 'VERTATION_DEG'
          rotateDeg = ROTATION_DEG;
          zIndex = 5;
          scaleFactor *= 0.8; // Make side cards 80% of BASE_CARD_SCALE
        } else {
          zIndex = 20;
          scaleFactor *= 1.05; // Make center card slightly larger than BASE_CARD_SCALE
        }

        return (
          <div
            key={products[idx].name}
            className={`transition-all duration-300 ease-out origin-center select-none`}
            style={{
              position: "absolute",
              top: CARD_BASE_TOP_POSITION,
              left: "50%",
              transform: `translateX(-50%) translateY(${translateY}px) translateX(${translateX}px) rotate(${rotateDeg}deg) scale(${scaleFactor})`,
              zIndex: zIndex,
              cursor: "move",
            }}
            onPointerDown={(e) => beginDrag(e.clientX)}
          >
            <ProductCard {...products[idx]} />
          </div>
        );
      })}
    </div>
  );
}
