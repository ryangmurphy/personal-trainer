
import Link from "next/link";
import Image from "next/image"

export default function Hero() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100">
      <div className="container grid gap-6 px-4 md:px-6 lg:grid-cols-2 lg:gap-12">
        <div className="flex flex-col justify-center space-y-4">
          <div className="space-y-2">
            <h1 className="text-3xl font-bold text-red-800 tracking-tighter sm:text-5xl xl:text-6xl/none">
              Kyle Wells
            </h1>
            <h2 className="text-3xl font-extrabold tracking-tighter sm:text-5xl xl:text-6xl/none">
              Professional
            </h2>
            <h2 className="text-3xl text-red-800 font-extrabold tracking-tighter sm:text-5xl xl:text-6xl/none">
              Personal Trainer
            </h2>
            <p className="max-w-[600px] text-gray-500 font-semibold md:text-xl dark:text-gray-400">
              Personalized training programs to help you achieve your fitness
              goals. Get started with a free consultation.
            </p>
          </div>
          <Link
            href="#"
            className="inline-flex h-9 w-36 items-center justify-center rounded-lg bg-[#000000] text-sm font-medium text-gray-50 shadow transition-colors hover:bg-red-800 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#ff6b6b] disabled:pointer-events-none disabled:opacity-50 dark:bg-[#ff6b6b] dark:text-gray-900 dark:hover:bg-[#ff4d4d]/90 dark:focus-visible:ring-[#ff6b6b]"
            prefetch={false}
          >
            Book Consultation
          </Link>
        </div>
        <Image
          src="/cbum.jpg"
          alt="Landscape picture"
          width={1200}
          height={800}
          className="mx-auto aspect-[4/3] w-full overflow-hidden rounded-xl object-cover sm:w-[550px]"
        />
      </div>
    </section>
  );
}
