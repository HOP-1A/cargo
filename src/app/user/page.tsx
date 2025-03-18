'use client'
import PackageForm from "./components/ilgeemj"
import UserInfo from "./components/userinfo";
import { useState } from "react";
import Link from "next/link";


const Page = () => {
  const [username, setUsername] = useState("UserEndBn");
  const [selected, setSelected] = useState("");

  return (
    <div className="flex justify-center items-center h-[60vh] gap-[50px]">
      <div className="w-[200px] p-[20px] flex flex-col justify-center gap-[20px] shadow-md rounded-md">
        <div className="flex flex-col items-center gap-[20px]">
          <a className="flex justify-center font-bold">{username}</a>
        </div>
        <div className="flex flex-col gap-[8px] border-t-1">
          <a
            className="cursor-pointer font-bold"
            onClick={() => setSelected("accinfo")}
          >
            Хувийн мэдээлэл
          </a>
          <a
            className="cursor-pointer font-bold"
            onClick={() => setSelected("package")}
          >
            Илгээмж
          </a>
          <a
            className="cursor-pointer font-bold"
            onClick={() => setSelected("instruction")}
          >
            Ачаа илгээх заавар
          </a>
          <Link href={"/"}>
            <div className="cursor-pointer font-bold mt-4">Гарах</div>
          </Link>
        </div>
      </div>
      {selected === "accinfo" && <UserInfo />}
      {selected === "package" && <PackageForm />}
      {/* {selected === "instruction" && } */}
    </div>
  );
};

export default Page;
