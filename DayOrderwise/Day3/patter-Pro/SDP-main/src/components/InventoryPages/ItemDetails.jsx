import React, { useState } from 'react';
import { Button } from '../../components/ui/button';
import { motion } from 'framer-motion';

const ItemDetails = ({ item, onClose, onSave }) => {
  const [details, setDetails] = useState(item);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setDetails(prev => ({ ...prev, [name]: value }));
  };

  const handleSave = () => {
    onSave(details);
    onClose();
  };

  return (
    <motion.div
      className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
    >
      <motion.div
        className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full relative"
        initial={{ scale: 0.8 }}
        animate={{ scale: 1 }}
        exit={{ scale: 0.8 }}
        onClick={(e) => e.stopPropagation()}
      >
        <h2 className="text-2xl font-bold mb-4">Edit {item.name}</h2>
        <input
          className="mb-2 p-2 border rounded w-full"
          type="text"
          name="name"
          value={details.name}
          onChange={handleChange}
          placeholder="Name"
        />
        <textarea
          className="mb-2 p-2 border rounded w-full"
          name="description"
          value={details.description}
          onChange={handleChange}
          placeholder="Description"
        />
        <input
          className="mb-2 p-2 border rounded w-full"
          type="number"
          name="stock"
          value={details.stock}
          onChange={handleChange}
          placeholder="Stock"
        />
        <input
          className="mb-2 p-2 border rounded w-full"
          type="text"
          name="price"
          value={details.price}
          onChange={handleChange}
          placeholder="Price"
        />
        <Button className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={handleSave}>
          Save
        </Button>
        <Button className="mt-4 bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded" onClick={onClose}>
          Close
        </Button>
      </motion.div>
    </motion.div>
  );
};

export default ItemDetails;
