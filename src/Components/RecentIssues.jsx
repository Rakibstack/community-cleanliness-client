import { MapPin } from "lucide-react";
import { Link } from "react-router";

const RecentIssues = ({ issues = [] }) => {
  return (
    <section className="bg-[#FBF1EF] py-22">
      <h2 className="text-center text-4xl font-bold mb-12">
         Recent Issues
      </h2>

      <div className="grid gap-12 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 container mx-auto w-11/12">
        {issues.map((data) => (
          <div
            key={data._id}
            className="relative mt-8 mb-14 group transition-all duration-300 hover:-translate-y-3"
          >
            {/* Image */}
            <div className="overflow-hidden rounded-tl-[50px] rounded-xl">
              <img
                src={data.image}
                alt={data.title}
                className="w-full h-56 object-cover transition-transform duration-500 group-hover:scale-110"
              />
            </div>

            {/* Card */}
            <div className="absolute left-1/2 -bottom-28 -translate-x-1/2 w-[88%] bg-white shadow-xl rounded-2xl p-5">
              <h3 className="text-xl font-semibold mb-1 line-clamp-1">
                {data.title}
              </h3>

              <p className="text-gray-600 text-sm mb-3 line-clamp-2">
                {data.description}
              </p>

              <div className="flex justify-between text-sm text-gray-500 mb-4">
                <div className=" flex gap-1">
                  <span><MapPin size={18} /></span>
                  <span> {data.location}</span>

                </div>
                <span> {data.category}</span>
              </div>

              <Link
                to={`/detailspage/${data._id}`}
                className="btn btn-outline w-full text-orange-500 font-semibold hover:bg-[#FBF1EF] hover:border-orange-200"
              >
                View Details →
              </Link>
            </div>
          </div>
        ))}
      </div>

      {/* Empty State */}
      {issues.length === 0 && (
        <p className="text-center text-gray-500 mt-10">
          No recent issues found.
        </p>
      )}
    </section>
  );
};

export default RecentIssues;
