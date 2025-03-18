"use client";
import Link from "next/link";
import { useState, useEffect } from "react";

export default function Header() {
  const [darkMode, setDarkMode] = useState(
    localStorage.getItem("theme") === "dark"
  );

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  return (
    <div className="whiteheader flex-column">
      <nav className="flexrow">
        <a className="nav-logo">
          <Link href={"/"}>
            <img
              src="https://www.cargoservice.mn/img/logo-black.png"
              alt="A&amp;N"
            />
          </Link>
        </a>
        <div className="flexrow">
          <Link href={"/"}>
            <div className="nav-item">Эхлэл</div>
          </Link>
          <Link href={"/tootsooluur"}>
            <div className="nav-item">Тооцоолуур</div>
          </Link>
          <Link href={"/instructions.php"}>
            <div className="nav-item">Заавар</div>
          </Link>
          <Link href={"/user"}>
            <img
              className="rounded-full w-[40px] cursor-pointer"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2TgOv9CMmsUzYKCcLGWPvqcpUk6HXp2mnww&s"
            />
          </Link>

          <button
            onClick={() => setDarkMode(!darkMode)}
            className="p-3 rounded-full cursor-pointer"
          >
            <img
              src="https://static-00.iconduck.com/assets.00/dark-theme-icon-2048x2048-ymrfkxsy.png"
              alt="Dark and Light Mode Icon"
              className="w-10 h-10"
            />
          </button>
        </div>
      </nav>
    </div>
  );
}
