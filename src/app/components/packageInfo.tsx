'use client';

type Package = {
  destination: string;
  createdAt: string;
  receivedAt: string;
  arrivedAt: string;
  status: string;
};

interface PackageInfoProps {
  packageData: Package | null; // Define the type of the prop here
}

// Helper function to format the date
const formatDate = (dateString: string) => {
  const date = new Date(dateString);
  return date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
  });
};

export default function PackageInfo({ packageData }: PackageInfoProps) {
  if (!packageData) {
    return (
      <div className="flex justify-center items-center py-8">
        <p className="text-lg text-gray-500">Loading package data...</p>
      </div>
    );
  }

  return (
    <div className="bg-white p-6 rounded-lg shadow-md max-w-lg mx-auto">
      <div className="space-y-4">
        <p className="text-lg font-semibold">
          <span className="font-bold">Status:</span> {packageData.status}
        </p>
        <p className="text-lg font-semibold">
          <span className="font-bold">Destination:</span> {packageData.destination}
        </p>
        <p className="text-lg font-semibold">
          <span className="font-bold">Created At:</span> {formatDate(packageData.createdAt)}
        </p>
        <p className="text-lg font-semibold">
          <span className="font-bold">Arrived At:</span> {formatDate(packageData.arrivedAt)}
        </p>
        <p className="text-lg font-semibold">
          <span className="font-bold">Received At:</span> {packageData.receivedAt ? formatDate(packageData.receivedAt) : 'N/A'}
        </p>
      </div>
    </div>
  );
}
  