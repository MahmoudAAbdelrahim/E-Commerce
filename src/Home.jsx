import React from 'react'
import { useContext } from 'react';
import { ProductContext } from './ProductContext';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import { FaCartPlus } from 'react-icons/fa';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation, Autoplay } from 'swiper/modules';import './App.css';

const Home = () => {
    const { products, setSelectProduct, addToCart } = useContext(ProductContext);
      const handleProductClik = (products)=>{
        setSelectProduct(products)
      }
      const handleaddtocart =(products)=>{
        addToCart(products);
      }
      const selectedProducts = products && products.length > 0
      ? products.slice(5, 8)
      : [{ thumbnail: 'https://via.placeholder.com/600x300?text=No+Image' }];

// products اللي جاي من أول API
const firstProducts = products.slice(5, 10);  // مثلاً عروض
// products اللي جاي من تاني API (بس نفس الاسم المستخدم)
const secondProducts = products.slice(11, 12); // مثلاً إعلان ثابت
const threProducts = products.slice(10,15 ); // مثلاً إعلان ثابت

// نجمعهم
const discountProducts = [...firstProducts, ...secondProducts, ...threProducts];

    
      const discount = 10; // نسبة الخصم
      const discountA = 50; // نسبة الخصم

  
    return (
      <>
        <h1>Product List</h1>
        <div style={{ width: '600px', margin: 'auto' }}>

            {secondProducts.map((products, index) => (
              <SwiperSlide key={index}>
                <img
                  src={products.thumbnail}
                  alt={`Product Image ${index}`}
                  style={{ width: '100%', height: '350px' }}
                />
              </SwiperSlide>
            ))}
    </div>
    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px', justifyContent: 'center' }}>
    {threProducts.map((products, index) => (
      <div className='discountProducts' key={index}>
        <div className='discount'>-{discountA}%</div>
        <img className='detilsimg' src={products.thumbnail} alt={`Product Image ${index}`}/>
        <div className='detilsprice' >
          <p className='detilsoldprice'>${products.price}</p>
          <p className='detilsnewprice'>${(products.price - (products.price * discountA / 100)).toFixed(2)}</p>
        </div>
      </div>
      ))} 
    </div>

        <div style={{ width: '600px', margin: 'auto' }}>
          <Swiper
            modules={[Autoplay]}
            spaceBetween={10}
            slidesPerView={1}
            autoplay={{ delay: 2000 }}
            loop={true}
          >
            {selectedProducts.map((products, index) => (
              <SwiperSlide key={index}>
                <img
                  src={products.thumbnail}
                  alt={`Product Image ${index}`}
                  style={{ width: '100%', height: '350px' }}
                />
              </SwiperSlide>
            ))}
          </Swiper>
    </div>
    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px', justifyContent: 'center' }}>
    {firstProducts.map((products, index) => (
      <div className='discountProducts' key={index}>
        <div className='discount'>-{discount}%</div>
        <img className='detilsimg' src={products.thumbnail} alt={`Product Image ${index}`}/>
        <div className='detilsprice' >
          <p className='detilsoldprice'>${products.price}</p>
          <p className='detilsnewprice'>${(products.price - (products.price * discount / 100)).toFixed(2)}</p>
        </div>
      </div>
      ))} 
    </div>


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
