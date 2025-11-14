import React, { useContext, useEffect, useRef, useState } from 'react';
import { AuthContext } from '../AuthProvider/AuthProvider';
import useAxiosSecure from '../Hooks/useAxiosSecure';
import Swal from 'sweetalert2';

const Myissues = () => {
  const { user } = useContext(AuthContext);
  const axiossecure = useAxiosSecure()
  const [myissues, setmyissues] = useState()
  const [updatedid,setUpdatedid] = useState(null)
  
  const modalref = useRef();

  useEffect(() => {

    if (user?.email) {
      axiossecure.get(`/myissues?email${user?.email}`)
        .then(res => {
          setmyissues(res.data)
        })
    }
  }, [user, axiossecure])

  const HandleDelete = (_id) => {

    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!"
    }).then((result) => {
      if (result.isConfirmed) {

        axiossecure.delete(`/deleteissues/${_id}`)
        .then(res => {
         if(res.data.deletedCount){

           Swal.fire({
          title: "Deleted!",
          text: "Your Issues has been deleted.",
          icon: "success"
        });

         const remainingissue = myissues.filter(issue => issue._id !== _id)
         setmyissues(remainingissue);
         }
         
        })       
      }
    });
  }
  const handleModal = () => {
    modalref.current.showModal()
  }
    const canclebutton = () => {
    modalref.current.close()
  }
  const HandleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;

      const updateinfo = {

      title: form.title.value,
      category:form.category.value,
      amount: form.amount.value,
      description:form.description.value,
      status:form.status.value
    }

    axiossecure.patch(`/updateissues/${updatedid}`,updateinfo)
    .then(res => {
      console.log(res.data);
       if(res.data.modifiedCount){
        Swal.fire({
          icon: "success",
          title: "Updated!",
          text: "Issue updated successfully",
        });
         modalref.current.close();

         const updatedList = myissues.map(i =>

          i._id === updatedid ?  {...i, ...updateinfo } : i 
        );
        setmyissues(updatedList);

       
         
      
       }
    })

  }


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
                          className={`px-3 py-1 rounded-full text-xs font-semibold ${issue.status === "ongoing"
                              ? "bg-green-100 text-green-700"
                              : "bg-red-100 text-red-700"
                            }`}
                        >
                          {issue.status || "ongoing"}
                        </span>
                      </td>
                      <td className="px-6 py-4 text-center space-x-3">
                        <button
                        onClick={() => {
                          handleModal();
                          setUpdatedid(issue._id);

                        }}
                        
                          className="px-4 py-1 text-sm font-semibold text-orange-500 border border-orange-300 rounded-full hover:bg-orange-50 transition"
                        >
                          Update
                        </button>
                        <button
                          onClick={() => HandleDelete(issue._id)}
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

        <dialog ref={modalref} className="modal  modal-bottom sm:modal-middle">
          <div className="modal-box bg-[#FBF1EF]">

            <form onSubmit={HandleSubmit} className="space-y-4">
              <div>
                <label className="block text-gray-600 mb-1">Issue Title</label>
                <input type="text" name='title' required placeholder="Update issue title" className="w-full p-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-blue-500 outline-none transition" />
              </div>

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

           <div className="md:col-span-2 flex flex-col">
            <label className="font-semibold text-gray-600 mb-1">Description</label>
            <textarea
              name="description"
              className="border border-gray-300 rounded-2xl p-3 h-32 focus:outline-none focus:ring-2 focus:ring-indigo-400 transition"
              required
            ></textarea>
          </div>


              <div>
                <label className="block text-gray-600 mb-1">Amount</label>
                <input type="number" required name='amount' placeholder="Update amount" className="w-full p-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-blue-500 outline-none transition" />
              </div>
              <select

              name="status"
              className="border w-full border-gray-300 rounded-2xl p-3 focus:outline-none focus:ring-2 focus:ring-indigo-400 transition"
              required
            >
              <option value=""> Update status </option>
              <option value="ongoing">ongoing</option>
              <option value="ended">ended</option>
            </select>


              <div className="flex justify-end gap-3 pt-2">

                <button onClick={canclebutton} className='btn btn-outline mr-4 text-orange-500  font-bold hover:bg-[#FBF1EF] hover:border-orange-200' type="button">Cancel</button>

                <button type="submit" className="btn btn-outline mr-4 text-orange-500  font-bold hover:bg-[#FBF1EF] hover:border-orange-200">Update Now</button>
              </div>
            </form>

          </div>
        </dialog>
    </div>
  );
};

export default Myissues;