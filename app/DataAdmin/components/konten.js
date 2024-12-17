import React, { useState } from "react";
import { FaTrashAlt } from "react-icons/fa";
import { RiEdit2Fill } from "react-icons/ri";
// KOMPONEN
import ModalTambahAdmin from "@/components/ModalTambahAdmin";
import MemuatRangkaTampilkanTabel from "@/components/memuatRangkaTabel";
// HOOKS
import useTampilkanAdmin from "@/hooks/useTampilkanAdmin";
import useHapusAdmin from "@/hooks/useHapusAdmin";

function Konten() {
  const [modalBuka, setModalBuka] = useState(false);
  const { sedangMemuatTampilkanAdmin, daftarAdmin } = useTampilkanAdmin();
  const { sedangMemuatHapus, hapusAdmin } = useHapusAdmin();

  const bukaModal = () => {
    setModalBuka(true);
  };

  const tutupModal = () => {
    setModalBuka(false);
  };

  const handleHapusAdmin = async (idAdmin) => {
    const konfirmasi = window.confirm("Apakah Anda yakin ingin menghapus admin ini?");
    if (konfirmasi) {
      await hapusAdmin(idAdmin);
    }
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
      <ModalTambahAdmin buka={modalBuka} tutup={tutupModal} />

      <div className="overflow-x-auto bg-white shadow-md rounded-lg mt-6">
        <table className="min-w-full text-left text-sm">
          <thead className="bg-gray-100 border-b">
            <tr>
              <th className="px-6 py-4 font-medium text-black">Nama</th>
              <th className="px-6 py-4 font-medium text-black">Email</th>
              <th className="px-6 py-4 font-medium text-black">Jabatan</th>
              <th className="px-6 py-4 font-medium text-black">Aksi</th>
            </tr>
          </thead>
          <tbody>
            {sedangMemuatTampilkanAdmin ? (
              <tr>
                <td colSpan="4" className="px-6 py-4 text-center text-gray-500">
                  <MemuatRangkaTampilkanTabel />
                </td>
              </tr>
            ) : daftarAdmin.length === 0 ? (
              <tr>
                <td colSpan="4" className="px-6 py-4 text-center text-gray-500">
                  Data admin tidak ada
                </td>
              </tr>
            ) : (
              daftarAdmin.map((admin) => (
                <tr key={admin.id} className="border-b hover:bg-gray-50">
                  <td className="px-6 py-4 text-black">{admin.Nama_Lengkap}</td>
                  <td className="px-6 py-4 text-black">{admin.Email}</td>
                  <td className="px-6 py-4 text-black">{admin.Jabatan}</td>
                  <td className="px-6 py-4 text-black flex gap-4">
                    <button
                      className="text-blue-500 hover:text-blue-700"
                      aria-label="Edit"
                    >
                      <RiEdit2Fill size={18} />
                    </button>
                    <button
                      onClick={() => handleHapusAdmin(admin.id)}
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