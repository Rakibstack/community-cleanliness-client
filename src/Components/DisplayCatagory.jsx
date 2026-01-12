import React, { useRef } from "react";
import {
  Trash2,
  Building2,
  Wrench,
  Route,
} from "lucide-react";
import { motion, useInView } from "framer-motion";

const categories = [
  {
    title: "Garbage",
    desc:
      "Improperly disposed waste causing environmental pollution and public health issues.",
    icon: Trash2,
  },
  {
    title: "Illegal Construction",
    desc:
      "Unauthorized building work violating city rules and posing safety risks.",
    icon: Building2,
  },
  {
    title: "Broken Public Property",
    desc:
      "Damaged public assets requiring urgent repair and maintenance.",
    icon: Wrench,
  },
  {
    title: "Road Damage",
    desc:
      "Potholes and cracked roads creating traffic and safety hazards.",
    icon: Route,
  },
];

const DisplayCategory = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2
      }
    }
  };

  const cardVariants = {
    hidden: { 
      y: 50, 
      opacity: 0,
      scale: 0.9
    },
    visible: {
      y: 0,
      opacity: 1,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 12
      }
    }
  };

  return (
    <section ref={sectionRef} className="py-20 bg-theme-secondary/40 transition-colors duration-300">
      <div className="container mx-auto w-11/12">
        {/* Header */}
        <motion.div
          className="text-center mb-14"
          initial={{ opacity: 0, y: -30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -30 }}
          transition={{ duration: 0.8 }}
        >
          <motion.h2
            className="text-3xl md:text-4xl font-bold text-theme-primary"
            initial={{ scale: 0.9 }}
            animate={isInView ? { scale: 1 } : { scale: 0.9 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Issue Categories
          </motion.h2>
          <motion.p
            className="mt-3 text-theme-secondary max-w-xl mx-auto"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            Report common civic issues easily and help keep your community clean
            and safe.
          </motion.p>
        </motion.div>

        {/* Cards */}
        <motion.div
          className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {categories.map((cat, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover={{ 
                y: -10, 
                scale: 1.03,
                transition: { duration: 0.3 }
              }}
              whileTap={{ scale: 0.98 }}
              className="group bg-theme-card rounded-2xl p-6 shadow-md 
              transition-all duration-300
              hover:shadow-[0_12px_40px_rgba(249,115,22,0.15)]"
            >
              {/* Icon */}
              <motion.div
                className="w-14 h-14 flex items-center justify-center rounded-xl
                bg-orange-100 text-orange-500 mb-5
                group-hover:bg-orange-500 group-hover:text-white transition dark:bg-orange-500/20"
                whileHover={{ rotate: [0, -10, 10, -10, 0] }}
                transition={{ duration: 0.5 }}
              >
                <cat.icon size={28} />
              </motion.div>

              {/* Text */}
              <motion.h3
                className="text-xl font-semibold text-theme-primary mb-2"
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                transition={{ delay: index * 0.1 + 0.5 }}
              >
                {cat.title}
              </motion.h3>
              <motion.p
                className="text-theme-secondary text-sm leading-relaxed"
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                transition={{ delay: index * 0.1 + 0.6 }}
              >
                {cat.desc}
              </motion.p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default DisplayCategory;
