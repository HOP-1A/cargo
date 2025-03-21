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
  const [data, setData] = useState(null); 

  const search = async () => {
    const jsonData = await fetch('api/package/serial', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ packageNumber: searchValue })
    })
    .then(res => res.json())
    .then(res => {
      if (res.packageData) {
        setData(res.packageData);
      } else {
        alert('Ачаа олдсонгүй'); 
        console.log(res)
        setData(null);
      }
    })
    .catch(error => {
      console.error('Error:', error);
    });
  }

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
        <Button onClick={search} className="cursor-pointer h-[40px] rounded-l-none bg-blue-600">Search</Button>
      </div>
      
      <div>
        {data ? (
          <PackageInfo packageData={data}></PackageInfo>
        ) : (
          <p></p>
        )}
      </div>

      <div className="flexrow">
        <Link href={"/instructions.php"}>
          <Button className="button1 cursor-pointer bg-blue-600">Заавар</Button>
        </Link>
        <Link href={"/tootsooluur"}>
          <Button className="button2 cursor-pointer">Тооцоолуур</Button>
        </Link>
      </div>
      <Footer/>
    </div>
  );
}
