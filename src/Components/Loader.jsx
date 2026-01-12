import React, { useEffect, useRef } from 'react';
import { motion } from "framer-motion";
import { gsap } from "gsap";

const Loader = () => {
  const containerRef = useRef(null);
  const circleRefs = useRef([]);

  useEffect(() => {
    // GSAP Timeline for complex animations
    const tl = gsap.timeline({ repeat: -1 });
    
    circleRefs.current.forEach((circle, i) => {
      if (circle) {
        tl.to(circle, {
          scale: 1.5,
          rotation: 360,
          duration: 0.8,
          ease: "power2.inOut",
          yoyo: true,
          repeat: 1,
        }, i * 0.1);
      }
    });

    return () => tl.kill();
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      }
    }
  };

  const circleVariants = {
    hidden: { scale: 0, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 260,
        damping: 20
      }
    }
  };

  const pulseVariants = {
    pulse: {
      scale: [1, 1.2, 1],
      opacity: [0.5, 1, 0.5],
      transition: {
        duration: 2,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-theme-primary via-theme-secondary to-theme-primary overflow-hidden relative">
      
      {/* Animated Background Particles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-orange-400 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -30, 0],
              x: [0, Math.random() * 20 - 10, 0],
              opacity: [0.2, 0.8, 0.2],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      {/* Main Loader Container */}
      <motion.div
        ref={containerRef}
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10"
      >
        {/* Outer Rotating Ring */}
        <motion.div
          className="relative w-40 h-40 flex items-center justify-center"
          animate={{ rotate: 360 }}
          transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
        >
          <div className="absolute inset-0 border-4 border-orange-500 border-t-transparent rounded-full" />
          
          {/* Inner Rotating Ring */}
          <motion.div
            className="absolute inset-4 border-4 border-orange-300 border-b-transparent rounded-full"
            animate={{ rotate: -360 }}
            transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
          />

          {/* Center Logo/Icon */}
          <motion.div
            className="relative z-10 w-20 h-20 bg-gradient-to-br from-orange-400 to-orange-600 rounded-full flex items-center justify-center shadow-2xl"
            variants={pulseVariants}
            animate="pulse"
          >
            <motion.div
              className="text-white text-3xl font-bold"
              animate={{ 
                scale: [1, 1.1, 1],
                rotate: [0, 5, -5, 0]
              }}
              transition={{ 
                duration: 2, 
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              🌱
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Orbiting Circles */}
        <div className="absolute inset-0 flex items-center justify-center">
          {[...Array(8)].map((_, i) => {
            const angle = (i * 360) / 8;
            const radius = 80;
            const x = radius * Math.cos((angle * Math.PI) / 180);
            const y = radius * Math.sin((angle * Math.PI) / 180);

            return (
              <motion.div
                key={i}
                ref={(el) => (circleRefs.current[i] = el)}
                className="absolute w-3 h-3 rounded-full bg-gradient-to-r from-orange-400 to-pink-500 shadow-lg"
                style={{
                  left: '50%',
                  top: '50%',
                }}
                variants={circleVariants}
                animate={{
                  x: [0, x, 0],
                  y: [0, y, 0],
                  scale: [1, 1.5, 1],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  delay: i * 0.2,
                  ease: "easeInOut",
                }}
              />
            );
          })}
        </div>
      </motion.div>

      {/* Loading Text with Typing Effect */}
      <motion.div
        className="mt-16 text-center z-10"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
      >
        <motion.h2
          className="text-2xl font-bold text-theme-primary mb-2"
          animate={{ 
            opacity: [0.5, 1, 0.5],
          }}
          transition={{ 
            duration: 2, 
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          CleanZone Report
        </motion.h2>
        
        <motion.div className="flex items-center justify-center gap-2">
          <motion.span className="text-theme-secondary text-lg">Loading</motion.span>
          {[...Array(3)].map((_, i) => (
            <motion.span
              key={i}
              className="text-orange-500 text-2xl font-bold"
              animate={{ 
                opacity: [0, 1, 0],
                y: [0, -5, 0]
              }}
              transition={{ 
                duration: 1.5, 
                repeat: Infinity,
                delay: i * 0.2
              }}
            >
              .
            </motion.span>
          ))}
        </motion.div>

        {/* Progress Bar */}
        <motion.div
          className="mt-6 w-64 h-2 bg-theme-secondary rounded-full overflow-hidden"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.8 }}
        >
          <motion.div
            className="h-full bg-gradient-to-r from-orange-400 via-orange-500 to-orange-600 rounded-full"
            animate={{ 
              x: ['-100%', '100%'],
            }}
            transition={{ 
              duration: 1.5, 
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        </motion.div>
      </motion.div>

      {/* Bottom Wave Animation */}
      <motion.div
        className="absolute bottom-0 left-0 right-0 h-32 opacity-20"
        initial={{ y: 100 }}
        animate={{ y: 0 }}
        transition={{ delay: 1 }}
      >
        <svg viewBox="0 0 1440 320" className="w-full h-full">
          <motion.path
            fill="currentColor"
            className="text-orange-500"
            d="M0,96L48,112C96,128,192,160,288,160C384,160,480,128,576,112C672,96,768,96,864,112C960,128,1056,160,1152,160C1248,160,1344,128,1392,112L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
            animate={{
              d: [
                "M0,96L48,112C96,128,192,160,288,160C384,160,480,128,576,112C672,96,768,96,864,112C960,128,1056,160,1152,160C1248,160,1344,128,1392,112L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z",
                "M0,160L48,144C96,128,192,96,288,96C384,96,480,128,576,144C672,160,768,160,864,144C960,128,1056,96,1152,96C1248,96,1344,128,1392,144L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z",
                "M0,96L48,112C96,128,192,160,288,160C384,160,480,128,576,112C672,96,768,96,864,112C960,128,1056,160,1152,160C1248,160,1344,128,1392,112L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z",
              ]
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        </svg>
      </motion.div>
    </div>
  );
};

export default Loader;
