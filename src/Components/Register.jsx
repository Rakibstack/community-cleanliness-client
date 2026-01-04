import React, { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router';
import { AuthContext } from '../AuthProvider/AuthProvider';
import { GoogleAuthProvider } from 'firebase/auth';
import { FaEyeSlash } from 'react-icons/fa';
import { IoEyeSharp } from 'react-icons/io5';
import auth from '../Firebase/firebase.config';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import Loader from './Loader';

const Register = () => {
  const Registerprovider = new GoogleAuthProvider();
  const { createUser,loader,setLoader, signUpWithGoogle, setUser, updateUserProfile } =
    useContext(AuthContext);

  const { handleSubmit, register, formState: { errors } } = useForm();
  const [show, setShow] = useState(false);
  const [preview, setPreview] = useState('');
  const [error, setError] = useState('');

  const location = useLocation();
  const navigate = useNavigate();

  const HandleRegister = async (data) => {
    setError('');

    try {
      const formData = new FormData();
      formData.append('image', data.photo[0]);

  const usercreate =  await createUser(data.email, data.password)
  console.log(usercreate);
  
      

      const res = await axios.post(
        `https://api.imgbb.com/1/upload?key=${import.meta.env.VITE_IMAGE_API_KEY}`,
        formData
      );

      await updateUserProfile({
        displayName: data.name,
        photoURL: res.data.data.url,
      });
    //   setLoading(false);
      setUser(auth.currentUser);
      navigate(location.state || '/');
      setLoader(false);
    } catch (err) {
        console.log(err, 'error');
        setLoader(false);
      setError('Registration failed. Please try again.');
    } finally {
    setLoader(false);
    }
  };

  const HandleGoogle = () => {
    signUpWithGoogle(Registerprovider)
      .then(() => navigate(location.state || '/'))
      .catch(() => {});
  };

  if (loader) return <Loader />;

  return (
    <div className="min-h-screen flex items-center justify-center bg-base-200">
      <div className="card bg-[#FBF1EF] w-full max-w-md shadow-2xl">
        <div className="card-body">

          <h2 className="text-3xl font-bold text-center mb-4">
            Create Account 
          </h2>

          <form onSubmit={handleSubmit(HandleRegister)} className="space-y-4">

            {/* Name */}
            <div>
              <label className="label">Name</label>
              <input
                className="input w-full"
                placeholder="Your full name"
                {...register('name', { required: true })}
              />
              {errors.name && <p className="text-red-500 text-sm">Name is required</p>}
            </div>

            {/* Photo */}
            <div>
              <label className="label">Profile Photo</label>
              <input
                type="file"
                className="file-input w-full"
                {...register('photo', { required: true })}
                onChange={(e) =>
                  setPreview(URL.createObjectURL(e.target.files[0]))
                }
              />
              {preview && (
                <img
                  src={preview}
                  className="w-20 h-20 rounded-full mt-3 border"
                  alt="preview"
                />
              )}
            </div>

            {/* Email */}
            <div>
              <label className="label">Email</label>
              <input
                type="email"
                className="input w-full"
                placeholder="example@email.com"
                {...register('email', { required: true })}
              />
              {errors.email && <p className="text-red-500 text-sm">Email is required</p>}
            </div>

            {/* Password */}
            <div className="relative">
              <label className="label">Password</label>
              <input
                type={show ? 'text' : 'password'}
                className="input w-full"
                placeholder="At least 6 characters"
                {...register('password', {
                  required: true,
                  minLength: 6,
                  pattern: /^(?=.*[a-z])(?=.*[A-Z]).{6,}$/,
                })}
              />
              <button
                type="button"
                onClick={() => setShow(!show)}
                className="absolute  right-4 top-8 text-gray-500"
              >
                {show ? <FaEyeSlash size={20} /> : <IoEyeSharp size={20} />}
              </button>

              <p className="text-xs text-gray-500 mt-1">
                Must include uppercase & lowercase letters
              </p>
            </div>

            {error && <p className="text-red-500 font-semibold">{error}</p>}

            {/* Register Button */}
            <button className="btn btn-outline w-full text-orange-500 font-bold">
              Register
            </button>

            {/* Google */}
            <button
              type="button"
              onClick={HandleGoogle}
              className="btn bg-white border w-full flex gap-2"
            >
              <img
                src="https://www.svgrepo.com/show/475656/google-color.svg"
                className="w-5"
                alt="google"
              />
              Continue with Google
            </button>

            <p className="text-center font-medium">
              Already have an account?{' '}
              <Link to="/auth/login" className="text-orange-600 font-bold">
                Login
              </Link>
            </p>

          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
