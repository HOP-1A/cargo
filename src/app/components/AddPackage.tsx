"use client";

import React, { useEffect } from "react";
import { useState } from "react";
import { Button } from "@/components/ui/button";

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

const Page = ({ setSelected }: { setSelected: (option: string) => void }) => {
  const [data, setData] = useState<PackageDetailsProps[]>([]);
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
        <button
          style={{
            backgroundColor: "blue",
            color: "white",
            padding: "7px 15px",
            border: "none",
            borderRadius: "5px",
            marginRight: "10px",
          }}
          onClick={() => setSelected("addPackage")}
        >
          + Package нэмэх
        </button>

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

        <div
          className="font-semibold w-70"
          style={{
            marginTop: "20px",
            padding: "15px",
            borderRadius: "5px",
            border: "gray  1px solid",
          }}
        >
          {data.length == 0 ? (
            <div className="text-black">Ачаа байхгүй</div>
          ) : (
            data?.map((props) => {
              return (
                <div className="w-[100%] flex" key={props.id}>
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
                  <Button onClick={() => setSelected("addPackage")}>
                    Хүргүүлэх
                  </Button>
                </div>
              );
            })
          )}
        </div>
      </div>
    </div>
  );
};

export default Page;
