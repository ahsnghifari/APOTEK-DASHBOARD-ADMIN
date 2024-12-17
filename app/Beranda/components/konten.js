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

function Beranda() {
  const [pencarianObat, setPencarianObat] = useState("");
  const [jumlahBeli, setJumlahBeli] = useState(1);
  const [uangPembeli, setUangPembeli] = useState(0);
  const [kembalian, setKembalian] = useState(0);

  const namaObat = "Paracetamol";
  const hargaObat = 5000;

  const totalHarga = hargaObat * jumlahBeli;

  const handleUangPembeliChange = (event) => {
    const uang = event.target.value;
    setUangPembeli(uang);
    setKembalian(uang - totalHarga);
  };

  const handlePencarian = (event) => {
    setPencarianObat(event.target.value);
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
            className="text-black"
            color="black"
          />
          <FaSearch className="absolute top-3 right-4 text-black" size={20} />
        </div>
      </div>

      <div className="mt-8">
        <Card className="w-full md:w-2/3 mx-auto shadow-lg">
          <CardHeader
            color="green"
            floated={false}
            className="flex items-center justify-center"
          >
            <FaCashRegister size={50} className="text-white" />
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
            <Button color="green">Selesaikan Transaksi</Button>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
}

export default Beranda;
