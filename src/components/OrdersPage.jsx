// src/components/OrdersPage.jsx
import React from 'react';
import orders from '../data/orders';
import OrderCard from './OrderCard';

const statusMap = {
  new: "Новый",
  preparing: "Заготовка",
  ready: "Готов",
  on_the_way: "Курьер в пути"
};

const statusOrder = ["new", "preparing", "ready", "on_the_way"];

const OrdersPage = () => {
  return (
    <div className="grid grid-cols-4 gap-4 p-4">
      {statusOrder.map(status => (
        <div key={status} className="bg-gray-100 rounded-lg p-4">
          <h2 className="text-lg font-semibold mb-4 text-center">{statusMap[status]}</h2>
          
          {orders
            .filter(order => order.status === status)
            .map(order => (
              <OrderCard key={order.id} order={order} />
            ))
          }
        </div>
      ))}
    </div>
  );
};

export default OrdersPage;
