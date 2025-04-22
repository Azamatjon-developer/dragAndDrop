
import React from 'react'
import Navbar from './components/Navbar'
import OrdersPage from './components/OrdersPage'
import './App.css'
import { useState } from 'react'

const ordersData = [
  {
    id: 1,
    status: 'new',
    title: 'Pepsi 0.5l',
    price: 10000,
    time: '12:00',
    items: ['Pepsi 0.5l', 'Chips'],
    customer: 'Ali',
    address: 'Tashkent, Yunusobod',
    phone: '+998901234567',
    deliveryTime: '30 minutes',
    paymentMethod: 'Cash',
  },
  {
    id: 2,
    status: 'preparing',
    title: 'Burger Set',
    price: 45000,
    time: '12:10',
    items: ['Burger', 'Fries', 'Cola'],
    customer: 'Vali',
    address: 'Tashkent, Chilonzor',
    phone: '+998901112233',
    deliveryTime: '45 minutes',
    paymentMethod: 'Card',
  },
  {
    id: 3,
    status: 'ready',
    title: 'Pizza',
    price: 60000,
    time: '12:20',
    items: ['Pepperoni Pizza'],
    customer: 'Gulbahor',
    address: 'Tashkent, Sergeli',
    phone: '+998909998877',
    deliveryTime: '40 minutes',
    paymentMethod: 'Cash',
  },
  {
    id: 4,
    status: 'on_the_way',
    title: 'Lagman',
    price: 25000,
    time: '12:30',
    items: ['Lagman'],
    customer: 'Sardor',
    address: 'Tashkent, Mirzo Ulugbek',
    phone: '+998938765432',
    deliveryTime: '20 minutes',
    paymentMethod: 'Card',
  },
  {
    id: 5,
    status: 'new',
    title: 'Sushi Set',
    price: 80000,
    time: '12:40',
    items: ['Sushi', 'Soy sauce'],
    customer: 'Dilnoza',
    address: 'Tashkent, Olmazor',
    phone: '+998901223344',
    deliveryTime: '50 minutes',
    paymentMethod: 'Cash',
  },
  {
    id: 6,
    status: 'preparing',
    title: 'Doner Kebab',
    price: 20000,
    time: '12:50',
    items: ['Doner', 'Ayran'],
    customer: 'Jamshid',
    address: 'Tashkent, Yakkasaroy',
    phone: '+998901122334',
    deliveryTime: '30 minutes',
    paymentMethod: 'Card',
  },
  {
    id: 7,
    status: 'ready',
    title: 'Chicken Wings',
    price: 30000,
    time: '13:00',
    items: ['6 pcs Chicken Wings', 'Sauce'],
    customer: 'Shahlo',
    address: 'Tashkent, Shayxontohur',
    phone: '+998907654321',
    deliveryTime: '25 minutes',
    paymentMethod: 'Cash',
  },
  {
    id: 8,
    status: 'on_the_way',
    title: 'Hot Dog',
    price: 15000,
    time: '13:10',
    items: ['Hot Dog'],
    customer: 'Aziz',
    address: 'Tashkent, Uchtepa',
    phone: '+998911223344',
    deliveryTime: '35 minutes',
    paymentMethod: 'Card',
  },
  {
    id: 9,
    status: 'new',
    title: 'Combo Lunch',
    price: 40000,
    time: '13:20',
    items: ['Plov', 'Salad', 'Bread'],
    customer: 'Marjona',
    address: 'Tashkent, Bektemir',
    phone: '+998907891234',
    deliveryTime: '40 minutes',
    paymentMethod: 'Cash',
  },
  {
    id: 10,
    status: 'preparing',
    title: 'Ice Cream Box',
    price: 18000,
    time: '13:30',
    items: ['Vanilla Ice Cream', 'Chocolate Ice Cream'],
    customer: 'Bobur',
    address: 'Tashkent, Yashnobod',
    phone: '+998909012345',
    deliveryTime: '20 minutes',
    paymentMethod: 'Card',
  },
];


const App = () => {

  
   const [orders, setOrders] = useState(ordersData);
   const handleSetorders = (orders) => {
      setOrders(orders);

   }

  return (
    <div className="bg-gray-50 min-h-screen">
      <Navbar ordersCount ={orders.length} />
      <OrdersPage handleSetorders={handleSetorders} orders = {orders} />
    </div>
  )
}

export default App
