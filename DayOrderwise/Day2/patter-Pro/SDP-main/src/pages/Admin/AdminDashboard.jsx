import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '../../components/ui/card';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, BarChart, Bar, PieChart, Pie, Cell } from 'recharts';
import { motion } from 'framer-motion';
import TimesheetTracker from '@/components/Timesheet/TimesheetTracker';
// Dummy data for inventory
const inventoryData = [
  { category: 'Electronics', stock: 400, sales: 200 },
  { category: 'Clothing', stock: 300, sales: 180 },
  { category: 'Home Goods', stock: 200, sales: 150 },
  { category: 'Books', stock: 100, sales: 120 },
];

// Dummy sales data
const salesData = [
  { month: 'Jan', sales: 4000, revenue: 2400, profit: 2400 },
  { month: 'Feb', sales: 3000, revenue: 1398, profit: 2210 },
  { month: 'Mar', sales: 2000, revenue: 9800, profit: 2290 },
  { month: 'Apr', sales: 2780, revenue: 3908, profit: 4000 },
  { month: 'May', sales: 1890, revenue: 4800, profit: 7181 },
  { month: 'Jun', sales: 2390, revenue: 3800, profit: 2500 },
  { month: 'Aug', sales: 3490, revenue: 4300, profit: 2100 },
  { month: 'Sep', sales: 3490, revenue: 4300, profit: 2100 },
];

// Dummy data for sales distribution by region
const salesByRegion = [
  { year: 2021, region: 'North America', category: 'Electronics', sales: 1200 },
  { year: 2021, region: 'Europe', category: 'Clothing', sales: 900 },
  { year: 2021, region: 'Asia', category: 'Home Goods', sales: 700 },
  { year: 2022, region: 'North America', category: 'Books', sales: 800 },
  { year: 2022, region: 'Europe', category: 'Electronics', sales: 1100 },
  { year: 2022, region: 'Asia', category: 'Clothing', sales: 600 },
];

// Calculate total sales for each year
const totalSales2021 = salesByRegion.filter(data => data.year === 2021).reduce((acc, curr) => acc + curr.sales, 0);
const totalSales2022 = salesByRegion.filter(data => data.year === 2022).reduce((acc, curr) => acc + curr.sales, 0);
const differenceSales = totalSales2022 - totalSales2021;
const averageSales = (totalSales2021 + totalSales2022) / 2;
const regionWithMaxSales = 'North America'; // For simplicity, assuming 'North America' has max sales



const AdminDashboard = () => {
  return (
    <div >
      <h1 className="text-3xl font-bold mb-6 text-center text-red-500">Sales and Inventory Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
        <motion.div className="card transform hover:-translate-y-2 transition-transform duration-300">
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl font-bold">Summary</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4 text-lg text-gray-800">
                <div className="flex justify-between items-center bg-white p-4 rounded shadow-md">
                  <span className="font-semibold">Total Sales in 2021:</span>
                  <span>{totalSales2021}</span>
                </div>
                <div className="flex justify-between items-center bg-white p-4 rounded shadow-md">
                  <span className="font-semibold">Total Sales in 2022:</span>
                  <span>{totalSales2022}</span>
                </div>
                <div className="flex justify-between items-center bg-white p-4 rounded shadow-md">
                  <span className="font-semibold">Difference from Previous Year:</span>
                  <span>{differenceSales}</span>
                </div>
                <div className="flex justify-between items-center bg-white p-4 rounded shadow-md">
                  <span className="font-semibold">Average Sales:</span>
                  <span>{averageSales}</span>
                </div>
                <div className="flex justify-between items-center bg-white p-4 rounded shadow-md">
                  <span className="font-semibold">Region with Max Sales:</span>
                  <span>{regionWithMaxSales}</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
        <motion.div className="card transform hover:-translate-y-2 transition-transform duration-300">
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl font-bold">Monthly Sales</CardTitle>
            </CardHeader>
            <CardContent>
              <LineChart width={350} height={300} data={salesData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="sales" stroke="#8884d8" />
                <Line type="monotone" dataKey="revenue" stroke="#82ca9d" />
                <Line type="monotone" dataKey="profit" stroke="#ffc658" />
              </LineChart>
            </CardContent>
          </Card>
        </motion.div>
        <motion.div className="card transform hover:-translate-y-2 transition-transform duration-300">
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl font-bold">Sales by Product</CardTitle>
            </CardHeader>
            <CardContent>
              <BarChart width={350} height={300} data={salesData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="sales" fill="#8884d8" />
                <Bar dataKey="revenue" fill="#82ca9d" />
              </BarChart>
            </CardContent>
          </Card>
        </motion.div>
        <motion.div className="card transform hover:-translate-y-2 transition-transform duration-300">
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl font-bold">Sales Distribution</CardTitle>
            </CardHeader>
            <CardContent>
              <PieChart width={400} height={300}>
                <Pie
                  data={salesData}
                  dataKey="sales"
                  nameKey="month"
                  cx="50%"
                  cy="50%"
                  outerRadius={100}
                  fill="#8884d8"
                  label
                >
                  {salesData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={['#8884d8', '#82ca9d', '#ffc658', '#ff8042'][index % 4]} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </CardContent>
          </Card>
        </motion.div>
        <motion.div className="card transform hover:-translate-y-2 transition-transform duration-300">
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl font-bold">Inventory Levels</CardTitle>
            </CardHeader>
            <CardContent>
              <BarChart width={300} height={300} data={inventoryData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="category" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="stock" fill="#8884d8" />
                <Bar dataKey="sales" fill="#82ca9d" />
              </BarChart>
            </CardContent>
          </Card>
        </motion.div>
        <motion.div className="card transform hover:-translate-y-2 transition-transform duration-300">
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl font-bold">Inventory Distribution</CardTitle>
            </CardHeader>
            <CardContent>
              <PieChart width={400} height={300}>
                <Pie
                  data={inventoryData}
                  dataKey="stock"
                  nameKey="category"
                  cx="50%"
                  cy="50%"
                  outerRadius={100}
                  fill="#8884d8"
                  label
                >
                  {inventoryData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={['#8884d8', '#82ca9d', '#ffc658', '#ff8042'][index % 4]} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </CardContent>
          </Card>
        </motion.div>
        <TimesheetTracker />
      </div>
      <style jsx>{`
        .card {
          position: relative;
          overflow: hidden;
          border-radius: 0.75rem;
          box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }
        .card:hover {
          transform: translateY(-10px);
          box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
        }
        .card-header::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: linear-gradient(135deg, rgba(255, 255, 255, 0.3) 0%, rgba(255, 255, 255, 0) 100%);
          opacity: 0.5;
          pointer-events: none;
        }
        .card-title {
          z-index: 1;
        }
        .card-content {
          z-index: 1;
        }
      `}</style>
    </div>
  );
};

export default AdminDashboard;
