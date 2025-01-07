"use client";
import React from "react";
import { Typography } from "@mui/material";
import { useRouter } from "next/navigation";
import { FaUserShield, FaCashRegister } from "react-icons/fa";
import { TbHomeEdit } from "react-icons/tb";
import { GiMedicines } from "react-icons/gi";
import { CiLogout } from "react-icons/ci";
// KOMPONEN
import Memuat from "@/components/memuat";
// HOOKS
import useKeluarAdmin from "@/hooks/useKeluarAdmin";

function Sidebar() {
  const { keluar, sedangMemuatKeluar } = useKeluarAdmin();
  const router = useRouter();

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
        <button
          onClick={keluar}
          disabled={sedangMemuatKeluar}
          className="cursor-pointer flex items-center"
        >
          {sedangMemuatKeluar ? <Memuat /> : <CiLogout size={30} />}
        </button>
      </div>
      <div className="flex justify-center items-center">
        <Typography variant="h6">Keluar</Typography>
      </div>
    </div>
  );
}

export default Sidebar;
