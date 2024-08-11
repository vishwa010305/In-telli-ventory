import React, { useState, useEffect } from 'react';

const InventoryList = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    // Fetch inventory items from the API
    const fetchItems = async () => {
      const response = await fetch('/api/inventory');
      const data = await response.json();
      setItems(data);
    };

    fetchItems();
  }, []);

  const handleDelete = async (id) => {
    try {
      await fetch(`/api/inventory/${id}`, { method: 'DELETE' });
      setItems(items.filter(item => item.id !== id));
    } catch (error) {
      console.error('Error deleting item:', error);
    }
  };

  return (
    <div>
      <h2>Inventory List</h2>
      <ul>
        {items.map(item => (
          <li key={item.id}>
            {item.name} - {item.quantity}
            <button onClick={() => handleDelete(item.id)}>Delete</button>
            {/* Add a link to edit or view details */}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default InventoryList;
