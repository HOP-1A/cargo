"use client";

import React from "react";
import Package from "../components/add";
import { useState } from "react";
const Page = () => {
  const [selected, setSelected] = useState("");

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
            backgroundColor: "#ff9800",
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
            backgroundColor: "#fffde7",
            color:"orange",
            padding: "15px",
            borderRadius: "5px",
            border:"#fdd835  1px solid"
          }}
        >
          Илгээмж байхгүй.
        </div>
      </div>
      {selected === "package" && <Package></Package>}
    </div>
  );
};

export default Page;
