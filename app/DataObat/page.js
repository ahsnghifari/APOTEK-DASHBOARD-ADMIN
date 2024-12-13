"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
// KOMPONEN KAMI
import Sidebar from "@/components/sidebar";
import Konten from "@/app/DataObat/components/konten";

const DataObat = () => {
  const pengarah = useRouter();

  return (
    <section className="p-4 flex h-screen bg-[#eff0f3]">
      <Sidebar pengarah={pengarah} />
      <div className="flex flex-col flex-1 gap-4 mx-3">
        <Konten />
      </div>
    </section>
  );
};

export default DataObat;
