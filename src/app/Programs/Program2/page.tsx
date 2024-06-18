"use client";

import Image from "next/image";
import Navbar from "@/components/Navbar";
import Program1 from "@/components/Program1";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center bg-slate-50">
      <Navbar />
      <Program1 />
      <Footer />
    </main>
  );
}
