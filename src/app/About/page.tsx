"use client";

import Image from "next/image";
import Navbar from "@/components/Navbar";
import About from "@/components/About";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center">
      <Navbar />
      <About />
      <Footer />
    </main>
  );
}
