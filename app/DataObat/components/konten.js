import React, { useState } from "react";
import { FaTrashAlt } from "react-icons/fa";
import { RiEdit2Fill } from "react-icons/ri";
// KOMPONEN
import ModalTambahObat from "@/components/ModalTambahObat";
import MemuatRangkaTampilkanTabel from "@/components/memuatRangkaTabel";
// HOOKS
import useTampilkanObat from "@/hooks/useTampilkanObat";
import useHapusObat from "@/hooks/useHapusObat";
// KONSTANTA KAMI
import { formatRupiah } from "@/constants/formatRupiah";

function Konten() {
  const [modalBuka, setModalBuka] = useState(false);
  const { sedangMemuatTampilkanObat, daftarObat } = useTampilkanObat();
  const { sedangMemuatHapus, hapusObat } = useHapusObat();


  const bukaModal = () => {
    setModalBuka(true);
  };

  const tutupModal = () => {
    setModalBuka(false);
  };

  const handleHapusObat = async (idObat) => {
    const konfirmasi = window.confirm("Apakah Anda yakin ingin menghapus Obat ini?");
    if (konfirmasi) {
      await hapusObat(idObat);
    }
  };

  return (
    <div className="w-full h-full p-6 bg-gray-500 bg-opacity-25 rounded-xl my-8">
      {/* Tombol Tambah Obat */}
      <div className="mb-4">
        <button
          onClick={bukaModal}
          className="px-4 py-2 bg-gray-800 text-white rounded-md hover:bg-gray-500"
        >
          Tambah Obat
        </button>
      </div>

      {/* Modal Tambah Obat */}
      <ModalTambahObat buka={modalBuka} tutup={tutupModal} />

      <div className="overflow-x-auto bg-white shadow-md rounded-lg">
        <table className="min-w-full text-left text-sm">
          <thead className="bg-gray-100 border-b">
            <tr>
              <th className="px-6 py-4 font-medium text-black">Nama Obat</th>
              <th className="px-6 py-4 font-medium text-black">Jenis Obat</th>
              <th className="px-6 py-4 font-medium text-black">Stok</th>
              <th className="px-6 py-4 font-medium text-black">Harga</th>
              <th className="px-6 py-4 font-medium text-black">Action</th>
            </tr>
          </thead>
          <tbody>
            {sedangMemuatTampilkanObat ? (
              <tr>
                <td colSpan="5" className="px-6 py-4 text-center text-gray-500">
                  <MemuatRangkaTampilkanTabel />
                </td>
              </tr>
            ) : daftarObat.length === 0 ? (
              <tr>
                <td colSpan="5" className="px-6 py-4 text-center text-gray-500">
                  Data obat tidak tersedia
                </td>
              </tr>
            ) : (
              daftarObat.map((obat) => (
                <tr key={obat.id} className="border-b hover:bg-gray-50">
                  <td className="px-6 py-4 text-black">{obat.Nama_Obat}</td>
                  <td className="px-6 py-4 text-black">{obat.Jenis_Obat}</td>
                  <td className="px-6 py-4 text-black">{obat.Stok_Obat} pcs</td>
                  <td className="px-6 py-4 text-black">
                    {formatRupiah(obat.Harga_Obat)}
                  </td>
                  <td className="px-6 py-4 text-black flex gap-4">
                    <button
                      className="text-blue-500 hover:text-blue-700"
                      aria-label="Edit"
                    >
                      <RiEdit2Fill size={18} />
                    </button>
                    <button
                      onClick={() => handleHapusObat(obat.id)}
                      className="text-red-500 hover:text-red-700"
                      aria-label="Hapus"
                      disabled={sedangMemuatHapus}
                    >
                      {sedangMemuatHapus ? "..." : <FaTrashAlt size={18} />}
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
