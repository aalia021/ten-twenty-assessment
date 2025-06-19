import HeroSlider from "./HeroSlideShow";

export default function HeroSection() {
  return (
    <section className="relative w-full h-[calc(100vh-101px)]">
      {/* slider provides background + thumbnail */}
      <HeroSlider />

      {/* overlay headings */}
      <div className="relative z-10 max-w-[1400px] mx-auto h-full flex flex-col justify-center px-4 text-white">
        <p className="text-sm mb-2">Welcome To TenTwenty Farms</p>
        <h1 className="text-4xl md:text-6xl font-light leading-tight">
          From Our Farms <br /> To Your Hands
        </h1>
      </div>
    </section>
  );
}
