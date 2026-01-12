import React, { useRef } from "react";
import { Link } from "react-router";
import { motion, useInView } from "framer-motion";

const ServicesSection = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 });

  const services = [
    {
      title: "Issue Reporting System",
      desc: "Users can easily report cleanliness issues by providing images, location details, category, description, and an estimated clean-up budget."
    },
    {
      title: "Complaint Tracking & Management",
      desc: "Track complaint status in real-time with transparent updates, detailed views, and organized dashboards for better accountability."
    },
    {
      title: "Secure User Authentication",
      desc: "Secure login and protected routes ensure that users can safely manage, edit, and monitor their submitted issues and contributions."
    },
    {
      title: "Clean-Up Contribution System",
      desc: "Users can contribute financially toward clean-up efforts, encouraging community participation and shared responsibility."
    },
    {
      title: "Smart Search & Filtering",
      desc: "Quickly find issues using advanced filters based on category, location, date, or budget for a smooth user experience."
    },
    {
      title: "Fully Responsive Design",
      desc: "CleanZone works seamlessly across desktop, tablet, and mobile devices with a modern and accessible user interface."
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.3
      }
    }
  };

  const cardVariants = {
    hidden: { y: 50, opacity: 0, scale: 0.9 },
    visible: {
      y: 0,
      opacity: 1,
      scale: 1,
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
            Our <span className="text-orange-500">Services</span>
          </motion.h2>
          <motion.p
            className="mt-4 text-theme-secondary max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            CleanZone provides smart, secure, and user-focused solutions to
            report, track, and resolve cleanliness issues through modern web
            technologies.
          </motion.p>
        </motion.div>

        {/* Service Cards */}
        <motion.div
          className="grid gap-8 md:grid-cols-2 lg:grid-cols-3"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover={{ y: -10, scale: 1.02 }}
              className="bg-theme-card rounded-2xl shadow-md p-8 border border-theme hover:shadow-lg transition"
            >
              <motion.h3
                className="text-xl font-semibold text-theme-primary mb-3"
                initial={{ x: -20, opacity: 0 }}
                animate={isInView ? { x: 0, opacity: 1 } : {}}
                transition={{ delay: index * 0.1 + 0.5 }}
              >
                {service.title}
              </motion.h3>
              <motion.p
                className="text-theme-secondary leading-relaxed"
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : {}}
                transition={{ delay: index * 0.1 + 0.6 }}
              >
                {service.desc}
              </motion.p>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          className="text-center mt-14"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 1.2 }}
        >
          <p className="text-theme-primary text-lg mb-4">
            Ready to make a difference in your community?
          </p>
          <motion.div
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link to="/addissues" className="btn bg-orange-500 text-white font-semibold hover:bg-orange-600">
              Report an Issue
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesSection;
