import React from 'react'
import { PieChart, Pie, Cell, Tooltip, Legend } from 'recharts'

const Dashboard = () => {
  // Example user details and progress
  const user = {
    name: "John Doe",
    email: "john.doe@example.com",
    tasksCompleted: 75, // percentage of tasks completed
  }

  // Example inventory and sales data
  const inventoryStats = {
    numberOfProducts: 120,
    numberOfSales: 45,
    totalRevenue: 7800, // example revenue in dollars
  }

  // Data for user tasks completed pie chart
  const userTasksData = [
    { name: 'Completed', value: user.tasksCompleted },
    { name: 'Pending', value: 50- user.tasksCompleted },
  ]

  // Data for inventory stats pie chart
  const inventoryData = [
    { name: 'Products', value: inventoryStats.numberOfProducts },
    { name: 'Sales', value: inventoryStats.numberOfSales },
  ]

  const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042']

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">User Dashboard</h2>
      <p>Welcome to the Dashboard.</p>
      
      {/* User Details Section */}
      <div className="mt-6">
        <h3 className="text-xl font-semibold mb-2">User Details</h3>
        <div className="bg-red-500/5 p-4 rounded-lg shadow-md">
          <table className="min-w-full text-left bg-green-500/5">
            <tbody>
              <tr className="border-b">
                <td className="px-4 py-2 font-semibold">Name:</td>
                <td className="px-4 py-2">{user.name}</td>
              </tr>
              <tr className="border-b">
                <td className="px-4 py-2 font-semibold">Email:</td>
                <td className="px-4 py-2">{user.email}</td>
              </tr>
            </tbody>
          </table>
          <div className="mt-4">
            <h4 className="text-lg font-semibold mb-2">Tasks Completed</h4>
            <PieChart width={300} height={200}>
              <Pie
                data={userTasksData}
                cx={100}
                cy={80}
                innerRadius={50}
                outerRadius={80}
                fill="#8884d8"
                paddingAngle={5}
                dataKey="value"
              >
                {userTasksData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip />
              <Legend />
            </PieChart>
          </div>
        </div>
      </div>

      {/* Inventory Stats Section */}
      <div className="mt-6">
        <h3 className="text-xl font-semibold mb-2">Inventory Stats</h3>
        <div className="bg-red-500/5 p-4 rounded-lg shadow-md">
          <table className="min-w-full text-left bg-green-500/5">
            <tbody>
              <tr className="border-b">
                <td className="px-4 py-2 font-semibold">Number of Products:</td>
                <td className="px-4 py-2">{inventoryStats.numberOfProducts}</td>
              </tr>
              <tr className="border-b">
                <td className="px-4 py-2 font-semibold">Number of Sales:</td>
                <td className="px-4 py-2">{inventoryStats.numberOfSales}</td>
              </tr>
              <tr>
                <td className="px-4 py-2 font-semibold">Total Revenue:</td>
                <td className="px-4 py-2">${inventoryStats.totalRevenue}</td>
              </tr>
            </tbody>
          </table>
          <div className="mt-4">
            <h4 className="text-lg font-semibold mb-2">Inventory Distribution</h4>
            <PieChart width={300} height={200}>
              <Pie
                data={inventoryData}
                cx={100}
                cy={80}
                innerRadius={50}
                outerRadius={80}
                fill="#82ca9d"
                paddingAngle={5}
                dataKey="value"
              >
                {inventoryData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip />
              <Legend />
            </PieChart>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Dashboard
