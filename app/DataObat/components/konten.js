import React, { useState } from "react";
import { FaTrashArrowUp } from "react-icons/fa6";
import { RiEdit2Fill } from "react-icons/ri";
// KOMPONEN
import ModalTambahObat from "@/components/ModalTambahObat";

function Konten() {
  const [modalBuka, setModalBuka] = useState(false);

  const dataObat = [
    {
      id: 1,
      Nama_Obat: "Paracetamol",
      Jenis_Obat: "Kapsule",
      Stok_Obat: "2",
      Harga_Obat: "Rp. 10.000",
    },
  ];

  const bukaModal = () => {
    setModalBuka(true);
  };

  const tutupModal = () => {
    setModalBuka(false);
  };

  return (
    <div className="w-full h-full p-6 bg-gray-500 bg-opacity-25 rounded-xl my-8">
      {/* Tombol Tambah Admin */}
      <div className="mb-4">
        <button
          onClick={bukaModal}
          className="px-4 py-2 bg-gray-800 text-white rounded-md hover:bg-gray-500"
        >
          Tambah Obat
        </button>
      </div>

      {/* Modal Tambah Obat */}
      <ModalTambahObat buka={modalBuka} tutup={tutupModal} simpan={() => {}} />

      <div className="overflow-x-auto bg-white shadow-md rounded-lg">
        <table className="min-w-full text-left text-sm">
          <thead className="bg-gray-100 border-b">
            <tr>
              <th className="px-6 py-4 font-medium text-gray-900">Nama Obat</th>
              <th className="px-6 py-4 font-medium text-gray-900">
                Jenis Obat
              </th>
              <th className="px-6 py-4 font-medium text-gray-900">Stok</th>
              <th className="px-6 py-4 font-medium text-gray-900">Harga</th>
              <th className="px-6 py-4 font-medium text-gray-900">Action</th>
            </tr>
          </thead>
          <tbody>
            {dataObat.map((obat) => (
              <tr key={obat.id} className="border-b hover:bg-gray-50">
                <td className="px-6 py-4 text-gray-800">{obat.Nama_Obat}</td>
                <td className="px-6 py-4 text-gray-800">{obat.Jenis_Obat}</td>
                <td className="px-6 py-4 text-gray-800">{obat.Stok_Obat}</td>
                <td className="px-6 py-4 text-gray-800">{obat.Harga_Obat}</td>
                <td className="px-6 py-4 text-gray-800 flex gap-4">
                  <button
                    className="text-blue-500 hover:text-blue-700"
                    aria-label="Edit"
                  >
                    <RiEdit2Fill size={18} />
                  </button>
                  <button
                    className="text-red-500 hover:text-red-700"
                    aria-label="Delete"
                  >
                    <FaTrashArrowUp size={18} />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Konten;
