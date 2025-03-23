'use client';

type Package = {
  destination: string;
  createdAt: string;
  receivedAt: string;
  arrivedAt: string;
  status: string;
};

interface PackageInfoProps {
  packageData: Package | null;
}

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

// Function to calculate progress percentage based on status
const getProgress = (status: string): number => {
  switch (status) {
    case 'Pending':
      return 25;
    case 'In Transit':
      return 50;
    case 'Shipped':
      return 75;
    case 'Delivered':
      return 100;
    default:
      return 0;
  }
};

export default function PackageInfo({ packageData }: PackageInfoProps) {
  if (!packageData) {
    return (
      <div className="flex justify-center items-center py-8">
        <p className="text-lg text-gray-500">Loading package data...</p>
      </div>
    );
  }

  const { status } = packageData;
  const progressWidth = getProgress(status);

  return (
    <div className="bg-white p-6 rounded-lg shadow-md mx-auto m-4 w-[100%]">
      <div className="space-y-4">
        <div className="relative w-full mt-3">
          <div className="w-full bg-gray-200 h-1 rounded-full">
            <div
              className="h-1 bg-black rounded-full"
              style={{ width: `${progressWidth}%` }}
            ></div>
          </div>
          <div className="flex justify-between text-xs text-gray-500 mt-1">
            <span className={status === 'Processing' ? 'text-orange-600 font-semibold' : ''}>Processing</span>
            <span className={status === 'Preparing to ship' ? 'text-orange-600 font-semibold' : ''}>Preparing to ship</span>
            <span className={status === 'Shipped' ? 'text-orange-600 font-semibold' : ''}>Shipped</span>
            <span className={status === 'Delivered' ? 'text-orange-600 font-semibold' : ''}>Delivered</span>
          </div>
        </div>
        <div>
          <p><strong>Destination:</strong> {packageData.destination}</p>
          <p><strong>Created At:</strong> {formatDate(packageData.createdAt)}</p>
          <p><strong>Received At:</strong> {formatDate(packageData.receivedAt)}</p>
          <p><strong>Arrived At:</strong> {formatDate(packageData.arrivedAt)}</p>
        </div>
      </div>
    </div>
  );
}
