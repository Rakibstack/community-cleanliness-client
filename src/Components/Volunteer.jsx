import React from "react";
import Swal from "sweetalert2";

const Volunteer = () => {
  const handleToast = () => {
    Swal.fire({
      position: "center",
      icon: "success",
      title: "Thank you for joining as a volunteer!",
      text: "Together, we can build a cleaner and healthier community.",
      showConfirmButton: false,
      timer: 2500,
    });
  };

  return (
    <section className="w-full bg-orange-500 py-16">
      <div className="max-w-5xl mx-auto px-6 text-center text-white">
        <h2 className="text-4xl font-bold mb-4">
          🤝 Join as a Volunteer
        </h2>

        <p className="text-lg md:text-xl mb-8 opacity-90">
          Be part of our mission to keep the community clean and green.
          Your small effort can create a big impact.
        </p>

        <button
          onClick={handleToast}
          className="px-10 py-3 bg-white text-orange-500 font-semibold text-lg rounded-full shadow-lg hover:-translate-y-1 hover:shadow-xl transition-all duration-300"
        >
          Become a Volunteer
        </button>
      </div>
    </section>
  );
};

export default Volunteer;
