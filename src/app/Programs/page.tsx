"use client";

import Image from "next/image";
import Navbar from "@/components/Navbar";
import Programs from "@/components/Programs";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center">
      <Navbar />
      <Programs />
      <Footer />
    </main>
  );
}
