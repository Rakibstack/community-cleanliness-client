import React, { useEffect, useState } from 'react';
import useAxios from '../Hooks/useAxios';
import { Link } from 'react-router';

const Allissues = () => {
  const Axios = useAxios();
  const [Allissues, setAllissues] = useState([])
  const [searchTerm, setSearchTerm] = useState('')
  const [filtaredIssue,setFiltaredIssue] = useState([])

  useEffect(() => {
    if(!searchTerm){

      setFiltaredIssue(Allissues)
    } else{

     const filterissues = Allissues.filter(issue => issue.title.toLowerCase().includes(searchTerm.toLowerCase()))

    setFiltaredIssue(filterissues)
    }
  },[Allissues,searchTerm]);


  useEffect(() => {

    Axios.get('/findAllissus')

      .then(data => {
        setAllissues(data.data);
        setFiltaredIssue(data.data);
      })

  }, [Axios])


  return (

    <div className="bg-[#FBF1EF] mt-3">
      <h2 className="text-center text-4xl py-5 font-bold underline">All Issues</h2>
      <div className="p-4 flex mx-auto w-11/12  justify-end">

        <input
          type="text"
          placeholder="Search issues..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full md:w-1/3 px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-400"
        />
      </div>


      <div className='grid gap-8 grid-cols-1 sm:grid-cols-2  lg:grid-cols-3  container mx-auto w-11/12 py-10 '>
        {
          filtaredIssue.map(issues => (
            <div key={issues._id} className="relative w-[360px] mb-38 transition-all  duration-300 ease-out hover:-translate-y-4  ">
              {/* Image */}
              <img
                src={issues.image}
                alt={issues.title}
                className="w-full h-56 object-cover rounded-tl-[50px]"
              />

              {/* Card */}
              <div className="absolute left-1/2 -bottom-30 -translate-x-1/2 w-[85%] bg-white shadow-xl rounded-xl p-5">
                <h2 className="text-xl font-semibold mb-1">{issues.title}</h2>

                <p className="text-gray-600 text-sm mb-2">
                  {issues.description}
                </p>
                <div className="flex justify-between text-gray-600 font-medium mb-1">
                  <h2>{issues.location}</h2>
                  <h2>{issues.category}</h2>
                </div>

                <Link to={`/detailspage/${issues._id}`} className="btn btn-outline w-full  text-orange-500  font-bold hover:bg-[#FBF1EF] hover:border-orange-200">
                  See Details &gt;&gt;&gt;
                </Link>
              </div>
            </div>
          ))

        }
      </div>

    </div>
  );
};

export default Allissues;