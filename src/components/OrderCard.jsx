import React from 'react';

const statusColors = {
  new: 'bg-yellow-100 text-yellow-700',
  preparing: 'bg-blue-100 text-blue-700',
  ready: 'bg-green-100 text-green-700',
  on_the_way: 'bg-purple-100 text-purple-700',
};

const statusLabels = {
  new: 'Yangi',
  preparing: 'Tayyorlanmoqda',
  ready: 'Tayyor',
  on_the_way: 'Yetkazilmoqda',
};

const OrderCard = ({ order }) => {
  return (
    <div className="bg-white p-4 rounded shadow border border-gray-200 space-y-2">
      <div className="flex justify-between items-center">
        <h4 className="font-semibold text-lg">{order.title}</h4>
        <span className={`px-2 py-1 rounded text-sm font-medium ${statusColors[order.status]}`}>
          {statusLabels[order.status]}
        </span>
      </div>
      <div className="text-sm text-gray-600">
        <p><strong>ID:</strong> {order.id}</p>
        <p><strong>Narx:</strong> {order.price.toLocaleString()} so‘m</p>
        <p><strong>Vaqt:</strong> {order.time}</p>
        <p><strong>Mijoz:</strong> {order.customer}</p>
        
        <p><strong>Buyurtma:</strong> {order.items.join(', ')}</p>
      </div>
    </div>
  );
};

export default OrderCard;
