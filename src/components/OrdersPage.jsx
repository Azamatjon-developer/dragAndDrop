import React, { useState } from 'react';
import { DndContext, DragOverlay, pointerWithin } from '@dnd-kit/core';
import {
  SortableContext,
  useSortable,
  arrayMove,
  verticalListSortingStrategy
} from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';
import OrderCard from '../components/OrderCard';


const statuses = ['new', 'preparing', 'ready', 'on_the_way'];

const SortableOrder = ({ order }) => {
  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
    isDragging,
  } = useSortable({ id: order.id });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
    opacity: isDragging ? 0.5 : 1,
  };

  return (
    <div ref={setNodeRef} style={style} {...attributes} {...listeners}>
      <OrderCard order={order} />
    </div>
  );
};

const OrdersPage = ({orders,handleSetorders}) => {
 
  const [activeOrder, setActiveOrder] = useState(null);

  const handleDragStart = (event) => {
    const { active } = event;
    const order = orders.find(o => o.id === active.id);
    setActiveOrder(order);
  };

  const handleDragEnd = (event) => {
    const { active, over } = event;
    setActiveOrder(null);
    if (!over) return;

    const activeOrder = orders.find(o => o.id === active.id);
    const overContainer = over.data.current?.sortable.containerId || over.id;
    if (!activeOrder || !overContainer) return;

    if (activeOrder.status === overContainer) {
      const activeIndex = orders.findIndex(o => o.id === active.id);
      const overIndex = orders.findIndex(o => o.id === over.id);
      if (activeIndex !== overIndex) {
        handleSetorders(arrayMove(orders, activeIndex, overIndex));
      }
      return;
    }

    handleSetorders(orders.map(order =>
      order.id === active.id ? { ...order, status: overContainer } : order
    ));
  };

  const getContainerItems = (status) => {
    return orders.filter(order => order.status === status).map(order => order.id);
  };

  const statusLabels = {
    new: 'Yangi',
    preparing: 'Tayyorlanmoqda',
    ready: 'Tayyor',
    on_the_way: 'Yetkazilmoqda',
  };

  return (
    <div className="p-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
        <DndContext
          collisionDetection={pointerWithin}
          onDragStart={handleDragStart}
          onDragEnd={handleDragEnd}
        >
          {statuses.map(status => (
            <div key={status} className="bg-gray-50 p-4 rounded-lg border border-gray-200 min-h-[300px]">
              <h3 className="text-center font-bold mb-4 px-2 py-1 bg-blue-100 rounded">
                {statusLabels[status]} ({orders.filter(o => o.status === status).length})
              </h3>
              <SortableContext
                id={status}
                items={getContainerItems(status)}
                strategy={verticalListSortingStrategy}
              >
                <div className="space-y-3">
                  {orders
                    .filter(order => order.status === status)
                    .map(order => (
                      <SortableOrder key={order.id} order={order} />
                    ))}
                </div>
              </SortableContext>
            </div>
          ))}

          <DragOverlay>
            {activeOrder && (
              <div className="bg-white p-4 rounded shadow-lg cursor-grabbing transform scale-105">
                <OrderCard order={activeOrder} />
              </div>
            )}
          </DragOverlay>
        </DndContext>
      </div>
    </div>
  );
};

export default OrdersPage;
