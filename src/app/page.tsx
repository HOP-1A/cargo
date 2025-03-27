"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import PackageInfo from "./components/packageInfo";
import Footer from "./components/footer";

export default function HomePage() {
  const [searchValue, setSearchValue] = useState("");
  const [data, setData] = useState(null);

  const search = async () => {
    const jsonData = await fetch("api/package/serial", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ packageNumber: searchValue }),
    })
      .then((res) => res.json())
      .then((res) => {
        if (res.packageData) {
          setData(res.packageData);
        } else {
          alert("Ачаа олдсонгүй");
          setData(null);
        }
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  useEffect(() => {}, [data]);

  return (
    <div
      className="whiteheader flex-center flex-column h-[75dvh]"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1587149185211-28a2ef4c9a10?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <h1 className="h1-text text-white"> Эрээн, Эрдэнэт</h1>
      <h1>
        <span className="rainbow-text">Тээвэр үйлчилгээ</span>
      </h1>
      <div className="flex justify-center items-center w-full">
        <Input
          placeholder="Кодоор хайх..."
          className="w-[500px] mb-6 px-4 py-2 text-black bg-white rounded-full shadow-md border-2 border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-all duration-300 ease-in-out hover:shadow-lg"
          onChange={(e) => setSearchValue(e.target.value)}
        />
        <Button
          onClick={search}
          className="hover:brightness-110 mb-6 hover:bg-indigo-600 hover:scale-105 font-bold py-3 px-6 rounded-full bg-indigo-500 shadow-lg shadow-indigo-500/50 text-white transition-all duration-300"
        >
          Search
        </Button>
      </div>

      <div className="max-w-[500px] w-[100%]">
        {data ? <PackageInfo packageData={data}></PackageInfo> : <p></p>}
      </div>

      <div className="flexrow gap-8">
        <Link href={"/instructions.php"}>
          <Button className="cursor-pointer text-white font-bold relative text-[14px] w-[9em] h-[2.5em] text-center bg-gradient-to-r from-violet-500 from-10% via-sky-500 via-30% to-pink-500 to-90% bg-[length:400%] rounded-[30px] z-10 hover:animate-gradient-xy hover:bg-[length:100%] before:content-[''] before:absolute before:-top-[5px] before:-bottom-[5px] before:-left-[5px] before:-right-[5px] before:bg-gradient-to-r before:from-violet-500 before:from-10% before:via-sky-500 before:via-30% before:to-pink-500 before:bg-[length:400%] before:-z-10 before:rounded-[35px] before:hover:blur-xl before:transition-all before:ease-in-out before:duration-[1s] before:hover:bg-[length:10%] active:bg-violet-700 focus:ring-violet-700 hover:brightness-110 hover:-translate-y-[1px] hover:border-b-[6px] active:border-b-[2px] active:brightness-90 active:translate-y-[2px]">
            Заавар
          </Button>
        </Link>
        <Link href={"/tootsooluur"}>
          <Button className="cursor-pointer text-white font-bold relative text-[14px] w-[9em] h-[2.5em] text-center bg-gradient-to-r from-violet-500 from-10% via-sky-500 via-30% to-pink-500 to-90% bg-[length:400%] rounded-[30px] z-10 hover:animate-gradient-xy hover:bg-[length:100%] before:content-[''] before:absolute before:-top-[5px] before:-bottom-[5px] before:-left-[5px] before:-right-[5px] before:bg-gradient-to-r before:from-violet-500 before:from-10% before:via-sky-500 before:via-30% before:to-pink-500 before:bg-[length:400%] before:-z-10 before:rounded-[35px] before:hover:blur-xl before:transition-all before:ease-in-out before:duration-[1s] before:hover:bg-[length:10%] active:bg-violet-700 focus:ring-violet-700 hover:brightness-110 hover:-translate-y-[1px] hover:border-b-[6px] active:border-b-[2px] active:brightness-90 active:translate-y-[2px]">
            Тооцоолуур
          </Button>
        </Link>
      </div>
      <Footer />
    </div>
  );
}
