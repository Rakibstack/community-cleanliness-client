import React, { useContext, useState } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";
import Swal from "sweetalert2";
import useAxiosSecure from "../Hooks/useAxiosSecure";
import { Info } from "lucide-react";

const AddIssues = () => {
  const { user, setLoader } = useContext(AuthContext);
  const [imagePreview, setImagePreview] = useState("");
  const axiossecure = useAxiosSecure();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoader(true);

    const form = e.target;
    const issueData = {
      title: form.title.value,
      category: form.category.value,
      location: form.location.value,
      description: form.description.value,
      image: form.image.value,
      amount: form.amount.value,
      status: "ongoing",
      email: user?.email,
      date: new Date(),
    };

    axiossecure.post("/allissues", issueData).then((res) => {
      if (res.data.insertedId) {
        Swal.fire("Success!", "Issue reported successfully", "success");
        form.reset();
        setImagePreview("");
      }
      setLoader(false);
    });
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
      
      {/* Form Section */}
      <div className="lg:col-span-2 bg-theme-card rounded-xl shadow p-8 transition-colors duration-300">
        <h2 className="text-2xl font-bold mb-6 text-theme-primary">Report an Issue</h2>

        <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <input name="title" placeholder="Issue title" className="input input-bordered bg-theme-card text-theme-primary border-theme" required />

          <select name="category" className="select select-bordered bg-theme-card text-theme-primary border-theme" required>
            <option value="">Select category</option>
            <option>Garbage</option>
            <option>Broken Road</option>
            <option>Drainage Issue</option>
            <option>Street Light</option>
          </select>

          <input name="location" placeholder="Location" className="input input-bordered bg-theme-card text-theme-primary border-theme" required />

          <input value={user?.email} readOnly className="input input-bordered bg-theme-secondary text-theme-muted" />

          <textarea
            name="description"
            placeholder="Describe the issue..."
            className="textarea textarea-bordered md:col-span-2 bg-theme-card text-theme-primary border-theme"
            required
          />

          <input
            name="image"
            placeholder="Image URL"
            className="input input-bordered bg-theme-card text-theme-primary border-theme"
            onChange={(e) => setImagePreview(e.target.value)}
          />

          <input name="amount" type="number" placeholder="Estimated budget" className="input input-bordered bg-theme-card text-theme-primary border-theme" />

          {imagePreview && (
            <img src={imagePreview} alt="preview" className="rounded-lg md:col-span-2" />
          )}

          <button className="btn bg-orange-500 text-white hover:bg-orange-600 md:col-span-2">
            Submit Issue
          </button>
        </form>
      </div>

      {/* Info Panel */}
      <div className="bg-theme-secondary rounded-xl p-6 space-y-4 transition-colors duration-300">
        <h3 className="font-semibold flex items-center gap-2 text-theme-primary">
          <Info size={18} /> How it works
        </h3>
        <ul className="text-sm text-theme-secondary space-y-2">
          <li>✔ Report issues in your area</li>
          <li>✔ Community members can contribute</li>
          <li>✔ Authorities can take action</li>
          <li>✔ Track progress in dashboard</li>
        </ul>
      </div>
    </div>
  );
};

export default AddIssues;
