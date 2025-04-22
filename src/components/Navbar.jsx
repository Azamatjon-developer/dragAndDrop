import React from 'react';

const Navbar = ({ordersCount}) => {
  return (
    <div className="w-full bg-white shadow-sm px-6 py-4 flex justify-between items-center">
      <h1 className="text-xl font-semibold text-gray-800">Сегодняшние заказы</h1>

      <div className="flex items-center gap-4">
        <input
          type="text"
          placeholder="Поиск по ID"
          className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
        <div className="flex items-center gap-2 text-sm text-gray-600">
          <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-md">
            Всего:  {ordersCount}
          </span>
        </div>
        
      </div>
    </div>
  );
};

export default Navbar;
