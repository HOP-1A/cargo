import { Card, CardTitle } from "@/components/ui/card";

export const HuleenAwagchiinMedeelel = ({
  awagchiinNer,
  awagchiinDugaar,
  setAwagchiinNer,
  setawagchiinDugaar,
  isAwagchiinDugaarEmpty,
  setisAwagchiinNerEmpty,
  setisAwagchiinDugaarEmpty,
  isAwagchiinNerEmpty,
}: {
  awagchiinNer: string;
  awagchiinDugaar: string;
  setAwagchiinNer: (ner: string) => void;
  setawagchiinDugaar: (dugaar: string) => void;
  isAwagchiinDugaarEmpty: boolean;
  setisAwagchiinNerEmpty: (p: boolean) => void;
  setisAwagchiinDugaarEmpty: (p: boolean) => void;
  isAwagchiinNerEmpty: boolean;
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
              onChange={(e) => {
                if (awagchiinNer !== "") setisAwagchiinNerEmpty(false);
                setAwagchiinNer(e.target.value);
              }}
            />
            {isAwagchiinNerEmpty && (
              <p className="text-red-500">хоосон байж болохгүй</p>
            )}
          </div>
        </div>
        <div className="flex flex-col space-y-1.5">
          <p>Утасны дугаар</p>
          <input
            type="number"
            className=" border-1 border-gray-300 py-2 px-4 w-[405px] rounded-sm"
            placeholder="12345678"
            value={awagchiinDugaar}
            onChange={(e) => {
              if (awagchiinDugaar !== "") setisAwagchiinDugaarEmpty(false);
              setawagchiinDugaar(e.target.value);
            }}
          />
          {isAwagchiinDugaarEmpty && (
            <p className="text-red-500">хоосон байж болохгүй</p>
          )}
        </div>
      </Card>
    </>
  );
};
