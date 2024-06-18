
import Link from "next/link";

import {
  TbBrandInstagram,
  TbBrandX,
  TbBrandLinkedin,
  TbBrandMeta,
  TbBrandTiktok,
  TbMailFilled,
  TbPhoneFilled,
} from "react-icons/tb";


export default function Footer() {
  return (
    <footer className="w-full bg-transparent text-black font-semibold md:py-12 px-4 md:px-6">
      <div className="container mx-auto flex flex-col items-center justify-center gap-4">
        <nav className="flex flex-wrap justify-center gap-10 text-md">
          <Link href="/" className="hover:text-red-800" prefetch={false}>
            Home
          </Link>
          <Link href="Coaching" className="hover:text-red-800" prefetch={false}>
            Coaching
          </Link>
          <Link href="Programs" className="hover:text-red-800" prefetch={false}>
            Programs
          </Link>
          <Link href="Clients" className="hover:text-red-800" prefetch={false}>
            Clients
          </Link>
          <Link href="About" className="hover:text-red-800" prefetch={false}>
            About
          </Link>
          <Link href="Contact" className="hover:text-red-800" prefetch={false}>
            Contact
          </Link>
        </nav>
        <div className="flex flex-col pt-2 items-center gap-4 text-sm">
          <div className="flex items-center gap-4">
            <Link href="#" className="hover:text-red-800" prefetch={false}>
              <TbBrandInstagram className="h-4 w-4 md:h-6 md:w-6 lg:h-6 lg:w-6" />
            </Link>
            <Link href="#" className="hover:text-red-800" prefetch={false}>
              <TbBrandTiktok className="h-4 w-4 md:h-6 md:w-6 lg:h-6 lg:w-6" />
            </Link>
            <Link href="#" className="hover:text-red-800" prefetch={false}>
              <TbBrandMeta className="h-4 w-4 md:h-6 md:w-6 lg:h-6 lg:w-6" />
            </Link>
            <Link href="#" className="hover:text-red-800" prefetch={false}>
              <TbBrandX className="h-4 w-4 md:h-6 md:w-6 lg:h-6 lg:w-6" />
            </Link>
            <Link href="#" className="hover:text-red-800" prefetch={false}>
              <TbBrandLinkedin className="h-4 w-4 md:h-6 md:w-6 lg:h-6 lg:w-6" />
            </Link>
          </div>
          <div className="flex items-center gap-4 pt-2">
            <div className="flex items-center gap-2 hover:text-red-800">
              <TbMailFilled className="h-4 w-4 md:h-6 md:w-6 lg:h-6 lg:w-6" />
              <span>
                <a href="mailto:kyle@kylewells.com">kyle@kylewells.com</a>
              </span>
            </div>
            <div className="flex items-center gap-2 hover:text-red-800 cursor-copy">
              <TbPhoneFilled className="h-4 w-4 md:h-6 md:w-6 lg:h-6 lg:w-6" />
              <span>(902) 555-5555</span>
            </div>
          </div>
        </div>
        <p className="text-xs pt-2 text-slate-500">
          &copy; 2024 Kyle Wells. All rights reserved.
        </p>
      </div>
    </footer>
  );
}


