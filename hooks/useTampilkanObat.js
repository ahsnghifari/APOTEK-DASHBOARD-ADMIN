import { useState, useEffect } from "react";
import { collection, getDocs, query, where } from "firebase/firestore";
// PERPUSTAKAAN KAMI
import { database } from "@/lib/firebaseConfig";

const useTampilkanObat = (pencarianObat) => {
  const [sedangMemuatTampilkanObat, setSedangMemuatTampilkanObat] =
    useState(false);
  const [daftarObat, setDaftarObat] = useState([]);

  const ambilDataObat = async () => {
    setSedangMemuatTampilkanObat(true);
    try {
      const obatRef = collection(database, "obat");
      let obatQuery;

      if (pencarianObat) {
        obatQuery = query(
          obatRef,
          where("Nama_Obat", ">=", pencarianObat),
          where("Nama_Obat", "<=", pencarianObat + "\uf8ff")
        );
      } else {
        obatQuery = obatRef;
      }

      const querySnapshot = await getDocs(obatQuery);
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
  }, [pencarianObat]); // Memanggil ulang ketika pencarian berubah

  return {
    sedangMemuatTampilkanObat,
    daftarObat,
  };
};

export default useTampilkanObat;
