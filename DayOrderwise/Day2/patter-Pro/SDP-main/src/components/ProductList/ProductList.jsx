import React from 'react';

const ProductList = ({ products }) => {
  return (
    <div className="mt-8">
      <h2 className="text-2xl font-bold mb-4">Product List</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map((product, index) => (
          <div key={index} className="bg-white p-6 rounded-lg shadow-lg">
            <img src={product.image} alt={product.name} className="w-full h-40 object-cover mb-4" />
            <h3 className="text-xl font-semibold mb-2">{product.name}</h3>
            <p className="text-gray-700 mb-2">{product.description}</p>
            <p className="text-gray-900 font-bold">${product.price}</p>
            <p className="text-gray-600">Stock: {product.stock}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;
