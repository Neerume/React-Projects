import React from 'react';

const Cart = ({ cart, increaseQty, decreaseQty, removeCart, removeFromCart }) => {

  // total price
  const total = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);

  return (
    <div className="mx-4 md:mx-8 my-6">

      {/* HEADER */}
      <div className="flex justify-between items-center">
        <h1 className="text-3xl md:text-5xl font-semibold">
          Shopping Cart ({cart.length})
        </h1>

        <button onClick={removeCart} className="text-red-500 text-lg">
          Clear All
        </button>
      </div>

      {/* MAIN LAYOUT */}
      <div className="flex flex-col lg:flex-row gap-10 mt-10">

        {/* LEFT SIDE - CART ITEMS */}
        <div className="lg:w-2/3">

          {cart.length === 0 ? (
            <p>No items in cart</p>
          ) : (
            cart.map((item) => (
              <div
                key={item.id}
                className="flex flex-col md:flex-row justify-between border-b py-6 gap-6"
              >

                {/* LEFT */}
                <div className="flex gap-6">

                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-28 h-40 object-cover rounded-lg"
                  />

                  <div>
                    <h2 className="text-xl font-semibold">{item.title}</h2>
                    <p className="text-gray-500">By {item.author}</p>

                    {/* QTY */}
                    <div className="mt-4 border inline-flex text-lg">
                      <button
                        onClick={() => decreaseQty(item.id)}
                        className="px-4 py-2"
                      >
                        -
                      </button>

                      <span className="px-2 py-2">{item.quantity}</span>

                      <button
                        onClick={() => increaseQty(item.id)}
                        className="px-4 py-2"
                      >
                        +
                      </button>
                    </div>

                    {/* actions */}
                    <div className="flex gap-6 mt-4 text-sm">
                      <button
                        onClick={() => removeFromCart(item.id)}
                        className="text-red-500"
                      >
                        Remove
                      </button>
                    </div>
                  </div>

                </div>

                {/* RIGHT PRICE */}
                <div className="text-xl md:text-2xl font-semibold">
                  Rs. {item.price * item.quantity}
                </div>

              </div>
            ))
          )}

        </div>

        {/* RIGHT SIDE - ORDER SUMMARY */}
        <div className="lg:w-1/3">

          <div className="border rounded-xl p-6 sticky top-10 bg-white">

            <h2 className="text-2xl font-semibold mb-4">
              Order Summary
            </h2>

            <div className="flex justify-between mb-2">
              <span>Subtotal</span>
              <span>Rs. {total}</span>
            </div>

            <hr className="my-4" />

            <div className="flex justify-between font-semibold text-lg">
              <span>Total</span>
              <span>Rs. {total}</span>
            </div>

            <button className="w-full mt-6 bg-blue-600 text-white py-3 rounded-lg">
              PROCEED TO CHECKOUT
            </button>

            <p className="text-xs text-gray-500 mt-3">
              Shipping & taxes calculated at checkout
            </p>

          </div>

        </div>

      </div>
    </div>
  );
};

export default Cart;