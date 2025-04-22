import React from "react";

const statusColors = {
  new: "bg-emerald-50 text-emerald-600 border-emerald-200",
  preparing: "bg-amber-50 text-amber-600 border-amber-200",
  ready: "bg-green-50 text-green-600 border-green-200",
  on_the_way: "bg-blue-50 text-blue-600 border-blue-200",
};

const statusIcons = {
  new: (
    <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
      <path
        fillRule="evenodd"
        d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z"
        clipRule="evenodd"
      />
    </svg>
  ),
  preparing: (
    <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
      <path
        fillRule="evenodd"
        d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z"
        clipRule="evenodd"
      />
    </svg>
  ),
  ready: (
    <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
      <path
        fillRule="evenodd"
        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
        clipRule="evenodd"
      />
    </svg>
  ),
  on_the_way: (
    <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
      <path d="M8 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM15 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" />
      <path d="M3 4a1 1 0 00-1 1v10a1 1 0 001 1h1.05a2.5 2.5 0 014.9 0H10a1 1 0 001-1v-1a1 1 0 011-1h2a1 1 0 011 1v1a1 1 0 001 1h1.05a2.5 2.5 0 014.9 0H19a1 1 0 001-1V5a1 1 0 00-1-1H3zM3 5h2v2.5a1.5 1.5 0 003 0V5h4v2.5a1.5 1.5 0 003 0V5h2v10h-1.5a2.5 2.5 0 00-4.9 0H5.5a2.5 2.5 0 00-4.9 0H3V5z" />
    </svg>
  ),
};

const statusLabels = {
  new: "Новый",
  preparing: "Готовится",
  ready: "Готов",
  on_the_way: "В пути",
};

const OrderCard = ({ order }) => {
  return (
    <div className="bg-white p-5 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-200">
      <div className="flex justify-between items-start mb-3">
        <div>
          <h4 className="font-semibold text-lg text-gray-800">{order.title}</h4>
          <p className="text-sm text-gray-500 mt-1">ID: {order.id}</p>
        </div>
        <span
          className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium border ${
            statusColors[order.status]
          }`}
        >
          {statusIcons[order.status]}
          {statusLabels[order.status]}
        </span>
      </div>

      <div className="space-y-2.5">
        <div className="flex items-center text-sm">
          <svg
            className="w-4 h-4 mr-2 text-emerald-500"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path
              fillRule="evenodd"
              d="M4 4a2 2 0 00-2 2v4a2 2 0 002 2V6h10a2 2 0 00-2-2H4zm2 6a2 2 0 012-2h8a2 2 0 012 2v4a2 2 0 01-2 2H8a2 2 0 01-2-2v-4zm6 4a2 2 0 100-4 2 2 0 000 4z"
              clipRule="evenodd"
            />
          </svg>
          <span className="text-gray-600">
            <span className="font-medium text-gray-700">
              {order.price.toLocaleString()}
            </span>{" "}
            so'm
          </span>
        </div>

        <div className="flex items-center text-sm">
          <svg
            className="w-4 h-4 mr-2 text-emerald-500"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path
              fillRule="evenodd"
              d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z"
              clipRule="evenodd"
            />
          </svg>
          <span className="text-gray-600">{order.time}</span>
        </div>

        <div className="flex items-center text-sm">
          <svg
            className="w-4 h-4 mr-2 text-emerald-500"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path
              fillRule="evenodd"
              d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
              clipRule="evenodd"
            />
          </svg>
          <span className="text-gray-600">{order.customer}</span>
        </div>

        <div className="pt-2 mt-2 border-t border-gray-100">
          <div className="flex items-start text-sm">
            <svg
              className="w-4 h-4 mr-2 text-emerald-500 mt-0.5"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z" />
              <path
                fillRule="evenodd"
                d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 4a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 000 2h3a1 1 0 100-2h-3zm-3 4a1 1 0 100 2h.01a1 1 0 100-2H7zm3 0a1 1 0 100 2h3a1 1 0 100-2h-3z"
                clipRule="evenodd"
              />
            </svg>
            <div>
              <p className="font-medium text-gray-700 mb-1">Buyurtma:</p>
              <ul className="list-disc list-inside text-gray-600 space-y-1">
                {order.items.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderCard;