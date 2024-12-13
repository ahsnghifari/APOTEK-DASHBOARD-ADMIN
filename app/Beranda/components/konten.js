import React from "react";
import { FaCashRegister, FaCalculator } from "react-icons/fa";

function Beranda() {
  return (
    <div className="w-full h-full p-6 bg-gray-500 bg-opacity-25 rounded-xl my-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded-lg shadow flex flex-col items-center">
          <FaCashRegister size={50} className="text-green-500 mb-4" />
          <h2 className="text-lg font-semibold text-gray-800 mb-2">Kasir</h2>
          <p className="text-gray-600 text-center mb-4">
            Menu untuk mencatat pembelian obat oleh customer.
          </p>
          <button className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600">
            Buka Kasir
          </button>
        </div>
        <div className="bg-white p-6 rounded-lg shadow flex flex-col items-center">
          <FaCalculator size={50} className="text-blue-500 mb-4" />
          <h2 className="text-lg font-semibold text-gray-800 mb-2">
            Hitung Total
          </h2>
          <p className="text-gray-600 text-center mb-4">
            Fitur untuk menghitung total pembayaran obat yang dibeli.
          </p>
          <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
            Hitung Sekarang
          </button>
        </div>
      </div>
    </div>
  );
}

export default Beranda;
