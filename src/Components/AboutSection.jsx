import React, { useRef } from "react";
import headericon from "../assets/cleanlinesspng.png";
import { motion, useInView } from "framer-motion";

const AboutSection = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 80,
        damping: 15
      }
    }
  };

  return (
    <section ref={sectionRef} className="bg-theme-secondary py-16 transition-colors duration-300">
      <div className="container mx-auto w-11/12">
        
        {/* Section Header */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: -30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <motion.h2
            className="text-3xl md:text-4xl font-bold text-theme-primary"
            initial={{ scale: 0.9 }}
            animate={isInView ? { scale: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            About <span className="text-orange-500">CleanZone</span>
          </motion.h2>
          <motion.p
            className="mt-4 text-theme-secondary max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            CleanZone is a civic-focused web platform designed to empower people
            to report cleanliness issues, track complaints, and contribute
            towards building a cleaner and healthier environment.
          </motion.p>
        </motion.div>

        {/* Content */}
        <motion.div
          className="grid md:grid-cols-2 gap-10 items-center"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          
          {/* Left Content */}
          <motion.div variants={itemVariants}>
            <motion.h3
              className="text-2xl font-semibold text-theme-primary mb-4"
              whileHover={{ x: 5 }}
              transition={{ duration: 0.3 }}
            >
              Why CleanZone?
            </motion.h3>
            <motion.p
              className="text-theme-secondary leading-relaxed mb-4"
              initial={{ x: -30, opacity: 0 }}
              animate={isInView ? { x: 0, opacity: 1 } : {}}
              transition={{ delay: 0.6 }}
            >
              Many cleanliness problems go unnoticed or unresolved due to lack
              of proper reporting systems. CleanZone bridges the gap between
              citizens and solutions by providing a simple, transparent, and
              user-friendly complaint management system.
            </motion.p>
            <motion.p
              className="text-theme-secondary leading-relaxed"
              initial={{ x: -30, opacity: 0 }}
              animate={isInView ? { x: 0, opacity: 1 } : {}}
              transition={{ delay: 0.8 }}
            >
              From reporting issues with images and locations to tracking
              progress and contributing to clean-up efforts, CleanZone promotes
              community involvement and accountability.
            </motion.p>
          </motion.div>

          {/* Right Card */}
          <motion.div
            variants={itemVariants}
            whileHover={{ scale: 1.02, y: -5 }}
            className="bg-theme-card rounded-2xl shadow-md p-8 border border-theme transition-colors duration-300"
          >
            <motion.div
              className="flex items-center gap-4 mb-6"
              initial={{ x: 30, opacity: 0 }}
              animate={isInView ? { x: 0, opacity: 1 } : {}}
              transition={{ delay: 0.7 }}
            >
              <motion.img
                src={headericon}
                alt="CleanZone Logo"
                className="w-14 h-14 border-2 border-orange-300 rounded-full"
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.6 }}
              />
              <h4 className="text-xl font-bold text-theme-primary">
                Our Core Features
              </h4>
            </motion.div>

            <motion.ul className="space-y-3 text-theme-secondary">
              {[
                "Issue reporting with images & location",
                "Secure user authentication",
                "Complaint tracking & status updates",
                "Clean-up contribution system",
                "Fully responsive & user-friendly UI"
              ].map((feature, index) => (
                <motion.li
                  key={index}
                  initial={{ x: 30, opacity: 0 }}
                  animate={isInView ? { x: 0, opacity: 1 } : {}}
                  transition={{ delay: 0.8 + index * 0.1 }}
                  whileHover={{ x: 5, color: "#f97316" }}
                >
                  ✅ {feature}
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>
        </motion.div>

        {/* Bottom Highlight */}
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 1.3 }}
        >
          <p className="text-theme-primary text-lg">
            🌱 Together, we can make our cities{' '}
            <motion.span
              className="font-semibold text-orange-500"
              whileHover={{ scale: 1.1 }}
              style={{ display: "inline-block" }}
            >
              cleaner, safer, and smarter
            </motion.span>.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
