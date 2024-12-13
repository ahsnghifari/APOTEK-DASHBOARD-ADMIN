"use client";
import React from "react";
import { Typography } from "@mui/material";
import { useRouter } from "next/navigation";
import { FaUserShield, FaCashRegister } from "react-icons/fa";
import { TbHomeEdit } from "react-icons/tb";
import { GiMedicines } from "react-icons/gi";
import { CiLogout } from "react-icons/ci";

function Sidebar() {
  const router = useRouter();
  const handleKeluar = () => {
    router.push("/");
  };

  return (
    <div className="m-8 w-64  bg-gray-800 text-white rounded-lg p-6 flex flex-col">
      <div className="flex items-center mb-6">
        <h2 className="text-2xl font-bold text-center">Apotek</h2>
      </div>

      <ul className="space-y-4 flex-grow">
        <li className="flex items-center mb-2">
          <TbHomeEdit className="mr-3 text-lg" />
          <a
            onClick={() => router.push("/Beranda")}
            className="cursor-pointer text-lg hover:text-gray-400"
          >
            Beranda
          </a>
        </li>
        <li className="flex items-center mb-2">
          <FaUserShield className="mr-3 text-lg" />
          <a
            onClick={() => router.push("/DataAdmin")}
            className="cursor-pointer text-lg hover:text-gray-400"
          >
            Data Admin
          </a>
        </li>
        <li className="flex items-center mb-2">
          <GiMedicines className="mr-3 text-lg" />
          <a
            onClick={() => router.push("/DataObat")}
            className="cursor-pointer text-lg hover:text-gray-400"
          >
            Data Obat
          </a>
        </li>
        <li className="flex items-center mb-2">
          <FaCashRegister className="mr-3 text-lg" />
          <a
            onClick={() => router.push("/DataKasir")}
            className="cursor-pointer text-lg hover:text-gray-400"
          >
            Data Kasir
          </a>
        </li>
      </ul>
      <div className="flex justify-center items-center">
        <CiLogout onClick={handleKeluar} size={30} className="cursor-pointer" />
      </div>
      <div className="flex justify-center items-center">
        <Typography variant="h6">Logout</Typography>
      </div>
    </div>
  );
}

export default Sidebar;
