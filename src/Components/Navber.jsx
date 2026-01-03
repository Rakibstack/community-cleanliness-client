import React, { useContext, useState } from "react";
import { Link, NavLink } from "react-router";
import { motion, AnimatePresence } from "framer-motion";
import headericon from "../assets/cleanlinesspng.png";
import { AuthContext } from "../AuthProvider/AuthProvider";
import Loader from "./Loader";
import { ThemeContext } from "../ThemeProvider/ThemeProvider ";

const Navber = () => {
  const { user, LogOut, loader } = useContext(AuthContext);
  const { theme, toggleTheme } = useContext(ThemeContext);
  const [open, setOpen] = useState(false);

  if (loader) return <Loader />;

  const navLinkStyle = ({ isActive }) =>
    isActive
      ? "text-orange-500 font-semibold"
      : "text-gray-700 hover:text-orange-500";

  const links = (
    <>
      <NavLink to="/" className={navLinkStyle}>Home</NavLink>
      <NavLink to="/aboutsection" className={navLinkStyle}>About</NavLink>
      <NavLink to="/services" className={navLinkStyle}>Services</NavLink>
      <NavLink to="/howitworks" className={navLinkStyle}>How It Works</NavLink>
      <NavLink to="/allissues" className={navLinkStyle}>All Issues</NavLink>

      {user && (
        <>
          <NavLink to="/addissues" className={navLinkStyle}>Add Issue</NavLink>
          <NavLink to="/myissues" className={navLinkStyle}>My Issues</NavLink>
          <NavLink to="/mycontribute" className={navLinkStyle}>My Contribution</NavLink>
        </>
      )}
    </>
  );

  return (
    <div className="sticky top-0 z-50 bg-[#FBF1EF]">
      <div className="navbar container mx-auto w-11/12">

        {/* LEFT */}
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">☰</label>
            <ul className="menu menu-sm dropdown-content mt-4 p-4 shadow bg-white rounded-box w-64 space-y-2">
              {links}
            </ul>
          </div>

          <Link to="/" className="flex items-center gap-3 font-bold text-gray-700 text-xl">
            <img
              src={headericon}
              alt="CleanZone Logo"
              className="w-12 h-12 border-2 border-orange-300 rounded-full"
            />
            CleanZone Report
          </Link>
        </div>

        {/* CENTER */}
        <div className="navbar-center hidden lg:flex">
          <nav className="flex gap-6 font-medium">
            {links}
          </nav>
        </div>

        {/* RIGHT */}
        <div className="navbar-end gap-4">

          {/* Theme Toggle */}
          <button onClick={toggleTheme} className="text-xl">
            {theme === "light" ? "🌙" : "☀️"}
          </button>

          {/* Auth */}
          {user ? (
            <div className="relative">
              <img
                src={user.photoURL}
                alt="User profile"
                onClick={() => setOpen(!open)}
                className="w-12 h-12 rounded-full border-2 border-orange-300 cursor-pointer"
              />

              <AnimatePresence>
                {open && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95, y: -5 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.95, y: -5 }}
                    transition={{ duration: 0.2 }}
                    className="absolute right-0 mt-3 w-48 bg-white shadow-lg rounded-xl p-3 space-y-2"
                  >
                    <Link to="/profile" className="block hover:text-orange-500">
                      Profile
                    </Link>
                    <Link to="/dashboard" className="block hover:text-orange-500">
                      Dashboard
                    </Link>
                    <button
                      onClick={LogOut}
                      className="w-full text-left text-red-500 hover:text-red-600"
                    >
                      Logout
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ) : (
            <>
              <Link to="/auth/login" className="btn btn-outline text-orange-500">
                Log in
              </Link>
              <Link to="/auth/register" className="btn bg-orange-500 text-white">
                Register
              </Link>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navber;
