import React from 'react';

const Address = (props) => {
  let add;
  const handleChange = (e) =>{
    props.addressChange(e.target.value)
  }
  return (
    <div className="address">
      <h2>Address</h2>
      <input type="text" value={props.address} onChange={handleChange} placeholder="Type your address here"/>
    </div>
  )
}

export default Address;