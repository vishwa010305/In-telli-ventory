import React from 'react'

// Sample user and inventory data
const user = {
  id: 1,
  name: 'John Doe',
  email: 'john.doe@example.com'
}

const inventoryData = [
  { id: 1, item: 'Item 1', quantity: 100, userId: 1 },
  { id: 2, item: 'Item 2', quantity: 200, userId: 2 },
  { id: 3, item: 'Item 3', quantity: 300, userId: 1 },
  { id: 4, item: 'Item 4', quantity: 300, userId: 1 },
  { id: 5, item: 'Item 5', quantity: 300, userId: 1 },
  { id: 6, item: 'Item 6', quantity: 300, userId: 1 },
  { id: 7, item: 'Item 7', quantity: 300, userId: 1 },
  { id: 8, item: 'Item 8', quantity: 300, userId: 1 }
]

const UserInventory = () => {
  // Filter inventory data for the specific user
  const userInventoryData = inventoryData.filter(data => data.userId === user.id)

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">User Inventory</h2>
      <div className="overflow-x-auto">
        <table className="table-auto w-full text-left bg-red-500/5 text-blue-400/2 rounded-md shadow-md">
          <thead>
            <tr>
              <th className="px-4 py-2">ID</th>
              <th className="px-4 py-2">Item</th>
              <th className="px-4 py-2">Quantity</th>
            </tr>
          </thead>
          <tbody>
            {userInventoryData.map((data) => (
              <tr key={data.id} className="border-t border-gray-200">
                <td className="px-4 py-2">{data.id}</td>
                <td className="px-4 py-2">{data.item}</td>
                <td className="px-4 py-2">{data.quantity}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default UserInventory
