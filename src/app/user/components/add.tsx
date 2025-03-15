import React from "react";

const PackageForm = () => {
  return (
    <div className="w-[950px] h-[452px] bg-white shadow-md rounded-lg p-6">
      <h2 className="text-2xl font-semibold">Package нэмэх</h2>
      <div className="mt-4">
        <h3 className="text-lg font-medium">Үндсэн мэдээлэл</h3>

   
        <div className="mt-4 flex gap-4">
          <label>Тэгбэ код</label>
<select className="border p-2 rounded flex-1">
<option value="blank"></option>
    <option value="CJ Logistics CJ대한통운">CJ Logistics CJ대한통운</option>
    <option value="Logen 로젠택배">Logen 로젠택배</option>
    <option value="Korea Post 우체국택배">Korea Post 우체국택배</option>
    <option value="Lotte Global Logistics 롯데택배">Lotte Global Logistics 롯데택배</option>
    <option value="Hanjin Express 한진택배">Hanjin Express 한진택배</option>
    <option value="GS postbox">GS postbox</option>
    <option value="COUPANG">COUPANG</option>
    <option value="Costco Wholesale Sangbong">Costco Wholesale Sangbong</option>
    <option value="경동택배 / Kyungdong Courier">경동택배 / Kyungdong Courier</option>
</select>

            
       
          <input
            type="text"
            className="border p-2 rounded flex-1"
            placeholder="КОД"
          />
        </div>

    
        <div className="mt-4">
          <label className="block text-sm font-medium">Төрөл</label>
          <select className="border p-2 rounded w-full">
            <option>Aгаар</option>
            <option>Газар</option>
          </select>
        </div>

             <div className="mt-4">
          <label className="block text-sm font-medium">Илгээмжийн тайлбар</label>
          <input
            type="text"
            className="border p-2 rounded w-full"
            placeholder=""
          />
        </div>

     
        <div className="mt-4">
          <label className="block text-sm font-medium">Илгээмж авах салбар</label>
          <select className="border p-2 rounded w-full">
          <option value="blank"></option>
          <option>0.УБ-Гараас гарт хүргэлт Хот доторх болон 21 аймаг</option>
          <option>1.УБ 13-р хороолол  ШҮГ салбараас очиж авах</option>
          <option>2.УБ 3,4-р хороолол Өргөө ШҮГ салбараас очиж авах</option>
          <option>2.УБ Сансар ШҮГ салбараас очиж авах (Зогсоолтой)</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default PackageForm;
