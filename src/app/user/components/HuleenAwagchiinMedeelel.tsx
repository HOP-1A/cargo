import { Card, CardHeader, CardTitle } from "@/components/ui/card";

export const HuleenAwagchiinMedeelel = () => {
  return (
    <>
      <Card className="py-5 px-8 w-[480px] ">
        <CardTitle className="text-2xl pb-10 text-left">
          Хүлээн авагчийн мэдээлэл
        </CardTitle>
        <div className="flex flex-col space-y-1.5">
          <p>E-Mongolia дугаар</p>
          <input
            type="text"
            className=" border-1 border-gray-300 py-2 px-4 w-[405px] rounded-sm"
            placeholder="asdf"
          />
        </div>
        <div className="flex gap-5">
          <div className="flex flex-col space-y-1.5">
            <p>Овог</p>
            <input
              type="text"
              className=" border-1 border-gray-300 py-2 px-4 w-[192.5px] rounded-sm"
              placeholder="asdf"
            />
          </div>
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
        <div>
          <p className=" text-xl mb-5">Хүлээн авагчийн хаяг</p>
          <div className="flex flex-wrap gap-5">
            <div>
              <p className="mb-2">Аймаг хот</p>
              <select
                name="UlaanBaatar"
                className=" border-1 border-gray-300 py-2 px-4 w-[192.5px] rounded-sm h-10"
                id=""
              >
                <option value="0"></option>
                <option value="1">Монголоос бусад</option>
                <option value="2">Arkhangai</option>
                <option value="3">Vayan-Olgii</option>
                <option value="4">Vayankhongor</option>
                <option value="5">Vulgan</option>
                <option value="6">Ővörkhangai</option>
                <option value="7">Gobi-Altai</option>
                <option value="8">Gobisumber</option>
                <option value="9">Darkhan-Uul</option>
                <option value="10">Dornogovi</option>
                <option value="11">Dornod</option>
                <option value="12">Dundgovi</option>
                <option value="13">Zavkhan </option>
                <option value="14">Umnugovi</option>
                <option value="15">Khentii</option>
                <option value="16">Orkhon</option>
                <option value="16">Sukhbaatar</option>
                <option value="16">Selenge</option>
                <option value="16">Töv</option>
                <option value="16">Uvs</option>
                <option value="16">Ulaanbaatar </option>
                <option value="16">Khövsgöl </option>
                <option value="16">Khovd </option>
              </select>
            </div>
            <div>
              <p className="mb-2">Сум дүүрэг</p>
              <select
                name="UlaanBaatar"
                className=" border-1 border-gray-300 py-2 px-4 w-[192.5px] rounded-sm h-10"
                id=""
              >
                <option value="0"></option>
                <option value="0">Vaganuur</option>
                <option value="0">Bagakhangai</option>
                <option value="0">Vayangol</option>
                <option value="0">Vayanzürkh</option>
                <option value="0">Nalaikh</option>
                <option value="0">Songinokhairkhan</option>
                <option value="0">Sükhbaatar</option>
                <option value="0">Khan-Uul</option>
                <option value="0">Chingeltei</option>
              </select>
            </div>
            <div>
              <p className="mb-2">Баг хороо</p>
              <input
                name="UlaanBaatar"
                className=" border-1 border-gray-300 py-2 px-4 w-[192.5px] rounded-sm h-10"
                id=""
              />
            </div>
            <div>
              <p className="mb-2">
              Байр, гудамж тоот</p>
              <input
                name="UlaanBaatar"
                className=" border-1 border-gray-300 py-2 px-4 w-[192.5px] rounded-sm h-10"
                id=""
              />
            </div>
          </div>
        </div>
      </Card>
    </>
  );
};
