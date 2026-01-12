import { useEffect, useState, useRef } from 'react';
import useAxios from '../Hooks/useAxios';
import { Link } from 'react-router';
// eslint-disable-next-line no-unused-vars
import { motion, useInView } from 'framer-motion';

const Allissues = () => {
  const Axios = useAxios();
  const [Allissues, setAllissues] = useState([])
  const[totalIssues, setTotalIssues] = useState(0);
  const [pages, setPages] = useState(0);
  const [currentPage, setCurrentPage] = useState(0);

  const [category, setCategory] = useState('');
  const [sort, setSort] = useState('newest');
   const [searchTerm, setSearchTerm] = useState('')

    const limit = 6;

  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.1 });

  useEffect(() => {

    Axios.get(`/findAllissus?limit=${limit}&skip=${currentPage * limit}&category=${category}&sort=${sort}&search=${searchTerm}`)
      .then(res => {
        setAllissues(res.data.result);
        setTotalIssues(res.data.total);
        const pages = Math.ceil(res.data.total / limit);
        setPages(pages);
      })

  }, [Axios, category, sort, searchTerm,limit,currentPage]);
  
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
        delayChildren: 0.1
      }
    }
  };

  const cardVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.3
      }
    }
  };

  return (

    <div className="bg-theme-secondary min-h-screen transition-colors duration-300 py-8">
      <title>Allissues Pages</title>
      <motion.h2
        className="text-center text-4xl py-5 font-bold underline text-theme-primary"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        All Issues
      </motion.h2>
    <motion.div
      className="bg-theme-card shadow-md rounded-2xl p-5 mx-auto w-11/12 mt-6 transition-colors duration-300"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.2 }}
    >
  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">

    <motion.h2
      className="text-lg font-semibold text-theme-primary"
      initial={{ x: -20, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ delay: 0.3 }}
    >
      Total Issues: <span className="text-orange-500">({totalIssues})</span>
    </motion.h2>

    <motion.div
      className="flex flex-col sm:flex-row gap-3 w-full md:w-auto"
      initial={{ x: 20, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ delay: 0.4 }}
    >

      <input
        type="text"
        placeholder=" Search issues..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="px-4 py-2 border rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-400 w-full sm:w-64 bg-theme-card text-theme-primary border-theme transition-all duration-200"
      />

      {/* Sort */}
      <select
        value={sort}
        onChange={(e) => setSort(e.target.value)}
        className="select select-bordered rounded-xl bg-theme-card text-theme-primary border-theme transition-all duration-200"
      >
        <option value="newest">Newest First</option>
        <option value="oldest">Oldest First</option>
      </select>

      {/* Category */}
      <select
        value={category}
        onChange={(e) => setCategory(e.target.value)}
        className="select select-bordered rounded-xl bg-theme-card text-theme-primary border-theme transition-all duration-200"
      >
        <option value="">All Categories</option>
        <option value="Garbage">Garbage</option>
        <option value="Broken Road">Broken Road</option>
        <option value="Drainage Issue">Drainage Issue</option>
        <option value="Street Light">Street Light</option>
      </select>

    </motion.div>
  </div>
</motion.div>



      <motion.div
        ref={sectionRef}
        className='grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 container mx-auto w-11/12 py-10'
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        {
          Allissues.map((issues) => (
            <motion.div
              key={issues._id}
              variants={cardVariants}
              whileHover={{ y: -5 }}
              className="flex flex-col"
            >
              {/* Image */}
              <div className="overflow-hidden rounded-tl-[50px] rounded-xl">
                <img
                  src={issues.image}
                  alt={issues.title}
                  className="w-full h-56 object-cover transition-transform duration-300 hover:scale-110"
                />
              </div>

              {/* Card Content */}
              <div className="bg-theme-card shadow-xl rounded-xl p-5 -mt-8 mx-4 transition-colors duration-300">
                <h2 className="text-xl font-semibold mb-1 text-theme-primary line-clamp-1">
                  {issues.title}
                </h2>

                <p className="text-theme-secondary text-sm mb-3 line-clamp-2">
                  {issues.description}
                </p>
                
                <div className="flex justify-between text-sm text-theme-muted mb-4">
                  <span className="flex items-center gap-1">
                     {issues.location}
                  </span>
                  <span className="bg-orange-100 dark:bg-orange-500/20 text-orange-600 dark:text-orange-400 px-2 py-1 rounded-full text-xs">
                    {issues.category}
                  </span>
                </div>

                <Link 
                  to={`/detailspage/${issues._id}`} 
                  className="btn btn-outline w-full text-orange-500 font-bold hover:bg-theme-secondary hover:border-orange-200 transition-all duration-200"
                >
                  View Details →
                </Link>
              </div>
            </motion.div>
          ))

        }
      </motion.div>

      {/* Empty State */}
      {Allissues.length === 0 && (
        <motion.div
          className="text-center py-20"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <p className="text-theme-muted text-xl">No issues found</p>
          <p className="text-theme-secondary text-sm mt-2">Try adjusting your search or filters</p>
        </motion.div>
      )}

      {/* Pagination */}
      <div className='flex flex-wrap justify-center gap-3 py-8 pb-12'>
        {
          currentPage > 0 && (
            <button
              onClick={() => setCurrentPage(currentPage - 1)}
              className="btn btn-outline text-orange-500 font-bold hover:bg-theme-secondary hover:border-orange-200 transition-all duration-200"
            >
              ← Prev
            </button>
          )
        }

        {
        [...Array(pages).keys()].map((num) => (
          <button
            onClick={() => setCurrentPage(num)}
            key={num}
            className={`btn ${currentPage === num ? 'bg-orange-500 text-white border-orange-500' : 'btn-outline text-orange-500'} font-bold hover:bg-orange-500 hover:text-white hover:border-orange-500 transition-all duration-200`}
          >
            {num + 1}
          </button>
        ))      
      }
      {
        currentPage < pages - 1 && (
          <button
            onClick={() => setCurrentPage(currentPage + 1)}
            className="btn btn-outline text-orange-500 font-bold hover:bg-theme-secondary hover:border-orange-200 transition-all duration-200"
          >
            Next →
          </button>
        )
      }
      </div>

    </div>
  );
};

export default Allissues;
