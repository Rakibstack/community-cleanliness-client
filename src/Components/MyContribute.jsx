import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../AuthProvider/AuthProvider';
import useAxiosSecure from '../Hooks/useAxiosSecure';
import Loader from './Loader';

const MyContribute = () => {

    const { user } = useContext(AuthContext);
    const axiosSecure = useAxiosSecure();
    const [contribute, setContribute] = useState([])
    const [loading, setloading] = useState(true)


    useEffect(() => {

        axiosSecure.get(`/mycontribute?email=${user?.email}`)
            .then(res => {
                setContribute(res.data)
                setloading(false)
            })

    }, [user, axiosSecure])

      if (loading) {
        return <Loader></Loader>
    }
  

    const downloadReport = async (id) => {
          try {
            const response = await axiosSecure.get(`/download-report/${id}`, {
                responseType: "blob",
            });

            const url = window.URL.createObjectURL(new Blob([response.data]));
            const link = document.createElement("a");
            link.href = url;
            link.download = `report-${id}.pdf`;
            link.click();
            window.URL.revokeObjectURL(url);

        } catch (err) {
            console.log(err);
        }
    }

    return (
        <div>
            <div className="p-6 max-w-5xl mx-auto">
                <title>My Contribute Page</title>
                <h1 className="text-2xl font-bold mb-6">My Cleanup Payments</h1>


                <div className="bg-white shadow rounded-xl overflow-hidden">
                    <table className="w-full text-left border-collapse">
                        <thead className="bg-gray-100 text-gray-700">
                            <tr>
                                <th className="p-4">Issue Title</th>
                                <th className="p-4">Paid Amount</th>
                                <th className="p-4">Date</th>
                                <th className="p-4 text-center">Download</th>
                            </tr>
                        </thead>


                        <tbody>
                            {contribute.length === 0 && (
                                <tr>
                                    <td colSpan="5" className="p-6 text-center text-gray-500">No payment records found.</td>
                                </tr>
                            )}


                            {contribute.map((item) => (
                                <tr key={item._id} className="border-t hover:bg-gray-50 transition">
                                    <td className="p-4">{item.title}</td>
                                    <td className="p-4 font-semibold">${item.amount}</td>
                                    <td className="p-4">{new Date(item.date).toLocaleDateString()}</td>
                                    <td className="p-4 text-center">
                                        <button
                                            onClick={() => downloadReport(item._id)}
                                            className="px-3 py-2 rounded-lg border hover:bg-gray-100"
                                        >
                                            Download
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>

        </div>
    );
};

export default MyContribute;