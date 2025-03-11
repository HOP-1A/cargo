"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function HomePage() {
  return (
    <div className="whiteheader flex-center flex-column">
       <h1 className="h1-text"> Эрээн, Эрдэнэт</h1>
      <h1>
        <span className="rainbow-text">Тээвэр үйлчилгээ</span>
      </h1>
      <Input placeholder="Утас болон кодоор хайх..." className="search-input"/>
      <div className="flexrow">
        <Button className="button1">Заавар</Button>
        <Button className="button2">Тооцоолуур</Button>
      </div>
    </div>
  );
}