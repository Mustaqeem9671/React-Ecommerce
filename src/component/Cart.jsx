import React, { useEffect } from "react";

const Cart = ({ cart }) => {

 
  let subtotal = cart.reduce((sum, x) => {
    return sum + x.price;
  }, 0);

  return (
    <div className="cart">
      <h1>cart</h1>
      {cart.map((data) => (
        <div key={data.id}>
          <img src={data.thumbnail} alt="" />
          <h1>{data.id}</h1>
          <h1>{data.brand}</h1>
        </div>
      ))}
      <h1>SubTotal RS:{subtotal}</h1>
    </div>
  );
};

export default Cart;
