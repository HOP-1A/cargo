"use client"; 

import React, { useEffect } from "react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import AddressInput from "../components/google-map";
import { toast } from "sonner";

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
        style={{
          backgroundColor: "white",
          padding: "20px",
          borderRadius: "5px",
        }}
      >
        <div style={{ marginTop: "20px" }}>
          <input
            type="text"
            placeholder="Хайх утга"
            style={{
              padding: "7px 15px",
              marginRight: "10px",
              border: "1px solid #ccc",
              borderRadius: "3px",
            }}
          />
          <button
            style={{
              backgroundColor: "#bbbbbb",
              color: "white",
              padding: "5px 15px",
              border: "none",
              borderRadius: "3px",
            }}
          >
            Хайх
          </button>
        </div>
          <div className="flex gap-[100px]">
            <div
              className="font-semibold w-70"
              style={{
                marginTop: "20px",
                padding: "15px",
                borderRadius: "5px",
                border: "gray  1px solid",
              }}
            >
              {data.length == 0 
                ? <div key={'Null'} className="text-black">Ачаа байхгүй</div>
                : data?.map((props) => {
                    return (
                      <div key={props.id} className="w-[100%] flex">
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
                            Илгээгчийн утасны дугаар:&nbsp;
                            <span className="font-normal">{props.createdAt}</span>
                          </li>
                        </details>
                        <Button className="cursor-pointer" onClick={() => setSelected(props)}>Газрын Зураг</Button>
                      </div>
                    );
                  })}
            </div>
            {selected && 
            <div className="w-[100%] gap-[10px] flex">
              <AddressInput setAddress={setAddress}></AddressInput>
              <Button className="cursor-pointer" onClick={() => deliverence()}>Хүргүүлэх</Button>
            </div>

            }
          </div>
      </div>
    </div>
  );
};

export default Page;
