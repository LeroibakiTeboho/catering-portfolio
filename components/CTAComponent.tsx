import { motion } from "framer-motion";
import React from "react";

const CTAComponent = () => {
  return (
    <div className="py-20 bg-gradient-to-r from-amber-500 to-orange-500 text-white">
      <div className="max-w-4xl mx-auto text-center px-4">
        <motion.h2
          className="text-4xl md:text-5xl font-serif mb-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Ready to Experience Exceptional Catering?
        </motion.h2>
        <p className="text-xl mb-10 max-w-2xl mx-auto">
          Book a private tasting session and let us create a custom menu for
          your special event.
        </p>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="bg-white text-amber-800 px-8 py-4 text-lg font-semibold rounded-full shadow-lg"
        >
          Schedule Your Tasting
        </motion.button>
      </div>
    </div>
  );
};

export default CTAComponent;
