// src/pages/Home.jsx
import MainLayout from "../components/layout/Layout";
import HeroSection from "../components/hero/HeroSection";
import QualityProducts from "../components/products/QualityProducts";

export default function Home() {
  return (
    <MainLayout>
      {/* Top banner */}
      <HeroSection />

      {/* ↓ Add more sections here as you build them */}
      <QualityProducts />
      {/* <FooterSection /> */}
    </MainLayout>
  );
}
