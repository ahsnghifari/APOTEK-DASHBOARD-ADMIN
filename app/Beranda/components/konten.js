import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";
import { FaCashRegister } from "react-icons/fa6";
import {
  Input,
  Card,
  Typography,
  Button,
  CardBody,
  CardHeader,
  CardFooter,
} from "@material-tailwind/react";
// HOOKS
import useTampilkanObat from "@/hooks/useTampilkanObat";
import useTambahkanKasir from "@/hooks/useTambahkanKasir";
// KOMPONEN
import Memuat from "@/components/memuat";

function Beranda() {
  const [pencarianObat, setPencarianObat] = useState("");
  const [jumlahBeli, setJumlahBeli] = useState(1);
  const [uangPembeli, setUangPembeli] = useState(0);
  const [kembalian, setKembalian] = useState(0);

  const { daftarObat } = useTampilkanObat();
  const { simpanTransaksi, memuatTransaksi } = useTambahkanKasir();

  const obatYangDitemukan = daftarObat.find((obat) =>
    obat.Nama_Obat.toLowerCase().includes(pencarianObat.toLowerCase())
  );

  const namaObat = obatYangDitemukan
    ? obatYangDitemukan.Nama_Obat
    : "Obat Tidak Ditemukan";
  const hargaObat = obatYangDitemukan ? obatYangDitemukan.Harga_Obat : 0;
  const totalHarga = hargaObat * jumlahBeli;

  const handleUangPembeliChange = (event) => {
    const uang = event.target.value;
    setUangPembeli(uang);
    setKembalian(uang - totalHarga);
  };

  const handlePencarian = (event) => {
    setPencarianObat(event.target.value);
  };

  const handleSelesaikanTransaksi = () => {
    if (obatYangDitemukan) {
      simpanTransaksi(namaObat, jumlahBeli, totalHarga, uangPembeli, kembalian);
    } else {
      alert("Obat tidak ditemukan!");
    }
  };

  return (
    <div className="w-full h-full p-6 bg-gray-500 bg-opacity-25 rounded-xl my-8">
      <div className="mt-6">
        <div className="relative">
          <Input
            type="text"
            label="Cari Obat"
            value={pencarianObat}
            onChange={handlePencarian}
            className="text-black bg-white w-20"
            color="black"
          />
          <FaSearch className="absolute top-3 right-4 text-black" size={20} />
        </div>
      </div>

      <div className="mt-8">
        <Card className="w-20 md:w-2/3 mx-auto shadow-lg">
          <CardHeader
            floated={false}
            className="w-20 h-20 self-center rounded-full flex items-center justify-center bg-gray-700"
          >
            <FaCashRegister size={30} className="text-white" />
          </CardHeader>

          <CardBody className="text-center">
            <Typography variant="h5" color="gray" className="mb-2">
              Kasir
            </Typography>
            <div className="space-y-4">
              <Typography color="black">Nama Obat: {namaObat}</Typography>
              <Typography color="black">Harga Obat: Rp {hargaObat}</Typography>
              <div>
                <Input
                  type="number"
                  min="1"
                  label="Jumlah Beli"
                  value={jumlahBeli}
                  onChange={(e) => setJumlahBeli(e.target.value)}
                  color="green"
                  className="text-gray-800 w-32 mx-auto"
                />
              </div>
              <Typography color="black">
                Total Harga: Rp {totalHarga}
              </Typography>

              <div>
                <Input
                  type="number"
                  label="Uang Pembeli"
                  value={uangPembeli}
                  onChange={handleUangPembeliChange}
                  color="green"
                  className="text-gray-800 w-32 mx-auto"
                />
              </div>
              <Typography color="black">Kembalian: Rp {kembalian}</Typography>
            </div>
          </CardBody>

          <CardFooter className="flex items-center justify-center">
            <Button
              className="bg-gray-700"
              onClick={handleSelesaikanTransaksi}
              disabled={memuatTransaksi}
            >
              {memuatTransaksi ? <Memuat /> : "Selesaikan Transaksi"}
            </Button>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
}

export default Beranda;
