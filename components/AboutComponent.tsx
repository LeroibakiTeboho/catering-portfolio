import { motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";

const AboutComponent = () => {
  const [showBiographyModal, setShowBiographyModal] = useState(false);

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
          {/* <div
            className="bg-cover bg-center h-96 rounded-lg shadow-xl"
            style={{
              backgroundImage:
                "url('/chef.avif')",
            }}
          ></div> */}
          <Image
            src="/chef.avif"
            height={600}
            width={600}
            alt="Picture of the author"
            className="rounded-lg shadow-xl"
          />
          <div className="absolute -bottom-6 -right-6 bg-[#d4a056] w-24 h-24 rounded-full flex items-center justify-center">
            <span className="text-white text-6xl font-serif">&ldquo;</span>
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
          <button
            className="px-6 py-3 bg-[#d4a056] text-white rounded-lg hover:bg-[#b8863e] transition-colors"
            onClick={() => setShowBiographyModal(true)}
          >
            View Full Biography
          </button>
        </motion.div>
      </div>

      {/* Biography Modal */}
      {showBiographyModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <motion.div
            className="bg-white rounded-xl shadow-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.3 }}
          >
            <div className="p-6">
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-2xl font-serif text-[#b8863e]">
                  Chef Alexandra&apos;s Biography
                </h3>
                <button
                  onClick={() => setShowBiographyModal(false)}
                  className="text-gray-500 hover:text-gray-700"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </div>

              <div className="flex flex-col md:flex-row gap-8">
                <div className="md:w-1/3">
                  <div
                    className="bg-cover bg-center h-64 rounded-lg shadow-md"
                    style={{
                      backgroundImage:
                        "url('https://images.unsplash.com/photo-1600565193348-f74bd3c7ccdf?ixlib=rb-4.0.3&auto=format&fit=crop&w=1770&q=80')",
                    }}
                  ></div>
                  <div className="mt-4 text-center">
                    <h4 className="text-xl font-semibold">
                      Chef Alexandra Martin
                    </h4>
                    <p className="text-[#8a7f70]">Executive Chef & Owner</p>
                  </div>
                </div>

                <div className="md:w-2/3">
                  <p className="mb-4 text-gray-700">
                    Chef Alexandra Martin is a Michelin-trained culinary artist
                    with over 15 years of experience in the world&apos;s finest
                    kitchens. Her journey began in Paris at the prestigious Le
                    Cordon Bleu, where she mastered the fundamentals of French
                    cuisine.
                  </p>
                  <p className="mb-4 text-gray-700">
                    After graduation, Chef Alexandra honed her skills in
                    Michelin-starred restaurants across Europe, including a
                    three-year tenure at Osteria Francescana in Modena, Italy,
                    and a transformative experience at Noma in Copenhagen. Her
                    innovative approach to combining classical techniques with
                    local, seasonal ingredients quickly earned her recognition
                    in the culinary world.
                  </p>
                  <p className="mb-4 text-gray-700">
                    In 2018, Chef Alexandra returned to her roots with a mission
                    to elevate catering to a fine dining experience. She founded
                    Savor Catering with the philosophy that every event deserves
                    exceptional food and impeccable service. Her menus reflect a
                    deep respect for local farmers and producers, with
                    ingredients sourced from within a 100-mile radius whenever
                    possible.
                  </p>
                  <p className="mb-4 text-gray-700">
                    Chef Alexandra&apos;s culinary style is characterized by
                    clean, vibrant flavors and elegant presentation. She
                    specializes in creating custom menus that reflect each
                    client&apos;s unique vision while accommodating diverse
                    dietary needs. Her passion for mentorship has also led to
                    the development of a thriving apprenticeship program that
                    trains the next generation of culinary talent.
                  </p>
                  <div className="bg-[#f8f4e9] p-4 rounded-lg">
                    <h4 className="font-serif text-[#b8863e] mb-2">
                      Culinary Philosophy
                    </h4>
                    <p className="text-gray-700 italic">
                      &ldquo;Great food begins with respect - for the
                      ingredients, the people who produce them, and the guests
                      we serve. My mission is to create memorable dining
                      experiences that celebrate local abundance while pushing
                      creative boundaries.&rdquo;
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </div>
  );
};

export default AboutComponent;
