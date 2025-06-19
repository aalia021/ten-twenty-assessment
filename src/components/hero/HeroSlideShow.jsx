import { useState } from "react";
import useInterval from "../../hooks/useInterval";
import ThumbnailProgress from "./ThumbnailProgress";
import ImageOne from "../../assets/HeroSection/hero-background.webp";
import ImageTwo from "../../assets/HeroSection/hero-background1.jpg";
import ImageThree from "../../assets/HeroSection/hero-background2.jpg";

/* slide data lives here or can be imported */
const slides = [
  { bg: ImageOne, thumb: ImageTwo },
  { bg: ImageTwo, thumb: ImageThree },
  { bg: ImageThree, thumb: ImageOne },
];

const DURATION = 5000; // 5 s

export default function HeroSlideShow() {
  const [index, setIndex] = useState(0);

  /* auto‑advance */
  useInterval(() => setIndex((i) => (i + 1) % slides.length), DURATION);

  /* manual next */
  function next() {
    setIndex((i) => (i + 1) % slides.length);
  }

  const { bg, thumb } = slides[index];

  return (
    <>
      {/* BG image */}
      <img
        src={bg}
        alt=""
        className="absolute inset-0 w-full h-full object-cover"
        draggable={false}
      />

      {/* Thumbnail controller */}
      <ThumbnailProgress
        key={index} // <-- forces remount, restarts animation
        thumb={thumb}
        onNext={next}
        duration={DURATION}
      />
    </>
  );
}
