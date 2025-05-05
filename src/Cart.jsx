import React, { useContext, useEffect } from 'react';
import { ProductContext } from './ProductContext';
import '../src/App.css';
import Button from 'react-bootstrap/Button';
import Table from 'react-bootstrap/Table';

import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import ChackOut from './ChackOut';

const Cart = () => {
  const { Cart, setCart } = useContext(ProductContext);

  
  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(Cart));
  }, [Cart]);

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
    <div style={{ background: '#f3f0ea', minHeight: '100vh' }}>
      {Cart.length === 0 ? (
        <p className="cartph1">Add a product. Your cart is empty</p>
      ) : (
        <>
          <div className="productlist">
            <Table className="table custom-table" responsive>
              <thead>
                <tr>
                  <th colSpan={4}>
                    <h1>Your Cart</h1>
                  </th>
                </tr>
              </thead>
              <tbody>
                {Cart.map((product) => (
                  <React.Fragment key={product.id}>
                    <tr>
                      <td colSpan={2} rowSpan={2}>
                        <img src={product.thumbnail} width={180} alt={product.title} />
                      </td>
                      <td>
                        <p style={{ textAlign: 'center' }}>{product.title}</p>
                      </td>
                      <td>
                        <p className="quantity">{product.quantity}</p>
                      </td>
                    </tr>
                    <tr style={{ background: 'red' }}>
                      <td>
                        <p className="price">Price: {product.price} $</p>
                      </td>
                      <td>
                        <div
                          style={{
                            border: '2px solid #e6b094',
                            display: 'flex',
                            gap: '1px',
                            marginTop: '1px',
                            textAlign: 'center',
                            flexWrap: 'nowrap',
                          }}
                        >
                          <button
                            style={{
                              backgroundColor: '#f4f2eb',
                              color: '#000',
                              border: 'none',
                              padding: '1px 10px',
                              cursor: 'pointer',
                            }}
                            onClick={() => increaseQuantity(product.id)}
                          >
                            +
                          </button>
                          <button
                            style={{
                              backgroundColor: '#f4f2eb',
                              color: '#000',
                              border: 'none',
                              padding: '1px 10px',
                              cursor: 'pointer',
                            }}
                            onClick={() => decreaseQuantity(product.id)}
                          >
                            -
                          </button>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td colSpan={4} style={{ textAlign: 'center' }}>
                        <Link id="linkn" to="/Chackout">
                          <button
                            style={{
                              fontWeight: 'bold',
                              fontSize: '22px',
                              textAlign: 'center',
                              padding: '3px 20px',
                              borderRadius: '10px',
                              border: '1px solid #e6b094',
                              background: '#e6b094',
                              color: '#ffff',
                            }}
                          >
                            Chackout
                          </button>
                        </Link>
                      </td>
                    </tr>
                  </React.Fragment>
                ))}
                <tr>
                  <td colSpan={4}>
                    <div
                      style={{
                        display: 'flex',
                        gap: '3px',
                        marginTop: '1px',
                        textAlign: 'center',
                        flexWrap: 'nowrap',
                        justifyContent: 'space-between',
                      }}
                    >
                      <p>Total Price:</p>
                      <p>{totalPrice.toFixed(2)} $</p>
                    </div>
                  </td>
                </tr>
              </tbody>
            </Table>
          </div>
        </>
      )}
    </div>
  );
};

export default Cart;
