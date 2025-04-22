import React from 'react';

const Navbar = ({ordersCount}) => {
  return (
    <div className="w-full bg-white shadow-sm px-6 py-4 flex justify-between items-center">
      <h1 className="text-xl font-semibold text-gray-800">Сегодняшние заказы</h1>

      <div className="flex items-center gap-4">
       
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
