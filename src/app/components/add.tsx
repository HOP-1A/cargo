import React, { useState } from "react";
import { IlgeegchiinMedeelel } from "./IlgeegchiinMedeelel";
import { HuleenAwagchiinMedeelel } from "./HuleenAwagchiinMedeelel";
import { MainInfo } from "./MainInfo";

const PackageForm = ({
  selected,
  setSelected,
}: {
  selected: string;
  setSelected: (selected: string) => void;
}) => {
  const [awagchiinNer, setAwagchiinNer] = useState("");
  const [awagchiinDugaar, setawagchiinDugaar] = useState("");
  const [ilgeegchiinNer, setIlgeegchiinNer] = useState("");
  const [ilgeegchiinDugaar, setIlgeegchiinDugaar] = useState("");
  const [category, setCategory] = useState('Agaar')
  const [desc, setDesc] = useState("")
  return (
    <div>
      <h3 className="text-[1.8rem] font-semibold m-5 mb-[50px]">
        Package нэмэх
      </h3>
      <div className="flex justify-center gap-[50px] items-center">
        <MainInfo category={category} setCategory={setCategory} desc={desc} setDesc={setDesc} />
        <IlgeegchiinMedeelel
          ilgeegchiinNer={ilgeegchiinNer}
          setIlgeegchiinNer={setIlgeegchiinNer}
          ilgeegchiinDugaar={ilgeegchiinDugaar}
          setIlgeegchiinDugaar={setIlgeegchiinDugaar}
        />
        <HuleenAwagchiinMedeelel
          awagchiinNer={awagchiinNer}
          awagchiinDugaar={awagchiinDugaar}
          setAwagchiinNer={setAwagchiinNer}
          setawagchiinDugaar={setawagchiinDugaar}
        />
      </div>
      <div className=" mt-12 flex gap-1 justify-center">
        <button className="bg-blue-800 font-semibold py-[10px] px-5 rounded-sm text-[14.4px] text-white cursor-pointer" >
          Нэмэх
        </button>
        <button
          className="bg-gray-400 font-semibold py-[10px] px-5 rounded-sm text-[14.4px] text-white cursor-pointer"
          onClick={() => setSelected("displayPackage")}
        >
          Болих
        </button>
      </div>
    </div>
  );
};

export default PackageForm;
