import { useState } from "react";
import { doc, deleteDoc } from "firebase/firestore";
import { toast } from "react-toastify";
// PERPUSTAKAAN KAMI
import { database } from "@/lib/firebaseConfig";
const useHapusObat = () => {
  const [sedangMemuatHapus, setSedangMemuatHapus] = useState(false);
  const [pesanError, setPesanError] = useState(null);
  const hapusObat = async (idObat) => {
    setSedangMemuatHapus(true);
    setPesanError(null);
    try {
      const docRef = doc(database, "obat", idObat);
      await deleteDoc(docRef);
      console.log(`Obat dengan ID ${idObat} berhasil dihapus.`);
      toast.success("Obat berhasil dihapus");
    } catch (error) {
      console.error("Gagal menghapus Obat:", error);
      toast.error("Gagal menghapus Obat!");
    } finally {
      setSedangMemuatHapus(false);
    }
  };
  return {
    sedangMemuatHapus,
    pesanError,
    hapusObat,
  };
};
export default useHapusObat;
