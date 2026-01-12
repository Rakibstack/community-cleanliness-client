import React, { useContext } from 'react';
import { AuthContext } from '../AuthProvider/AuthProvider';
import { motion } from 'framer-motion';

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
        <div className='mt-10 min-h-screen bg-theme-primary transition-colors duration-300 flex items-center justify-center'>
       <title>Reset Password</title>
            <motion.div
              className="card bg-theme-secondary w-full max-w-md mx-auto shadow-2xl"
              initial={{ opacity: 0, y: 50, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.6, type: "spring", stiffness: 100 }}
            >
                <form onSubmit={HandleReset} className="card-body">
                    <motion.h2
                      className='text-center text-3xl font-medium text-theme-primary'
                      initial={{ opacity: 0, y: -20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.2 }}
                    >
                      Reset Your Password
                    </motion.h2>
                    <fieldset className="fieldset">
                        <motion.div
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.3 }}
                        >
                          <label className="label text-theme-primary">Email</label>
                          <motion.input
                            type="email"
                            name='email'
                            className="input w-full bg-theme-card text-theme-primary border-theme"
                            placeholder="Email"
                            whileFocus={{ scale: 1.02 }}
                            transition={{ duration: 0.2 }}
                          />
                        </motion.div>
                        <motion.button
                          className="btn btn-outline text-orange-500 font-bold hover:bg-theme-secondary hover:border-orange-200 mt-4"
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.4 }}
                          whileHover={{ scale: 1.03, y: -2 }}
                          whileTap={{ scale: 0.98 }}
                        >
                          Reset Password
                        </motion.button>
                    </fieldset>
                </form>
            </motion.div>

        </div>
    );
};

export default ForgotPass;
