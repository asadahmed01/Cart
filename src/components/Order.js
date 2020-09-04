import React, { useState } from 'react';
import Product from './ProductInfo';
import Address from '../Address';
import Summary from './Summary';

const Order = () => {
  const[details, setDetails] = useState({
    quantity: '',
    address: ''
  });

  const quantityChange = (value) => {
    setDetails({quantity: value})
  };

  const addressChange = (value) => {
    setDetails({address: value})
  }
  return (
    <div className="order">
      <h1 className="cart"><i class="fas fa-shopping-cart"></i></h1>
      <Product quantity={details.quantity} qtyChange={quantityChange}/>
      <Address address={details.address} addressChange= {addressChange}/>
      <Summary quantity={details.quantity} qtyChange={quantityChange} address={details.address}/>

      <button type="button" class="btn btn-outline-success mt-5 btn-lg">Place Order</button>
    </div>
    
  )
}

export default Order;