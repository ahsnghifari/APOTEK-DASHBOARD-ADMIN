import React from "react";
import { IoMdDownload } from "react-icons/io";
import { FaTrashAlt } from "react-icons/fa";
// KOMPONEN
import MemuatRangkaTampilkanTabel from "@/components/memuatRangkaTabel";
import Memuat from "@/components/memuat";
// HOOKS
import useTampilkanKasir from "@/hooks/useTampilkanKasir";
import useUnduhTransaksi from "@/hooks/useUnduhTransaksi";
// KONSTANTA
import { formatRupiah } from "@/constants/formatRupiah";
import { formatTanggal } from "@/constants/formatTanggal";

function Konten() {
  const { sedangMemuatTampilkanKasir, daftarKasir } = useTampilkanKasir();
  const { sedangMemuatUnduh, unduhPDF } = useUnduhTransaksi();

  return (
    <div className="w-full h-full p-6 bg-gray-500 bg-opacity-25 rounded-xl my-8">
      <div className="overflow-x-auto bg-white shadow-md rounded-lg">
        <table className="min-w-full text-left text-sm">
          <thead className="bg-gray-500 border-b">
            <tr>
              <th className="px-6 py-4 font-medium text-black">Nama Obat</th>
              <th className="px-6 py-4 font-medium text-black">Jumlah Beli</th>
              <th className="px-6 py-4 font-medium text-black">Total Harga</th>
              <th className="px-6 py-4 font-medium text-black">Uang Pembeli</th>
              <th className="px-6 py-4 font-medium text-black">Kembalian</th>
              <th className="px-6 py-4 font-medium text-black">
                Waktu Pembelian
              </th>
              <th className="px-6 py-4 font-medium text-black">Action</th>
            </tr>
          </thead>
          <tbody>
            {sedangMemuatTampilkanKasir ? (
              <tr>
                <td colSpan="5" className="px-6 py-4 text-center text-gray-500">
                  <MemuatRangkaTampilkanTabel />
                </td>
              </tr>
            ) : daftarKasir.length === 0 ? (
              <tr>
                <td colSpan="5" className="px-6 py-4 text-center text-gray-500">
                  Data kasir tidak tersedia
                </td>
              </tr>
            ) : (
              daftarKasir.map((kasir) => (
                <tr key={kasir.id} className="border-b hover:bg-gray-50">
                  <td className="px-6 py-4 text-black">{kasir.Nama_Obat}</td>
                  <td className="px-6 py-4 text-black">
                    {kasir.Jumlah_Beli} pcs
                  </td>
                  <td className="px-6 py-4 text-black">
                    {formatRupiah(kasir.Total_Harga)}
                  </td>
                  <td className="px-6 py-4 text-black">
                    {formatRupiah(kasir.Uang_Pembeli)}
                  </td>
                  <td className="px-6 py-4 text-black">
                    {formatRupiah(kasir.Kembalian)}
                  </td>
                  <td className="px-6 py-4 text-black">
                    {formatTanggal(kasir.Waktu_Transaksi)}
                  </td>
                  <td className="px-6 py-4 text-black flex gap-5">
                    <button
                      className="text-green-500 hover:text-green-700"
                      aria-label="Unduh"
                      disabled={sedangMemuatUnduh}
                      onClick={() => unduhPDF(daftarKasir)}
                    >
                      {sedangMemuatUnduh ? (
                        <Memuat />
                      ) : (
                        <IoMdDownload size={18} />
                      )}
                    </button>
                    <button
                      className="text-red-500 hover:text-red-700"
                      aria-label="Hapus"
                    >
                      <FaTrashAlt size={18} />
                    </button>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Konten;
