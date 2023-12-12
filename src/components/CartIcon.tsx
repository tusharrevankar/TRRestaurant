'use client'
import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import useStore from '../app/store';  // Import your Zustand store

const CartIcon = () => {
  const { cart } = useStore();
  const [cartItemCount, setCartItemCount] = useState(0);

  useEffect(() => {
    // Update the cart item count when the cart changes
    setCartItemCount(cart.length);
  }, [cart]);

  return (
    <Link href="/cart" className="flex items-center gap-4">
      <div className="relative w-8 h-8 md:w-5 md:h-5">
        <Image src="/cart.png" alt="" fill />
      </div>
      <span>Cart ({cartItemCount})</span>
    </Link>
  );
};

export default CartIcon;
