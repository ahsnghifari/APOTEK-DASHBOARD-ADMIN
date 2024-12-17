import { useState, useEffect } from "react";
import { toast } from "react-toastify";
import { doc, updateDoc, getDoc } from "firebase/firestore";
import { database } from "@/lib/firebaseConfig";

export default function useSuntingObat(idObat) {
  const [namaObat, setNamaObat] = useState("");
  const [jenisObat, setJenisObat] = useState("");
  const [stokObat, setStokObat] = useState("");
  const [hargaObat, setHargaObat] = useState("");
  const [sedangMemuatSuntingObat, setSedangMemuatSuntingObat] = useState(false);

  const ambilDataObat = async () => {
    try {
      const obatRef = doc(database, "obat", idObat);
      const docSnap = await getDoc(obatRef);
      if (docSnap.exists()) {
        const data = docSnap.data();
        setNamaObat(data.Nama_Obat);
        setJenisObat(data.Jenis_Obat);
        setStokObat(data.Stok_Obat);
        setHargaObat(data.Harga_Obat);
      } else {
        toast.error("Data obat tidak ditemukan!");
      }
    } catch (error) {}
  };

  const validasiFormulir = () =>
    !namaObat
      ? (toast.error("Masukkan nama obat"), false)
      : !jenisObat
      ? (toast.error("Pilih jenis obat"), false)
      : !stokObat
      ? (toast.error("Msukankan stok obat"), false)
      : !hargaObat
      ? (toast.error("Masukkan harga obat"), false)
      : true;

  const suntingObat = async () => {
    setSedangMemuatSuntingObat(true);

    if (!validasiFormulir()) {
      setSedangMemuatSuntingObat(false);
      return;
    }

    try {
      const obatRef = doc(database, "obat", idObat);
      await updateDoc(obatRef, {
        Nama_Obat: namaObat,
        Jenis_Obat: jenisObat,
        Stok_Obat: stokObat,
        Harga_Obat: hargaObat,
      });
      toast.success("Obat berhasil disunting!");
    } catch (error) {
      toast.error("Gagal menyunting obat: " + error.message);
    } finally {
      setSedangMemuatSuntingObat(false);
    }
  };

  useEffect(() => {
    ambilDataObat();
  }, [idObat]);

  return {
    namaObat,
    jenisObat,
    suntingObat,
    stokObat,
    hargaObat,
    setNamaObat,
    setJenisObat,
    setStokObat,
    setHargaObat,
    sedangMemuatSuntingObat,
  };
}
