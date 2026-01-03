import React from "react";
import { Link } from "react-router";

const ServicesSection = () => {
  return (
    <section className="bg-[#FBF1EF] py-16">
      <div className="container mx-auto w-11/12">
        
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
            Our <span className="text-orange-500">Services</span>
          </h2>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            CleanZone provides smart, secure, and user-focused solutions to
            report, track, and resolve cleanliness issues through modern web
            technologies.
          </p>
        </div>

        {/* Service Cards */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          
          {/* Service 1 */}
          <div className="bg-white rounded-2xl shadow-md p-8 border border-orange-100 hover:shadow-lg transition">
            <h3 className="text-xl font-semibold text-gray-800 mb-3">
              🧾 Issue Reporting System
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Users can easily report cleanliness issues by providing images,
              location details, category, description, and an estimated
              clean-up budget.
            </p>
          </div>

          {/* Service 2 */}
          <div className="bg-white rounded-2xl shadow-md p-8 border border-orange-100 hover:shadow-lg transition">
            <h3 className="text-xl font-semibold text-gray-800 mb-3">
              📊 Complaint Tracking & Management
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Track complaint status in real-time with transparent updates,
              detailed views, and organized dashboards for better accountability.
            </p>
          </div>

          {/* Service 3 */}
          <div className="bg-white rounded-2xl shadow-md p-8 border border-orange-100 hover:shadow-lg transition">
            <h3 className="text-xl font-semibold text-gray-800 mb-3">
              🔐 Secure User Authentication
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Secure login and protected routes ensure that users can safely
              manage, edit, and monitor their submitted issues and contributions.
            </p>
          </div>

          {/* Service 4 */}
          <div className="bg-white rounded-2xl shadow-md p-8 border border-orange-100 hover:shadow-lg transition">
            <h3 className="text-xl font-semibold text-gray-800 mb-3">
              💳 Clean-Up Contribution System
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Users can contribute financially toward clean-up efforts,
              encouraging community participation and shared responsibility.
            </p>
          </div>

          {/* Service 5 */}
          <div className="bg-white rounded-2xl shadow-md p-8 border border-orange-100 hover:shadow-lg transition">
            <h3 className="text-xl font-semibold text-gray-800 mb-3">
              🔍 Smart Search & Filtering
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Quickly find issues using advanced filters based on category,
              location, date, or budget for a smooth user experience.
            </p>
          </div>

          {/* Service 6 */}
          <div className="bg-white rounded-2xl shadow-md p-8 border border-orange-100 hover:shadow-lg transition">
            <h3 className="text-xl font-semibold text-gray-800 mb-3">
              📱 Fully Responsive Design
            </h3>
            <p className="text-gray-600 leading-relaxed">
              CleanZone works seamlessly across desktop, tablet, and mobile
              devices with a modern and accessible user interface.
            </p>
          </div>

        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-14">
          <p className="text-gray-700 text-lg mb-4">
            Ready to make a difference in your community?
          </p>
          <Link to="/addissues" className="btn bg-orange-500 text-white font-semibold hover:bg-orange-600">
            Report an Issue
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
