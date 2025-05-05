import React from 'react'
import { useContext } from 'react';
import { ProductContext } from './ProductContext';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import { FaCartPlus } from 'react-icons/fa';
import './App.css';

const Home = () => {
    const { products, setSelectProduct, addToCart } = useContext(ProductContext);
      const handleProductClik = (products)=>{
        setSelectProduct(products)
      }
      const handleaddtocart =(products)=>{
        addToCart(products);
      }
    return (
    <>
    <h1>productlist</h1>
    <div className="productlist">
      {products.map((products) => (
        <div key={products.id} className='producthome'>
          <Link to={`/products/${products.id}`} onClick={() => handleProductClik(products)}>
          <img src={products.thumbnail}  width={180}/>
          </Link>
          <div className="productname">
          {products.title}
          <div className='btnpr'>
        <p> { products.price}</p>
                          <button onClick={()=>handleaddtocart(products)}
                            style={{
                              fontWeight: 'bold',
                              fontSize: '12px',
                              textAlign: 'center',
                              padding: '3px 10px',
                              borderRadius: '5px',
                              border: '1px solid #4d9091',
                              background: '#4d9091',
                              color: '#ffff',
                            }}
                          >
                            Add to cart
                          </button>
          </div>
        </div>
        </div>
      )
      )}  
    </div>
    </>
    )
}

export default Home
