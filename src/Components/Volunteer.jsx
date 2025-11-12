import React from 'react';
import Swal from 'sweetalert2';

const Volunteer = () => {
    const Handletost = () => {
         Swal.fire({
            position: "center",
            icon: "success",
            title: "Thank you for joining as a volunteer!",
            showConfirmButton: false,
            timer: 2500
          });
    }
    return (
        <div>
            <section class="w-full bg-blue-600 py-16">
                <div class="max-w-5xl mx-auto px-6 text-center text-white">

                    <h2 class="text-3xl md:text-4xl font-bold mb-4">
                        Join as a Volunteer
                    </h2>

                    <p class="text-lg md:text-xl mb-8 opacity-90">
                        Be a part of our mission to keep the community clean and green.
                        Your contribution can make a big impact!
                    </p>

                    <button
                    onClick={Handletost}
                        class="px-8 py-3 bg-white text-blue-600 font-semibold text-lg rounded-full  hover:-translate-y-1 transition-all duration-300"
                    >
                        Become a Volunteer
                    </button>

                </div>
            </section>


        </div>
    );
};

export default Volunteer;