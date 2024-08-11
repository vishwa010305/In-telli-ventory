import React, { useState, useEffect } from 'react';

const EditItemForm = ({ itemId }) => {
  const [item, setItem] = useState(null);

  useEffect(() => {
    const fetchItem = async () => {
      const response = await fetch(`/api/inventory/${itemId}`);
      const data = await response.json();
      setItem(data);
    };

    fetchItem();
  }, [itemId]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setItem((prevItem) => ({
      ...prevItem,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(`/api/inventory/${itemId}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(item),
      });

      if (!response.ok) {
        throw new Error('Failed to update item');
      }
    } catch (error) {
      console.error('Error updating item:', error);
    }
  };

  if (!item) return <div>Loading...</div>;

  return (
    <form onSubmit={handleSubmit}>
      <h2>Edit Item</h2>
      <div>
        <label>
          Name:
          <input type="text" name="name" value={item.name} onChange={handleChange} required />
        </label>
      </div>
      <div>
        <label>
          Quantity:
          <input type="number" name="quantity" value={item.quantity} onChange={handleChange} required />
        </label>
      </div>
      <div>
        <label>
          Price:
          <input type="number" name="price" value={item.price} onChange={handleChange} required />
        </label>
      </div>
      <button type="submit">Update Item</button>
    </form>
  );
};

export default EditItemForm;
