import React from "react";
import {
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
  Input,
  Select,
  Option,
} from "@material-tailwind/react";
// HOOKS
import useTambahObat from "@/hooks/useTambahObat";
// KOMPONEN
import Memuat from "@/components/memuat";

const ModalTambahObat = ({ buka, tutup }) => {
  const {
    namaObat,
    setNamaObat,
    jenisObat,
    setJenisObat,
    stokObat,
    setStokObat,
    hargaObat,
    setHargaObat,
    sedangMemuatTambahObat,
    tambahObat,
  } = useTambahObat();

  return (
    <Dialog open={buka} handler={tutup}>
      <DialogHeader>Tambah Obat</DialogHeader>
      <DialogBody>
        <div className="space-y-4">
          <Input
            id="namaObat"
            label="Nama Obat"
            type="text"
            placeholder="Masukkan Nama Obat"
            value={namaObat}
            onChange={(e) => setNamaObat(e.target.value)}
          />

          <Select
            id="jenisObat"
            label="Jenis Obat"
            placeholder="Pilih Jenis Obat"
            value={jenisObat}
            onChange={(value) => setJenisObat(value)}
          >
            <Option value="Kapsule">Kapsule</Option>
            <Option value="Tablet">Tablet</Option>
            <Option value="Syrup">Syrup</Option>
          </Select>

          <Input
            id="stokObat"
            label="Stok Obat"
            type="number"
            placeholder="Masukkan Stok Obat"
            value={stokObat}
            onChange={(e) => setStokObat(e.target.value)}
          />

          <Input
            id="hargaObat"
            label="Harga Obat"
            type="number"
            placeholder="Masukkan Harga Obat"
            value={hargaObat}
            onChange={(e) => setHargaObat(e.target.value)}
          />
        </div>
      </DialogBody>
      <DialogFooter>
        <Button
          disabled={sedangMemuatTambahObat}
          variant="gradient"
          color="dark"
          onClick={async () => {
            await tambahObat();
            tutup(false);
          }}
          className={`${
            sedangMemuatTambahObat
              ? "opacity-50 cursor-not-allowed"
              : "opacity-100"
          }`}
        >
          {sedangMemuatTambahObat ? <Memuat /> : "Simpan"}
        </Button>
      </DialogFooter>
    </Dialog>
  );
};

export default ModalTambahObat;
