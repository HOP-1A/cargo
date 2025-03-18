"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Link from "next/link";

export default function HomePage() {
  return (
    <div className="whiteheader flex-center flex-column mt-[100px]">
      <h1 className="h1-text"> Эрээн, Эрдэнэт</h1>
      <h1>
        <span className="rainbow-text">Тээвэр үйлчилгээ</span>
      </h1>
      <Input placeholder="Утас болон кодоор хайх..." className="search-input" />
      <div className="flexrow">
        <Link href={"/instructions.php"}>
          <Button className="button1 cursor-pointer">Заавар</Button>
        </Link>
        <Link href={"/tootsooluur"}>
          <Button className="button2 cursor-pointer">Тооцоолуур</Button>
        </Link>
      </div>
    </div>
  );
}
