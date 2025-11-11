import React, { useContext, useState } from 'react';
import { AuthContext } from '../AuthProvider/AuthProvider';
import Swal from 'sweetalert2';
import useAxiosSecure from '../Hooks/useAxiosSecure';

const AddIssues = () => {

  const { user,setLoader } = useContext(AuthContext);
  const [imagePreview, setImagePreview] = useState("");
  const axiossecure = useAxiosSecure()


  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    setLoader(true)
   
    const issueData = {
      title: form.title.value,
      category: form.category.value,
      location: form.location.value,
      description: form.description.value,
      image: form.image.value,
      amount: form.amount.value,
      status: "ongoing",
      email: user?.email || "",
      date: new Date(),
    };

    axiossecure.post('/allissues', issueData)
      .then(data => {
        console.log(data.data);
        
        if (data.data.insertedId) {
          Swal.fire({
            position: "center",
            icon: "success",
            title: "Your post has been placed",
            showConfirmButton: false,
            timer: 2500
          });
        }
         form.reset()
        setImagePreview('')
        
      } 
    )
     setLoader(false);

  }
  return (
    <div>
      <div className="max-w-xl mx-auto p-6">
        <h1 className="text-4xl font-bold mb-8 text-center text-gray-700">
          Report a Public Issue
        </h1>

        <form
          onSubmit={handleSubmit}
          className="grid grid-cols-1 md:grid-cols-2 gap-6 bg-[#] p-8 rounded-3xl shadow-xl backdrop-blur-lg transition-all duration-300 hover:shadow-2xl"
        >
          {/* Issue Title */}
          <div className="flex flex-col">
            <label className="font-semibold text-gray-600 mb-1">Issue Title</label>
            <input
              type="text"
              name="title"
              className="border border-gray-300 rounded-2xl p-3 focus:outline-none focus:ring-2 focus:ring-indigo-400 transition"
              required
            />
          </div>

          {/* Category */}
          <div className="flex flex-col">
            <label className="font-semibold text-gray-600 mb-1">Category</label>
            <select
              name="category"
              className="border border-gray-300 rounded-2xl p-3 focus:outline-none focus:ring-2 focus:ring-indigo-400 transition"
              required
            >
              <option value="">Select Category</option>
              <option value="Garbage">Garbage</option>
              <option value="Broken Road">Broken Road</option>
              <option value="Drainage Issue">Drainage Issue</option>
              <option value="Street Light">Street Light</option>
            </select>
          </div>

          {/* Location */}
          <div className="flex flex-col">
            <label className="font-semibold text-gray-600 mb-1">Location</label>
            <input
              type="text"
              name="location"
              placeholder="e.g. Mirpur-10 Road 5"
              className="border border-gray-300 rounded-2xl p-3 focus:outline-none focus:ring-2 focus:ring-indigo-400 transition"
              required
            />
          </div>

          {/* Email */}
          <div className="flex flex-col">
            <label className="font-semibold text-gray-600 mb-1">Your Email</label>
            <input
              type="text"
              name="email"
              readOnly
              value={user?.email || ""}
              className="border border-gray-300 rounded-2xl p-3 bg-gray-100 cursor-not-allowed"
            />
          </div>

          {/* Description */}
          <div className="md:col-span-2 flex flex-col">
            <label className="font-semibold text-gray-600 mb-1">Description</label>
            <textarea
              name="description"
              className="border border-gray-300 rounded-2xl p-3 h-32 focus:outline-none focus:ring-2 focus:ring-indigo-400 transition"
              required
            ></textarea>
          </div>

          {/* Image URL */}
          <div className="flex flex-col">
            <label className="font-semibold text-gray-600 mb-1">Image URL</label>
            <input
              type="text"
              name="image"
              placeholder="Paste image URL here"
              className="border border-gray-300 rounded-2xl p-3 focus:outline-none focus:ring-2 focus:ring-indigo-400 transition"
              onChange={(e) => setImagePreview(e.target.value)}
            />
            {imagePreview && (
              <img
                src={imagePreview}
                alt="preview"
                className="mt-3 rounded-2xl shadow-md transition-transform duration-300 hover:scale-105"
              />
            )}
          </div>

          {/* Amount */}
          <div className="flex flex-col">
            <label className="font-semibold text-gray-600 mb-1">Suggested Fix Budget</label>
            <input
              type="number"
              name="amount"
              className="border border-gray-300 rounded-2xl p-3 focus:outline-none focus:ring-2 focus:ring-indigo-400 transition"
            />
          </div>

          {/* Status */}
          <div className="flex flex-col">
            <label className="font-semibold text-gray-600 mb-1">Status</label>
            <input
              type="text"
              name="status"
              value="ongoing"
              readOnly
              className="border border-gray-300 rounded-2xl p-3 bg-gray-100 cursor-not-allowed"
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="md:col-span-2 bg-gradient-to-r from-indigo-500 to-purple-500 text-white p-3 rounded-2xl font-semibold hover:opacity-90 transition"
          >
            Submit Issue
          </button>
        </form>
      </div>

    </div>
  );
};

export default AddIssues;