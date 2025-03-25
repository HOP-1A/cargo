"use client";

import Link from "next/link";
import {
  ClerkProvider,
  SignInButton,
  SignUpButton,
  SignedIn,
  SignedOut,
  UserButton,
} from "@clerk/nextjs";

export default function Header() {
  return (
    <ClerkProvider>
      <div className="whiteheader flex-column bg-white w-[100vw]">
        <nav className="flexrow">
          <div className="nav-logo">
            <Link href={"/"}>
              <img
                src="https://www.cargoservice.mn/img/logo-black.png"
                alt="A&amp;N"
              />
            </Link>
          </div>
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
            <SignedOut>
              <SignInButton />
              <SignUpButton />
            </SignedOut>
            <SignedIn>
              <UserButton />
            </SignedIn>

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
      <div className="whiteheader flex-column bg-white">
        <nav className="flexrow">
          <div className="nav-logo">
            <Link href={"/"}>
              <img
                src="https://www.cargoservice.mn/img/logo-black.png"
                alt="A&amp;N"
              />
            </Link>
          </div>
          <div className="flexrow">
            <Link href={"/personal-Info"}>
              <div className="nav-item font-medium">Хувийн мэдээлэл</div>
            </Link>
            <Link href={"/ilgeemj"}>
              <div className="nav-item font-medium">Илгээмж</div>
            </Link>
          </div>
        </nav>
      </div>
    </ClerkProvider>
  );
}
