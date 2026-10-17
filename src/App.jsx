import { useEffect, useState } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import AboutSection from "./components/AboutSection";
import FactorySection from "./components/FactorySection";
import ProductsSection from "./components/ProductsSection";
import ComingSoonSection from "./components/ComingSoonSection";
import WhySection from "./components/WhySection";
import ProductSpecsSection from "./components/ProductSpecsSection";
import BuySection from "./components/BuySection";
import AmbassadorsSection from "./components/AmbassadorsSection";
import PartnersSection from "./components/PartnersSection";
import ContactsSection from "./components/ContactsSection";
import Footer from "./components/Footer";
import ExperienceSection from "./components/ExperienceSection";
import VisualGallery from "./components/VisualGallery";
import useVisualMotion, { useReducedMotion } from "./hooks/useVisualMotion";
export default function App() {
  const [line, setLine] = useState("hard");
  const [paused, setPaused] = useState(false);
  const reducedMotion = useReducedMotion();
  const motionPaused = paused || reducedMotion;
  useVisualMotion(motionPaused);
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) =>
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        }),
      { threshold: 0.06 },
    );
    document.querySelectorAll(".reveal").forEach((el) => observer.observe(el));
    document.documentElement.classList.add("motion-ready");
    return () => {
      observer.disconnect();
      document.documentElement.classList.remove("motion-ready");
    };
  }, []);
  return (
    <div className="app">
      <div className="reading-progress" aria-hidden="true" />
      <Header
        motionPaused={motionPaused}
        motionLocked={reducedMotion}
        onMotionToggle={() => setPaused(!paused)}
      />
      <main>
        <Hero line={line} onLineChange={setLine} />
        <ProductsSection line={line} onLineChange={setLine} />
        <ExperienceSection onLineChange={setLine} />
        <AboutSection />
        <VisualGallery motionPaused={motionPaused} />
        <FactorySection />
        <ComingSoonSection />
        <AmbassadorsSection />
        <ProductSpecsSection />
        <WhySection />
        <BuySection />
        <PartnersSection />
        <ContactsSection />
      </main>
      <Footer />
    </div>
  );
}
