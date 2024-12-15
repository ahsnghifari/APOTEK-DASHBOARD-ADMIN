import { useState, useEffect } from "react";
import { collection, getDocs } from "firebase/firestore";
// PERPUSTAKAAN KAMI
import { database } from "@/lib/firebaseConfig";

const useTampilkanObat = () => {
  const [sedangMemuatTampilkanObat, setSedangMemuatTampilkanObat] =
    useState(false);
  const [daftarObat, setDaftarObat] = useState([]);

  const ambilDataObat = async () => {
    setSedangMemuatTampilkanObat(true);
    try {
      const querySnapshot = await getDocs(collection(database, "obat"));
      const dataObat = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));

      setDaftarObat(dataObat);
    } catch (error) {
      console.error("Error mengambil data obat:", error);
    } finally {
      setSedangMemuatTampilkanObat(false);
    }
  };

  useEffect(() => {
    ambilDataObat();
  }, []);

  return {
    sedangMemuatTampilkanObat,
    daftarObat,
  };
};

export default useTampilkanObat;
