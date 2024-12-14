"use client";

import React, { useState } from "react";
import { GiHealthNormal } from "react-icons/gi";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Input,
  Typography,
  IconButton,
} from "@material-tailwind/react";

// KOMPONEN
import Memuat from "@/components/memuat";
// HOOKS
import useMasukAdmin from "@/hooks/useMasukAdmin";

export default function LoginAdmin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [tampilkanKataSandi, setTampilkanKataSandi] = useState(false);
  const { masukDenganEmail, sedangMemuat } = useMasukAdmin();

  const handleLogin = (e) => {
    e.preventDefault();
    masukDenganEmail(email, password);
  };

  return (
    <div className="w-full h-full flex min-h-screen justify-center items-center bg-gradient-to-br from-gray-200 to-white">
      <ToastContainer />
      <Card className="w-full max-w-md">
        <CardHeader
          floated={false}
          shadow={false}
          className="text-center mt-6 flex flex-col items-center"
        >
          <div className="w-16 h-16 bg-gray-100 text-gray-600 rounded-full flex justify-center items-center shadow-lg">
            <GiHealthNormal size={24} color="red" />
          </div>
          <Typography variant="h4" color="blue-gray" className="mt-4">
            Login Admin
          </Typography>
          <Typography color="gray" className="mt-1 font-normal">
            Silakan masukkan Email dan Kata Sandi Anda.
          </Typography>
        </CardHeader>
        <form onSubmit={handleLogin}>
          <CardBody className="flex flex-col">
            <Input
              type="email"
              label="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </CardBody>

          <CardBody className="flex flex-col -mt-7 relative">
            <div className="relative">
              <Input
                type={tampilkanKataSandi ? "text" : "password"}
                label="Kata Sandi"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="w-full px-4 py-2 border rounded-md pr-10"
              />
              <button
                type="button"
                onClick={() => setTampilkanKataSandi(!tampilkanKataSandi)}
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 focus:outline-none"
              >
                {tampilkanKataSandi ? (
                  <FaEyeSlash size={20} />
                ) : (
                  <FaEye size={20} />
                )}
              </button>
            </div>
          </CardBody>

          <CardFooter className="pt-0">
            <Button
              type="submit"
              color="blue"
              onClick={handleLogin}
              disabled={sedangMemuat}
              fullWidth
              className="bg-gradient-to-r from-gray-500 to-gray-700 hover:from-gray-600 hover:to-gray-800"
            >
              {sedangMemuat ? <Memuat /> : "Masuk"}
            </Button>
            <Typography
              variant="small"
              className="text-center text-gray-500 mt-4"
            >
              &copy; {new Date().getFullYear()} Tubes IMPL, Apotek.
            </Typography>
          </CardFooter>
        </form>
      </Card>
    </div>
  );
}
