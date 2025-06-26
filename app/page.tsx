"use client";
import HeroComponent from "@/components/HeroComponent";
import MenuComponent from "@/components/MenuComponent";
import ProcessComponent from "@/components/ProcessComponent";
import TestimonialComponent from "@/components/TestimonialComponent";
import AboutComponent from "@/components/AboutComponent";
import CTAComponent from "@/components/CTAComponent";
import Footer from "@/components/Footer";



export default function Home() {
  

  return (
    <div className="min-h-screen bg-[#f8f4e9] text-[#2c2416] font-sans">
      <HeroComponent />
      <MenuComponent />
      <ProcessComponent />
      <TestimonialComponent />
      <AboutComponent />
      <CTAComponent />  
      <Footer />   
          

      {/* Footer */}
     
    </div>
  );
}
