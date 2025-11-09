import React from 'react';

const DisplayCatagory = () => {
    return (
        <div className='py-14 bg-base-100'>
            <div>
                <h2 className='text-center text-4xl font-bold mb-4'>Category Section</h2>

            </div>
            <div className='container mx-auto w-11/12 grid sm:grid-cols-2 md:grid-cols-2  lg:grid-cols-4 gap-4 p-5'>

                <div className='bg-white p-5 rounded-2xl shadow-2xl hover:scale-106  duration-400 transition-all'>
                    <h2 className='text-2xl font-bold text-gray-600 mb-2 '>Garbage</h2>
                    <p className='tracking-wider text-base-700'>Improperly disposed waste causing environmental pollution.

                        Accumulated trash affecting public health and cleanliness.

                        Unmanaged waste leading to foul odor and hygiene issues.
                    </p>

                </div>
                <div className='bg-white p-5 rounded-2xl shadow-2xl hover:scale-106  duration-400 transition-all'>
                    <h2 className='text-2xl font-bold text-gray-600 mb-2'>Illegal Construction </h2>
                    <p className='tracking-wider text-base-700'>Unauthorized building work violating city regulations.

                        Structures built without proper approval or permits.

                        Illegally extended property posing safety risks.</p>

                </div>
                <div className='bg-white p-5 rounded-2xl shadow-2xl hover:scale-106  duration-400 transition-all'>
                    <h2 className='text-2xl font-bold text-gray-600 mb-2'>Broken Public Property</h2>
                    <p className='tracking-wider text-base-700'>Damaged public assets affecting community use.

                        Broken facilities requiring urgent repair.

                        Vandalized or worn-out public structures.</p>

                </div>
                <div className='bg-white p-5 rounded-2xl shadow-2xl hover:scale-106  duration-400 transition-all'>
                    <h2 className='text-2xl font-bold text-gray-600 mb-2'>Road Damag</h2>
                    <p className='tracking-wider text-base-700'>Cracked or uneven roads slowing traffic movement.

                        Potholes creating vehicle safety hazards.

                        Damaged road surfaces due to poor maintenance.</p>

                </div>

            </div>
        </div>
    );
};

export default DisplayCatagory;