import React, { useState } from 'react';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import ordersData from '../data/orders';
import OrderCard from '../components/OrderCard';

const statuses = ['new', 'preparing', 'ready', 'on_the_way'];
const statusLabels = {
  new: 'Новый',
  preparing: 'Заготовка',
  ready: 'Готов',
  on_the_way: 'Курьер в пути',
};

const OrdersPage = () => {
  const [orders, setOrders] = useState(ordersData);

  const onDragEnd = (result) => {
    const { destination, source, draggableId } = result;

    if (!destination) return;

    if (
      destination.droppableId === source.droppableId &&
      destination.index === source.index
    ) {
      return;
    }

    const updatedOrders = orders.map(order =>
      order.id.toString() === draggableId
        ? { ...order, status: destination.droppableId }
        : order
    );

    setOrders(updatedOrders);
  };

  return (
    <div className="p-4">
      <h2 className="text-xl font-semibold mb-4">Сегодняшние заказы</h2>
      <DragDropContext onDragEnd={onDragEnd}>
        <div className="grid grid-cols-4 gap-4">
          {statuses.map(status => (
            <Droppable key={status} droppableId={status}>
              {(provided) => (
                <div
                  ref={provided.innerRef}
                  {...provided.droppableProps}
                  className="bg-gray-100 p-4 rounded min-h-[400px]"
                >
                  <h3 className="text-center font-bold mb-4">{statusLabels[status]}</h3>
                  {orders
                    .filter(order => order.status === status)
                    .map((order, index) => (
                      <Draggable
                        key={order.id.toString()}
                        draggableId={order.id.toString()}
                        index={index}
                      >
                        {(provided) => (
                          <div
                            ref={provided.innerRef}
                            {...provided.draggableProps}
                            {...provided.dragHandleProps}
                            className="mb-4"
                          >
                            <OrderCard order={order} />
                          </div>
                        )}
                      </Draggable>
                    ))}
                  {provided.placeholder}
                </div>
              )}
            </Droppable>
          ))}
        </div>
      </DragDropContext>
    </div>
  );
};

export default OrdersPage;
