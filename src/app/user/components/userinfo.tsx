import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";

const UserInfo = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [emailError, setEmailError] = useState("");
  const [addressError, setAddressError] = useState("");
  const [usernameError, setUsernameError] = useState("");
  const [phoneError, setPhoneError] = useState("");

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let value = e.target.value.replace(/\D/g, "");
    if (value.length > 8) {
      value = value.slice(0, 8);
    }
    setPhone(value);
  };

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setEmail(value);

    if (!value.includes("@")) {
      setEmailError("И-мэйл хаяг '@' тэмдэгт агуулсан байх ёстой.");
    } else {
      setEmailError("");
    }
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

  const handleSave = () => {
    let isValid = true;

    if (!validateUsername(username)) {
      isValid = false;
    }
    if (!validateEmail(email)) {
      isValid = false;
    }
    if (!validatePhone(phone)) {
      isValid = false;
    }
    if (!validateAddress(address)) {
      isValid = false;
    }

    if (!isValid) return;

    console.log("User info saved!", { username, email, phone, address });
  };

  return (
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
          />
          {emailError && <p className="text-red-500 text-sm">{emailError}</p>}
        </div>

        <div className="flex flex-col gap-1">
          <label className="text-sm font-medium">Утасны дугаар</label>
          <Input
            placeholder="8000-0000"
            type="text"
            value={phone.replace(/(\d{4})(\d{4})/, "$1-$2")}
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
          variant="default"
          onClick={handleSave}
          aria-label="Save User Information"
        >
          Хадгалах
        </Button>
      </CardContent>
    </Card>
  );
};

export default UserInfo;
