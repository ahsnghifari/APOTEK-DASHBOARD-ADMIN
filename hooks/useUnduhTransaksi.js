import { useState } from "react";
import { jsPDF } from "jspdf";
import { toast } from "react-toastify";
// KONSTANTA
import { formatRupiah } from "@/constants/formatRupiah";

const useUnduhTransaksi = () => {
  const [sedangMemuatUnduh, setSedangMemuatUnduh] = useState(false);

  const unduhPDF = (kasirTerpilih) => {
    setSedangMemuatUnduh(true);

    const doc = new jsPDF();
    const paddingLeft = 10;
    const paddingRight = 10;
    const pageWidth = doc.internal.pageSize.getWidth();
    const contentWidth = pageWidth - paddingLeft - paddingRight;
    const columnWidths = [
      contentWidth * 0.4,
      contentWidth * 0.2,
      contentWidth * 0.2,
      contentWidth * 0.2,
    ];
    const rowHeight = 10;
    let yOffset = 20;

    doc.setFont("helvetica", "bold");
    doc.setFontSize(16);
    doc.text("Struk Pembelian", paddingLeft, yOffset);
    yOffset += 15;

    doc.setFont("helvetica", "normal");
    doc.setFontSize(12);
    doc.text("Nama Obat", paddingLeft, yOffset);
    doc.text("Jumlah", paddingLeft + columnWidths[0], yOffset);
    doc.text(
      "Total Harga",
      paddingLeft + columnWidths[0] + columnWidths[1],
      yOffset
    );
    doc.text(
      "Uang Pembeli",
      paddingLeft + columnWidths[0] + columnWidths[1] + columnWidths[2],
      yOffset
    );
    yOffset += rowHeight;

    doc.line(paddingLeft, yOffset, pageWidth - paddingRight, yOffset);
    yOffset += 5;

    doc.setFont("helvetica", "normal");
    doc.text(kasirTerpilih.Nama_Obat, paddingLeft, yOffset);
    doc.text(
      kasirTerpilih.Jumlah_Beli.toString() + " pcs",
      paddingLeft + columnWidths[0],
      yOffset
    );
    doc.text(
      formatRupiah(kasirTerpilih.Total_Harga),
      paddingLeft + columnWidths[0] + columnWidths[1],
      yOffset
    );
    doc.text(
      formatRupiah(kasirTerpilih.Uang_Pembeli),
      paddingLeft + columnWidths[0] + columnWidths[1] + columnWidths[2],
      yOffset
    );
    yOffset += rowHeight;

    doc.line(paddingLeft, yOffset, pageWidth - paddingRight, yOffset);
    yOffset += 5;

    doc.setFont("helvetica", "bold");
    doc.text(
      "Total Pembelian: " + formatRupiah(kasirTerpilih.Total_Harga),
      paddingLeft,
      yOffset
    );
    yOffset += 10;
    doc.text(
      "Uang Pembeli: " + formatRupiah(kasirTerpilih.Uang_Pembeli),
      paddingLeft,
      yOffset
    );
    yOffset += 10;
    doc.text(
      "Kembalian: " + formatRupiah(kasirTerpilih.Kembalian),
      paddingLeft,
      yOffset
    );
    yOffset += 15;

    const tanggal = new Intl.DateTimeFormat("id-ID", {
      day: "2-digit",
      month: "long",
      year: "numeric",
    }).format(new Date());

    const waktu = new Intl.DateTimeFormat("id-ID", {
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
    }).format(new Date());

    const waktuPembelian = `${tanggal}, ${waktu}`;

    doc.setFont("helvetica", "normal");
    doc.text("Waktu Pembelian: " + waktuPembelian, paddingLeft, yOffset);

    doc.save("Transaksi_" + kasirTerpilih.Nama_Obat + ".pdf");

    setSedangMemuatUnduh(false);
    toast.success("File PDF berhasil diunduh!");
  };

  return {
    unduhPDF,
    sedangMemuatUnduh,
    setSedangMemuatUnduh,
  };
};

export default useUnduhTransaksi;
