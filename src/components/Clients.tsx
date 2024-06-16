import Link from "next/link";
import Image from "next/image";
import BeforeAfterSlider from "@/components/BeforeAfterSlider";

export default function Clients() {
  return (
    <div>
      <section className="w-full py-12 bg-slate-600 rounded-lg  md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center  justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold text-slate-50 tracking-tighter sm:text-5xl md:text-6xl">
                Client Transformations
              </h1>
              <p className="max-w-[700px] text-slate-200 md:text-xl dark:text-gray-400">
                Discover the incredible results my clients have achieved through
                my fitness programs.
              </p>
            </div>
            <Link
              href="#"
              className="inline-flex h-10 items-center justify-center rounded-md bg-gray-900 px-8 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
              prefetch={false}
            >
              Get Started
            </Link>
          </div>
        </div>
      </section>
      <section
        id="transformations"
        className="w-full py-12 mb-4 md:py-24 lg:py-32 rounded-lg dark:bg-gray-800"
      >
        <div className="container grid grid-cols-1 gap-6 px-4 md:grid-cols-2 lg:grid-cols-3 md:px-6">
          <div className="overflow-hidden rounded-lg bg-slate-600 shadow-sm transition-all hover:scale-[1.02] hover:shadow-md dark:bg-gray-950 dark:hover:shadow-lg">
            <div className="grid grid-cols-2">
              <BeforeAfterSlider
                beforeImage="/before.webp"
                afterImage="/after.jpg"
                alt=""
              />
            </div>
            <div className="p-4">
              <h3 className="text-xl text-slate-50 font-bold">John Doe</h3>
              <p className="text-slate-200 dark:text-slate-400">
                "I never thought I could achieve these results, but the\n
                program at this gym has truly transformed my life."
              </p>
            </div>
          </div>
          <div className="overflow-hidden rounded-lg bg-slate-600 shadow-sm transition-all hover:scale-[1.02] hover:shadow-md dark:bg-gray-950 dark:hover:shadow-lg">
            <div className="grid grid-cols-2">
              <BeforeAfterSlider
                beforeImage="/before.webp"
                afterImage="/after.jpg"
                alt=""
              />
            </div>
            <div className="p-4">
              <h3 className="text-xl text-slate-50 font-bold">John Doe</h3>
              <p className="text-slate-200 dark:text-slate-400">
                "I'm so grateful for the support and guidance I received at\n
                this gym. It has truly changed my life."
              </p>
            </div>
          </div>
          <div className="overflow-hidden rounded-lg bg-slate-600 shadow-sm transition-all hover:scale-[1.02] hover:shadow-md dark:bg-gray-950 dark:hover:shadow-lg">
            <div className="grid grid-cols-2">
              <BeforeAfterSlider
                beforeImage="/before.webp"
                afterImage="/after.jpg"
                alt=""
              />
            </div>
            <div className="p-4">
              <h3 className="text-xl text-slate-50 font-bold">John Doe</h3>
              <p className="text-slate-200 dark:text-slate-400">
                "I never thought I could get in shape, but this gym proved me\n
                wrong. I'm so proud of my transformation."
              </p>
            </div>
          </div>
          <div className="overflow-hidden rounded-lg bg-slate-600 shadow-sm transition-all hover:scale-[1.02] hover:shadow-md dark:bg-gray-950 dark:hover:shadow-lg">
            <div className="grid grid-cols-2">
              <BeforeAfterSlider
                beforeImage="/before.webp"
                afterImage="/after.jpg"
                alt=""
              />
            </div>
            <div className="p-4">
              <h3 className="text-xl text-slate-50 font-bold">John Doe</h3>
              <p className="text-slate-200 dark:text-slate-400">
                "I never thought I could achieve these results, but the\n
                program at this gym has truly transformed my life."
              </p>
            </div>
          </div>
          <div className="overflow-hidden rounded-lg bg-slate-600 shadow-sm transition-all hover:scale-[1.02] hover:shadow-md dark:bg-gray-950 dark:hover:shadow-lg">
            <div className="grid grid-cols-2">
              <BeforeAfterSlider
                beforeImage="/before.webp"
                afterImage="/after.jpg"
                alt=""
              />
            </div>
            <div className="p-4">
              <h3 className="text-xl text-slate-50 font-bold">John Doe</h3>
              <p className="text-slate-200 dark:text-slate-400">
                "I'm so grateful for the support and guidance I received at\n
                this gym. It has truly changed my life."
              </p>
            </div>
          </div>
          <div className="overflow-hidden rounded-lg bg-slate-600 shadow-sm transition-all hover:scale-[1.02] hover:shadow-md dark:bg-gray-950 dark:hover:shadow-lg">
            <div className="grid grid-cols-2">
              <BeforeAfterSlider
                beforeImage="/before.webp"
                afterImage="/after.jpg"
                alt=""
              />
            </div>
            <div className="p-4">
              <h3 className="text-xl text-slate-50 font-bold">John Doe</h3>
              <p className="text-slate-200 dark:text-slate-400">
                "I never thought I could get in shape, but this gym proved me\n
                wrong. I'm so proud of my transformation."
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
