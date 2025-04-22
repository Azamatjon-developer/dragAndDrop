// src/App.jsx

import React from 'react'
import Navbar from './components/Navbar'
import OrdersPage from './components/OrdersPage'
import './App.css'

const App = () => {
  return (
    <div className="bg-gray-50 min-h-screen">
      <Navbar />
      <OrdersPage />
    </div>
  )
}

export default App
