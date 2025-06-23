'use client'
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import MenuItemsDb from "@/data/MenuItemsDb.json";
import TestimonialsDb from "@/data/TestimonialsDb.json";

export default function Home() {
  const [activeCategory, setActiveCategory] = useState("all");
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  // Filter menu items
  const filteredItems =
    activeCategory === "all"
      ? MenuItemsDb
      : MenuItemsDb.filter((item) => item.category === activeCategory);

  // Auto-advance testimonials
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % TestimonialsDb.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-[#f8f4e9] text-[#2c2416] font-sans">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center bg-gradient-to-r from-amber-50 to-orange-50 overflow-hidden">
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
      </section>

      {/* Menu Section */}
      <section className="py-20 px-4 max-w-7xl mx-auto bg-white">
        <div className="text-center mb-16">
          <motion.h2
            className="text-4xl font-serif text-amber-900 mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Our Menu
          </motion.h2>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {["all", "appetizers", "entrees", "desserts", "drinks"].map(
              (category) => (
                <motion.button
                  key={category}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setActiveCategory(category)}
                  className={`px-6 py-2 rounded-full capitalize transition-colors ${
                    activeCategory === category
                      ? "bg-amber-600 text-white"
                      : "bg-amber-100 text-amber-800"
                  }`}
                >
                  {category}
                </motion.button>
              )
            )}
          </div>

          {/* Menu Items Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {filteredItems.map((item, index) => (
              <motion.div
                key={item.id}
                className="bg-white rounded-xl shadow-lg overflow-hidden border border-[#eae7e0] transition-all hover:shadow-xl"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -10 }}
              >
                <div 
                  className="h-48 bg-cover bg-center" 
                  style={{ backgroundImage: `url(${item.image})` }}
                ></div>
                <div className="p-6">
                  <div className="flex justify-between items-center mb-3">
                    <h3 className="text-xl font-semibold text-[#2c2416]">{item.name}</h3>
                    <span className="text-lg font-bold text-[#d4a056]">{item.price}</span>
                  </div>
                  <p className="text-[#8a7f70] mb-4">{item.description}</p>
                  <span className="inline-block px-3 py-1 bg-[#f8f4e9] text-[#b8863e] rounded-full text-sm capitalize">
                    {item.category}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>



        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-amber-50">
        <div className="max-w-7xl mx-auto px-4">
          <motion.h2
            className="text-4xl font-serif text-center text-amber-900 mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Our Process
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              {
                step: 1,
                title: "Plan",
                desc: "We collaborate with you to design a custom menu",
              },
              {
                step: 2,
                title: "Prep",
                desc: "Our chefs source the finest ingredients",
              },
              {
                step: 3,
                title: "Serve",
                desc: "Flawless service with professional staff",
              },
            ].map((process, index) => (
              <motion.div
                key={process.step}
                className="text-center bg-white p-8 rounded-xl shadow-md"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
              >
                <div className="w-16 h-16 rounded-full bg-amber-600 flex items-center justify-center text-white text-2xl font-bold mx-auto mb-6">
                  {process.step}
                </div>
                <h3 className="text-2xl font-semibold text-amber-900 mb-3">
                  {process.title}
                </h3>
                <p className="text-gray-600">{process.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial Slider */}
      <section className="h-screen relative bg-gray-900 text-white">
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
      </section>

      {/* About Chef */}
      <section className="py-20 px-4 max-w-7xl mx-auto">
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
              style={{ backgroundImage: "url('https://images.unsplash.com/photo-1600565193348-f74bd3c7ccdf?ixlib=rb-4.0.3&auto=format&fit=crop&w=1770&q=80')" }}
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
            <h2 className="text-4xl font-serif text-[#b8863e] mb-6">About Our Chef</h2>
            <p className="text-lg text-[#8a7f70] mb-6">
              <span className="text-[#d4a056] font-bold">Michelin-trained</span> with a passion for local ingredients, Chef Alexandra brings over 15 years of culinary excellence to every event.
            </p>
            <p className="text-[#8a7f70] mb-8">
              After training at Le Cordon Bleu Paris and working in Michelin-starred restaurants across Europe, Chef Alexandra returned to her roots with a mission to create extraordinary dining experiences using locally-sourced, seasonal ingredients.
            </p>
            <ul className="space-y-3 mb-8">
              {['Farm-to-table philosophy', 'Seasonal menu rotations', 'Custom dietary accommodations', 'International culinary training'].map((item, index) => (
                <motion.li 
                  key={index}
                  className="flex items-center"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <svg className="w-5 h-5 text-[#d4a056] mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
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
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-amber-500 to-orange-500 text-white">
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
      </section>

      {/* Footer */}
      <footer className="bg-[#2c2416] text-white py-12">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div>
              <h3 className="text-2xl font-serif mb-4">Savor Catering</h3>
              <p className="text-amber-200">
                Elegant Flavors. Exceptional Service.
              </p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
              <p className="mb-2">contact@savorcatering.com</p>
              <p className="mb-2">(555) 123-4567</p>
              <p>123 Culinary Avenue, Foodie City</p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Follow Us</h4>
              <div className="flex gap-4">
                <a
                  href="#"
                  className="text-amber-200 hover:text-white transition-colors"
                >
                  Instagram
                </a>
                <a
                  href="#"
                  className="text-amber-200 hover:text-white transition-colors"
                >
                  Facebook
                </a>
                <a
                  href="#"
                  className="text-amber-200 hover:text-white transition-colors"
                >
                  Twitter
                </a>
              </div>
            </div>
          </div>
          <div className="border-t border-amber-800 pt-8 text-center text-gray-400">
            <p>
              © {new Date().getFullYear()} Savor Catering. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
