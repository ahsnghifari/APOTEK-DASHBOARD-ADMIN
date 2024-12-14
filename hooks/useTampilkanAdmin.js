import { useState, useEffect } from "react";
import { collection, getDocs } from "firebase/firestore";
// PERPUSTAKAAN KAMI
import { database } from "@/lib/firebaseConfig";

const useTampilkanAdmin = () => {
  const [sedangMemuatTampilkanAdmin, setSedangMemuatTampilkanAdmin] =
    useState(false);
  const [daftarAdmin, setDaftarAdmin] = useState([]);

  const ambilDataAdmin = async () => {
    setSedangMemuatTampilkanAdmin(true);
    try {
      const querySnapshot = await getDocs(collection(database, "admin"));
      const dataAdmin = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));

      setDaftarAdmin(dataAdmin);
    } catch (error) {
      console.error("Error mengambil data admin:", error);
    } finally {
      setSedangMemuatTampilkanAdmin(false);
    }
  };

  useEffect(() => {
    ambilDataAdmin();
  }, []);

  return {
    sedangMemuatTampilkanAdmin,
    daftarAdmin,
  };
};

export default useTampilkanAdmin;
