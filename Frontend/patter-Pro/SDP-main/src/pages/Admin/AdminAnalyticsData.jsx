import React from 'react'

const AdminAnalyticsData = () => {
  // Sample inventory data
  const inventoryData = [
    { year: 2023, region: 'North America', category: 'Electronics', stockLevel: 120, reorderPoint: 50 },
    { year: 2023, region: 'Europe', category: 'Apparel', stockLevel: 80, reorderPoint: 30 },
    { year: 2024, region: 'Asia', category: 'Furniture', stockLevel: 150, reorderPoint: 40 },
    { year: 2024, region: 'South America', category: 'Books', stockLevel: 70, reorderPoint: 20 },
    { year: 2025, region: 'Africa', category: 'Groceries', stockLevel: 200, reorderPoint: 60 },
    { year: 2025, region: 'Australia', category: 'Toys', stockLevel: 90, reorderPoint: 25 }
  ];

  return (
    <div className="text-center text-red-500 p-4">
      <p className="text-lg mb-6">
        The Inventory Management Dashboard provides a comprehensive overview of inventory levels and stock movement. Use the charts to analyze stock trends, monitor inventory levels, and make data-driven decisions to optimize your inventory strategy.
      </p>
      <h2 className="text-2xl font-bold mb-4">Inventory Distribution Across Years and Product Category by Region</h2>
      <div className="overflow-x-auto">
        <table className="table-auto w-full text-left bg-amber-800 text-white rounded-md shadow-md">
          <thead>
            <tr>
              <th className="px-4 py-2">Year</th>
              <th className="px-4 py-2">Region</th>
              <th className="px-4 py-2">Category</th>
              <th className="px-4 py-2">Stock Level</th>
              <th className="px-4 py-2">Reorder Point</th>
            </tr>
          </thead>
          <tbody>
            {inventoryData.map((data, index) => (
              <tr key={index} className="border-t border-gray-200">
                <td className="px-4 py-2">{data.year}</td>
                <td className="px-4 py-2">{data.region}</td>
                <td className="px-4 py-2">{data.category}</td>
                <td className="px-4 py-2">{data.stockLevel}</td>
                <td className="px-4 py-2">{data.reorderPoint}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default AdminAnalyticsData;
