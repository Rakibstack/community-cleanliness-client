import React, { useContext, useEffect, useRef, useState } from 'react';
import { useLoaderData } from 'react-router';
import { AuthContext } from '../AuthProvider/AuthProvider';
import useAxiosSecure from '../Hooks/useAxiosSecure';
import Swal from 'sweetalert2';

const DetailsPages = () => {
  const detailData = useLoaderData();
  const { _id: productid } = detailData;
  const [Contribute, setContribute] = useState([])

  const modalref = useRef();
  const { user } = useContext(AuthContext)
  const axiossecure = useAxiosSecure()

  useEffect(() => {

    axiossecure.get(`/mycontribute/${productid}`)
      .then(data => {

        setContribute(data.data)
      })
  }, [productid, axiossecure])

  const HandleModal = () => {
    modalref.current.showModal();
  }
  const canclebutton = () => {
    modalref.current.close()
  }


  const HandleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;

    const contributeinfo = {
      title: form.title.value,
      amount: form.amount.value,
      name: form.name.value,
      productid: productid,
      email: user?.email || "",
      image: user?.photoURL,
      phone: form.phone.value,
      address: form.address.value,
      date: new Date()
    }

    axiossecure.post('/mycontribute', contributeinfo)
      .then(res => {
        if (res.data.insertedId) {
          Swal.fire({
            position: "center",
            icon: "success",
            title: "Your Contribute has been Success",
            showConfirmButton: false,
            timer: 2500
          });

          contributeinfo._id = res.data.insertedId
          const newcontribute = [...Contribute, contributeinfo].sort((a, b) => b.amount - a.amount)
          setContribute(newcontribute);
        }
      })

    e.target.reset()
    modalref.current.close();

  }



  return (
    <div className="bg-theme-primary min-h-screen transition-colors duration-300">
      <title>Details Page</title>
      <div className="py-8 flex justify-center">
        <div className="max-w-2xl w-full bg-theme-secondary shadow-xl rounded-2xl overflow-hidden transition-colors duration-300">
          <div className="relative h-72 w-full">
            <img
              src={detailData?.image}
              alt={detailData?.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
            <h1 className="absolute bottom-4 left-4 text-3xl font-bold text-white drop-shadow-md">
              {detailData?.title}
            </h1>
          </div>


          <div className="p-6 space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-theme-card p-4 shadow-sm rounded-xl transition-colors duration-300">
                <p className="text-theme-muted text-sm">Category</p>
                <p className="font-semibold text-theme-primary">{detailData?.category}</p>
              </div>


              <div className="bg-theme-card p-4 shadow-sm rounded-xl transition-colors duration-300">
                <p className="text-theme-muted text-sm">Location</p>
                <p className="font-semibold text-theme-primary">{detailData?.location}</p>
              </div>


              <div className="bg-theme-card p-4 shadow-sm rounded-xl transition-colors duration-300">
                <p className="text-theme-muted text-sm">Date</p>
                <p className="font-semibold text-theme-primary">{detailData?.date}</p>
              </div>


              <div className="bg-theme-card p-4 shadow-sm rounded-xl transition-colors duration-300">
                <p className="text-theme-muted text-sm">Suggested Clean‑Up Budget</p>
                <p className="font-semibold text-theme-primary">{detailData?.amount} BDT</p>
              </div>
            </div>

            <div className="bg-theme-card p-5 shadow-md rounded-xl transition-colors duration-300">
              <h2 className="text-xl font-bold mb-2 text-theme-primary">Description</h2>
              <p className="text-theme-secondary leading-relaxed">{detailData?.description}</p>
            </div>

            <div className="flex justify-end">
              <button onClick={HandleModal} className="btn btn-outline mr-4 text-orange-500 font-bold hover:bg-theme-secondary hover:border-orange-200">
                Pay Clean-Up Contribution
              </button>
            </div>
          </div>
        </div>
      </div>

      <div>

        <dialog ref={modalref} className="modal modal-bottom sm:modal-middle">
          <div className="modal-box bg-theme-secondary">

            <form onSubmit={HandleSubmit} className="space-y-4">
              <div>
                <label className="block text-theme-secondary mb-1">Issue Title</label>
                <input type="text" name='title' required placeholder="Enter issue title" className="w-full p-3 rounded-xl border border-theme bg-theme-card text-theme-primary focus:ring-2 focus:ring-orange-500 outline-none transition" />
              </div>


              <div>
                <label className="block text-theme-secondary mb-1">Amount</label>
                <input type="number" required name='amount' placeholder="Enter contribution amount" className="w-full p-3 rounded-xl border border-theme bg-theme-card text-theme-primary focus:ring-2 focus:ring-orange-500 outline-none transition" />
              </div>


              <div>
                <label className="block text-theme-secondary mb-1">Contributor Name</label>
                <input type="text" required name='name' placeholder="Your full name" className="w-full p-3 rounded-xl border border-theme bg-theme-card text-theme-primary focus:ring-2 focus:ring-orange-500 outline-none transition" />
              </div>


              <div>
                <label className="block text-theme-secondary mb-1">Email </label>
                <input type="email" readOnly value={user?.email} className="w-full p-3 rounded-xl border border-theme bg-theme-card text-theme-muted cursor-not-allowed" />
              </div>


              <div>
                <label className="block text-theme-secondary mb-1">Phone Number</label>
                <input type="text" required name='phone' placeholder="Enter your phone number" className="w-full p-3 rounded-xl border border-theme bg-theme-card text-theme-primary focus:ring-2 focus:ring-orange-500 outline-none transition" />
              </div>


              <div>
                <label className="block text-theme-secondary mb-1">Address</label>
                <input type="text" required name='address' placeholder="Your address" className="w-full p-3 rounded-xl border border-theme bg-theme-card text-theme-primary focus:ring-2 focus:ring-orange-500 outline-none transition" />
              </div>


              <div>
                <label className="block text-theme-secondary mb-1">Date</label>
                <p className="p-3 bg-theme-card rounded-xl border border-theme text-theme-primary">{new Date().toLocaleDateString()}</p>
              </div>


              <div className="flex justify-end gap-3 pt-2">


                <button onClick={canclebutton} className='btn btn-outline mr-4 text-orange-500 font-bold hover:bg-theme-secondary hover:border-orange-200' type="button">Cancel</button>

                <button type="submit" className="btn btn-outline mr-4 text-orange-500 font-bold hover:bg-theme-secondary hover:border-orange-200">Pay Now</button>
              </div>
            </form>

          </div>
        </dialog>
      </div>
      <div className="container mx-auto w-11/12 pb-10">

        <div className="mt-10 bg-theme-card backdrop-blur-xl rounded-2xl shadow-lg border border-theme p-6 transition-colors duration-300">
          <h2 className="text-2xl font-semibold text-theme-primary mb-2 text-center">
            Contributors ({Contribute.length})
          </h2>

          {Contribute.length === 0 ? (
            <p className="text-center text-theme-muted italic">
              No contributions yet.
            </p>
          ) : (
            <div className="overflow-x-auto rounded-xl">

              <table className="min-w-full text-sm text-left text-theme-primary">
                <thead className="bg-theme-secondary text-orange-500">
                  <tr>
                    <th scope="col" className="px-6 py-3 rounded-tl-xl">
                      Image
                    </th>
                    <th scope="col" className="px-6 py-3">
                      Name
                    </th>
                    <th scope="col" className="px-6 py-3 rounded-tr-xl text-right">
                      Amount (৳)
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
                  {Contribute.map((c, index) => (
                    <tr
                      key={index}
                      className="hover:bg-orange-50 dark:hover:bg-slate-700 transition-colors duration-200"
                    >
                      <td className="px-6 py-4">
                        <img
                          src={c.image}
                          alt={c.name}
                          className="w-10 h-10 rounded-full object-cover border border-theme"
                        />
                      </td>
                      <td className="px-6 py-4 font-medium text-theme-primary">
                        {c.name}
                      </td>
                      <td className="px-6 py-4 text-right font-semibold text-orange-500">
                        ৳{c.amount.toLocaleString()}
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

export default DetailsPages;
