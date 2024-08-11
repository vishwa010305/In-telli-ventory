import React from 'react';
import { useLocation } from 'react-router-dom';

const SearchResults = () => {
  const location = useLocation();
  const query = new URLSearchParams(location.search).get('query');

  // Fetch or filter data based on the query
  // This example assumes you have a data source to filter
  const data = [
    // Sample data
    { id: 1, name: 'Product 1', description: 'Description for Product 1' },
    { id: 2, name: 'Product 2', description: 'Description for Product 2' },
    // Add more items
  ];

  const results = data.filter(item => 
    item.name.toLowerCase().includes(query.toLowerCase()) || 
    item.description.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Search Results for "{query}"</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {results.map(item => (
          <div key={item.id} className="p-4 border border-gray-200 rounded-lg">
            <h2 className="text-xl font-bold">{item.name}</h2>
            <p>{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SearchResults;
