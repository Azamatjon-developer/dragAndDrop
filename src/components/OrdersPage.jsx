import React, { useState } from 'react';
import { DndContext, closestCenter } from '@dnd-kit/core';
import {
  SortableContext,
  useSortable,
  arrayMove,
  verticalListSortingStrategy
} from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';

import ordersData from '../data/orders';
import OrderCard from '../components/OrderCard';

const statuses = ['new', 'preparing', 'ready', 'on_the_way'];
const statusLabels = {
  new: 'Новый',
  preparing: 'Заготовка',
  ready: 'Готов',
  on_the_way: 'Курьер в пути',
};

const SortableOrder = ({ order }) => {
  const { attributes, listeners, setNodeRef, transform, transition } = useSortable({ id: order.id });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  };

  return (
    <div ref={setNodeRef} style={style} {...attributes} {...listeners} className="mb-4">
      <OrderCard order={order} />
    </div>
  );
};

const OrdersPage = () => {
  const [orders, setOrders] = useState(ordersData);

  const handleDragEnd = (event) => {
    const { active, over } = event;

    if (!over || active.id === over.id) return;

    const activeOrder = orders.find(o => o.id === active.id);
    const overOrder = orders.find(o => o.id === over.id);

    if (!activeOrder || !overOrder || activeOrder.status !== overOrder.status) return;

    const currentStatusOrders = orders.filter(o => o.status === activeOrder.status);
    const oldIndex = currentStatusOrders.findIndex(o => o.id === active.id);
    const newIndex = currentStatusOrders.findIndex(o => o.id === over.id);

    const updatedOrders = arrayMove(currentStatusOrders, oldIndex, newIndex);

    const reordered = [
      ...orders.filter(o => o.status !== activeOrder.status),
      ...updatedOrders
    ];

    setOrders(reordered);
  };

  return (
    <div className="p-4">
      <h2 className="text-xl font-semibold mb-4">Сегодняшние заказы</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
        {statuses.map(status => {
          const statusOrders = orders.filter(order => order.status === status);

          return (
            <div key={status} className="bg-gray-100 p-4 rounded min-h-[500px]">
              <h3 className="text-center font-bold mb-4">{statusLabels[status]}</h3>

              <DndContext
                collisionDetection={closestCenter}
                onDragEnd={handleDragEnd}
              >
                <SortableContext
                  items={statusOrders.map(order => order.id)}
                  strategy={verticalListSortingStrategy}
                >
                  {statusOrders.map(order => (
                    <SortableOrder key={order.id} order={order} />
                  ))}
                </SortableContext>
              </DndContext>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default OrdersPage;
