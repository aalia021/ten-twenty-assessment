// src/components/quality/QualityProducts.jsx
import CircularCarousel from "./CircularCarousel";

export default function QualityProducts() {
  return (
    <section className="py-24 px-4 bg-[#F9F5F0] text-center">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-5xl font-light mb-4">
          Quality Products
        </h2>
        <p className="text-base md:text-lg text-gray-600 mb-12">
          We deliver fresh, high-quality goods straight from our farms to your
          home.
        </p>
      </div>

      <CircularCarousel />
    </section>
  );
}
