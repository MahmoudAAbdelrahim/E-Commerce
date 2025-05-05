import React, { useContext } from 'react';
import { ProductContext } from './ProductContext';
import { FaCartPlus } from "react-icons/fa";
import { useParams } from 'react-router-dom';
import '../src/App.css';
import Button from 'react-bootstrap/Button';

const ProuductDetils = () => {
  const { products, addToCart } = useContext(ProductContext);
  const { id } = useParams(); // ← جيب ID من URL

  const product = products.find((item) => item.id === parseInt(id));

  const handleAddToCart = () => {
    addToCart(product);
  };

  if (!product) {
    return <div>Loading...</div>;
  }

  return (
    <div className='product'>
      <h2>{product.title}</h2>
      <div className='imgp'>
        <p>{product.description}</p>
        <img src={product.thumbnail} width={400} height={500} alt={product.title} />
      </div>
      <div className='btnpr'>
        <p className='i'>Price: {product.price}</p>
                          <button onClick={handleAddToCart}
                            style={{
                              fontWeight: 'bold',
                              fontSize: '22px',
                              textAlign: 'center',
                              padding: '3px 20px',
                              borderRadius: '10px',
                              border: '1px solid #4d9091',
                              background: '#4d9091',
                              color: '#ffff',
                            }}
                          >
                            Add to cart
                          </button>
      </div>
    </div>
  );
};

export default ProuductDetils;
