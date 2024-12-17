import { useState } from "react";
import { doc, deleteDoc } from "firebase/firestore";
import { toast } from "react-toastify";
// PERPUSTAKAAN KAMI
import { database } from "@/lib/firebaseConfig";
const useHapusAdmin = () => {
  const [sedangMemuatHapus, setSedangMemuatHapus] = useState(false);
  const [pesanError, setPesanError] = useState(null);
  const hapusAdmin = async (idAdmin) => {
    setSedangMemuatHapus(true);
    setPesanError(null);
    try {
      const docRef = doc(database, "admin", idAdmin);
      await deleteDoc(docRef);
      console.log(`Admin dengan ID ${idAdmin} berhasil dihapus.`);
      toast.success("Admin berhasil dihapus");
    } catch (error) {
      console.error("Gagal menghapus admin:", error);
      toast.error("Gagal menghapus admin!");
    } finally {
      setSedangMemuatHapus(false);
    }
  };
  return {
    sedangMemuatHapus,
    pesanError,
    hapusAdmin,
  };
};
export default useHapusAdmin;
