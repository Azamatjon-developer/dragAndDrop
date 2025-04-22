import React, { useState } from "react";
import Navbar from "./components/Navbar";
import OrdersPage from "./components/OrdersPage";
import SearchInput from "./components/SearchInput";
import "./App.css";
import ordersData from "./data/ordersData";

const App = () => {
  const [orders, setOrders] = useState(ordersData);
  const [searchId, setSearchId] = useState("");

  const filteredOrders = searchId.trim()
    ? orders.filter((order) =>
        order.id.toString().includes(searchId.trim())
      )
    : orders;

  const handleSetOrders = (updatedOrders) => {
    setOrders(updatedOrders);
  };

  return (
    <div className="bg-gray-50 min-h-screen">
      <Navbar ordersCount={filteredOrders.length} />
      <SearchInput searchId={searchId} setSearchId={setSearchId} />
      <OrdersPage handleSetorders={handleSetOrders} orders={filteredOrders} />
    </div>
  );
};

export default App;
