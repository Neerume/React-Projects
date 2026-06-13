import React from 'react';

const Cart=({cart})=>{
  return(
    <>
     <div className ="mx-8 my-8">
      <h1 className="text-5xl font-semibold">My Cart $()</h1> 

      {cart.length === 0 ? (
        <p>No items in cart</p>
      ) : (
        cart.map((item) => (
          <div key={item.id}>
            <div className="flex my-10 gap-10">
              <img src={item.image} alt={item.title} className="w-32 h-48 md:w-40 md:h-60  object-cover rounded-lg"/>  
              <div className="flex gap-80">
                <div>
                  <h2 className="text-2xl font-semibold">{item.title}</h2>    
                  <p className="text-lg pt-2">By {item.author}</p>
                </div>
                <p className='text-3xl font-semibold'>{item.price}</p>
              </div>
              
            </div>
          </div>
        ))
      )}
    </div>
    </>
  );
}

export default Cart;