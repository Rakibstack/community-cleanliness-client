import React from "react";

const CommunityStack = () => {
  return (
    <section className="w-full bg-[#FBF1EF] py-16">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-12">
           Community Impact
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Users */}
          <div className="bg-white p-8 rounded-2xl shadow-lg text-center transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
            <h3 className="text-5xl font-bold text-orange-500">
              1,250+
            </h3>
            <p className="text-gray-600 mt-3 text-lg">
              Registered Users
            </p>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-lg text-center transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
            <h3 className="text-5xl font-bold text-green-600">
              980+
            </h3>
            <p className="text-gray-600 mt-3 text-lg">
              Issues Resolved
            </p>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-lg text-center transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
            <h3 className="text-5xl font-bold text-red-500">
              40
            </h3>
            <p className="text-gray-600 mt-3 text-lg">
              Pending Issues
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CommunityStack;
