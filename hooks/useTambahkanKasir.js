import { useState } from "react";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { toast } from "react-toastify";
import { database } from "@/lib/firebaseConfig";

const useTambahkanKasir = () => {
  const [memuatTransaksi, setMemuatTransaksi] = useState(false);

  const simpanTransaksi = async (
    namaObat,
    jumlahBeli,
    totalHarga,
    uangPembeli,
    kembalian
  ) => {
    setMemuatTransaksi(true);
    try {
      const kasirCollection = collection(database, "kasir");
      await addDoc(kasirCollection, {
        Nama_Obat: namaObat,
        Jumlah_Beli: jumlahBeli,
        Total_Harga: totalHarga,
        Uang_Pembeli: uangPembeli,
        Kembalian: kembalian,
        Waktu_Transaksi: serverTimestamp(),
      });

      toast.success("Data kasir berhasil disimpan!");

      setMemuatTransaksi(false);
    } catch (error) {
      console.error("Error menyimpan transaksi:", error);

      toast.error("Terjadi kesalahan saat menyimpan transaksi.");

      setMemuatTransaksi(false);
    }
  };

  return { simpanTransaksi, memuatTransaksi };
};

export default useTambahkanKasir;
