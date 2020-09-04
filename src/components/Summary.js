import React from 'react';

const Summary = (props) => {

  const handleChange = (e) =>{
    props.qtyChange(e.target.value)
  }
  return (
    <div className="summary">
      <h2 className="py-3">Order Summary</h2>
      <h5>Product Details</h5>
      <p>Product Name: {props.name}</p>
      <input type="text" value={props.quantity} onChange={handleChange} onChange={handleChange} placeholder="Selected Qty"/>
      <p className="pt-4">Shipping Address: {props.address}</p>
    </div>
  )
}

export default Summary;