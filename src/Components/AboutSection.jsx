import React from "react";
import headericon from "../assets/cleanlinesspng.png";

const AboutSection = () => {
  return (
    <section className="bg-[#FBF1EF] py-16">
      <div className="container mx-auto w-11/12">
        
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
            About <span className="text-orange-500">CleanZone</span>
          </h2>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            CleanZone is a civic-focused web platform designed to empower people
            to report cleanliness issues, track complaints, and contribute
            towards building a cleaner and healthier environment.
          </p>
        </div>

        {/* Content */}
        <div className="grid md:grid-cols-2 gap-10 items-center">
          
          {/* Left Content */}
          <div>
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">
              Why CleanZone?
            </h3>
            <p className="text-gray-600 leading-relaxed mb-4">
              Many cleanliness problems go unnoticed or unresolved due to lack
              of proper reporting systems. CleanZone bridges the gap between
              citizens and solutions by providing a simple, transparent, and
              user-friendly complaint management system.
            </p>
            <p className="text-gray-600 leading-relaxed">
              From reporting issues with images and locations to tracking
              progress and contributing to clean-up efforts, CleanZone promotes
              community involvement and accountability.
            </p>
          </div>

          {/* Right Card */}
          <div className="bg-white rounded-2xl shadow-md p-8 border border-orange-100">
            <div className="flex items-center gap-4 mb-6">
              <img
                src={headericon}
                alt="CleanZone Logo"
                className="w-14 h-14 border-2 border-orange-300 rounded-full"
              />
              <h4 className="text-xl font-bold text-gray-800">
                Our Core Features
              </h4>
            </div>

            <ul className="space-y-3 text-gray-600">
              <li>✅ Issue reporting with images & location</li>
              <li>✅ Secure user authentication</li>
              <li>✅ Complaint tracking & status updates</li>
              <li>✅ Clean-up contribution system</li>
              <li>✅ Fully responsive & user-friendly UI</li>
            </ul>
          </div>
        </div>

        {/* Bottom Highlight */}
        <div className="mt-16 text-center">
          <p className="text-gray-700 text-lg">
            🌱 Together, we can make our cities{' '}
            <span className="font-semibold text-orange-500">
              cleaner, safer, and smarter
            </span>.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
