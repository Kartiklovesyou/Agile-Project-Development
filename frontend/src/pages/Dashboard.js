import React from 'react';
import { useNavigate } from 'react-router-dom';

function Dashboard() {
  const navigate = useNavigate();
  const activities = [
    { shipmentId: '#12345', origin: 'New York', destination: 'Los Angeles', status: 'Delivered', date: '2025-01-10' },
    { shipmentId: '#12346', origin: 'Chicago', destination: 'Houston', status: 'In Transit', date: '2025-01-11' },
    { shipmentId: '#12347', origin: 'San Francisco', destination: 'Miami', status: 'Delayed', date: '2025-01-12' },
  ];
  const handleRowClick = (activity) => {
    navigate('/activity-detail', { state: { activity } });
  };
  return (
    <div className="min-h-screen bg-gray-100">
      {/* Header Section */}
      <header className="bg-gray-800 text-white py-6 px-8">
        <h1 className="text-4xl font-bold">Dashboard</h1>
        <p className="text-xl mt-2">Welcome back to the Transportation Management System</p>
      </header>

      {/* Main Content */}
      <div className="container mx-auto px-6 py-12">
        {/* Statistics Cards */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {/* Card 1 */}
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition">
            <h3 className="text-xl font-semibold text-gray-700">Total Shipments</h3>
            <p className="text-4xl font-bold text-green-500 mt-4">1,250</p>
          </div>

          {/* Card 2 */}
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition">
            <h3 className="text-xl font-semibold text-gray-700">Active Drivers</h3>
            <p className="text-4xl font-bold text-blue-500 mt-4">120</p>
          </div>

          {/* Card 3 */}
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition">
            <h3 className="text-xl font-semibold text-gray-700">Delivered Shipments</h3>
            <p className="text-4xl font-bold text-yellow-500 mt-4">980</p>
          </div>
        </section>

        {/* Recent Activities */}
        <section className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold text-gray-700 mb-6">Recent Activities</h2>
          <table className="min-w-full table-auto">
            <thead className="bg-gray-200">
              <tr>
                <th className="px-4 py-2 text-left">Shipment ID</th>
                <th className="px-4 py-2 text-left">Origin</th>
                <th className="px-4 py-2 text-left">Destination</th>
                <th className="px-4 py-2 text-left">Status</th>
                <th className="px-4 py-2 text-left">Date</th>
              </tr>
            </thead>
            <tbody>
              {activities.map((activity) => (
                <tr
                  key={activity.shipmentId}
                  className="border-b hover:bg-gray-50 cursor-pointer"
                  onClick={() => handleRowClick(activity)}
                >
                  <td className="px-4 py-2">{activity.shipmentId}</td>
                  <td className="px-4 py-2">{activity.origin}</td>
                  <td className="px-4 py-2">{activity.destination}</td>
                  <td className="px-4 py-2 text-green-500">
                    <span className={
                      `text-${
                        activity?.status === 'Delivered' ? 'green'
                        : activity?.status === 'Delayed' ? 'red' 
                        : 'yellow'
                      }-500`
                    }>
                      {activity?.status}
                    </span>
                  </td>
                  <td className="px-4 py-2">{activity.date}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </section>
      </div>
    </div>
  );
}

export default Dashboard;
