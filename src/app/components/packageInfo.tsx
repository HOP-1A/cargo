"use client";

import { Truck, PackageCheck, PackageOpen, PackageSearch } from "lucide-react";

type Package = {
  destination: string;
  createdAt: string;
  receivedAt: string;
  arrivedAt: string;
  status: string;
};

type PackageInfoProps = {
  packageData: Package | null;
};

const getProgress = (status: string): number => {
  switch (status) {
    case "Pending":
      return 3;
    case "In Transit":
      return 37;
    case "Shipped":
      return 63;
    case "Delivered":
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
      <div>
        <div>
          <div className="overflow-hidden rounded-full bg-gray-200">
            <div
              className="h-2 rounded-full bg-blue-500 "
              style={{ width: `${progressWidth}%` }}
            ></div>
          </div>
          <ol className="mt-4 grid grid-cols-4 text-sm font-medium text-gray-500">
            <li
              className={`flex items-center justify-start text-blue-600 sm:gap-1.5 ${
                progressWidth >= 3 ? "text-blue-600" : "text-gray-200"
              }`}
            >
              <span className="hidden sm:inline"> Pending </span>
              <PackageSearch />
            </li>

            <li
              className={`flex items-center justify-center text-blue-600 sm:gap-1.5 ${
                progressWidth >= 37 ? "text-blue-600" : "text-gray-200"
              }`}
            >
              <span className="hidden sm:inline"> In Transit </span>
              <Truck />
            </li>

            <li
              className={`flex items-center justify-center text-blue-600 sm:gap-1.5 ${
                progressWidth >= 63 ? "text-blue-600" : "text-gray-200"
              }`}
            >
              <span className="hidden sm:inline"> Shipped </span>
              <PackageCheck />
            </li>

            <li
              className={`flex items-center justify-end text-blue-600 sm:gap-1.5 ${
                progressWidth >= 100 ? "text-blue-600" : "text-gray-200"
              }`}
            >
              <span className="hidden sm:inline"> Delivered </span>
              <PackageOpen />
            </li>
          </ol>
        </div>
        <div className="flex justify-center p-4">
          {status === "Pending" && <p>Таны ачааг бүртгэж байна</p>}
          {status === "In Transit" && <p>Таны ачаа замдаа гарсан</p>}
          {status === "Shipped" && <p>Таны ачаа хүлээн авсан</p>}
          {status === "Delivered" && <p>Таны ачаа тараагдсан</p>}
        </div>
      </div>
    </div>
  );
}
