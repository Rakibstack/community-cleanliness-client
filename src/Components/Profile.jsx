import React, { useContext, useRef } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";
import { Mail, MapPin, User } from "lucide-react";
import { useForm } from "react-hook-form";
import axios from "axios";
import Loader from "./Loader";

const Profile = () => {
    const { user, updateUserProfile,loader,setLoader, } = useContext(AuthContext);
    const { handleSubmit, register } = useForm();



    const modalref = useRef()
    const OpenModal = () => {
        modalref.current.showModal()
    }
    const HandleCancle = () => {
        modalref.current.close()
    }
    const UpdateProfile = (data) => {

        setLoader(true);
        const image = data.photo[0]

        const fromdata = new FormData();
        fromdata.append('image', image)

        axios.post(`https://api.imgbb.com/1/upload?key=${import.meta.env.VITE_IMAGE_API_KEY}`, fromdata)
            .then(res => {
                console.log(res.data);
                
                const photoURL = res.data.data.url;
                const updateinfo = {
                    displayName: data.name,
                    photoURL: photoURL
                }
                updateUserProfile(updateinfo)
                    .then(result => {
                        console.log(result);
                        setLoader(false)
                       modalref.current.close()
                    }).catch(error => {
                        console.log(error);
                    })
            })

    }
    if(loader){
        return <Loader></Loader>
    }

    return (
        <div className="max-w-5xl mx-auto space-y-8">

            <div className="bg-white rounded-xl shadow p-8 flex flex-col md:flex-row items-center gap-6">

                <img
                    src={user?.photoURL}
                    alt="profile"
                    className="w-32 h-32 rounded-full border-4 border-indigo-500 object-cover"
                />

                <div className="flex-1 space-y-2 text-center md:text-left">
                    <h2 className="text-2xl font-bold">
                        {user?.displayName || "Anonymous User"}
                    </h2>

                    <p className="text-gray-600 flex items-center justify-center md:justify-start gap-2">
                        <Mail size={16} /> {user?.email}
                    </p>

                    <p className="text-gray-600 flex items-center justify-center md:justify-start gap-2">
                        <MapPin size={16} /> Bangladesh
                    </p>

                    <button onClick={OpenModal} className="btn btn-outline btn-sm mt-3">
                        Edit Profile
                    </button>
                </div>
            </div>
            <dialog ref={modalref} className="modal  modal-bottom sm:modal-middle">
                <div className="modal-box bg-[#FBF1EF]">

                    <form onSubmit={handleSubmit(UpdateProfile)} className="space-y-4">
                        <div>
                            <label className="block  text-gray-600 mb-1">Name</label>
                            <input type="text" {...register("name", { required: true })} placeholder=" your Name" className="w-full p-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-blue-500 outline-none transition" />
                            <label className="block mt-2 text-gray-600 mb-1">Photo</label>
                            <input type="file" {...register("photo", { required: true })} className="file-input" />


                        </div>

                        <div className="flex flex-col">

                        </div>


                        <div className="flex justify-end gap-2 pt-2">
                            <button onClick={HandleCancle} type="submit" className="btn btn-outline mr-2 text-orange-500  font-bold hover:bg-[#FBF1EF] hover:border-orange-200">Cancel</button>
                            <button type="submit" className="btn btn-outline  text-orange-500  font-bold hover:bg-[#FBF1EF] hover:border-orange-200">Update Profile</button>
                        </div>
                    </form>

                </div>
            </dialog>

            {/* Stats Section */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-base-200 rounded-xl p-6 text-center">
                    <h3 className="text-3xl font-bold text-indigo-600">12</h3>
                    <p className="text-gray-600">Issues Reported</p>
                </div>

                <div className="bg-base-200 rounded-xl p-6 text-center">
                    <h3 className="text-3xl font-bold text-green-600">7</h3>
                    <p className="text-gray-600">Resolved Issues</p>
                </div>

                <div className="bg-base-200 rounded-xl p-6 text-center">
                    <h3 className="text-3xl font-bold text-orange-500">5</h3>
                    <p className="text-gray-600">Ongoing</p>
                </div>
            </div>

            {/* About Section */}
            <div className="bg-white rounded-xl shadow p-8">
                <h3 className="text-xl font-semibold mb-3">About Me</h3>
                <p className="text-gray-600 leading-relaxed">
                    I am an active community member contributing to CleanZone Report by
                    reporting public issues and helping create a cleaner and safer
                    environment for everyone.
                </p>
            </div>
        </div>
    );
};

export default Profile;
