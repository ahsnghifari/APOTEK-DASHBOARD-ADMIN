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

const ModalTambahAdmin = ({ buka, tutup, simpan }) => {
  return (
    <>
      <Dialog open={buka} handler={tutup}>
        <DialogHeader>Tambah Admin</DialogHeader>
        <DialogBody>
          <div className="space-y-4">
            <Input
              id="namaAdmin"
              label="Nama Lengkap"
              type="text"
              placeholder="Masukkan nama admin"
            />

            <Input
              id="emailAdmin"
              label="Email"
              type="email"
              placeholder="Masukkan email admin"
            />

            <Select
              id="jabatanAdmin"
              label="Jabatan"
              placeholder="Pilih jabatan admin"
            >
              <Option value="Administrator">Administrator</Option>
              <Option value="Dokter">Dokter</Option>
              <Option value="Apoteker">Apoteker</Option>
            </Select>
          </div>
        </DialogBody>
        <DialogFooter>
          <Button variant="gradient" color="green" onClick={simpan}>
            <span>Simpan</span>
          </Button>
        </DialogFooter>
      </Dialog>
    </>
  );
};
export default ModalTambahAdmin;
