import { useContext, useState } from 'react';
import { AuthContext } from '../AuthProvider/AuthProvider';
import { GoogleAuthProvider } from 'firebase/auth';
import { IoEyeSharp } from 'react-icons/io5';
import { FaEyeSlash } from 'react-icons/fa';
import { Link, useLocation } from 'react-router';
import { useNavigate } from 'react-router';
import Loader from './Loader';

const Login = () => {
    const logInProvider = new GoogleAuthProvider()
    const { loginUser,loader,setLoader, signUpWithGoogle } = useContext(AuthContext)
    const [error, setError] = useState()
    const [show, setShow] = useState(false);
    const location = useLocation();
    const navigate = useNavigate();


    const Handlelogin = async (e) => {
        e.preventDefault();
        setError('');

        try {
            const Email = e.target.email.value;
            const Password = e.target.password.value;

            await loginUser(Email, Password);

            e.target.reset();
            setLoader(false);
            navigate(location.state ? location.state : '/');

        } catch (err) {
            console.error(err);
            if (err.code === 'auth/invalid-credential') {
                setError('Email or password is incorrect');
            } else {
                setError('Something went wrong. Try again.');
            }
        } finally {
            setLoader(false);}
    };

    const HandleGoogle = async () => {
        setLoading(true);
        setError('');

        try {
            await signUpWithGoogle(logInProvider);
            navigate(location.state ? location.state : '/');
        } catch (err) {
            console.error(err);
            setError(err.message);
        } finally {
            setLoading(false);
        }
    };

    if (loader) {
        return <Loader></Loader>
    }

    return (
        <div className='mt-8'>
            <title>Log in Page</title>
            <div className="card bg-[#FBF1EF] w-full mx-auto max-w-sm  shadow-2xl">
                <h2 className='text-center text-2xl font-bold mt-4'>Please Log in</h2>
                <form onSubmit={Handlelogin} className="card-body">
                    <fieldset className="fieldset">
                        {/* email field */}
                        <label className="label">Email</label>
                        <input type="email" name='email' required className="input w-full" placeholder="Email" />
                        {/* password field */}
                        <div className='relative'>
                            <label className="label">Password</label>
                            <input type={show ? 'text' : 'password'} name='password' required className="input w-full" placeholder="Password" />
                            <button type='button' onClick={() => setShow(!show)} className=' absolute top-7 right-4'>{show ? <FaEyeSlash size={21} /> : <IoEyeSharp size={21} />}</button>
                        </div>
                        <div><Link to='/auth/forgotpass' className="link link-hover">Forgot password?</Link></div>
                        {/* Google */}
                        <button onClick={HandleGoogle} className="btn bg-white text-black border-[#e5e5e5]">
                            <svg aria-label="Google logo" width="16" height="16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><g><path d="m0 0H512V512H0" fill="#fff"></path><path fill="#34a853" d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"></path><path fill="#4285f4" d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"></path><path fill="#fbbc02" d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"></path><path fill="#ea4335" d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"></path></g></svg>
                            Login with Google
                        </button>
                        <h2 className='font-medium'>New to Here Please? <Link className='text-orange-600 font-extrabold' state={location.state} to='/auth/register'>Register</Link></h2>
                        <p className='text-red-500 font-bold'>{error}</p>
                        <button
                            disabled={loader}
                            className="btn btn-outline text-orange-500 font-bold mt-4"
                        >
                            {loader ? 'Checking...' : 'Login'}
                        </button>
                    </fieldset>
                </form>
            </div>

        </div>
    );
};

export default Login;