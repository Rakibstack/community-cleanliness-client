import { useContext, useState } from 'react';
import { AuthContext } from '../AuthProvider/AuthProvider';
import { GoogleAuthProvider } from 'firebase/auth';
import { IoEyeSharp } from 'react-icons/io5';
import { FaEyeSlash } from 'react-icons/fa';
import { Link, useLocation, useNavigate } from 'react-router';
import Loader from './Loader';
import { motion } from 'framer-motion';

const Login = () => {
  const logInProvider = new GoogleAuthProvider();
  const { loginUser, loader, setLoader, signUpWithGoogle } =
    useContext(AuthContext);

  const [error, setError] = useState('');
  const [show, setShow] = useState(false);

  //  Demo credentials state
  const [demoEmail, setDemoEmail] = useState('');
  const [demoPassword, setDemoPassword] = useState('');

  const location = useLocation();
  const navigate = useNavigate();

  // ================= Normal Login =================
  const Handlelogin = async (e) => {
    e.preventDefault();
    setError('');
    setLoader(true);

    try {
      const Email = demoEmail || e.target.email.value;
      const Password = demoPassword || e.target.password.value;

      await loginUser(Email, Password);
      e.target.reset();
      navigate(location.state ? location.state : '/');
    } catch (err) {
      console.error(err);
      if (err.code === 'auth/invalid-credential') {
        setError('Email or password is incorrect');
      } else {
        setError('Something went wrong. Try again.');
      }
    } finally {
      setLoader(false);
    }
  };

  const HandleGoogle = async () => {
    setError('');
    setLoader(true);

    try {
      await signUpWithGoogle(logInProvider);
      navigate(location.state ? location.state : '/');
    } catch (err) {
      console.error(err);
      setError(err.message);
    } finally {
      setLoader(false);
    }
  };

  // ================= Demo Login =================
  const handleDemoLogin = async () => {
    setError('');
    setLoader(true);

    const demoUser = {
      email: 'asif12@gmail.com',
      password: 'Asif1!',
    };

    try {
      setDemoEmail(demoUser.email);
      setDemoPassword(demoUser.password);

      await loginUser(demoUser.email, demoUser.password);
      navigate('/');
    } catch (err) {
      console.error(err);
      setError('Demo login failed');
    } finally {
      setLoader(false);
    }
  };

  if (loader) {
    return <Loader />;
  }

  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.5 }
    }
  };

  return (
    <div className="mt-8 min-h-screen bg-theme-primary transition-colors duration-300 flex items-center justify-center py-12">
      <title>Log in Page</title>

      <motion.div
        className="card bg-theme-secondary w-full mx-auto max-w-sm shadow-2xl"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.h2
          className="text-center text-2xl font-bold mt-4 text-theme-primary"
          variants={itemVariants}
        >
          Please Log in
        </motion.h2>

        <form onSubmit={Handlelogin} className="card-body">
          <fieldset className="fieldset">
            {/* Email */}
            <motion.div variants={itemVariants}>
              <label className="label text-theme-primary">Email</label>
              <motion.input
                type="email"
                name="email"
                required
                value={demoEmail}
                onChange={(e) => setDemoEmail(e.target.value)}
                className="input w-full bg-theme-card text-theme-primary border-theme"
                placeholder="Email"
                whileFocus={{ scale: 1.02 }}
                transition={{ duration: 0.2 }}
              />
            </motion.div>

            {/* Password */}
            <motion.div className="relative" variants={itemVariants}>
              <label className="label text-theme-primary">Password</label>
              <motion.input
                type={show ? 'text' : 'password'}
                name="password"
                required
                value={demoPassword}
                onChange={(e) => setDemoPassword(e.target.value)}
                className="input w-full bg-theme-card text-theme-primary border-theme"
                placeholder="Password"
                whileFocus={{ scale: 1.02 }}
                transition={{ duration: 0.2 }}
              />
              <motion.button
                type="button"
                onClick={() => setShow(!show)}
                className="absolute top-7 right-4 text-theme-primary"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                {show ? <FaEyeSlash size={21} /> : <IoEyeSharp size={21} />}
              </motion.button>
            </motion.div>

            <motion.div variants={itemVariants}>
              <Link to="/auth/forgotpass" className="link link-hover text-theme-secondary">
                Forgot password?
              </Link>
            </motion.div>

            {/* Google Login */}
            <motion.button
              type="button"
              onClick={HandleGoogle}
              className="btn bg-theme-card text-theme-primary border-theme"
              variants={itemVariants}
              whileHover={{ scale: 1.03, y: -2 }}
              whileTap={{ scale: 0.98 }}
            >
              <svg
                aria-label="Google logo"
                width="16"
                height="16"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
              >
                <path fill="#34a853" d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341" />
                <path fill="#4285f4" d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57" />
                <path fill="#fbbc02" d="m90 341a208 200 0 010-171l63 49q-12 37 0 73" />
                <path fill="#ea4335" d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55" />
              </svg>
              Login with Google
            </motion.button>

            {/*  Demo Login */}
            <motion.button
              type="button"
              onClick={handleDemoLogin}
              className="btn btn-outline border-dashed text-blue-600 font-semibold"
              variants={itemVariants}
              whileHover={{ scale: 1.03, y: -2 }}
              whileTap={{ scale: 0.98 }}
            >
               Login as Demo User
            </motion.button>

            <motion.p
              className="text-xs text-theme-muted text-center"
              variants={itemVariants}
            >
              (For recruiters & demo purpose)
            </motion.p>

            <motion.h2
              className="font-medium text-theme-primary"
              variants={itemVariants}
            >
              New here?{' '}
              <Link
                className="text-orange-600 font-extrabold"
                state={location.state}
                to="/auth/register"
              >
                Register
              </Link>
            </motion.h2>

            {error && (
              <motion.p
                className="text-red-500 font-bold text-center"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3 }}
              >
                {error}
              </motion.p>
            )}

            <motion.button
              disabled={loader}
              className="btn btn-outline text-orange-500 font-bold mt-4"
              variants={itemVariants}
              whileHover={{ scale: 1.03, y: -2 }}
              whileTap={{ scale: 0.98 }}
            >
              {loader ? 'Checking...' : 'Login'}
            </motion.button>
          </fieldset>
        </form>
      </motion.div>
    </div>
  );
};

export default Login;
