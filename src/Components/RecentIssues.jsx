import { MapPin } from "lucide-react";
import { Link } from "react-router";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const RecentIssues = ({ issues = [] }) => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.1 });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1
      }
    }
  };

  const cardVariants = {
    hidden: { 
      y: 80, 
      opacity: 0,
      scale: 0.8
    },
    visible: {
      y: 0,
      opacity: 1,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 80,
        damping: 15
      }
    }
  };

  return (
    <section ref={sectionRef} className="bg-theme-secondary py-22 transition-colors duration-300">
      <motion.h2
        className="text-center text-4xl font-bold mb-12 text-theme-primary"
        initial={{ opacity: 0, y: -30 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8 }}
      >
        Recent Issues
      </motion.h2>

      <motion.div
        className="grid gap-12 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 container mx-auto w-11/12"
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        {issues.map((data, index) => (
          <motion.div
            key={data._id}
            variants={cardVariants}
            whileHover={{ 
              y: -15,
              transition: { duration: 0.3 }
            }}
            className="relative mt-8 mb-14 group"
          >
            {/* Image */}
            <motion.div
              className="overflow-hidden rounded-tl-[50px] rounded-xl"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <motion.img
                src={data.image}
                alt={data.title}
                className="w-full h-56 object-cover"
                initial={{ scale: 1.2 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.8 }}
                whileHover={{ scale: 1.1 }}
              />
            </motion.div>

            {/* Card */}
            <motion.div
              className="absolute left-1/2 -bottom-28 -translate-x-1/2 w-[88%] bg-theme-card shadow-xl rounded-2xl p-5 transition-colors duration-300"
              initial={{ y: 20, opacity: 0 }}
              animate={isInView ? { y: 0, opacity: 1 } : {}}
              transition={{ delay: index * 0.1 + 0.3 }}
            >
              <motion.h3
                className="text-xl font-semibold mb-1 line-clamp-1 text-theme-primary"
                initial={{ x: -20, opacity: 0 }}
                animate={isInView ? { x: 0, opacity: 1 } : {}}
                transition={{ delay: index * 0.1 + 0.4 }}
              >
                {data.title}
              </motion.h3>

              <motion.p
                className="text-theme-secondary text-sm mb-3 line-clamp-2"
                initial={{ x: -20, opacity: 0 }}
                animate={isInView ? { x: 0, opacity: 1 } : {}}
                transition={{ delay: index * 0.1 + 0.5 }}
              >
                {data.description}
              </motion.p>

              <motion.div
                className="flex justify-between text-sm text-theme-muted mb-4"
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : {}}
                transition={{ delay: index * 0.1 + 0.6 }}
              >
                <div className="flex gap-1">
                  <span><MapPin size={18} /></span>
                  <span>{data.location}</span>
                </div>
                <span>{data.category}</span>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
              >
                <Link
                  to={`/detailspage/${data._id}`}
                  className="btn btn-outline w-full text-orange-500 font-semibold hover:bg-theme-secondary hover:border-orange-200"
                >
                  View Details →
                </Link>
              </motion.div>
            </motion.div>
          </motion.div>
        ))}
      </motion.div>

      {/* Empty State */}
      {issues.length === 0 && (
        <motion.p
          className="text-center text-theme-muted mt-10"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          No recent issues found.
        </motion.p>
      )}
    </section>
  );
};

export default RecentIssues;
