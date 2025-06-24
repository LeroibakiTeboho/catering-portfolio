import { motion } from "framer-motion";
import React from "react";

const AboutComponent = () => {
  return (
    <div className="py-20 px-4 max-w-7xl mx-auto">
      <div className="flex flex-col md:flex-row items-center gap-12">
        <motion.div
          className="md:w-1/2 relative"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div
            className="bg-cover bg-center h-96 rounded-lg shadow-xl"
            style={{
              backgroundImage:
                "url('https://images.unsplash.com/photo-1600565193348-f74bd3c7ccdf?ixlib=rb-4.0.3&auto=format&fit=crop&w=1770&q=80')",
            }}
          ></div>
          <div className="absolute -bottom-6 -right-6 bg-[#d4a056] w-24 h-24 rounded-full flex items-center justify-center">
            <span className="text-white text-6xl font-serif">"</span>
          </div>
        </motion.div>

        <motion.div
          className="md:w-1/2"
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl font-serif text-[#b8863e] mb-6">
            About Our Chef
          </h2>
          <p className="text-lg text-[#8a7f70] mb-6">
            <span className="text-[#d4a056] font-bold">Michelin-trained</span>{" "}
            with a passion for local ingredients, Chef Alexandra brings over 15
            years of culinary excellence to every event.
          </p>
          <p className="text-[#8a7f70] mb-8">
            After training at Le Cordon Bleu Paris and working in
            Michelin-starred restaurants across Europe, Chef Alexandra returned
            to her roots with a mission to create extraordinary dining
            experiences using locally-sourced, seasonal ingredients.
          </p>
          <ul className="space-y-3 mb-8">
            {[
              "Farm-to-table philosophy",
              "Seasonal menu rotations",
              "Custom dietary accommodations",
              "International culinary training",
            ].map((item, index) => (
              <motion.li
                key={index}
                className="flex items-center"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <svg
                  className="w-5 h-5 text-[#d4a056] mr-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 13l4 4L19 7"
                  ></path>
                </svg>
                {item}
              </motion.li>
            ))}
          </ul>
          <button className="px-6 py-3 bg-[#d4a056] text-white rounded-lg hover:bg-[#b8863e] transition-colors">
            View Full Biography
          </button>
        </motion.div>
      </div>
    </div>
  );
};

export default AboutComponent;
