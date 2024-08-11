import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '../../components/ui/card';
import { Button } from '../../components/ui/button';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, BarChart, Bar, PieChart, Pie, Cell } from 'recharts';
import { motion } from 'framer-motion';

// Dummy sales data
const salesData = [
  { month: 'Jan', sales: 4000, revenue: 2400, profit: 2400 },
  { month: 'Feb', sales: 3000, revenue: 1398, profit: 2210 },
  { month: 'Mar', sales: 2000, revenue: 9800, profit: 2290 },
  { month: 'Apr', sales: 2780, revenue: 3908, profit: 2000 },
  { month: 'May', sales: 1890, revenue: 4800, profit: 2181 },
  { month: 'Jun', sales: 2390, revenue: 3800, profit: 2500 },
  { month: 'Jul', sales: 3490, revenue: 4300, profit: 2100 },
];

const SalesAnalysisDashboard = () => {
  return (
    <div className="p-4 min-h-screen bg-gradient-to-r from-yellow-400 to-orange-500">
      <h1 className="text-3xl font-bold mb-6 text-center text-white">Sales Analysis Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
        <motion.div className="card transform hover:-translate-y-2 transition-transform duration-300">
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl font-bold">Monthly Sales</CardTitle>
            </CardHeader>
            <CardContent>
              <LineChart width={400} height={300} data={salesData}>
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
              <BarChart width={400} height={300} data={salesData}>
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
      </div>
      <div className="text-center text-white">
        <p className="text-lg">
          The Sales Analysis Dashboard provides a comprehensive overview of sales performance, including monthly sales trends, sales by product, and sales distribution. Use the charts to identify patterns, make informed decisions, and optimize your sales strategy.
        </p>
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

export default SalesAnalysisDashboard;
