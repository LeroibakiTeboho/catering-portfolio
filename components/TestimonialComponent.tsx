import { motion } from "framer-motion";
import TestimonialsDb from "@/data/TestimonialsDb.json";
import { useState } from "react";
import { SectionRef } from "@/types";

interface TestimonialComponentProps {
  testimonialsRef: SectionRef;
}

const TestimonialComponent = ({
  testimonialsRef,
}: TestimonialComponentProps) => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  return (
    <div
      ref={testimonialsRef}
      className="h-screen relative bg-gray-900 text-white"
    >
      <div className="absolute inset-0 flex items-center justify-center">
        <motion.div
          key={currentTestimonial}
          className="max-w-3xl text-center px-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <div className="text-5xl font-serif mb-8">“</div>
          <p className="text-2xl md:text-3xl mb-8 italic">
            {TestimonialsDb[currentTestimonial].text}
          </p>
          <div className="text-xl">
            <p className="text-amber-300 font-medium">
              {TestimonialsDb[currentTestimonial].author}
            </p>
            <p className="text-gray-400">
              {TestimonialsDb[currentTestimonial].event}
            </p>
          </div>
        </motion.div>
      </div>

      {/* Navigation Dots */}
      <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 flex gap-3">
        {TestimonialsDb.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentTestimonial(index)}
            className={`w-3 h-3 rounded-full transition-all ${
              currentTestimonial === index
                ? "bg-amber-500 scale-125"
                : "bg-gray-600"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default TestimonialComponent;
