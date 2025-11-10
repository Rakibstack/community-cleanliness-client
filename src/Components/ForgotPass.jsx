import React, { useContext } from 'react';
import { AuthContext } from '../AuthProvider/AuthProvider';

const ForgotPass = () => {
    const {resetPassword} = useContext(AuthContext);

    const HandleReset = (e) => {
    e.preventDefault()
    const email = e.target.email.value;

    resetPassword(email)
    .then(() => {
    }).catch(() => {
        
    })

    }

    return (
        <div className='mt-10'>
       <title>Reset Password</title>
            <div className="card bg-[#FBF1EF] w-full max-w-md mx-auto shadow-2xl">
                <form onSubmit={HandleReset} className="card-body">
                    <h2 className='text-center text-3xl font-medium'>Reset Your Password</h2>
                    <fieldset className="fieldset">
                        <label className="label">Email</label>
                        <input type="email" name='email' className="input w-full" placeholder="Email" />
                        <button className="btn btn-outline  text-orange-500  font-bold  hover:bg-[#FBF1EF] hover:border-orange-200 mt-4">Reset Password</button>
                    </fieldset>
                </form>
            </div>

        </div>
    );
};

export default ForgotPass;