import React, { useState } from 'react';
import { Button } from '../../components/ui/button';

const BuyItemForm = ({ item, onClose, onBuy }) => {
  const [quantity, setQuantity] = useState(1);
  const [buyerName, setBuyerName] = useState('');
  const [address, setAddress] = useState('');

  const handleBuy = () => {
    onBuy({ item, quantity, buyerName, address });
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full relative">
        <h2 className="text-2xl font-bold mb-4">Buying Details for {item.name}</h2>
        <div className="mb-4">
        {/* <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-2">Item Name</label>
          <input
            // type="text"
            value={ItemName}
            onChange={(e) => setItemName(e.target.value)}
            className="border border-gray-300 rounded py-2 px-4 w-full"
          />
        </div> */}
          <label className="block text-sm font-medium text-gray-700 mb-2">Quantity</label>
          <input
            type="number"
            value={quantity}
            onChange={(e) => setQuantity(e.target.value)}
            className="border border-gray-300 rounded py-2 px-4 w-full"
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-2">Buyer Name</label>
          <input
            type="text"
            value={buyerName}
            onChange={(e) => setBuyerName(e.target.value)}
            className="border border-gray-300 rounded py-2 px-4 w-full"
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-2">Address</label>
          <textarea
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            className="border border-gray-300 rounded py-2 px-4 w-full"
          />
        </div>
        <div className="flex justify-between mt-4">
          <Button
            className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
            onClick={onClose}
          >
            Cancel
          </Button>
          <Button
            className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
            onClick={handleBuy}
          >
            Buy
          </Button>
        </div>
      </div>
    </div>
  );
};

export default BuyItemForm;
