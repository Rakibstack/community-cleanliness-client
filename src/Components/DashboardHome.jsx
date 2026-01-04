import React, { useEffect, useState } from "react";
import {
  AlertTriangle,
  HeartHandshake,
  CheckCircle,
} from "lucide-react";

const DashboardHome = () => {

  const [stats, setStats] = useState({
    totalIssues: 0,
    myContributions: 0,
    resolvedIssues: 0,
  });

  const [recentIssues, setRecentIssues] = useState([]);

  // 🔌 Backend Ready API (replace later)
  useEffect(() => {
    // Dummy API simulation
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

  return (
    <div className="space-y-8">
      {/* Header */}
      <div>
        <h1 className="text-2xl font-bold text-gray-800">
          Welcome back 
        </h1>
        <p className="text-gray-500">
          Here’s what’s happening in your community today
        </p>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white rounded-xl shadow p-6 flex items-center gap-4">
          <AlertTriangle className="text-orange-500" />
          <div>
            <h2 className="text-2xl font-bold">{stats.totalIssues}</h2>
            <p className="text-gray-500 text-sm">Total Issues</p>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow p-6 flex items-center gap-4">
          <HeartHandshake className="text-blue-500" />
          <div>
            <h2 className="text-2xl font-bold">
              {stats.myContributions}
            </h2>
            <p className="text-gray-500 text-sm">
              My Contributions
            </p>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow p-6 flex items-center gap-4">
          <CheckCircle className="text-green-500" />
          <div>
            <h2 className="text-2xl font-bold">
              {stats.resolvedIssues}
            </h2>
            <p className="text-gray-500 text-sm">
              Resolved Issues
            </p>
          </div>
        </div>
      </div>

      {/* Recent Issues */}
      <div className="bg-white rounded-xl shadow">
        <div className="p-6 border-b">
          <h3 className="text-lg font-semibold">
            Recent Issues
          </h3>
        </div>

        <div className="divide-y">
          {recentIssues.map((issue) => (
            <div
              key={issue.id}
              className="p-6 flex justify-between items-center"
            >
              <span className="text-gray-700">
                {issue.title}
              </span>

              <span
                className={`px-3 py-1 rounded-full text-sm ${
                  issue.status === "Resolved"
                    ? "bg-green-100 text-green-600"
                    : issue.status === "In Progress"
                    ? "bg-blue-100 text-blue-600"
                    : "bg-orange-100 text-orange-600"
                }`}
              >
                {issue.status}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DashboardHome;
