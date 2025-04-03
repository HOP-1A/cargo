"use client"; 

import React, { useEffect } from "react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import AddressInput from "../components/google-map";
import { toast } from "sonner";
import { Map } from "lucide-react";

type PackageDetailsProps = {
  id: string;
  packageNumber: string;
  senderName: string;
  senderPhoneNumber: string;
  receiverName: string;
  receiverPhoneNumber: string;
  quantity: number;
  cost: number;
  createdAt: string;
};

const Page = () => {
  const [data, setData] = useState<PackageDetailsProps[]>([]);
  const [selected, setSelected] = useState<PackageDetailsProps>()
  const [address, setAddress] = useState('')

  const packages = async () => {
    await fetch("api/user/package", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ phoneNumber: "12312313" }),
    })
      .then((res) => res.json())
      .then((res) => {
        if (res.packages) {
          setData(res.packages);
        }
      })
      .catch((err) => console.error("Error fetching packages:", err));
  };

  useEffect(() => {
    packages();
  }, []);

  const deliverence = async() => {
    const result = await fetch("api/package", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ deliveryLocation: address, packageId: selected.id })
    })
      .then((res) => res.json())
      .then((res) => {
        if(res != "Done"){
          toast('Алдаа гарлаа')
        }
      })
      .catch((err) => console.error("Error fetching packages:", err));
      toast('Амжилттай илгээгдлээ')
  }

  return (
    <div style={{ fontFamily: "sans-serif", padding: "20px" }}>
      <h2 className=" text-3xl font-semibold pb-[50px]">Илгээмж</h2>
      <div
      className="flex justify-between flex-col"
        style={{
          backgroundColor: "white",
          padding: "20px",
          borderRadius: "5px",
        }}
      >
          <div className="flex flex-col lg:flex-row lg:justify-center gap-[50px] mt-5">
            <div
              className="font-semibold flex flex-col gap-4"
              style={{
                padding: "15px",
                borderRadius: "5px",
                border: "gray  1px solid",
              }}
            >
              {data.length == 0 
                ? <div key={'Null'} className="text-black w-[]">Ачаа байхгүй</div>
                : data?.map((props) => {
                    return (
                      <div key={props.id} className="w-[100%] flex justify-between">
                        <details className="p-2" key={props.id}>
                          <summary>
                            Ачааны дугаар:&nbsp;
                            <span className="font-normal">{props.packageNumber}</span>
                          </summary>
                          <li>
                            Илгээгчийн нэр:&nbsp;
                            <span className="font-normal">{props.senderName}</span>
                          </li>
                          <li>
                            Илгээгчийн утасны дугаар:&nbsp;
                            <span className="font-normal">
                              {props.senderPhoneNumber}
                            </span>
                          </li>
                          <li>
                            Хүлээн авагчийн нэр:&nbsp;
                            <span className="font-normal">{props.receiverName}</span>
                          </li>
                          <li>
                            Хүлээн авагчийн утасны дугаар:&nbsp;
                            <span className="font-normal">
                              {props.receiverPhoneNumber}
                            </span>
                          </li>
                          <li>
                            Ачааны тоо:&nbsp;
                            <span className="font-normal">{props.quantity}</span>
                          </li>
                          <li>
                            Төлбөр:&nbsp;
                            <span className="font-normal">{props.cost}₮</span>
                          </li>
                          <li className="text-gray-300 text-xs">
                            Хү:&nbsp;
                            <span className="font-normal">{props.createdAt}</span>
                          </li>
                        </details>
                        <Button className="cursor-pointer bg-blue-600 hover:bg-blue-400" onClick={() => setSelected(props)}><span className="hidden sm:inline">Газрын Зураг</span> <Map/></Button>  
                      </div>
                    );
                  })}
            </div>
            {selected && 
            <div className="gap-[10px]">
              <AddressInput setAddress={setAddress}></AddressInput>
              <Button className="cursor-pointer bg-blue-600 hover:bg-blue-400 mt-[44px] w-[100%] lg:w-[600px]" onClick={() => deliverence()}>{selected.packageNumber}-г Хүргүүлэх</Button>
            </div>

            }
          </div>
      </div>
    </div>
  );
};

export default Page;
