import React, { useContext, useState } from 'react';
import { Link } from 'react-router';
import { AuthContext } from '../AuthProvider/AuthProvider';
 import { ToastContainer, toast } from 'react-toastify';
import { GoogleAuthProvider } from 'firebase/auth';
import { FaEyeSlash } from 'react-icons/fa';
import { IoEyeSharp } from 'react-icons/io5';
import auth from '../Firebase/firebase.config';

const Register = () => {
    const Registerprovider = new GoogleAuthProvider();
    const {createUser,signUpWithGoogle,
        user,setUser,
        updateUserProfile} = useContext(AuthContext);
    const [error,setError] = useState()
    const [show, setShow] = useState(false)

   const HandleRegister = (e) => {
    e.preventDefault()
    setError('')
    const Name = e.target.name.value;
    const Photo = e.target.photo.value;
    const Email = e.target.email.value;
    const Password = e.target.password.value;
    console.log(Name,Photo,Email,Password);
    

    const updateProfile = {
        displayName : Name, photoURL: Photo,
    }

   const regex = /^(?=.*[a-z])(?=.*[A-Z]).{6,}$/;

   if(!regex.test(Password)){
    toast.error("Password must be at least 6 characters long and include both uppercase and lowercase letters.")
    return
  }
    e.target.reset()
    createUser(Email,Password).then(result => {
        console.log(result);
        
     updateUserProfile(updateProfile)
     .then(() => {
       const currentUser = auth.currentUser; 
      setUser(currentUser);
       
     }).catch(() => {
        setUser(user)
     })  
        
    }).catch(error => {
    setError(error.code)        
    })
   }

   const HandleGoogle = () => {

    signUpWithGoogle(Registerprovider)
    .then(result => {
        console.log(result);      
    }).catch(error => {
    console.log(error);
            
    })

  }

    return (

        <div className='mt-4'>
              <ToastContainer />
            <title>Register Page</title>
            <div className="card bg-[#FBF1EF] w-full mx-auto  max-w-sm  shadow-2xl">
                <h2 className='text-center text-2xl font-bold mt-4'>Please Register</h2>
                <form  onSubmit={HandleRegister} className="card-body ">
                    <fieldset className="fieldset">
                        {/* Name field */}
                         <label className="label">Name</label>
                        <input type="text" className="input w-full" required name='name' placeholder="Type Your Name" />
                        {/* Photo Url */}
                         <label className="label">Photo URL</label>
                        <input type="text" className="input w-full" required name='photo' placeholder="Enter Your Photo Url" />
                        {/* email field */}
                        <label className="label">Email</label>
                        <input type="email" className="input w-full" required name='email' placeholder="Email" />
                        {/* password field */}
                       <div className='relative'>
                         <label className="label">Password</label>
                        <input type={show ? 'text' : "password"} name='password' required className="input w-full" placeholder="Password" />
                         <button type='button' onClick={() => setShow(!show)} className=' absolute top-7 right-4'>{show ? <FaEyeSlash  size={21}/> : <IoEyeSharp size={21} />}</button>
                       </div>
                        {/* Google */}
                        <button onClick={HandleGoogle} className="btn mt-2 bg-white text-black border-[#e5e5e5]">
                            <svg aria-label="Google logo" width="16" height="16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><g><path d="m0 0H512V512H0" fill="#fff"></path><path fill="#34a853" d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"></path><path fill="#4285f4" d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"></path><path fill="#fbbc02" d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"></path><path fill="#ea4335" d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"></path></g></svg>
                            Login with Google
                        </button>
                        <h2 className='font-medium'>Already Have An Account Please? <Link className='text-orange-600 font-extrabold' to='/auth/login'>Log in</Link></h2>
                        <p className='text-red-500 font-bold'>{error}</p>
                        <button className="btn btn-outline text-orange-500  font-bold  hover:bg-[#FBF1EF] hover:border-orange-200 mt-4">Register</button>
                    </fieldset>
                </form>
            </div>

        </div>
    );
};

export default Register;