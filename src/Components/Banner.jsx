import React from "react";
import { Autoplay, Navigation, Pagination, EffectFade } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

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
  return (

    <div className="relative">
      <Swiper
        modules={[Autoplay, Pagination, EffectFade,]}
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
              <img
                src={slide.img}
                alt={slide.title}
                className="w-full h-full object-cover scale-105 group-hover:scale-110 transition-transform duration-[4000ms]"
              />

              <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent"></div>

              <div className="absolute inset-0 flex items-center">
                <div className="container mx-auto w-11/12">
                  <div className="max-w-xl text-white">
                    <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold leading-tight">
                      {slide.title}
                    </h1>
                    <p className="mt-4 text-gray-200 text-sm md:text-lg">
                      {slide.desc}
                    </p>

                    <div className="mt-6 flex gap-4">
                      <Link to='/addissues' className="btn bg-orange-500 text-white hover:bg-orange-600">
                        Report Issue
                      </Link>
                      <Link to='/howitworks' className="btn btn-outline text-white border-white hover:bg-white hover:text-black">
                        How It Works
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Custom Pagination */}
      <div className="custom-pagination absolute bottom-6 left-10 z-10 flex gap-2"></div>
    </div>
  );
};

export default Banner;
