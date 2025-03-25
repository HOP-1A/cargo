import React from "react";
import { IlgeegchiinMedeelel } from "./IlgeegchiinMedeelel";
import { HuleenAwagchiinMedeelel } from "./HuleenAwagchiinMedeelel";

const PackageForm = () => {
  return (
    <div className="flex justify-around items-center px-75">
      <div className="w-[465px] h-[306px] bg-white shadow-md rounded-lg p-6">
        <h2 className="text-2xl font-semibold">Package нэмэх</h2>
        <div className="mt-4">
          <h3 className="text-lg font-medium">Үндсэн мэдээлэл</h3>
          <div className="mt-4">
            <label className="block text-sm font-medium">Төрөл</label>
            <select className="border p-2 rounded w-full">
              <option>Aгаар</option>
              <option>Газар</option>
            </select>
          </div>

          <div className="mt-4">
            <label className="block text-sm font-medium">
              Илгээмжийн тайлбар
            </label>
           <textarea name=""  className="border p-2 rounded w-full" id=""></textarea>
          </div>
        </div>
      </div>
      <HuleenAwagchiinMedeelel/>
      <IlgeegchiinMedeelel/>
    </div>
  );
};

export default PackageForm;
