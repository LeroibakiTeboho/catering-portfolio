import { motion } from "framer-motion";
import React from "react";

const HeroComponents = () => {
  return (
    <div className="relative h-screen flex items-center justify-center bg-gradient-to-r from-amber-50 to-orange-50 overflow-hidden">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1504674900247-0877df9cc836?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80')] bg-cover bg-center opacity-20"></div>

      <motion.div
        className="text-center px-4 z-10"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <motion.h1
          className="text-5xl md:text-7xl font-serif font-bold text-amber-900 mb-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          Savor Catering
        </motion.h1>
        <motion.p
          className="text-xl md:text-2xl text-amber-800 max-w-2xl mx-auto mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.8 }}
        >
          Elegant Flavors. Exceptional Service.
        </motion.p>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="bg-[#d4a056] text-white px-8 py-3 rounded-full text-lg font-medium shadow-lg hover:bg-[#b8863e] transition-colors"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.9, duration: 0.8 }}
        >
          Book a Tasting Session
        </motion.button>
      </motion.div>
    </div>
  );
};

export default HeroComponents;
