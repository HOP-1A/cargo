"use client";

import React, { useEffect } from "react";
import Package from "../components/add";
import { useState } from "react";
import AddPackage from "../components/AddPackage";
const Page = () => {
  const [selected, setSelected] = useState("displayPackage");

  return (
    <div style={{ fontFamily: "sans-serif", padding: "20px" }}>
      {selected === "displayPackage" && (
        <AddPackage  setSelected={setSelected} />
      )}
      {selected === "addPackage" && (
        <Package  setSelected={setSelected} />
      )}
    </div>
  );
};

export default Page;
