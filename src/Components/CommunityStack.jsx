import React from 'react';

const CommunityStack = () => {
    return (
        <div>

            <section class="w-full bg-gray-100 py-12">
  <div class="max-w-6xl mx-auto px-6">
    <h2 class="text-3xl font-bold text-center mb-10">
      Community Stats
    </h2>

    <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
      
      <div class="bg-white p-8 rounded-2xl shadow text-center">
        <h3 class="text-4xl font-bold text-blue-600">1,250+</h3>

        <p class="text-gray-600 mt-2 text-lg">Registered Users</p>
      </div>

      <div class="bg-white p-8 rounded-2xl shadow text-center">
        <h3 class="text-4xl font-bold text-green-600">980+</h3>
        
        <p class="text-gray-600 mt-2 text-lg">Issues Resolved</p>
      </div>

      <div class="bg-white p-8 rounded-2xl shadow text-center">
        <h3 class="text-4xl font-bold text-orange-500">40</h3>
        <p class="text-gray-600 mt-2 text-lg">Pending Issues</p>
      </div>

    </div>
  </div>
</section>

            
        </div>
    );
};

export default CommunityStack;