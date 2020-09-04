import React from 'react';

const Summary = (props) => {

  const handleChange = (e) =>{
    props.qtyChange(e.target.value)
  }
  return (
    <div className="summary">
      <h2 className="py-5">Order Summary</h2>
      <h5>Product Details</h5>
      <input type="text" value={props.quantity} onChange={handleChange} onChange={handleChange}/>
      <h5 className="pt-4">Shipping Address</h5>
      <h2>{props.address}</h2>
    </div>
  )
}

export default Summary;