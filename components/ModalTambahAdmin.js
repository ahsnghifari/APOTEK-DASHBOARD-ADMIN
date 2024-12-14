import React, { useState } from "react";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
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
import useTambahAdmin from "@/hooks/useTambahAdmin";
// KOMPONEN
import Memuat from "@/components/memuat";

const ModalTambahAdmin = ({ buka, tutup }) => {
  const [lihatKataSandi, setLihatKataSandi] = useState(false);
  const {
    namaLengkap,
    setNamaLengkap,
    email,
    setEmail,
    kataSandi,
    setKataSandi,
    jabatan,
    setJabatan,
    sedangMemuatTambahAdmin,
    tambahAdmin,
  } = useTambahAdmin();

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
              placeholder="Masukkan Nama Lengkap"
              value={namaLengkap}
              onChange={(e) => setNamaLengkap(e.target.value)}
            />

            <Input
              id="emailAdmin"
              label="Email"
              type="email"
              placeholder="Masukkan Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />

            <div className="relative">
              <Input
                id="kataSandiAdmin"
                label="Kata Sandi"
                type={lihatKataSandi ? "text" : "password"}
                placeholder="Masukkan Kata Sandi"
                value={kataSandi}
                onChange={(e) => setKataSandi(e.target.value)}
              />
              <div
                className="absolute right-4 top-3 cursor-pointer text-gray-500"
                onClick={() => setLihatKataSandi(!lihatKataSandi)}
              >
                {lihatKataSandi ? (
                  <AiFillEyeInvisible size={20} />
                ) : (
                  <AiFillEye size={20} />
                )}
              </div>
            </div>

            <Select
              id="jabatanAdmin"
              label="Jabatan"
              placeholder="Pilih Jabatan"
              value={jabatan}
              onChange={(value) => setJabatan(value)}
            >
              <Option value="Administrator">Administrator</Option>
              <Option value="Dokter">Dokter</Option>
              <Option value="Apoteker">Apoteker</Option>
            </Select>
          </div>
        </DialogBody>
        <DialogFooter>
          <Button
            disabled={sedangMemuatTambahAdmin}
            variant="gradient"
            color="dark"
            onClick={async () => {
              await tambahAdmin();
              tutup(false);
            }}
            className={`${
              sedangMemuatTambahAdmin
                ? "opacity-50 cursor-not-allowed"
                : "opacity-100"
            }`}
          >
            {sedangMemuatTambahAdmin ? <Memuat /> : "Simpan"}
          </Button>
        </DialogFooter>
      </Dialog>
    </>
  );
};
export default ModalTambahAdmin;
