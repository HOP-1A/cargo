"use client";
import { useState, useEffect } from "react";

export default function Home() {
  const [deliveries, setDeliveries] = useState(""); // Default to empty array
  const [searchQuery, setSearchQuery] = useState("");
  const [isLoading, setIsLoading] = useState(true); // Loading state
  const [error, setError] = useState(null); // Error state


  useEffect(() => {
    const fetchDeliveries = async () => {
      try {
        const response = await fetch('api/package', {
          method: 'GET',
        });
        
        const data = await response.json();
        console.log("Fetched data:", data); // Log the response data for debugging

        // Ensure the data is an array
      
          setDeliveries(data.packages);
      

        setIsLoading(false); // Set loading to false after data is fetched
      } catch (err) {
        console.error("Error fetching deliveries:", err);
        setError("Failed to load deliveries.");
        setIsLoading(false);
      }
    };

    fetchDeliveries();
  }, []);

  // If still loading, show loading indicator or prevent filtering
  if (isLoading) {
    return (
      <div className="min-h-screen bg-gray-100 p-6">
        <div>Loading deliveries...</div>
      </div>
    );
  }

  // If there's an error, show the error message
  if (error) {
    return (
      <div className="min-h-screen bg-gray-100 p-6">
        <div>{error}</div>
      </div>
    );
  }

  // Now that we are sure deliveries is an array, filter it
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
                <td className="p-2">{d.quantity}ш</td>
                <td className={`p-2 ${getStatusColor(d.status)}`}>{d.status}</td>
                <td className="p-2">{d.weight}Кг</td>
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
