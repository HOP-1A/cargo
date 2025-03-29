import { Card, CardTitle } from "@/components/ui/card";

export const HuleenAwagchiinMedeelel = () => {
  return (
    <>
      <Card className="py-5 px-8 w-[480px] h-full ">
        <CardTitle className="text-2xl pb-10 text-left">
          Хүлээн авагчийн мэдээлэл
        </CardTitle>
        <div className="flex gap-5">
          <div className="flex flex-col space-y-1.5">
            <p>Нэр</p>
            <input
              type="text"
              className=" border-1 border-gray-300 py-2 px-4 w-[192.5px] rounded-sm"
              placeholder="asdf"
            />
          </div>
        </div>
        <div className="flex flex-col space-y-1.5">
          <p>Утасны дугаар</p>
          <input
            type="text"
            className=" border-1 border-gray-300 py-2 px-4 w-[405px] rounded-sm"
            placeholder="asdf"
          />
        </div>
      </Card>
    </>
  );
};
