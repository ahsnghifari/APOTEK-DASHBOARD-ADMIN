// src/hooks/useTambahAdmin.js
import { useState } from "react";
import { collection, doc, setDoc, serverTimestamp } from "firebase/firestore";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { toast } from "react-toastify";
import { database, auth } from "@/lib/firebaseConfig";

const useTambahAdmin = () => {
  const [loading, setLoading] = useState(false);

  const tambahAdmin = async (namaLengkap, email, kataSandi, jabatan) => {
    setLoading(true);
    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        kataSandi
      );
      const user = userCredential.user;

      await setDoc(doc(collection(database, "admin"), user.uid), {
        Nama_Lengkap: namaLengkap,
        Email: email,
        Jabatan: jabatan,
        createdAt: serverTimestamp(),
      });

      toast.success("Admin berhasil ditambahkan!");
      setLoading(false);
    } catch (error) {
      toast.error("Terjadi kesalahan: " + error.message);
      setLoading(false);
    }
  };

  return { tambahAdmin, loading };
};

export default useTambahAdmin;
