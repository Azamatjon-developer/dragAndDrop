import React from 'react';

const OrderCard = ({ order }) => {
  return (
    <div className="border p-4 rounded-md shadow-md bg-white">
      <p className="text-sm text-gray-500">ID: {order.id}</p>
      <ul className="mt-2 mb-2 text-sm">
        {order.items.map((item, i) => (
          <li key={i}>{item}</li>
        ))}
      </ul>
      <div className="flex justify-between items-center mt-2">
        <span className="text-blue-600 font-semibold">{order.price.toLocaleString()} сум</span>
        <span className="text-xs text-gray-500">{order.time}</span>
      </div>
    </div>
  );
};

export default OrderCard;
