import React from "react";
import Navbar from "./components/Navbar";
import OrdersPage from "./components/OrdersPage";
import "./App.css";
import { useState, useEffect } from "react";
import ordersData from "./data/ordersData";

const App = () => {
  const [allOrders, setAllOrders] = useState(ordersData);
  const [orders, setOrders] = useState(ordersData);
  const [searchId, setSearchId] = useState("");

  useEffect(() => {
    if (searchId.trim() === "") {
      setOrders(allOrders);
    } else {
      const filtered = allOrders.filter((order) =>
        order.id.toString().includes(searchId.trim())
      );
      setOrders(filtered);
    }
  }, [searchId, allOrders]);

  const handleSetorders = (updatedOrders) => {
    setOrders(updatedOrders);
    setAllOrders(updatedOrders); // Drag&Drop bo‘lganda ham holat yangilanadi
  };

  return (
    <div className="bg-gray-50 min-h-screen">
      <Navbar ordersCount={orders.length} />

      <div className="mt-5 mb-5">
        <input
          type="text"
          placeholder="Search by ID"
          className="border w-[700px] border-gray-300 rounded-2xl p-2"
          value={searchId}
          onChange={(e) => setSearchId(e.target.value)}
        />
      </div>
      <OrdersPage handleSetorders={handleSetorders} orders={orders} />
    </div>
  );
};

export default App;
