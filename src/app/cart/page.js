'use client'
import Image from "next/image";
import React from "react";
import useStore from '../store';

const CartPage = () => {
  // Replace these values with the actual data from your state or props
  const { cart, removeFromCart } = useStore();

  const handleRemoveItem = (itemId) => {
    removeFromCart(itemId);
  };

  const subtotal = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);
  const serviceCost = 0.00; // Replace with actual service cost
  const deliveryCost = 0.00; // Replace with actual delivery cost
  const total = subtotal + serviceCost + deliveryCost;

  return (
    <div className="h-[calc(100vh-6rem)] md:h-[calc(100vh-9rem)] flex flex-col text-red-500 lg:flex-row">
      {/* PRODUCTS CONTAINER */}
      <div className="h-1/2 p-4 flex flex-col justify-center overflow-scroll lg:h-full lg:w-2/3 2xl:w-1/2 lg:px-20 xl:px-40">
        {cart.map((item) => (
          // Render each cart item dynamically
          <div key={item.id} className="flex items-center justify-between mb-4">
            {/* Adjust the image source as needed */}
            <Image src={`/temporary/p${item.id}.png`} alt="" width={100} height={100} />
            <div className="">
              <h1 className="uppercase text-xl font-bold">{item.name}</h1>
              <span>{item.size}</span>
            </div>
            <h2 className="font-bold">${(item.price * item.quantity).toFixed(2)}</h2>
            <span className="cursor-pointer"onClick={() => handleRemoveItem(item.id)}>X</span>
          </div>
        ))}
      </div>
      {/* PAYMENT CONTAINER */}
      <div className="h-1/2 p-4 bg-fuchsia-50 flex flex-col gap-4 justify-center lg:h-full lg:w-1/3 2xl:w-1/2 lg:px-20 xl:px-40 2xl:text-xl 2xl:gap-6">
        <div className="flex justify-between">
          <span className="">Subtotal ({cart.length} items)</span>
          <span className="">${subtotal.toFixed(2)}</span>
        </div>
        <div className="flex justify-between">
          <span className="">Service Cost</span>
          <span className="">${serviceCost.toFixed(2)}</span>
        </div>
        <div className="flex justify-between">
          <span className="">Delivery Cost</span>
          <span className="text-green-500">FREE!</span>
        </div>
        <hr className="my-2" />
        <div className="flex justify-between">
          <span className="">TOTAL(INCL. VAT)</span>
          <span className="font-bold">${total.toFixed(2)}</span>
        </div>
        <button className="bg-red-500 text-white p-3 rounded-md w-1/2 self-end">
          CHECKOUT
        </button>
      </div>
    </div>
  );
};

export default CartPage;
