import React from "react";
import {
  Trash2,
  Building2,
  Wrench,
  Route,
} from "lucide-react";

const categories = [
  {
    title: "Garbage",
    desc:
      "Improperly disposed waste causing environmental pollution and public health issues.",
    icon: Trash2,
  },
  {
    title: "Illegal Construction",
    desc:
      "Unauthorized building work violating city rules and posing safety risks.",
    icon: Building2,
  },
  {
    title: "Broken Public Property",
    desc:
      "Damaged public assets requiring urgent repair and maintenance.",
    icon: Wrench,
  },
  {
    title: "Road Damage",
    desc:
      "Potholes and cracked roads creating traffic and safety hazards.",
    icon: Route,
  },
];

const DisplayCategory = () => {
  return (
    <section className="py-20 bg-[#FBF1EF]/40">
      <div className="container mx-auto w-11/12">
        {/* Header */}
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
            Issue Categories
          </h2>
          <p className="mt-3 text-gray-600 max-w-xl mx-auto">
            Report common civic issues easily and help keep your community clean
            and safe.
          </p>
        </div>

        {/* Cards */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {categories.map((cat, index) => (
            <div
              key={index}
              className="group bg-white rounded-2xl p-6 shadow-md 
              transition-all duration-300 hover:-translate-y-2 
              hover:shadow-[0_12px_40px_rgba(249,115,22,0.15)]"
            >
              {/* Icon */}
              <div
                className="w-14 h-14 flex items-center justify-center rounded-xl
                bg-orange-100 text-orange-500 mb-5
                group-hover:bg-orange-500 group-hover:text-white transition"
              >
                <cat.icon size={28} />
              </div>

              {/* Text */}
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                {cat.title}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                {cat.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DisplayCategory;
