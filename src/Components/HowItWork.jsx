import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router";

const steps = [
  {
    step: "01",
    title: "Report an Issue",
    desc: "Users can report cleanliness issues by adding images, location, category, and a brief description.",
    icon: "🧾",
  },
  {
    step: "02",
    title: "Review & Track",
    desc: "Each issue is reviewed and displayed publicly so users can track progress transparently.",
    icon: "📊",
  },
  {
    step: "03",
    title: "Community Contribution",
    desc: "Users can contribute toward clean-up efforts to support faster resolution.",
    icon: "🤝",
  },
  {
    step: "04",
    title: "Clean-Up & Resolution",
    desc: "Once resolved, issues are marked completed, ensuring accountability and impact.",
    icon: "🌱",
  },
];

const HowItWorks = () => {
  return (
    <section className="bg-theme-secondary py-20 transition-colors duration-300">
      <div className="container mx-auto w-11/12">

        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-theme-primary">
            How <span className="text-orange-500">CleanZone</span> Works
          </h2>
          <p className="mt-4 text-theme-secondary max-w-2xl mx-auto">
            CleanZone follows a simple and transparent process to ensure
            cleanliness issues are reported, tracked, and resolved efficiently.
          </p>
        </div>

        {/* Steps */}
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          {steps.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              viewport={{ once: true }}
              className="bg-theme-card rounded-2xl p-8 shadow-md border border-theme hover:shadow-lg transition"
            >
              <div className="flex items-center justify-between mb-4">
                <span className="text-orange-500 font-bold text-lg">
                  Step {item.step}
                </span>
              </div>
              <h3 className="text-xl font-semibold text-theme-primary mb-3">
                {item.title}
              </h3>
              <p className="text-theme-secondary leading-relaxed">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-20">
          <p className="text-theme-primary text-lg mb-5">
            Ready to take action and improve your community?
          </p>
          <Link to="/addissues" className="btn bg-orange-500 text-white font-semibold hover:bg-orange-600">
            Report an Issue
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
