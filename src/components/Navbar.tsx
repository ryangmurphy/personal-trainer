import { Sheet, SheetTrigger, SheetContent } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuLink,
} from "@/components/ui/navigation-menu";
import Image from "next/image";
import { JSX, SVGProps } from "react";

export default function Navbar() {
  return (
    <header className="flex h-20 w-full shrink-0 items-center px-4 md:px-6">
      <Sheet>
        <SheetTrigger asChild>
          <Button variant="outline" size="icon" className="lg:hidden">
            <MenuIcon className="h-6 w-6" />
            <span className="sr-only">Toggle navigation menu</span>
          </Button>
        </SheetTrigger>
        <SheetContent side="left">
          <div className="flex w-[150px] items-center justify-start">
            <Link href="/" className="flex items-center" prefetch={false}>
              <Image
                src="/KyleWellsLogo1.png"
                height={150}
                width={150}
                alt=""
                className="h-10 w-10"
              />
              <span className="sr-only">Kyle Wells</span>
            </Link>
          </div>
          <div className="grid gap-2 py-6">
            <Link
              href="/"
              className="flex w-full items-center py-2 text-lg font-semibold"
              prefetch={false}
            >
              Home
            </Link>
            <Link
              href="/Coaching"
              className="flex w-full items-center py-2 text-lg font-semibold"
              prefetch={false}
            >
              Coaching
            </Link>
            <Link
              href="/Programs"
              className="flex w-full items-center py-2 text-lg font-semibold"
              prefetch={false}
            >
              Programs
            </Link>
            <Link
              href="/Clients"
              className="flex w-full items-center py-2 text-lg font-semibold"
              prefetch={false}
            >
              Clients
            </Link>
            <Link
              href="About"
              className="flex w-full items-center py-2 text-lg font-semibold"
              prefetch={false}
            >
              About
            </Link>
            <Link
              href="Contact"
              className="flex w-full items-center py-2 text-lg font-semibold"
              prefetch={false}
            >
              Contact
            </Link>
          </div>
        </SheetContent>
      </Sheet>
      <div className="flex w-full justify-center">
        <div className="flex w-[150px] justify-start">
          <Link href="/" className="flex justify-start" prefetch={false}>
            <Image
              src="/KyleWellsLogo1.png"
              height={150}
              width={150}
              alt="Kyle Wells Logo"
              className=""
            />
            <span className="sr-only">Kyle Wells</span>
          </Link>
        </div>
        <NavigationMenu className="hidden lg:flex">
          <NavigationMenuList className="flex justify-center items-center w-full">
            <NavigationMenuLink asChild>
              <Link
                href="/"
                className="group inline-flex h-9 w-max items-center justify-center rounded-md bg-slate-50 text-slate-950 px-4 py-2 text-sm font-extrabold uppercase transition-colors hover:text-red-800 hover:underline-offset-4 hover:underline hover:bg-slate-100 focus:bg-gray-100 focus:text-gray-900 focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-gray-100/50 data-[state=open]:bg-gray-100/50 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus:bg-gray-800 dark:focus:text-gray-50 dark:data-[active]:bg-gray-800/50 dark:data-[state=open]:bg-gray-800/50"
                prefetch={false}
              >
                Home
              </Link>
            </NavigationMenuLink>
            <NavigationMenuLink asChild>
              <Link
                href="/Coaching"
                className="group inline-flex h-9 w-max items-center justify-center rounded-md bg-slate-50 text-slate-950 px-4 py-2 text-sm font-extrabold uppercase transition-colors hover:text-red-800 hover:underline-offset-4 hover:underline hover:bg-slate-100 focus:bg-gray-100 focus:text-gray-900 focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-gray-100/50 data-[state=open]:bg-gray-100/50 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus:bg-gray-800 dark:focus:text-gray-50 dark:data-[active]:bg-gray-800/50 dark:data-[state=open]:bg-gray-800/50"
                prefetch={false}
              >
                Coaching
              </Link>
            </NavigationMenuLink>
            <NavigationMenuLink asChild>
              <Link
                href="/Programs"
                className="group inline-flex h-9 w-max items-center justify-center rounded-md bg-slate-50 text-slate-950 px-4 py-2 text-sm font-extrabold uppercase transition-colors hover:text-red-800 hover:underline-offset-4 hover:underline hover:bg-slate-100 focus:bg-gray-100 focus:text-gray-900 focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-gray-100/50 data-[state=open]:bg-gray-100/50 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus:bg-gray-800 dark:focus:text-gray-50 dark:data-[active]:bg-gray-800/50 dark:data-[state=open]:bg-gray-800/50"
                prefetch={false}
              >
                Programs
              </Link>
            </NavigationMenuLink>
            <NavigationMenuLink asChild>
              <Link
                href="/Clients"
                className="group inline-flex h-9 w-max items-center justify-center rounded-md bg-slate-50 text-slate-950 px-4 py-2 text-sm font-extrabold uppercase transition-colors hover:text-red-800 hover:underline-offset-4 hover:underline hover:bg-slate-100 focus:bg-gray-100 focus:text-gray-900 focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-gray-100/50 data-[state=open]:bg-gray-100/50 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus:bg-gray-800 dark:focus:text-gray-50 dark:data-[active]:bg-gray-800/50 dark:data-[state=open]:bg-gray-800/50"
                prefetch={false}
              >
                Clients
              </Link>
            </NavigationMenuLink>
            <NavigationMenuLink asChild>
              <Link
                href="/About"
                className="group inline-flex h-9 w-max items-center justify-center rounded-md bg-slate-50 text-slate-950 px-4 py-2 text-sm font-extrabold uppercase transition-colors hover:text-red-800 hover:underline-offset-4 hover:underline hover:bg-slate-100 focus:bg-gray-100 focus:text-gray-900 focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-gray-100/50 data-[state=open]:bg-gray-100/50 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus:bg-gray-800 dark:focus:text-gray-50 dark:data-[active]:bg-gray-800/50 dark:data-[state=open]:bg-gray-800/50"
                prefetch={false}
              >
                About
              </Link>
            </NavigationMenuLink>
          </NavigationMenuList>
        </NavigationMenu>
      </div>
      <div className="ml-auto flex space-x-4">
        <Link
          href="/Contact"
          className="inline-flex h-9 w-max items-center justify-center rounded-md border-slate-300 bg-gradient-to-r from-slate-800 to-slate-900 hover:from-red-700 hover:to-red-800 px-4 py-2 text-sm font-medium text-slate-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
          prefetch={false}
        >
          Contact
        </Link>
        {/*
        <Link
          href="#"
          className="inline-flex h-9 w-max items-center justify-center rounded-md bg-gray-900 px-4 py-2 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
          prefetch={false}
        >
          Sign Up
        </Link>
        <Link
          href="#"
          className="inline-flex h-9 w-max items-center justify-center rounded-md bg-gray-900 px-4 py-2 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
          prefetch={false}
        >
          Login
        </Link> */}
      </div>
    </header>
  );
}

function MenuIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="4" x2="20" y1="12" y2="12" />
      <line x1="4" x2="20" y1="6" y2="6" />
      <line x1="4" x2="20" y1="18" y2="18" />
    </svg>
  );
}
