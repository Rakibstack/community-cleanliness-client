import React from 'react';
import { motion } from "framer-motion";

const Loader = () => {

     const circles = [...Array(5)];
     
    return (
        <div>

           <div className="min-h-screen flex flex-col items-center justify-center bg-[var(--bg-color)] text-[var(--text-color)] px-4">
      
      <div className="relative w-32 h-32">
        {circles.map((_, i) => (
          <motion.div
            key={i}
            className="absolute top-1/2 left-1/2 w-6 h-6 rounded-full bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 shadow-lg"
            style={{ marginTop: '-12px', marginLeft: '-12px' }}
            animate={{
              scale: [0.5, 1.2, 0.5],
              x: [
                0,
                30 * Math.cos((i * 72 * Math.PI) / 180),
                0,
              ],
              y: [
                0,
                30 * Math.sin((i * 72 * Math.PI) / 180),
                0,
              ],
              rotate: [0, 360, 0],
              opacity: [0.5, 1, 0.5],
            }}
            transition={{
              repeat: Infinity,
              duration: 2,
              delay: i * 0.2,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      <motion.p
        className="mt-8 text-xl font-semibold opacity-90"
        animate={{ y: [0, -10, 0] }}
        transition={{ repeat: Infinity, duration: 0.6 }}
      >
        Loading...
      </motion.p>
    </div>
            
        </div>
    );
};

export default Loader;