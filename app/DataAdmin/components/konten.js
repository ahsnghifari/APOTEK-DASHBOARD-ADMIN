import React, { useState } from "react";
import { FaTrashArrowUp } from "react-icons/fa6";
import { RiEdit2Fill } from "react-icons/ri";
// KOMPONEN
import ModalTambahAdmin from "@/components/ModalTambahAdmin";

function Konten() {
  const [modalBuka, setModalBuka] = useState(false);

  const dataAdmin = [
    {
      id: 1,
      nama: "Ahsan Ghifari",
      email: "ahsanghifari@gmail.com",
      jabatan: "Administrator",
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
          Tambah Admin
        </button>
      </div>

      {/* Modal Tambah Admin */}
      <ModalTambahAdmin buka={modalBuka} tutup={tutupModal} simpan={() => {}} />

      <div className="overflow-x-auto bg-white shadow-md rounded-lg mt-6">
        <table className="min-w-full text-left text-sm">
          <thead className="bg-gray-100 border-b">
            <tr>
              <th className="px-6 py-4 font-medium text-gray-900">Nama</th>
              <th className="px-6 py-4 font-medium text-gray-900">Email</th>
              <th className="px-6 py-4 font-medium text-gray-900">Jabatan</th>
              <th className="px-6 py-4 font-medium text-gray-900">Aksi</th>
            </tr>
          </thead>
          <tbody>
            {dataAdmin.map((admin) => (
              <tr key={admin.id} className="border-b hover:bg-gray-50">
                <td className="px-6 py-4 text-gray-800">{admin.nama}</td>
                <td className="px-6 py-4 text-gray-800">{admin.email}</td>
                <td className="px-6 py-4 text-gray-800">{admin.jabatan}</td>
                <td className="px-6 py-4 text-gray-800 flex gap-4">
                  <button
                    className="text-blue-500 hover:text-blue-700"
                    aria-label="Edit"
                  >
                    <RiEdit2Fill size={18} />
                  </button>
                  <button
                    className="text-red-500 hover:text-red-700"
                    aria-label="Hapus"
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
