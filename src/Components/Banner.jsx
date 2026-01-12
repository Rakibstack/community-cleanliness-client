import React, { useEffect, useRef } from "react";
import { Autoplay, Navigation, Pagination, EffectFade } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { motion } from "framer-motion";
import { gsap } from "gsap";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-fade";

import image1 from "../assets/banner1.jpg";
import image2 from "../assets/banner2.jpg";
import image3 from "../assets/banner3.jpg";
import image4 from "../assets/banner4.jpg";
import image5 from "../assets/banner5.jpg";
import { Link } from "react-router";

const slides = [
  {
    img: image1,
    title: "Report & Resolve Cleanliness Issues",
    desc: "Empowering citizens to build cleaner and healthier communities.",
  },
  {
    img: image2,
    title: "Make Your City Cleaner",
    desc: "Report issues, track progress, and create impact together.",
  },
  {
    img: image3,
    title: "Community Driven Clean-Up",
    desc: "Transparency, accountability, and real action.",
  },
  {
    img: image4,
    title: "Smart Complaint Management",
    desc: "Modern solutions for real-world problems.",
  },
  {
    img: image5,
    title: "Take Action Today",
    desc: "Your small step can make a big difference.",
  },
];

const Banner = () => {
  const titleRef = useRef(null);
  const descRef = useRef(null);
  const buttonsRef = useRef(null);

  useEffect(() => {
    // GSAP animation for slide content
    const tl = gsap.timeline();
    
    tl.from(titleRef.current, {
      y: 50,
      opacity: 0,
      duration: 1,
      ease: "power3.out"
    })
    .from(descRef.current, {
      y: 30,
      opacity: 0,
      duration: 0.8,
      ease: "power2.out"
    }, "-=0.5")
    .from(buttonsRef.current, {
      y: 20,
      opacity: 0,
      duration: 0.6,
      ease: "power2.out"
    }, "-=0.4");

    return () => tl.kill();
  }, []);

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
        stiffness: 100,
        damping: 12
      }
    }
  };

  return (
    <div className="relative">
      <Swiper
        modules={[Autoplay, Pagination, EffectFade]}
        autoplay={{ delay: 3500, disableOnInteraction: false }}
        pagination={{
          clickable: true,
          el: ".custom-pagination",
        }}
        effect="fade"
        loop
        className="w-full h-[320px] md:h-[456px] lg:h-[680px]"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className="relative w-full h-full group">
              <motion.img
                src={slide.img}
                alt={slide.title}
                className="w-full h-full object-cover"
                initial={{ scale: 1.2 }}
                animate={{ scale: 1 }}
                transition={{ duration: 1.5, ease: "easeOut" }}
              />

              <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent"></div>

              <div className="absolute inset-0 flex items-center">
                <div className="container mx-auto w-11/12">
                  <motion.div
                    className="max-w-xl text-white"
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                  >
                    <motion.h1
                      ref={titleRef}
                      variants={itemVariants}
                      className="text-2xl md:text-4xl lg:text-5xl font-bold leading-tight"
                    >
                      {slide.title}
                    </motion.h1>
                    
                    <motion.p
                      ref={descRef}
                      variants={itemVariants}
                      className="mt-4 text-gray-200 text-sm md:text-lg"
                    >
                      {slide.desc}
                    </motion.p>

                    <motion.div
                      ref={buttonsRef}
                      variants={itemVariants}
                      className="mt-6 flex gap-4"
                    >
                      <motion.div
                        whileHover={{ scale: 1.05, y: -2 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <Link to='/addissues' className="btn bg-orange-500 text-white hover:bg-orange-600 shadow-lg">
                          Report Issue
                        </Link>
                      </motion.div>
                      
                      <motion.div
                        whileHover={{ scale: 1.05, y: -2 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <Link to='/howitworks' className="btn btn-outline text-white border-white hover:bg-white hover:text-black">
                          How It Works
                        </Link>
                      </motion.div>
                    </motion.div>
                  </motion.div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Custom Pagination with Animation */}
      <motion.div
        className="custom-pagination absolute bottom-6 left-10 z-10 flex gap-2"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1 }}
      />
    </div>
  );
};

export default Banner;
