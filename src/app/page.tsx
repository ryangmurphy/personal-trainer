"use client"

import Image from "next/image";
import Navbar from "@/components/Navbar"
import Hero from "@/components/Hero";
import HeroAbout from "@/components/HeroAbout"
import HeroServices from "@/components/HeroServices";
import HeroTransformation from "@/components/HeroTransformation";
import Faq from "@/components/Faq"
import Footer from "@/components/Footer"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center bg-slate-50">
      <Navbar />
      <Hero />
      <HeroAbout />
      <HeroServices />
      <HeroTransformation />
      <Faq />
      <Footer />
    </main>
  );
}
