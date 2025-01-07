import { useState } from "react";
import { doc, deleteDoc } from "firebase/firestore";
import { toast } from "react-toastify";
// PERPUSTAKAAN KAMI
import { database } from "@/lib/firebaseConfig";
const useHapusKasir = () => {
  const [sedangMemuatHapus, setSedangMemuatHapus] = useState(false);
  const [pesanError, setPesanError] = useState(null);
  const hapusKasir = async (idKasir) => {
    setSedangMemuatHapus(true);
    setPesanError(null);
    try {
      const docRef = doc(database, "kasir", idKasir);
      await deleteDoc(docRef);
      console.log(`Kasir dengan ID ${idKasir} berhasil dihapus.`);
      toast.success("Kasir berhasil dihapus");
    } catch (error) {
      console.error("Gagal menghapus Kasir:", error);
      toast.error("Gagal menghapus Kasir!");
    } finally {
      setSedangMemuatHapus(false);
    }
  };
  return {
    sedangMemuatHapus,
    pesanError,
    hapusKasir,
  };
};
export default useHapusKasir;
