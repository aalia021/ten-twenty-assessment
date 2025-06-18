// src/components/layout/MainLayout.jsx
import Navbar from "./Navbar";
//import Footer from "./Footer"; optional, based on your design

export default function MainLayout({ children }) {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Top navigation */}
      <Navbar />

      {/* Page content */}
      <main className="flex-grow">{children}</main>

      {/* Footer (optional) */}
      {/* <Footer /> */}
    </div>
  );
}
