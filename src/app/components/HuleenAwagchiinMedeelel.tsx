import { Card, CardTitle } from "@/components/ui/card";

export const HuleenAwagchiinMedeelel = ({
  awagchiinNer,
  awagchiinDugaar,
  setAwagchiinNer,
  setawagchiinDugaar,
}: {
  awagchiinNer: string;
  awagchiinDugaar: string;
  setAwagchiinNer: (ner: string) => void;
  setawagchiinDugaar: (dugaar: string) => void;
}) => {
  return (
    <>
      <Card className="py-10 px-8 w-[480px] h-full ">
        <CardTitle className="text-2xl pb-5 text-left">
          Хүлээн авагчийн мэдээлэл
        </CardTitle>
        <div className="flex gap-5">
          <div className="flex flex-col space-y-1.5">
            <p>Нэр</p>
            <input
              type="text"
              className=" border-1 border-gray-300 py-2 px-4 w-[192.5px] rounded-sm"
              placeholder="asdf"
              value={awagchiinNer}
              onChange={(e) => setAwagchiinNer(e.target.value)}
            />
          </div>
        </div>
        <div className="flex flex-col space-y-1.5">
          <p>Утасны дугаар</p>
          <input
            type="number"
            className=" border-1 border-gray-300 py-2 px-4 w-[405px] rounded-sm"
            placeholder="12345678"
            value={awagchiinDugaar}
            onChange={(e) => setawagchiinDugaar(e.target.value)}
          />
        </div>
      </Card>
    </>
  );
};
