import { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { toast } from "react-toastify";
import { auth } from "@/lib/firebaseConfig";
import { useRouter } from "next/navigation";

const useMasukDenganEmailKataSandi = () => {
  const pengarah = useRouter();
  const [sedangMemuat, setSedangMemuat] = useState(false);

  const masukDenganEmail = async (email, password) => {
    if (!email || !password) {
      toast.error("Email dan kata sandi tidak boleh kosong.");
      return;
    }

    setSedangMemuat(true);

    try {
      const kredentialsAdmin = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );

      if (kredentialsAdmin.user) {
        const adminId = kredentialsAdmin.user.uid;

        localStorage.setItem("ID_Admin", adminId);
        sessionStorage.setItem("ID_Admin", adminId);

        toast.success("Berhasil masuk!");

        setTimeout(() => {
          pengarah.push("/Beranda");
        }, 3000);
      }
    } catch (error) {
      if (error.code === "auth/user-not-found") {
        toast.error("Email tidak ditemukan. Silakan periksa email Anda.");
      } else if (error.code === "auth/wrong-password") {
        toast.error("Kata sandi salah. Silakan periksa kata sandi Anda.");
      } else if (error.code === "auth/invalid-email") {
        toast.error("Format email tidak valid.");
      } else {
        toast.error("Gagal masuk. Silakan coba lagi.");
      }
    } finally {
      setSedangMemuat(false);
    }
  };

  return {
    masukDenganEmail,
    sedangMemuat,
  };
};

export default useMasukDenganEmailKataSandi;
