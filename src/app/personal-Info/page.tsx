"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import Footer from "../components/footer";
import { useUser } from "@clerk/nextjs";

const UserInfo = () => {
  const { user } = useUser();
  const userId = user?.id;
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [emailError, setEmailError] = useState("");
  const [addressError, setAddressError] = useState("");
  const [usernameError, setUsernameError] = useState("");
  const [phoneError, setPhoneError] = useState("");

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await fetch("/api/user?userId=" + userId);
        if (!response.ok) {
          throw new Error("Failed to fetch user data");
        }
        const data = await response.json();
        setUsername(data.name);
        setEmail(data.email);
        setPhone(data.phoneNumber);
        setAddress(data.location);
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };

    if (user) {
      fetchUserData();
    }
  }, [user]);

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let value = e.target.value.replace(/\D/g, "");
    if (value.length > 8) value = value.slice(0, 8);
    setPhone(value);
  };

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setEmail(value);
    validateEmail(value);
  };
  const validateEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setEmailError("Зөв имэйл хаяг оруулна уу.");
      return false;
    }
    setEmailError("");
    return true;
  };

  const validateUsername = (username: string) => {
    if (!username.trim()) {
      setUsernameError("Нэрээ заавал оруулна уу.");
      return false;
    }
    setUsernameError("");
    return true;
  };

  const validateAddress = (address: string) => {
    if (!address.trim()) {
      setAddressError("Хаяг хоосон байж болохгүй.");
      return false;
    }
    setAddressError("");
    return true;
  };

  const validatePhone = (phone: string) => {
    if (phone.length !== 8) {
      setPhoneError("Утасны дугаар 8 оронтой байх ёстой.");
      return false;
    }
    setPhoneError("");
    return true;
  };

  const handleSave = async () => {
    if (
      validateUsername(username) &&
      validateEmail(email) &&
      validatePhone(phone) &&
      validateAddress(address)
    ) {
      const userData = {
        userId: user?.id,
        name: username,
        email,
        phoneNumber: phone,
        location: address,
      };

      try {
        const response = await fetch("/api/user", {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(userData),
        });

        if (!response.ok) {
          throw new Error("Failed to save user data");
        }
      } catch (error) {
        console.error("Error saving user data:", error);
      }
    }
  };

  return (
    <div className="flex justify-center items-center h-[75vh]">
      <Card className="w-[400px] p-6 shadow-md rounded-lg">
        <CardContent className="flex flex-col gap-4">
          <div className="flex flex-col gap-1">
            <label className="text-sm font-medium">Таны нэр, овог</label>
            <Input
              placeholder="Нэрээ оруулна уу"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              onBlur={() => validateUsername(username)}
            />
            {usernameError && (
              <p className="text-red-500 text-sm">{usernameError}</p>
            )}
          </div>

          <div className="flex flex-col gap-1">
            <label className="text-sm font-medium">И-мэйл хаяг</label>
            <Input
              placeholder="name@example.com"
              type="email"
              value={email}
              onChange={handleEmailChange}
              onBlur={() => validateEmail(email)}
            />
            {emailError && <p className="text-red-500 text-sm">{emailError}</p>}
          </div>

          <div className="flex flex-col gap-1">
            <label className="text-sm font-medium">Утасны дугаар</label>
            <Input
              placeholder="8000-0000"
              type="text"
              value={
                phone != null ? phone.replace(/(\d{4})(\d{4})/, "$1-$2") : ""
              }
              onChange={handlePhoneChange}
              maxLength={9}
              required
            />
            {phoneError && <p className="text-red-500 text-sm">{phoneError}</p>}
          </div>

          <div className="flex flex-col gap-1">
            <label className="text-sm font-medium">Хаяг</label>
            <Input
              placeholder="Хот, Дүүрэг, Байрны дугаар"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              onBlur={() => validateAddress(address)}
            />
            {addressError && (
              <p className="text-red-500 text-sm">{addressError}</p>
            )}
          </div>

          <Button
            className="bg-blue-700 hover:bg-blue-800 text-white font-medium px-4 py-2 rounded-lg transition-all duration-200 cursor-pointer"
            variant="default"
            onClick={handleSave}
            aria-label="Save User Information"
          >
            Хадгалах
          </Button>
        </CardContent>
      </Card>
      <Footer />
    </div>
  );
};

export default UserInfo;
