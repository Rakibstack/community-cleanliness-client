import React, { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { gsap } from "gsap";

const CommunityStack = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.3 });
  
  const [users, setUsers] = useState(0);
  const [resolved, setResolved] = useState(0);
  const [pending, setPending] = useState(0);

  useEffect(() => {
    if (isInView) {
      // Animate counters with GSAP
      gsap.to({ val: 0 }, {
        val: 1250,
        duration: 2,
        ease: "power2.out",
        onUpdate: function() {
          setUsers(Math.floor(this.targets()[0].val));
        }
      });

      gsap.to({ val: 0 }, {
        val: 980,
        duration: 2,
        ease: "power2.out",
        delay: 0.2,
        onUpdate: function() {
          setResolved(Math.floor(this.targets()[0].val));
        }
      });

      gsap.to({ val: 0 }, {
        val: 40,
        duration: 2,
        ease: "power2.out",
        delay: 0.4,
        onUpdate: function() {
          setPending(Math.floor(this.targets()[0].val));
        }
      });
    }
  }, [isInView]);

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

  const cardVariants = {
    hidden: { 
      y: 50, 
      opacity: 0,
      scale: 0.8
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
    <section ref={sectionRef} className="w-full bg-theme-secondary py-16 transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-6">
        <motion.h2
          className="text-4xl font-bold text-center mb-12 text-theme-primary"
          initial={{ opacity: 0, y: -30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          Community Impact
        </motion.h2>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {/* Users */}
          <motion.div
            variants={cardVariants}
            whileHover={{ 
              y: -10, 
              scale: 1.05,
              transition: { duration: 0.3 }
            }}
            className="bg-theme-card p-8 rounded-2xl shadow-lg text-center transition-all duration-300"
          >
            <motion.h3
              className="text-5xl font-bold text-orange-500"
              initial={{ scale: 0 }}
              animate={isInView ? { scale: 1 } : {}}
              transition={{ 
                type: "spring",
                stiffness: 200,
                damping: 15,
                delay: 0.3
              }}
            >
              {users.toLocaleString()}+
            </motion.h3>
            <motion.p
              className="text-theme-secondary mt-3 text-lg"
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ delay: 0.5 }}
            >
              Registered Users
            </motion.p>
          </motion.div>

          <motion.div
            variants={cardVariants}
            whileHover={{ 
              y: -10, 
              scale: 1.05,
              transition: { duration: 0.3 }
            }}
            className="bg-theme-card p-8 rounded-2xl shadow-lg text-center transition-all duration-300"
          >
            <motion.h3
              className="text-5xl font-bold text-green-600"
              initial={{ scale: 0 }}
              animate={isInView ? { scale: 1 } : {}}
              transition={{ 
                type: "spring",
                stiffness: 200,
                damping: 15,
                delay: 0.5
              }}
            >
              {resolved.toLocaleString()}+
            </motion.h3>
            <motion.p
              className="text-theme-secondary mt-3 text-lg"
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ delay: 0.7 }}
            >
              Issues Resolved
            </motion.p>
          </motion.div>

          <motion.div
            variants={cardVariants}
            whileHover={{ 
              y: -10, 
              scale: 1.05,
              transition: { duration: 0.3 }
            }}
            className="bg-theme-card p-8 rounded-2xl shadow-lg text-center transition-all duration-300"
          >
            <motion.h3
              className="text-5xl font-bold text-red-500"
              initial={{ scale: 0 }}
              animate={isInView ? { scale: 1 } : {}}
              transition={{ 
                type: "spring",
                stiffness: 200,
                damping: 15,
                delay: 0.7
              }}
            >
              {pending}
            </motion.h3>
            <motion.p
              className="text-theme-secondary mt-3 text-lg"
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ delay: 0.9 }}
            >
              Pending Issues
            </motion.p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default CommunityStack;
