import { use } from "react";

const RecentIssues = ({ issuesPromise }) => {

    const Recentdata = use(issuesPromise)

    return (

        <div className="bg-[#FBF1EF]">
            <h2 className="text-center text-4xl py-5 font-bold">Recent Issues</h2>
            <div className="grid  md:grid-cols-2 lg:grid-cols-3 container mx-auto w-11/12 py-10">

                {
                    Recentdata.map(data => ( <div key={data._id} className="relative w-[350px] mb-30">
      {/* Image */}
      <img
        src={data.image}
        alt={data.title}
        className="w-full h-56 object-cover rounded-xl"
      />

      {/* Card */}
      <div className="absolute left-1/2 -bottom-25 -translate-x-1/2 w-[85%] bg-white shadow-lg rounded-xl p-5">
        <h2 className="text-xl font-semibold mb-1">{data.title}</h2>

        <p className="text-gray-600 text-sm mb-3">
          {data.description}
        </p>

        <button className="text-red-500 font-medium hover:underline">
          Request Free Estimate &gt;&gt;
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