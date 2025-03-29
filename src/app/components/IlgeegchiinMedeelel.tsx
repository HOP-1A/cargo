import { Card, CardTitle } from "@/components/ui/card";

export const IlgeegchiinMedeelel = ({
  ilgeegchiinNer,
  setIlgeegchiinNer,
  ilgeegchiinDugaar,
  setIlgeegchiinDugaar,
}: {
  ilgeegchiinNer: string;
  setIlgeegchiinNer: (ner: string) => void;
  ilgeegchiinDugaar: string;
  setIlgeegchiinDugaar: (dugaar: string) => void;
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
              onChange={(e) => setIlgeegchiinNer(e.target.value)}
            />
          </div>
        </div>
        <div className="flex flex-col space-y-1.5">
          <p>Утасны дугаар</p>
          <input
            type="number"
            className=" border-1 border-gray-300 py-2 px-4 w-[405px] rounded-sm"
            placeholder="12345678"
            value={ilgeegchiinDugaar}
            onChange={(e) => setIlgeegchiinDugaar(e.target.value)}
          />
        </div>
      </Card>
    </>
  );
};
