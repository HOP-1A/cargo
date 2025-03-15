"use client"
import { useState } from "react";


export default function Home() {
  const deliveries =  [
    { id: "DEL-1001", customer: "Acme Corporation", destination: "123 Business Ave, NY", date: "2025-03-12", status: "In Transit", items: 3, weight: "45.2kg" },
    { id: "DEL-1002", customer: "TechSolutions Inc.", destination: "456 Tech Park, SF", date: "2025-03-12", status: "Pending", items: 1, weight: "12.5kg" },
    { id: "DEL-1003", customer: "Global Logistics", destination: "789 Shipping Lane, Miami", date: "2025-03-13", status: "Delivered", items: 5, weight: "78.9kg" },
    { id: "DEL-1004", customer: "Quick Deliveries", destination: "321 Fast Road, Chicago", date: "2025-03-13", status: "Pending", items: 2, weight: "23.7kg" },
  ];

  const [searchQuery, setSearchQuery] = useState("");

  const filteredDeliveries = deliveries.filter(d => {
    return (
      d.id.toLowerCase().includes(searchQuery.toLowerCase()) ||
      d.customer.toLowerCase().includes(searchQuery.toLowerCase()) ||
      d.destination.toLowerCase().includes(searchQuery.toLowerCase()) ||
      d.status.toLowerCase().includes(searchQuery.toLowerCase())
    );
  });

  const totalDeliveries = filteredDeliveries.length;
  const inTransit = filteredDeliveries.filter(d => d.status === "In Transit").length;
  const delivered = filteredDeliveries.filter(d => d.status === "Delivered").length;
  const pending = filteredDeliveries.filter(d => d.status === "Pending").length;

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Cargo Admin</h1>
        <button className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">New Delivery</button>
      </div>


      <div className="mb-6">
        <input
          type="text"
          placeholder="Search deliveries..."
          className="w-full p-2 border rounded"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>

      <div className="grid grid-cols-4 gap-4 mb-6">
        <StatCard title="Total Deliveries" value={totalDeliveries} change="+2.5% from last month" />
        <StatCard title="In Transit" value={inTransit} change="Currently on the road" />
        <StatCard title="Delivered" value={delivered} change="Completed successfully" />
        <StatCard title="Pending" value={pending} change="Requires attention" />
      </div>

      <div className="bg-white p-4 rounded shadow">
        <h2 className="text-xl font-semibold mb-4">Delivery List</h2>
        <table className="w-full border-collapse">
          <thead>
            <tr className="bg-gray-200">
              <th className="p-2 text-left">Ачааны дугаар</th>
              <th className="p-2 text-left">Илгээгчийн нэр</th>
              <th className="p-2 text-left">Илгээгчийн утасны дугаар</th>
              <th className="p-2 text-left">Хүлээн авагчийн нэр</th>
              <th className="p-2 text-left">Хүлээн авагчийн утасны дугаар</th>
              <th className="p-2 text-left">ширхэг</th>
              <th className="p-2 text-left">байдал</th>
              <th className="p-2 text-left">Кг/эзэлхүүн</th>
            </tr>
          </thead>
          <tbody>
            {filteredDeliveries.map((d) => (
              <tr key={d.id} className="border-b">
                <td className="p-2">{d.packageNumber}</td>
                <td className="p-2">{d.senderName}</td>
                <td className="p-2">{d.senderPhoneNumber}</td>
                <td className="p-2">{d.receiverName}</td>
                <td className="p-2">{d.receiverPhoneNumber}</td>
                <td className="p-2">{d.quantity}</td>
                <td className={`p-2 ${getStatusColor(d.status)}`}>{d.status}</td>
                <td className="p-2">{d.weight}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

function StatCard({ title, value, change }) {
  return (
    <div className="bg-white p-4 rounded shadow text-center">
      <h3 className="text-gray-600 text-sm">{title}</h3>
      <p className="text-xl font-bold">{value}</p>
      <p className="text-xs text-gray-500">{change}</p>
    </div>
  );
}

function getStatusColor(status) {
  switch (status) {
    case "In Transit":
      return "text-blue-600";
    case "Pending":
      return "text-yellow-600";
    case "Delivered":
      return "text-green-600";
    default:
      return "text-gray-600";
  }
}
