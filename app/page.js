"use client";

import React, { useState } from "react";
import { GiHealthNormal } from "react-icons/gi";
import { useRouter } from "next/navigation";

function LoginAdmin() {
  const [namaPengguna, setNamaPengguna] = useState("");
  const [kataSandi, setKataSandi] = useState("");
  const router = useRouter();

  const handleLogin = (e) => {
    e.preventDefault();

    router.push("/Beranda");
  };

  return (
    <div className="w-full h-full flex min-h-screen justify-center items-center bg-gradient-to-br from-gray-200 to-white">
      <div className="w-[600px] h-[600px] bg-white p-8 rounded-xl shadow-lg">
        <div className="w-full h-full justify-center items-center mt-12">
          <div className="text-center mb-6">
            <div className="w-16 h-16 mx-auto bg-gray-100 text-gray-600 rounded-full flex justify-center items-center shadow-lg">
              <GiHealthNormal size={24} color="red" />
            </div>
            <h2 className="text-2xl font-bold text-gray-700 mt-4">
              Login Admin
            </h2>
            <p className="text-sm text-gray-500 mt-1">
              Silakan masukkan Nama Pengguna dan Kata Sandi Anda.
            </p>
          </div>
          <form onSubmit={handleLogin}>
            <div className="mb-4">
              <label
                htmlFor="namaPengguna"
                className="block text-gray-600 font-medium"
              >
                Nama Pengguna
              </label>
              <input
                type="text"
                id="namaPengguna"
                value={namaPengguna}
                onChange={(e) => setNamaPengguna(e.target.value)}
                placeholder="Masukkan Nama Pengguna"
                className="w-full mt-2 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-400"
                required
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="kataSandi"
                className="block text-gray-600 font-medium"
              >
                Kata Sandi
              </label>
              <input
                type="password"
                id="kataSandi"
                value={kataSandi}
                onChange={(e) => setKataSandi(e.target.value)}
                placeholder="Masukkan Kata Sandi"
                className="w-full mt-2 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-400"
                required
              />
            </div>
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-gray-500 to-gray-700 text-white py-2 px-4 rounded-lg shadow-lg hover:from-gray-600 hover:to-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-300"
            >
              Masuk
            </button>
          </form>
          <p className="text-center text-sm text-gray-500 mt-4">
            &copy; {new Date().getFullYear()} Admin Panel. All Rights Reserved.
          </p>
        </div>
      </div>
    </div>
  );
}

export default LoginAdmin;
