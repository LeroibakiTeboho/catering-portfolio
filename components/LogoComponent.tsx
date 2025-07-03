import { motion } from "framer-motion";

const Logo = () => {
  return (
    <motion.div
      className="flex items-center"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="w-10 h-10 rounded-full bg-[#d4a056] flex items-center justify-center mr-2">
        <span className="text-white font-serif text-xl font-bold">G</span>
      </div>
      <span className="font-serif text-xl text-[#2c2416] font-bold">
        Gourmet
      </span>
    </motion.div>
  );
};

export default Logo;
