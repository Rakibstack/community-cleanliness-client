import {
  HeartPlus,
  UserRoundPlus,
  SlidersHorizontal,
  LayoutDashboard,
  UserRoundPen,
  Sun,
  Moon,
} from "lucide-react";
import React, { useContext, useState } from "react";
import { Link, NavLink, Outlet } from "react-router";
import { AuthContext } from "../AuthProvider/AuthProvider";
import { ThemeContext } from "../ThemeProvider/ThemeContext";
import { motion, AnimatePresence } from "framer-motion";


const DashboardLayout = () => {
    const { user, LogOut } = useContext(AuthContext);
    const { theme, toggleTheme } = useContext(ThemeContext);
    const [open, setOpen] = useState(false);
    
  
  return (
    <div className="drawer lg:drawer-open">
      <input id="dashboard-drawer" type="checkbox" className="drawer-toggle" />

      {/* Main Content */}
      <div className="drawer-content flex flex-col">
        {/* Top Navbar */}
        <nav className="navbar bg-theme-card shadow-sm px-4 transition-colors duration-300">
          <label
            htmlFor="dashboard-drawer"
            className="btn btn-ghost lg:hidden text-theme-primary"
          >
            ☰
          </label>
          <div className="flex items-center justify-between w-full">
            <div>
               <h2 className="text-xl font-semibold text-theme-primary">
            Dashboard
          </h2>
            </div>
            <div className="flex items-center gap-4">
              {/* Theme Toggle */}
              <button 
                onClick={toggleTheme} 
                className="btn btn-ghost btn-circle text-theme-primary hover:bg-orange-100 dark:hover:bg-slate-700"
                aria-label="Toggle theme"
              >
                {theme === "light" ? <Moon size={22} /> : <Sun size={22} />}
              </button>

              <div className="relative mr-5">
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
                      className="absolute right-0 mt-3 w-48 bg-theme-card shadow-lg rounded-xl p-3 space-y-2"
                    >
                      <Link to="/" className="block text-theme-primary hover:text-orange-500">
                        Home Pages
                      </Link>
                      <Link to="/aboutsection" className="block text-theme-primary hover:text-orange-500">
                        About
                      </Link>
                      <Link to="/services" className="block text-theme-primary hover:text-orange-500">
                        Service
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
            </div>
          </div>
        </nav>

        {/* Page Content */}
        <main className="p-6 bg-theme-primary min-h-screen transition-colors duration-300">
          <Outlet />
        </main>
      </div>

      {/* Sidebar */}
      <div className="drawer-side">
        <label htmlFor="dashboard-drawer" className="drawer-overlay"></label>

        <aside className="w-64 bg-theme-secondary min-h-full shadow-lg transition-colors duration-300">
          {/* Branding */}
          <div className="p-6 border-b border-theme">
            <Link to="/" className="text-2xl font-bold text-orange-500">
              CleanZone
            </Link>
            <p className="text-sm text-theme-muted">
              Community Dashboard
            </p>
          </div>

          {/* Menu */}
          <ul className="menu p-4 gap-2">
            <li>
              <NavLink
                to="/dashboard"
                end
                className={({ isActive }) =>
                  isActive
                    ? "bg-orange-100 text-orange-600 font-semibold dark:bg-orange-500/20"
                    : "text-theme-primary hover:bg-orange-50 dark:hover:bg-slate-700"
                }
              >
                <LayoutDashboard size={18} />
                Dashboard Home
              </NavLink>
            </li>

            <li>
              <NavLink
                to="/dashboard/addissues"
                className={({ isActive }) =>
                  isActive
                    ? "bg-orange-100 text-orange-600 font-semibold dark:bg-orange-500/20"
                    : "text-theme-primary hover:bg-orange-50 dark:hover:bg-slate-700"
                }
              >
                <UserRoundPlus size={18} />
                Add Issue
              </NavLink>
            </li>

            <li>
              <NavLink
                to="/dashboard/myissues"
                className={({ isActive }) =>
                  isActive
                    ? "bg-orange-100 text-orange-600 font-semibold dark:bg-orange-500/20"
                    : "text-theme-primary hover:bg-orange-50 dark:hover:bg-slate-700"
                }
              >
                <HeartPlus size={18} />
                My Issues
              </NavLink>
            </li>

            <li>
              <NavLink
                to="/dashboard/mycontribute"
                className={({ isActive }) =>
                  isActive
                    ? "bg-orange-100 text-orange-600 font-semibold dark:bg-orange-500/20"
                    : "text-theme-primary hover:bg-orange-50 dark:hover:bg-slate-700"
                }
              >
                <SlidersHorizontal size={18} />
                My Contributions
              </NavLink>
              <NavLink
                to="/dashboard/profile"
                className={({ isActive }) =>
                  isActive
                    ? "bg-orange-100 text-orange-600 font-semibold dark:bg-orange-500/20"
                    : "text-theme-primary hover:bg-orange-50 dark:hover:bg-slate-700"
                }
              >
               <UserRoundPen size={18} />
                My Profile
              </NavLink>
            </li>
          </ul>
        </aside>
      </div>
    </div>
  );
};

export default DashboardLayout;
