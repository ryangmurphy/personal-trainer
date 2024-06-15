"use client";

import Image from "next/image";
import Navbar from "@/components/Navbar";
import Coaching from "@/components/Coaching"
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center">
      <Navbar />
    <Coaching />
      <Footer />
    </main>
  );
}
