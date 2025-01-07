import { useRouter } from "next/navigation";
import { toast } from "react-toastify";
import { useState } from "react";

const useKeluarAdmin = () => {
  const router = useRouter();
  const [sedangMemuatKeluar, setSedangMemuatKeluar] = useState(false);

  const keluar = () => {
    setSedangMemuatKeluar(true);
    sessionStorage.removeItem("ID_Admin");
    localStorage.removeItem("ID_Admin");
    toast.success("Berhasil Keluar");
    router.push("/");
    setSedangMemuatKeluar(false);
  };

  return { keluar, sedangMemuatKeluar, setSedangMemuatKeluar };
};

export default useKeluarAdmin;
