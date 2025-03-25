"use client";

import React from "react";
import Package from "../components/add";
import { useState } from "react";
const Page = () => {
  const [selected, setSelected] = useState("");

  return (
    <div style={{ fontFamily: "sans-serif", padding: "20px" }}>
      <h2>Илгээмж</h2>

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
            padding: "10px 15px",
            border: "none",
            borderRadius: "3px",
            marginRight: "10px",
          }}
          onClick={() => setSelected("package")}
        >
          + Package нэмэх
        </button>
        <button
          style={{
            backgroundColor: "#e0e0e0",
            padding: "10px 15px",
            border: "none",
            borderRadius: "3px",
          }}
        >
          Refresh
        </button>

        <div style={{ marginTop: "20px" }}>
          <input
            type="text"
            placeholder="Хайх утга"
            style={{
              padding: "8px",
              marginRight: "10px",
              border: "1px solid #ccc",
              borderRadius: "3px",
            }}
          />
          <button
            style={{
              backgroundColor: "#4caf50",
              color: "white",
              padding: "10px 15px",
              border: "none",
              borderRadius: "3px",
            }}
          >
            Хайх
          </button>
        </div>

        <div
          style={{
            marginTop: "20px",
            backgroundColor: "#fff3cd",
            padding: "15px",
            borderRadius: "5px",
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
