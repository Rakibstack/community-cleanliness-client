import React, { useEffect, useState } from "react";
import {
  AlertTriangle,
  HeartHandshake,
  CheckCircle,
} from "lucide-react";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { gsap } from "gsap";

const DashboardHome = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true });

  const [stats, setStats] = useState({
    totalIssues: 0,
    myContributions: 0,
    resolvedIssues: 0,
  });

  const [recentIssues, setRecentIssues] = useState([]);

  useEffect(() => {
    setTimeout(() => {
      setStats({
        totalIssues: 24,
        myContributions: 12,
        resolvedIssues: 9,
      });

      setRecentIssues([
        {
          id: 1,
          title: "Garbage overflow in Mirpur",
          status: "Pending",
        },
        {
          id: 2,
          title: "Road damage near Dhanmondi",
          status: "In Progress",
        },
        {
          id: 3,
          title: "Water leakage issue",
          status: "Resolved",
        },
      ]);
    }, 800);
  }, []);

  useEffect(() => {
    if (isInView && stats.totalIssues > 0) {
      // Animate stat numbers
      gsap.from(".stat-number", {
        textContent: 0,
        duration: 2,
        ease: "power2.out",
        snap: { textContent: 1 },
        stagger: 0.2
      });
    }
  }, [isInView, stats]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const cardVariants = {
    hidden: { y: 30, opacity: 0, scale: 0.9 },
    visible: {
      y: 0,
      opacity: 1,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 12
      }
    }
  };

  return (
    <motion.div
      ref={sectionRef}
      className="space-y-8"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {/* Header */}
      <motion.div variants={cardVariants}>
        <h1 className="text-2xl font-bold text-theme-primary">
          Welcome back 
        </h1>
        <p className="text-theme-muted">
          Here's what's happening in your community today
        </p>
      </motion.div>

      {/* Stats Cards */}
      <motion.div
        className="grid grid-cols-1 md:grid-cols-3 gap-6"
        variants={containerVariants}
      >
        <motion.div
          variants={cardVariants}
          whileHover={{ y: -5, scale: 1.02 }}
          className="bg-theme-card rounded-xl shadow p-6 flex items-center gap-4 transition-colors duration-300"
        >
          <motion.div
            initial={{ rotate: -180, scale: 0 }}
            animate={{ rotate: 0, scale: 1 }}
            transition={{ type: "spring", stiffness: 200, delay: 0.3 }}
          >
            <AlertTriangle className="text-orange-500" size={32} />
          </motion.div>
          <div>
            <h2 className="text-2xl font-bold text-theme-primary stat-number">{stats.totalIssues}</h2>
            <p className="text-theme-muted text-sm">Total Issues</p>
          </div>
        </motion.div>

        <motion.div
          variants={cardVariants}
          whileHover={{ y: -5, scale: 1.02 }}
          className="bg-theme-card rounded-xl shadow p-6 flex items-center gap-4 transition-colors duration-300"
        >
          <motion.div
            initial={{ rotate: -180, scale: 0 }}
            animate={{ rotate: 0, scale: 1 }}
            transition={{ type: "spring", stiffness: 200, delay: 0.5 }}
          >
            <HeartHandshake className="text-blue-500" size={32} />
          </motion.div>
          <div>
            <h2 className="text-2xl font-bold text-theme-primary stat-number">
              {stats.myContributions}
            </h2>
            <p className="text-theme-muted text-sm">
              My Contributions
            </p>
          </div>
        </motion.div>

        <motion.div
          variants={cardVariants}
          whileHover={{ y: -5, scale: 1.02 }}
          className="bg-theme-card rounded-xl shadow p-6 flex items-center gap-4 transition-colors duration-300"
        >
          <motion.div
            initial={{ rotate: -180, scale: 0 }}
            animate={{ rotate: 0, scale: 1 }}
            transition={{ type: "spring", stiffness: 200, delay: 0.7 }}
          >
            <CheckCircle className="text-green-500" size={32} />
          </motion.div>
          <div>
            <h2 className="text-2xl font-bold text-theme-primary stat-number">
              {stats.resolvedIssues}
            </h2>
            <p className="text-theme-muted text-sm">
              Resolved Issues
            </p>
          </div>
        </motion.div>
      </motion.div>

      {/* Recent Issues */}
      <motion.div
        variants={cardVariants}
        className="bg-theme-card rounded-xl shadow transition-colors duration-300"
      >
        <div className="p-6 border-b border-theme">
          <h3 className="text-lg font-semibold text-theme-primary">
            Recent Issues
          </h3>
        </div>

        <div className="divide-y divide-gray-200 dark:divide-gray-700">
          {recentIssues.map((issue, index) => (
            <motion.div
              key={issue.id}
              className="p-6 flex justify-between items-center"
              initial={{ x: -50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: index * 0.1 + 0.5 }}
              whileHover={{ x: 5, backgroundColor: "rgba(249, 115, 22, 0.05)" }}
            >
              <span className="text-theme-primary">
                {issue.title}
              </span>

              <motion.span
                className={`px-3 py-1 rounded-full text-sm ${
                  issue.status === "Resolved"
                    ? "bg-green-100 text-green-600 dark:bg-green-900/30 dark:text-green-400"
                    : issue.status === "In Progress"
                    ? "bg-blue-100 text-blue-600 dark:bg-blue-900/30 dark:text-blue-400"
                    : "bg-orange-100 text-orange-600 dark:bg-orange-900/30 dark:text-orange-400"
                }`}
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: index * 0.1 + 0.7, type: "spring" }}
              >
                {issue.status}
              </motion.span>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </motion.div>
  );
};

export default DashboardHome;
