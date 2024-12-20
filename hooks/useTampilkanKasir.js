import { useState, useEffect } from "react";
import { collection, getDocs } from "firebase/firestore";
// PERPUSTAKAAN KAMI
import { database } from "@/lib/firebaseConfig";

const useTampilkanKasir = () => {
  const [sedangMemuatTampilkanKasir, setSedangMemuatTampilkanKasir] =
    useState(false);
  const [daftarKasir, setDaftarKasir] = useState([]);

  const ambilDataKasir = async () => {
    setSedangMemuatTampilkanKasir(true);
    try {
      const querySnapshot = await getDocs(collection(database, "kasir"));
      const dataKasir = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));

      setDaftarKasir(dataKasir);
    } catch (error) {
      console.error("Error mengambil data kasir:", error);
    } finally {
      setSedangMemuatTampilkanKasir(false);
    }
  };

  useEffect(() => {
    ambilDataKasir();
  }, []);

  return {
    sedangMemuatTampilkanKasir,
    daftarKasir,
  };
};

export default useTampilkanKasir;
