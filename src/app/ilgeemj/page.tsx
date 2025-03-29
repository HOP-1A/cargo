"use client";

import React, { useEffect } from "react";
import Package from "../components/add";
import { useState } from "react";

interface PackageDetailsProps {
  id: string;
  packageNumber: string;
  senderName: string;
  senderPhoneNumber: string;
  receiverName: string;
  receiverPhoneNumber: string;
  quantity: number;
  cost: number;
  createdAt: string;
}

const Page = () => {
  const [selected, setSelected] = useState("");
  const [data, setData] = useState<PackageDetailsProps[]>([])

  const packages = async () => {
    const jsonData = await fetch("api/user/package", {
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
    packages()
  }, [])

  return (
    <div style={{ fontFamily: "sans-serif", padding: "20px"}}>
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
          onClick={() => setSelected("package")}
        >
          + Package нэмэх
        </button>
        <button 

          style={{
            backgroundColor: "#bbbbbb",
            padding: "7px 15px",
            border: "none",
            borderRadius: "5px",
            color:"white",
          }}
        >
          Refresh
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

        <div className="font-semibold w-70"
          style={{
            marginTop: "20px",
            padding: "15px",
            borderRadius: "5px",
            border:"gray  1px solid"
          }}
        >
          {!data ? 'selected' : data?.map((props) => { return <details className="p-2" key={props.id}>
            <summary>Ачааны дугаар:&nbsp;<span className="font-normal">{props.packageNumber}</span></summary>
            <li>Илгээгчийн нэр:&nbsp;<span className="font-normal">{props.senderName}</span></li>
            <li>Илгээгчийн утасны дугаар:&nbsp;<span className="font-normal">{props.senderPhoneNumber}</span></li>
            <li>Хүлээн авагчийн нэр:&nbsp;<span className="font-normal">{props.receiverName}</span></li>
            <li>Хүлээн авагчийн утасны дугаар:&nbsp;<span className="font-normal">{props.receiverPhoneNumber}</span></li>
            <li>Ачааны тоо:&nbsp;<span className="font-normal">{props.quantity}</span></li>
            <li>Төлбөр:&nbsp;<span className="font-normal">{props.cost}₮</span></li>
            <li className="text-gray-300 text-xs">Илгээгчийн утасны дугаар:&nbsp;<span className="font-normal">{props.createdAt}</span></li>
          </details> })}
        </div>
      </div>
      {selected === "package" && <Package></Package>}
    </div>
  );
};

export default Page;
