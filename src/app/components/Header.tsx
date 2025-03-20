"use client";
import Link from "next/link";

export default function Header() {
  return (
    <div className="whiteheader flex-column bg-white">
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
          <Link href={"/zaavar"}>
            <div className="nav-item">Заавар</div>
          </Link>
          <Link href={"/user"}>
            <img
              className="rounded-full w-[40px] cursor-pointer"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2TgOv9CMmsUzYKCcLGWPvqcpUk6HXp2mnww&s"
            />
          </Link>

          <button className="p-3 rounded-full cursor-pointer">
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
