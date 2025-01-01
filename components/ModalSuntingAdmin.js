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
// KOMPONEN
import Memuat from "@/components/memuat";
// HOOKS
import useSuntingAdmin from "@/hooks/useSuntingAdmin";

const ModalSuntingAdmin = ({ buka, tutup, adminTerpilih }) => {
  const {
    namaLengkap,
    kataSandi,
    email,
    jabatan,
    setNamaLengkap,
    setKataSandi,
    setEmail,
    setJabatan,
    suntingAdmin,
    sedangMemuatSuntingAdmin,
  } = useSuntingAdmin(adminTerpilih);
  return (
    <Dialog open={buka} handler={tutup}>
      <DialogHeader>Sunting Admin</DialogHeader>
      <DialogBody>
        <div className="space-y-4">
          <Input
            id="namaLengkap"
            label="Nama Lengkap"
            type="text"
            placeholder="Masukkan Nama Admin Baru"
            value={namaLengkap}
            onChange={(e) => setNamaLengkap(e.target.value)}
          />

          <Input
            id="kataSandi"
            label="Kata Sandi"
            placeholder="Masukkan Kata Sandi Baru"
            value={kataSandi}
            onChange={(e) => setKataSandi(e.target.value)}
          />
            

          <Input
            id="email"
            label="Email"
            type="email"
            placeholder="Masukkan Email Baru"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <Select
            id="jabatan"
            label="Jabatan"
            placeholder="Masukkan Jabatan Baru"
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
          variant="gradient"
          color="dark"
          onClick={async () => {
            await suntingAdmin();
            tutup(false);
          }}
          disabled={sedangMemuatSuntingAdmin}
          className={`${
            sedangMemuatSuntingAdmin
              ? "opacity-50 cursor-not-allowed"
              : "opacity-100"
          }`}
        >
          {sedangMemuatSuntingAdmin ? <Memuat /> : "Simpan"}
        </Button>
      </DialogFooter>
    </Dialog>
  );
};

export default ModalSuntingAdmin;
