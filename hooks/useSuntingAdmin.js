import { useState, useEffect } from "react";
import { toast } from "react-toastify";
import { doc, updateDoc, getDoc } from "firebase/firestore";
import { database } from "@/lib/firebaseConfig";

export default function useSuntingAdmin(idAdmin) {
  const [namaLengkap, setNamaLengkap] = useState("");
  const [kataSandi, setKataSandi] = useState("");
  const [email, setEmail] = useState("");
  const [jabatan, setJabatan] = useState("");
  const [sedangMemuatSuntingAdmin, setSedangMemuatSuntingAdmin] = useState(false);

  const ambilDataAdmin = async () => {
    try {
      const adminRef = doc(database, "admin", idAdmin);
      const docSnap = await getDoc(adminRef);
      if (docSnap.exists()) {
        const data = docSnap.data();
        setNamaLengkap(data.Nama_Lengkap);
        setKataSandi(data.Kata_Sandi);
        setEmail(data.Email);
        setJabatan(data.Jabatan);
      } else {
        toast.error("Data admin tidak ditemukan!");
      }
    } catch (error) {
      toast.error("Gagal mengambil data admin: " + error.message);
    }
  };

  const validasiFormulir = () =>
    !namaLengkap
      ? (toast.error("Masukkan Nama admin"), false)
      : !email
      ? (toast.error("Masukkan Email admin"), false)
      : !jabatan
      ? (toast.error("Masukkan Jabatan admin"), false)
      : !kataSandi
      ? (toast.error("Masukkan Kata Sandi admin"), false)
      : true;

  const suntingAdmin = async () => {
    setSedangMemuatSuntingAdmin(true);

    if (!validasiFormulir()) {
      setSedangMemuatSuntingAdmin(false);
      return;
    }

    try {
      const adminRef = doc(database, "admin", idAdmin);
      await updateDoc(adminRef, {
        Nama_Lengkap: namaLengkap,
        Kata_Sandi: kataSandi,
        Email: email,
        Jabatan: jabatan,
      });
      toast.success("Admin berhasil disunting!");
    } catch (error) {
      toast.error("Gagal menyunting Admin: " + error.message);
    } finally {
      setSedangMemuatSuntingAdmin(false);
    }
  };

  useEffect(() => {
    if (idAdmin) {
      ambilDataAdmin();
    } else {
      toast.error("ID Admin tidak valid.");
    }
  }, [idAdmin]);

  return {
    namaLengkap,
    kataSandi,
    email,
    jabatan,
    setNamaLengkap,
    setKataSandi,
    setEmail,
    setJabatan,
    suntingAdmin,
    sedangMemuatSuntingAdmin,
  };
}
