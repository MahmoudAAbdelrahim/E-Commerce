import React, { useContext } from 'react';
import { ProductContext } from './ProductContext';
import '../src/App.css';
import Button from 'react-bootstrap/Button';
import { BrowserRouter, Routes, Route, Link,  NavLink } from 'react-router-dom';
import ChackOut from './ChackOut';

const Cart = () => {
  const { Cart, setCart } = useContext(ProductContext);

  // زيادة الكمية
  const increaseQuantity = (productId) => {
    setCart((prevCart) =>
      prevCart.map((product) =>
        product.id === productId
          ? { ...product, quantity: product.quantity + 1 }
          : product
      )
    );
  };

  // نقصان الكمية
  const decreaseQuantity = (productId) => {
    setCart((prevCart) =>
      prevCart
        .map((product) =>
          product.id === productId
            ? { ...product, quantity: product.quantity - 1 }
            : product
        )
        .filter((product) => product.quantity > 0) // إزالة المنتج إذا أصبحت الكمية صفرًا
    );
  };

  // حساب السعر الإجمالي
  const totalPrice = Cart.reduce(
    (accumulator, product) => accumulator + product.price * product.quantity,
    0
  );
  const removeFromCart = (productId) => {
    setCart((prevCart) => prevCart.filter((product) => product.id !== productId));
  };
  return (
    <>
      {Cart.length === 0 ? (
        <p className="cartph1">Add a product. Your cart is empty</p>
      ) : (
        <>
          <p className="cartph1">Your Cart</p>
          <div className="productlist">
            {Cart.map((product) => (
              <div key={product.id} className="producthome">
                <img src={product.thumbnail} width={180} alt={product.title} />
                <div className="productname">
                  <h5 style={{ textAlign: 'center' }}>{product.title}</h5>
                  <p className="price">Price: {product.price} $</p>
                  <p className="quantity">Quantity: {product.quantity}</p>
                  <div style={{ display: 'flex', gap: '10px', marginTop: '10px',alignItems: 'center', flexWrap: 'nowrap', justifyContent: 'space-between' }}>
                    <button
                      style={{
                        backgroundColor: '#4CAF50',
                        color: 'white',
                        border: 'none',
                        padding: '5px 10px',
                        cursor: 'pointer',
                      }}
                      onClick={() => increaseQuantity(product.id)}
                    >
                      +
                    </button>
                    <button
                      style={{
                        backgroundColor: 'red',
                        color: 'white',
                        border: 'none',
                        padding: '5px 10px',
                        cursor: 'pointer',
                      }}
                      onClick={() => decreaseQuantity(product.id)}
                    >
                      -
                    </button>
                    <Link id="linkn" to="/Chackout"><Button variant="outline-danger" style={{fontSize:'14px'}}>Chackout</Button></Link>

                  </div>
                </div>

              </div>
              
            ))}
          </div>
          <h3 className="cartph1">Total Price: {totalPrice.toFixed(2)} $</h3>

        </>
      )}
    </>
  );
};

export default Cart;
