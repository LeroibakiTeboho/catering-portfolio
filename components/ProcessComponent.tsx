import { motion } from "framer-motion";
import { SectionRef } from "@/types";

interface ProcessComponentProps {
  processRef: SectionRef;
}

const ProcessComponent = ({ processRef }: ProcessComponentProps) => {
  return (
    <div ref={processRef} className="py-20 bg-amber-50">
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
    </div>
  );
};

export default ProcessComponent;
