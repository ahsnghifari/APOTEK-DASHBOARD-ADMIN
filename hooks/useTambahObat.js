import { useState } from "react";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { toast } from "react-toastify";
import { database } from "@/lib/firebaseConfig";

const useTambahObat = () => {
  const [namaObat, setNamaObat] = useState("");
  const [jenisObat, setJenisObat] = useState("");
  const [stokObat, setStokObat] = useState("");
  const [hargaObat, setHargaObat] = useState("");
  const [sedangMemuatTambahObat, setSedangMemuatTambahObat] = useState(false);

  const tambahObat = async () => {
    if (!namaObat || !jenisObat || !stokObat || !hargaObat) {
      toast.error("Semua field wajib diisi!");
      return;
    }

    setSedangMemuatTambahObat(true);

    try {
      const obatCollection = collection(database, "obat");
      await addDoc(obatCollection, {
        Nama_Obat: namaObat,
        Jenis_Obat: jenisObat,
        Stok_Obat: parseInt(stokObat),
        Harga_Obat: parseFloat(hargaObat),
        dibuatPada: serverTimestamp(),
      });

      toast.success("Obat berhasil ditambahkan!");

      setNamaObat("");
      setJenisObat("");
      setStokObat("");
      setHargaObat("");
    } catch (error) {
      console.error("Gagal menambahkan obat:", error);
      toast.error("Terjadi kesalahan saat menambahkan obat.");
    } finally {
      setSedangMemuatTambahObat(false);
    }
  };

  return {
    namaObat,
    setNamaObat,
    jenisObat,
    setJenisObat,
    stokObat,
    setStokObat,
    hargaObat,
    setHargaObat,
    sedangMemuatTambahObat,
    tambahObat,
  };
};

export default useTambahObat;
