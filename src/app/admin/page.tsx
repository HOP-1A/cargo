
"use client";
import { useState, useEffect } from "react";
import { DropdownMenuRadioGroupDemo } from "../components/dropdown";
export default function Home() {
  const [deliveries, setDeliveries] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchDeliveries = async () => {
      try {
        const response = await fetch('api/package', {
          method: 'GET',
        });

        const data = await response.json();
        setDeliveries(data.packages);
        setIsLoading(false);
      } catch (err) {
        setError("Failed to load deliveries.");
        setIsLoading(false);
      }
    };

    fetchDeliveries();
  }, []);

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gray-50 p-6 flex items-center justify-center">
        <div className="text-xl font-semibold text-gray-600">Loading deliveries...</div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-gray-50 p-6 flex items-center justify-center">
        <div className="text-xl font-semibold text-red-600">{error}</div>
      </div>
    );
  }

  const filteredDeliveries = deliveries.filter(d => {
    return (
      d.packageNumber?.toLowerCase().includes(searchQuery.toLowerCase()) ||
      d.senderName?.toLowerCase().includes(searchQuery.toLowerCase()) ||
      d.senderPhoneNumber?.toLowerCase().includes(searchQuery.toLowerCase()) ||
      d.status?.toLowerCase().includes(searchQuery.toLowerCase())
    );
  });

  const totalDeliveries = filteredDeliveries.length;
  const inTransit = filteredDeliveries.filter(d => d.status === "In Transit").length;
  const delivered = filteredDeliveries.filter(d => d.status === "Delivered").length;
  const pending = filteredDeliveries.filter(d => d.status === "Pending").length;

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold text-gray-800">Cargo Admin</h1>
        <button className="px-6 py-3 bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-700 transition-all duration-300">
          New Delivery
        </button>
      </div>

      <div className="mb-6">
        <input
          type="text"
          placeholder="Search deliveries..."
          className="w-full p-3 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mb-6">
        <StatCard title="Total Deliveries" value={totalDeliveries} change="+2.5% from last month" />
        <StatCard title="In Transit" value={inTransit} change="Currently on the road" />
        <StatCard title="Delivered" value={delivered} change="Completed successfully" />
        <StatCard title="Pending" value={pending} change="Requires attention" />
      </div>

      <div className="bg-white p-6 rounded-lg shadow-lg">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">Delivery List</h2>
        <table className="w-full border-collapse">
          <thead>
            <tr className="bg-gray-100">
              <th className="p-4 text-left text-gray-600">Ачааны дугаар</th>
              <th className="p-4 text-left text-gray-600">Илгээгчийн нэр</th>
              <th className="p-4 text-left text-gray-600">Илгээгчийн утасны дугаар</th>
              <th className="p-4 text-left text-gray-600">Хүлээн авагчийн нэр</th>
              <th className="p-4 text-left text-gray-600">Хүлээн авагчийн утасны дугаар</th>
              <th className="p-4 text-left text-gray-600">ширхэг</th>
              <th className="p-4 text-left text-gray-600">байдал</th>
              <th className="p-4 text-left text-gray-600">Кг/эзэлхүүн</th>
              <th className="p-4 text-left text-gray-600">статус</th>
            </tr>
          </thead>
          <tbody>
            {filteredDeliveries.map((d) => (
              <tr key={d.id} className="border-b hover:bg-gray-50 transition-all duration-300">
                <td className="p-4">{d.packageNumber}</td>
                <td className="p-4">{d.senderName}</td>
                <td className="p-4">{d.senderPhoneNumber}</td>
                <td className="p-4">{d.receiverName}</td>
                <td className="p-4">{d.receiverPhoneNumber}</td>
                <td className="p-4">{d.quantity}ш</td>
                <td className={`p-4 ${getStatusColor(d.status)}`}>{d.status}</td>
                <td className="p-4">{d.weight}Кг</td>
                <DropdownMenuRadioGroupDemo />
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
    <div className="bg-white p-6 rounded-lg shadow-lg text-center">
      <h3 className="text-gray-600 text-lg">{title}</h3>
      <p className="text-2xl font-semibold text-gray-800">{value}</p>
      <p className="text-sm text-gray-500">{change}</p>
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
