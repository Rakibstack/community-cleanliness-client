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
import { motion } from 'framer-motion';

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

  const containerVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.4 }
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-theme-primary transition-colors duration-300 py-12">
      <motion.div
        className="card bg-theme-secondary w-full max-w-md shadow-2xl"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="card-body">

          <motion.h2
            className="text-3xl font-bold text-center mb-4 text-theme-primary"
            variants={itemVariants}
          >
            Create Account 
          </motion.h2>

          <form onSubmit={handleSubmit(HandleRegister)} className="space-y-4">

            {/* Name */}
            <motion.div variants={itemVariants}>
              <label className="label text-theme-primary">Name</label>
              <motion.input
                className="input w-full bg-theme-card text-theme-primary border-theme"
                placeholder="Your full name"
                {...register('name', { required: true })}
                whileFocus={{ scale: 1.02 }}
                transition={{ duration: 0.2 }}
              />
              {errors.name && <p className="text-red-500 text-sm">Name is required</p>}
            </motion.div>

            {/* Photo */}
            <motion.div variants={itemVariants}>
              <label className="label text-theme-primary">Profile Photo</label>
              <input
                type="file"
                className="file-input w-full bg-theme-card text-theme-primary border-theme"
                {...register('photo', { required: true })}
                onChange={(e) =>
                  setPreview(URL.createObjectURL(e.target.files[0]))
                }
              />
              {preview && (
                <motion.img
                  src={preview}
                  className="w-20 h-20 rounded-full mt-3 border"
                  alt="preview"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ type: "spring", stiffness: 200 }}
                />
              )}
            </motion.div>

            {/* Email */}
            <motion.div variants={itemVariants}>
              <label className="label text-theme-primary">Email</label>
              <motion.input
                type="email"
                className="input w-full bg-theme-card text-theme-primary border-theme"
                placeholder="example@email.com"
                {...register('email', { required: true })}
                whileFocus={{ scale: 1.02 }}
                transition={{ duration: 0.2 }}
              />
              {errors.email && <p className="text-red-500 text-sm">Email is required</p>}
            </motion.div>

            {/* Password */}
            <motion.div className="relative" variants={itemVariants}>
              <label className="label text-theme-primary">Password</label>
              <motion.input
                type={show ? 'text' : 'password'}
                className="input w-full bg-theme-card text-theme-primary border-theme"
                placeholder="At least 6 characters"
                {...register('password', {
                  required: true,
                  minLength: 6,
                  pattern: /^(?=.*[a-z])(?=.*[A-Z]).{6,}$/,
                })}
                whileFocus={{ scale: 1.02 }}
                transition={{ duration: 0.2 }}
              />
              <motion.button
                type="button"
                onClick={() => setShow(!show)}
                className="absolute right-4 top-8 text-theme-muted"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                {show ? <FaEyeSlash size={20} /> : <IoEyeSharp size={20} />}
              </motion.button>

              <p className="text-xs text-theme-muted mt-1">
                Must include uppercase & lowercase letters
              </p>
            </motion.div>

            {error && (
              <motion.p
                className="text-red-500 font-semibold"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
              >
                {error}
              </motion.p>
            )}

            {/* Register Button */}
            <motion.button
              className="btn btn-outline w-full text-orange-500 font-bold"
              variants={itemVariants}
              whileHover={{ scale: 1.03, y: -2 }}
              whileTap={{ scale: 0.98 }}
            >
              Register
            </motion.button>

            {/* Google */}
            <motion.button
              type="button"
              onClick={HandleGoogle}
              className="btn bg-theme-card border-theme w-full flex gap-2 text-theme-primary"
              variants={itemVariants}
              whileHover={{ scale: 1.03, y: -2 }}
              whileTap={{ scale: 0.98 }}
            >
              <img
                src="https://www.svgrepo.com/show/475656/google-color.svg"
                className="w-5"
                alt="google"
              />
              Continue with Google
            </motion.button>

            <motion.p
              className="text-center font-medium text-theme-primary"
              variants={itemVariants}
            >
              Already have an account?{' '}
              <Link to="/auth/login" className="text-orange-600 font-bold">
                Login
              </Link>
            </motion.p>

          </form>
        </div>
      </motion.div>
    </div>
  );
};

export default Register;
