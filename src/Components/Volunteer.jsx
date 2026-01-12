import React from "react";
import Swal from "sweetalert2";
import { motion } from "framer-motion";

const Volunteer = () => {
  const handleToast = () => {
    Swal.fire({
      position: "center",
      icon: "success",
      title: "Thank you for joining as a volunteer!",
      text: "Together, we can build a cleaner and healthier community.",
      showConfirmButton: false,
      timer: 2500,
    });
  };

  return (
    <section className="w-full bg-orange-500 py-16 relative overflow-hidden">
      {/* Animated Background Circles */}
      {[...Array(5)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full bg-white/10"
          style={{
            width: `${100 + i * 50}px`,
            height: `${100 + i * 50}px`,
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 3 + i,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}

      <div className="max-w-5xl mx-auto px-6 text-center text-white relative z-10">
        <motion.h2
          className="text-4xl font-bold mb-4"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          🤝 Join as a Volunteer
        </motion.h2>

        <motion.p
          className="text-lg md:text-xl mb-8 opacity-90"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 0.9, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Be part of our mission to keep the community clean and green.
          Your small effort can create a big impact.
        </motion.p>

        <motion.button
          onClick={handleToast}
          className="px-10 py-3 bg-white text-orange-500 font-semibold text-lg rounded-full shadow-lg transition-all duration-300"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          whileHover={{ scale: 1.05, y: -5, boxShadow: "0 20px 40px rgba(0,0,0,0.2)" }}
          whileTap={{ scale: 0.95 }}
        >
          Become a Volunteer
        </motion.button>
      </div>
    </section>
  );
};

export default Volunteer;
