import { Card, CardTitle } from "@/components/ui/card";
import { useState } from "react";

export const IlgeegchiinMedeelel = ({
  ilgeegchiinNer,
  setIlgeegchiinNer,
  ilgeegchiinDugaar,
  setIlgeegchiinDugaar,
  isIlgeegchiinNerEmpty,
  isIlgeegchiinDugaarEmpty,
  setisIlgeegchiinNerEmpty,
  setisIlgeegchiinDugaarEmpty,
}: {
  ilgeegchiinNer: string;
  setIlgeegchiinNer: (ner: string) => void;
  ilgeegchiinDugaar: string;
  setIlgeegchiinDugaar: (dugaar: string) => void;
  isIlgeegchiinNerEmpty: boolean;
  isIlgeegchiinDugaarEmpty: boolean;
  setisIlgeegchiinNerEmpty: (boolean: boolean) => void;
  setisIlgeegchiinDugaarEmpty: (boolean: boolean) => void;
}) => {
  return (
    <>
      <Card className="py-10 px-8 w-[465px] h-full">
        <CardTitle className=" text-left text-2xl pb-5">
          Илгээгчийн мэдээлэл
        </CardTitle>
        <div className="flex ">
          <div className="flex flex-col space-y-1.5"></div>
          <div className="flex flex-col space-y-1.5">
            <p>Нэр</p>
            <input
              type="text"
              className=" border-1 border-gray-300 py-2 px-4 w-[192.5px] rounded-sm"
              placeholder="asdf"
              value={ilgeegchiinNer}
              onChange={(e) => {
                if (ilgeegchiinNer !== "") setisIlgeegchiinNerEmpty(false);
                setIlgeegchiinNer(e.target.value);
              }}
            />
            {isIlgeegchiinNerEmpty && (
              <p className="text-red-500">*хоосон байж болохгүй</p>
            )}
          </div>
        </div>
        <div className="flex flex-col space-y-1.5">
          <p>Утасны дугаар</p>
          <input
            type="number"
            className=" border-1 border-gray-300 py-2 px-4 w-[405px] rounded-sm"
            placeholder="12345678"
            value={ilgeegchiinDugaar}
            maxLength={9}
            onChange={(e) => {
              if(ilgeegchiinDugaar!=="")setisIlgeegchiinDugaarEmpty(false)
              setIlgeegchiinDugaar(e.target.value);
            }}
          />
          {isIlgeegchiinDugaarEmpty && (
            <p className="text-red-500">*хоосон байж болохгүй</p>
          )}
        </div>
      </Card>
    </>
  );
};
