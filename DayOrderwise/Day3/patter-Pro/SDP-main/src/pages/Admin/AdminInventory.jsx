import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../../components/ui/card';
import { Button } from '../../components/ui/button';
import { motion } from 'framer-motion';
import AddItemForm from '../../components/InventoryPages/AddItemForm';
import BuyItemForm from '../../components/BuyItemForm/BuyItemForm';
import BuyerDetailList from '../../components/BuyItemForm/BuyerDetailList'; // Import the BuyerDetailList component
// import hedset from '../../assets/imqges/headset.png';

const AdminInventory = () => {
  // Define permanent items
  const permanentItems = [
    {
      id: 'permanent-1',
      name: 'Example Product 1',
      description: 'This is a permanent product.',
      stock: 100,
      price: '$10.00',
      image: 'https://media.istockphoto.com/id/868891848/photo/smart-watch-blank-screen-mock-up-isolated-silver-gold.jpg?s=612x612&w=0&k=20&c=eaoXUuioNZdeZIHis4T4W9TBniYJRJLEpRuaxrpi5pM=' // Use a placeholder image
    },
    // {
    //   id: 'permanent-2',
    //   name: 'Example Product 2',
    //   description: 'This is another permanent product.',
    //   stock: 50,
    //   price: '$20.00',
    //   image: 'https://via.placeholder.com/150' // Use a placeholder image
    // },
    {
      id: 'permanent-2',
      name: 'Example Product 2',
      description: 'This is another permanent product.',
      stock: 50,
      price: '$20.00',
      image: 'https://media.istockphoto.com/id/2162431408/photo/sleek-blue-headphones-on-white-background.jpg?s=612x612&w=0&k=20&c=WyQ-bUslLSnirpxZ6zJNQnht7jnEtCz0bSkfasG1cSc=' // Use a placeholder image
    },
    {
      id: 'permanent-3',
      name: 'Example Product 3',
      description: 'This is another permanent product.',
      stock: 50,
      price: '$20.00',
      image: 'https://media.istockphoto.com/id/1076849906/photo/beauty-cosmetic-products-against-white-background.jpg?s=612x612&w=0&k=20&c=ZSqoQRA-pSQZEYKD1paXROPBsU-lPErVWptu-_-HmYY=' // Use a placeholder image
    },
    {
      id: 'permanent-4',
      name: 'Example Product 4',
      description: 'This is another permanent product.',
      stock: 50,
      price: '$20.00',
      image: 'https://media.istockphoto.com/id/1316127257/photo/set-of-cosmetic-brushes.jpg?s=612x612&w=0&k=20&c=ujbh2SschP4Y_JpeRsdc8sw_-9Hqp7wNDfLuqLPFffs=' // Use a placeholder image
    },
    {
      id: 'permanent-5',
      name: 'Example Product 5',
      description: 'This is another permanent product.',
      stock: 50,
      price: '$20.00',
      image: 'https://media.istockphoto.com/id/1224326999/photo/pepper-bag-full-of-groceries.jpg?s=612x612&w=0&k=20&c=TAiEPlrW85SMUv3tL0YB8FGKytOlxlc1OdilADMvUVM=' // Use a placeholder image
    },
    {
      id: 'permanent-6',
      name: 'Example Product 6',
      description: 'This is another permanent product.',
      stock: 50,
      price: '$20.00',
      image: 'https://media.istockphoto.com/id/519191424/photo/cricket-equipment.jpg?s=612x612&w=0&k=20&c=qElSS_hoyVpWWc-2MX7t_1TLh1Vmf1O7t5UuFvMF2eU=' // Use a placeholder image
    },
  ];

  const [inventoryItems, setInventoryItems] = useState([
    ...permanentItems, // Include permanent items in state
    // Your existing items here
  ]);
  const [selectedItem, setSelectedItem] = useState(null);
  const [viewingList, setViewingList] = useState(false);
  const [showAddItemForm, setShowAddItemForm] = useState(false);
  const [showBuyItemForm, setShowBuyItemForm] = useState(false);
  const [viewingBuyers, setViewingBuyers] = useState(false); // State for viewing buyers
  const [buyingDetails, setBuyingDetails] = useState([]);

  const handleAddProduct = (newItem) => {
    setInventoryItems([...inventoryItems, { id: Date.now(), ...newItem }]);
    setShowAddItemForm(false);
  };

  const handleDetails = (item) => {
    setSelectedItem(item);
  };

  const handleEdit = (item) => {
    setSelectedItem(item);
  };

  const handleBuy = (item) => {
    setSelectedItem(item);
    setShowBuyItemForm(true);
  };

  const handleClose = () => {
    setSelectedItem(null);
    setViewingList(false);
    setShowAddItemForm(false);
    setShowBuyItemForm(false);
    setViewingBuyers(false); // Close buyer details view
  };

  const handleAddItem = () => {
    setShowAddItemForm(true);
  };

  const handleInventoryList = () => {
    setViewingList(prev => !prev);
  };

  const handleViewBuyers = () => {
    setViewingBuyers(true);
  };

  const handleBuyProduct = (buyDetails) => {
    setBuyingDetails([...buyingDetails, buyDetails]);
    console.log('Buying:', buyDetails);
  };

  return (
    <div>
      <h1 className="text-3xl font-bold mb-6 text-center text-yellow-800">Inventory Management</h1>
      <div className="mb-8 text-center text-red-850">
        <p className="mt-2 text-lg">
          Welcome to the Inventory Management section of the Admin Dashboard. Here, you can oversee all the products in your inventory, manage stock levels, and update product details. Each product card displays key information, such as the product name, description, stock quantity, and price. Use the Edit button on each card to make any necessary changes.
        </p>
      </div>
      <div className="flex justify-center mb-6">
        <Button
          className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded transition-colors duration-300 mx-2"
          onClick={handleAddItem}
        >
          Add Item
        </Button>
        <Button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition-colors duration-300 mx-2"
          onClick={handleInventoryList}
        >
          {viewingList ? 'Back to Grid' : 'Inventory List'}
        </Button>
        <Button
          className="bg-purple-500 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded transition-colors duration-300 mx-2"
          onClick={handleViewBuyers}
        >
          View Buyers
        </Button>
      </div>
      {!viewingList && !showAddItemForm && !viewingBuyers ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {inventoryItems.map(item => (
            <motion.div 
              key={item.id}
              className="card transform hover:-translate-y-2 transition-transform duration-300"
              whileHover={{ scale: 1.05 }}
            >
              <Card>
                <CardHeader className="relative">
                  {/* <div ></div> */}
                  <img src={item.image} alt={item.name} className="w-full h-45 object-cover rounded-lg" />
                  <CardTitle className="relative text-2xl font-bold text-red-400">{item.name}</CardTitle>
                  <CardDescription className="relative text-lg text-red-500">{item.description}</CardDescription>
                </CardHeader>
                <CardContent className="relative text-red-700">
                  <p className="relative text-md"><strong>Stock:</strong> {item.stock}</p>
                  <p className="relative text-md"><strong>Price:</strong> {item.price}</p>
                  <div className="flex justify-between mt-4">
                    <Button
                      className="relative bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition-colors duration-300 mx-2"
                      onClick={() => handleDetails(item)}
                    >
                      Details
                    </Button>
                    {/* <Button
                      className="relative bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded transition-colors duration-300 mx-2"
                      onClick={() => handleEdit(item)}
                    >
                      Edit
                    </Button> */}
                    <Button
                      className="relative bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded transition-colors duration-300 mx-2"
                      onClick={() => handleBuy(item)}
                    >
                      Buy
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      ) : viewingList ? (
        <ProductDetailList items={inventoryItems} onClose={handleClose} />
      ) : showAddItemForm ? (
        <AddItemForm onClose={handleClose} onAddProduct={handleAddProduct} />
      ) : viewingBuyers ? (
        <BuyerDetailList buyingDetails={buyingDetails} onClose={handleClose} />
      ) : null}

      {showBuyItemForm && selectedItem && (
        <BuyItemForm
          item={selectedItem}
          onClose={handleClose}
          onBuy={handleBuyProduct}
        />
      )}

      {selectedItem && !showBuyItemForm && (
        <motion.div
          className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={handleClose}
        >
          <motion.div
            className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full relative"
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0.8 }}
            onClick={(e) => e.stopPropagation()}
          >
            <h2 className="text-2xl font-bold mb-4">{selectedItem.name}</h2>
            <p className="mb-2"><strong>Description:</strong> {selectedItem.description}</p>
            <p className="mb-2"><strong>Stock:</strong> {selectedItem.stock}</p>
            <p className="mb-2"><strong>Price:</strong> {selectedItem.price}</p>
            <Button className="mt-4 bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded" onClick={handleClose}>
              Close
            </Button>
          </motion.div>
        </motion.div>
      )}

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
        .card-title, .card-description {
          z-index: 1;
        }
        .card-title {
          margin-bottom: 0.5rem;
        }
        .card-content {
          z-index: 1;
        }
      `}</style>
    </div>
  );
};

export default AdminInventory;
