import React,{useState} from 'react';

const Cart=({cart, increaseQty, decreaseQty})=>{

  return(
    <>
     <div className ="mx-8 my-8">
      <h1 className="text-5xl font-semibold">My Cart ({cart.length})</h1> 

      {cart.length === 0 ? (
        <p>No items in cart</p>
      ) : (
        cart.map((item) => (
          <div key={item.id}>
            <div className="flex my-10 gap-10">
              <img src={item.image} alt={item.title} className="w-32 h-48 md:w-35 md:h-50  object-cover rounded-lg"/>  
              <div className="flex gap-80">
                <div>
                  <h2 className="text-2xl font-semibold">{item.title}</h2>    
                  <p className="text-lg pt-2">By {item.author}</p>
                  <div className ="mt-20 text-2xl border border-gray-300 inline-flex" >
                  <button onClick={() => decreaseQty(item.id)} className="px-4 py-2">-</button>
                  <span className="py-2">{item.quantity}</span>
                  <button onClick={() => increaseQty(item.id)} className="px-4 py-2">+</button>
                </div>
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