import React from 'react';

const Cart=({cart})=>{
  return(
    <>
     <div>
      <h1>My Cart</h1>

      {cart.length === 0 ? (
        <p>No items in cart</p>
      ) : (
        cart.map((item) => (
          <div key={item.id}>
            <h2>{item.title}</h2>
            <p>{item.price}</p>
          </div>
        ))
      )}
    </div>
    </>
  );
}

export default Cart;