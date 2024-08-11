import React from 'react';
import { useParams } from 'react-router-dom';

const EditProduct = () => {
  const { id } = useParams();
  
  return (
    <div>
      <h1>Edit Product {id}</h1>
      {/* Your edit form goes here */}
    </div>
  );
};

export default EditProduct;
