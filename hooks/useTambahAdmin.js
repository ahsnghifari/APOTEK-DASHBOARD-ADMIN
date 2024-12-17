import { useState } from "react";
import {
  collection,
  doc,
  setDoc,
  query,
  where,
  getDocs,
  serverTimestamp,
} from "firebase/firestore";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { toast } from "react-toastify";
import { database, auth } from "@/lib/firebaseConfig";

const useTambahAdmin = () => {
  const [namaLengkap, setNamaLengkap] = useState("");
  const [email, setEmail] = useState("");
  const [kataSandi, setKataSandi] = useState("");
  const [jabatan, setJabatan] = useState("");
  const [sedangMemuatTambahAdmin, setSedangMemuatTambahAdmin] = useState(false);

  const tambahAdmin = async () => {
    if (!namaLengkap || !email || !kataSandi) {
      toast.error("Semua field wajib diisi!");
      return;
    }

    setSedangMemuatTambahAdmin(true);

    try {
      const adminCollection = collection(database, "admin");
      const emailQuery = query(adminCollection, where("Email", "==", email));
      const emailSnapshot = await getDocs(emailQuery);

      if (!emailSnapshot.empty) {
        toast.error("Email sudah terdaftar!");
        setSedangMemuatTambahAdmin(false);
        return;
      }

      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        kataSandi
      );
      const userId = userCredential.user.uid;

      const adminRef = doc(adminCollection, userId);
      await setDoc(adminRef, {
        Nama_Lengkap: namaLengkap,
        Email: email,
        Kata_Sandi: kataSandi,
        Jabatan: jabatan,
        Tanggal_Dibuat: serverTimestamp(),
      });

      toast.success("Admin berhasil ditambahkan!");

      setNamaLengkap("");
      setEmail("");
      setKataSandi("");
      setJabatan("");
    } catch (error) {
      if (error.code === "auth/email-already-in-use") {
        toast.error("Email sudah digunakan untuk akun lain.");
      } else if (error.code === "auth/weak-password") {
        toast.error("Kata sandi terlalu lemah.");
      } else {
        console.error("Gagal menambahkan admin:", error);
        toast.error("Terjadi kesalahan saat menambahkan admin.");
      }
    } finally {
      setSedangMemuatTambahAdmin(false);
    }
  };

  return {
    namaLengkap,
    setNamaLengkap,
    email,
    setEmail,
    kataSandi,
    setKataSandi,
    jabatan,
    setJabatan,
    sedangMemuatTambahAdmin,
    tambahAdmin,
  };
};

export default useTambahAdmin;
