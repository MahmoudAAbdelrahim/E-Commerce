import React, { useContext } from 'react';
import { ProductContext } from './ProductContext';
import { FaCartPlus } from "react-icons/fa";
import { useParams } from 'react-router-dom';
import '../src/App.css';
import Button from 'react-bootstrap/Button';
import Table from 'react-bootstrap/Table';


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
    <>
   
    <div className='product'>

    <Table className="table custom-table" responsive style={{width:'80%', textAlign:'center', alignItems:'center', margin:'0px 10%'}}>
    <thead>
      <tr><th colSpan={2} rowSpan={2}> <h2>{product.title}</h2></th></tr>
    </thead>
    <tbody>
      <tr >
        <td><div className='imgp'><img src={product.thumbnail} width={300} height={300} alt={product.title} /></div></td>
        <td className='deacp' ><p  style={{textAlign:'center', width:'90%', marginTop:'10%'}}>{product.description}</p></td>
      </tr>
  
        <tr className='deacpn'>
          <td colSpan={2} >
            <p  style={{textAlign:'center', width:'90%', marginTop:'10%'}}>{product.description}</p>
          </td>
        </tr>   

        <tr>  <td colSpan={2} rowSpan={2}>  <div className='btnpr'>
            <p className='i'>Price: {product.price}</p>
                <button onClick={handleAddToCart}
                  style={{fontWeight: 'bold',fontSize: '22px',textAlign: 'center',padding: '3px 20px',borderRadius: '10px',border: '1px solid #4d9091',background: '#4d9091',color: '#ffff',}}>
                  Add to cart
                </button>
      </div> </td> </tr>
    </tbody>
  </Table>
    </div>
    </>
  );
};

export default ProuductDetils;
