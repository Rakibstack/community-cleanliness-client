import { use } from "react";

const RecentIssues = ({ issuesPromise }) => {

    const Recentdata = use(issuesPromise)

    return (

        <div className="bg-[#FBF1EF]">
            <h2 className="text-center text-4xl py-5 font-bold underline">Recent Issues</h2>
            <div className="grid gap-8 grid-cols-1 sm:grid-cols-2  lg:grid-cols-3 xl:grid-cols-4 container mx-auto w-11/12 py-10 ">

            {
       Recentdata.map(data => ( <div key={data._id} className="relative w-[360px] mb-38 transition-all  duration-300 ease-out hover:-translate-y-4  ">
      {/* Image */}
      <img
        src={data.image}
        alt={data.title}
        className="w-full h-56 object-cover rounded-tl-[50px]"
      />

      {/* Card */}
      <div className="absolute left-1/2 -bottom-30 -translate-x-1/2 w-[85%] bg-white shadow-xl rounded-xl p-5">
        <h2 className="text-xl font-semibold mb-1">{data.title}</h2>

        <p className="text-gray-600 text-sm mb-2">
          {data.description}
        </p>
        <div className="flex justify-between text-gray-600 font-medium mb-1">        
          <h2>{data.location}</h2>
          <h2>{data.category}</h2>
        </div>

        <button className="btn btn-outline w-full  text-orange-500  font-bold hover:bg-[#FBF1EF] hover:border-orange-200">
          See Details &gt;&gt;&gt;
        </button>
      </div>
    </div>

                    ))
                }

            </div>

        </div>
    );
};

export default RecentIssues;