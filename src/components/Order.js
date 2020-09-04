import React, { useState } from 'react';
import Product from './ProductInfo';
import Address from '../Address';
import Summary from './Summary';

const Order = () => {
  const[details, setDetails] = useState({
    quantity: '',
    address: '',
    name: 'Shirt'
  });

  const quantityChange = (value) => {
    setDetails({quantity: value})
  };

  const addressChange = (value) => {
    setDetails({address: value})
  };

  const nameChange = (value) =>{
    setDetails({name: value})
  }
  return (
    <div className="order">
      <h1 className="cart"><i class="fas fa-shopping-cart"></i></h1>
      <Product quantity={details.quantity} qtyChange={quantityChange} nmeChange={nameChange} name={details.name}/>
      <Address address={details.address} addressChange= {addressChange}/>
      <Summary quantity={details.quantity} qtyChange={quantityChange} address={details.address} nameChange={nameChange} name={details.name}/>

      <button type="button" class="btn btn-outline-success mt-5 btn-lg">Place Order</button>
    </div>
    
  )
}

export default Order;