import React, { useContext } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";
import { Mail, MapPin, User } from "lucide-react";

const Profile = () => {
  const { user } = useContext(AuthContext);

  return (
    <div className="max-w-5xl mx-auto space-y-8">

      {/* Profile Header */}
      <div className="bg-white rounded-xl shadow p-8 flex flex-col md:flex-row items-center gap-6">
        
        {/* Avatar */}
        <img
          src={user?.photoURL || "https://i.ibb.co/2FsfXqM/user.png"}
          alt="profile"
          className="w-32 h-32 rounded-full border-4 border-indigo-500 object-cover"
        />

        {/* Info */}
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

          <button className="btn btn-outline btn-sm mt-3">
            Edit Profile
          </button>
        </div>
      </div>

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
