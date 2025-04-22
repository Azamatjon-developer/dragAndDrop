import React from 'react';
import { ShoppingCart } from 'lucide-react';

const Navbar = ({ ordersCount }) => {
  return (
    <div className="w-full bg-white shadow-md px-6 py-4 flex justify-between items-center border-b border-gray-100">
      <h1 className="text-2xl font-bold text-green-600 tracking-tight">
        🍔 EatTogether
      </h1>

      <div className="flex items-center gap-4">
        <div className="flex items-center gap-2 text-sm text-gray-700 bg-green-50 border border-green-200 px-4 py-2 rounded-full shadow-sm hover:shadow-md transition duration-300">
          <ShoppingCart className="w-5 h-5 text-green-500" />
          <span className="font-medium"> Orders: {ordersCount}</span>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
