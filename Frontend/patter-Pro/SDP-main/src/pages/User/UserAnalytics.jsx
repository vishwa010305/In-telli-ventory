import React from 'react'
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts'

const UserAnalytics = () => {
  // Sample analytics data
  const analyticsData = [
    { year: 2023, activity: 'Logins', count: 120 },
    { year: 2023, activity: 'Uploads', count: 80 },
    { year: 2023, activity: 'Downloads', count: 150 }
  ]

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">Analytics</h2>
      
      {/* Bar Chart Section */}
      <div className="mb-6">
        <BarChart
          width={600}
          height={300}
          data={analyticsData}
          margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="activity" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="count" fill="#8884d8" />
        </BarChart>
      </div>

      {/* Table Section */}
      <div className="overflow-x-auto">
        <table className="table-auto w-full text-left bg-red-500/5 text-blue-400/2 rounded-md shadow-md">
          <thead>
            <tr>
              <th className="px-4 py-2">Year</th>
              <th className="px-4 py-2">Activity</th>
              <th className="px-4 py-2">Count</th>
            </tr>
          </thead>
          <tbody>
            {analyticsData.map((data, index) => (
              <tr key={index} className="border-t border-red-500/5">
                <td className="px-4 py-2">{data.year}</td>
                <td className="px-4 py-2">{data.activity}</td>
                <td className="px-4 py-2">{data.count}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default UserAnalytics
