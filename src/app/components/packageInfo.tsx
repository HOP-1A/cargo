'use client'

type Package = {
    id: string;
    packageNumber: string;
    senderName: string;
    senderPhoneNumber: string;
    receiverName: string;
    receiverPhoneNumber: string;
    quantity: number;
    weight: number;
    volume: number;
    cost: number;
    status: string;
    userId: string | null;
    destination: string;
    updatedAt: string;
    createdAt: string;
  }
  
  interface PackageInfoProps {
    packageData: Package | null; // Define the type of the prop here
  }

export default function PackageInfo({ packageData }: PackageInfoProps) {
    if (!packageData) {
      return null; // If no packageData, return nothing (you can also render a fallback UI)
    }
  
    return (
      <div className="package-info">
        <h3>Package Number: {packageData.packageNumber}</h3>
        <p><strong>Sender Name:</strong> {packageData.senderName}</p>
        <p><strong>Sender Phone Number:</strong> {packageData.senderPhoneNumber}</p>
        <p><strong>Receiver Name:</strong> {packageData.receiverName}</p>
        <p><strong>Receiver Phone Number:</strong> {packageData.receiverPhoneNumber}</p>
        <p><strong>Quantity:</strong> {packageData.quantity}</p>
        <p><strong>Weight:</strong> {packageData.weight} kg</p>
        <p><strong>Volume:</strong> {packageData.volume} m³</p>
        <p><strong>Cost:</strong> {packageData.cost} USD</p>
        <p><strong>Status:</strong> {packageData.status}</p>
        <p><strong>Destination:</strong> {packageData.destination}</p>
        <p><strong>Last Updated:</strong> {packageData.updatedAt}</p>
        <p><strong>Created At:</strong> {packageData.createdAt}</p>
      </div>
    );
  }