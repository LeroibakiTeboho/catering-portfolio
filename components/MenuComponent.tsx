import { motion } from "framer-motion";
import { useState } from "react";
import MenuItemsDb from "@/data/MenuItemsDb.json";

const MenuComponent = () => {
  const [activeCategory, setActiveCategory] = useState("all");

  // Filter menu items
  const filteredItems =
    activeCategory === "all"
      ? MenuItemsDb
      : MenuItemsDb.filter((item) => item.category === activeCategory);

  return (
    <div className="py-20 px-4 max-w-7xl mx-auto bg-white">
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
                  <h3 className="text-xl font-semibold text-[#2c2416]">
                    {item.name}
                  </h3>
                  <span className="text-lg font-bold text-[#d4a056]">
                    {item.price}
                  </span>
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
    </div>
  );
};

export default MenuComponent;
