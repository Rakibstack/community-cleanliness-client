import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../AuthProvider/AuthProvider';
import useAxiosSecure from '../Hooks/useAxiosSecure';

const Myissues = () => {
   const {user} = useContext(AuthContext);
   const axiossecure = useAxiosSecure()
   const [myissues,setmyissues] = useState()
   
  
    useEffect(() => {

   if(user?.email){
     axiossecure.get(`/myissues?email${user?.email}`)
     .then(res => {
     setmyissues(res.data)
     })
   }
    },[user,axiossecure])


    return (
        <div>
           
            <div className="min-h-screen bg-[#FBF1EF] mt-3 py-10 px-4">
      <div className="max-w-6xl mx-auto bg-white shadow-lg rounded-2xl p-6 border border-gray-100">
        <h1 className="text-3xl font-semibold text-center text-orange-500 mb-8">
          My Issues
        </h1>

        {!myissues || myissues.length === 0 ? (
          <p className="text-center text-gray-500 italic">
            You haven’t submitted any issues yet.
          </p>
        ) : (
          <div className="overflow-x-auto">
            <table className="min-w-full text-sm text-gray-700 border border-gray-200 rounded-xl overflow-hidden">
              <thead className="bg-gradient-to-r from-orange-400 to-orange-500 text-white">
                <tr>
                  <th className="px-6 py-3 text-left">Title</th>
                  <th className="px-6 py-3 text-left">Category</th>
                  <th className="px-6 py-3 text-left">Amount (৳)</th>
                  <th className="px-6 py-3 text-left">Status</th>
                  <th className="px-6 py-3 text-center">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200 bg-white">
                {myissues.map((issue, index) => (
                  <tr
                    key={issue._id || index}
                    className="hover:bg-orange-50 transition duration-300"
                  >
                    <td className="px-6 py-4 font-medium">{issue.title}</td>
                    <td className="px-6 py-4">{issue.category}</td>
                    <td className="px-6 py-4">৳{issue.amount}</td>
                    <td className="px-6 py-4">
                      <span
                        className={`px-3 py-1 rounded-full text-xs font-semibold ${
                          issue.status === "ongoing"
                            ? "bg-green-100 text-green-700"
                            : "bg-red-100 text-red-700"
                        }`}
                      >
                        {issue.status || "ongoing"}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-center space-x-3">
                      <button
                        className="px-4 py-1 text-sm font-semibold text-orange-500 border border-orange-300 rounded-full hover:bg-orange-50 transition"
                      >
                        Update
                      </button>
                      <button
                        className="px-4 py-1 text-sm font-semibold text-red-500 border border-red-300 rounded-full hover:bg-red-50 transition"
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
        </div>
    );
};

export default Myissues;