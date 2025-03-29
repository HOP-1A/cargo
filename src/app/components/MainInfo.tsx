import { Card, CardTitle } from "@/components/ui/card";

export const MainInfo = ({
  category,
  desc,
  setCategory,
  setDesc,
}: {
  category: string;
  desc: string;
  setCategory: (option: string) => void;
  setDesc: (value: string) => void;
}) => {
  return (
    <Card className="py-10 px-8 w-[480px] h-full ">
      <CardTitle className="text-2xl pb-5 text-left">Үндсэн мэдээлэл</CardTitle>
      <div>
        <p className="mb-[6px]">Төрөл</p>
        <select className="border p-2 rounded w-[192.5px] h-10" value={category} onChange={(e)=>setCategory(e.target.value)}>
          <option value="Agaar">Aгаар</option>
          <option value="Gazar">Газар</option>
        </select>
      </div>
      <div>
        <p className="mb-[6px]">Илгээмжийн тайлбар</p>
        <textarea
          name=""
          className="border p-2 rounded w-full"
          id=""
          value={desc} onChange={(e)=>setDesc(e.target.value)}
        ></textarea>
      </div>
    </Card>
  );
};
