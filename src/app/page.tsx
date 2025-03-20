"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import PackageInfo from "./components/packageInfo";
import Footer from "./components/footer";

export default function HomePage() {
  const router = useRouter();

  const [searchValue, setSearchValue] = useState('');  
  const [data, setData] = useState(null); // Initialize as null to handle the case where no data is returned

  // search function to fetch the data
  const search = async () => {
    const jsonData = await fetch('api/package/serial', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json', // Ensure the request is sent as JSON
      },
      body: JSON.stringify({ packageNumber: searchValue }) // Correct body format
    })
    .then(res => res.json())
    .then(res => {
      if (res.packages) {
        setData(res.packages); // Update with the 'packages' object
      } else {
        alert('Ачаа олдсонгүй'); // Show error if package not found
        setData(null); // Reset data
      }
    })
    .catch(error => {
      console.error('Error:', error);
    });
  }

  // useEffect hook to log data after it is updated
  useEffect(() => {
  }, [data]);

  return (
    <div className="whiteheader flex-center flex-column mt-[100px]">
      <h1 className="h1-text"> Эрээн, Эрдэнэт</h1>
      <h1>
        <span className="rainbow-text">Тээвэр үйлчилгээ</span>
      </h1>
      <div className="flex w-[100%] flex-center">
        <Input placeholder="Кодоор хайх..." className="search-input" onChange={(e) => setSearchValue(e.target.value)} />
        <Button onClick={search}>Search</Button>
      </div>
      
      <div>
        {data ? (
          <PackageInfo packageData={data}></PackageInfo>
        ) : (
          <p>No data available</p> // Show this if there's no data
        )}
      </div>

      <div className="flexrow">
        <Link href={"/instructions.php"}>
          <Button className="button1 cursor-pointer">Заавар</Button>
        </Link>
        <Link href={"/tootsooluur"}>
          <Button className="button2 cursor-pointer">Тооцоолуур</Button>
        </Link>
      </div>
      <Footer/>
    </div>
  );
}
