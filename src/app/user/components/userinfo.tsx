import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";

const UserInfo = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [avatar, setAvatar] = useState<string | null>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      if (avatar) {
        URL.revokeObjectURL(avatar);
      }
      setAvatar(URL.createObjectURL(e.target.files[0]));
    }
  };

  const handleSave = () => {
    if (!username || !email || !phone || !address) {
      alert("Бүх талбарыг бөглөнө үү!");
      return;
    }
    console.log("User info saved!", { username, email, phone, address });
  };

  return (
    <Card className="w-[400px] p-6 shadow-md rounded-lg">
      <CardContent className="flex flex-col gap-4">
        <div className="flex items-center gap-4">
          <div className="w-16 h-16 rounded-full border overflow-hidden">
            {avatar ? (
              <img
                src={avatar}
                alt="Avatar"
                className="w-full h-full object-cover"
              />
            ) : (
              <div className="w-full h-full bg-gray-200 flex items-center justify-center">
                👤
              </div>
            )}
          </div>
          <div>
            <label
              htmlFor="avatarUpload"
              className="cursor-pointer text-blue-500 text-sm"
            >
              Зураг солих
            </label>
            <input
              id="avatarUpload"
              type="file"
              accept="image/*"
              className="hidden"
              onChange={handleFileChange}
            />
          </div>
        </div>

        <div className="flex flex-col gap-1">
          <label className="text-sm font-medium">Таны нэр, овог</label>
          <Input
            placeholder="Нэрээ оруулна уу"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>

        <div className="flex flex-col gap-1">
          <label className="text-sm font-medium">И-мэйл хаяг</label>
          <Input
            placeholder="name@example.com"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className="flex flex-col gap-1">
          <label className="text-sm font-medium">Утасны дугаар</label>
          <Input
            placeholder="+976 80000000"
            type="number"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
        </div>

        <div className="flex flex-col gap-1">
          <label className="text-sm font-medium">Хаяг</label>
          <Input
            placeholder="Хот, Дүүрэг, Байрны дугаар"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
          />
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
