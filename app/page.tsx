"use client";
import HeroComponent from "@/components/HeroComponent";
import MenuComponent from "@/components/MenuComponent";
import ProcessComponent from "@/components/ProcessComponent";
import TestimonialComponent from "@/components/TestimonialComponent";
import AboutComponent from "@/components/AboutComponent";
import CTAComponent from "@/components/CTAComponent";
import Footer from "@/components/Footer";
import NavbarCompoment from "@/components/NavbarCompoment";
import { useRef } from "react";

export default function Home() {
  // Use the same RefObject type everywhere
  const heroRef = useRef<HTMLDivElement>(null);
  const menuRef = useRef<HTMLDivElement>(null);
  const processRef = useRef<HTMLDivElement>(null);
  const testimonialsRef = useRef<HTMLDivElement>(null);
  const aboutRef = useRef<HTMLDivElement>(null);

  return (
    <div className="min-h-screen bg-[#f8f4e9] text-[#2c2416] font-sans">
      <NavbarCompoment
        heroRef={heroRef}
        menuRef={menuRef}
        processRef={processRef}
        testimonialsRef={testimonialsRef}
        aboutRef={aboutRef}
      />

      <HeroComponent heroRef={heroRef} />
      <MenuComponent menuRef={menuRef} />
      <ProcessComponent processRef={processRef} />
      <TestimonialComponent testimonialsRef={testimonialsRef} />
      <AboutComponent aboutRef={aboutRef} />
      <CTAComponent />
      <Footer />
    </div>
  );
}
