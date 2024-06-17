
import Link from "next/link";

export default function OnlineCoaching() {
  return (
    <div className="flex flex-col min-h-[100dvh] bg-slate-50">
      <main className="flex-1">
        <section className="w-full py-12 sm:py-16 md:py-24 lg:py-32 xl:py-40">
          <div className="container px-4 md:px-6">
            <div className="mx-auto max-w-3xl text-center">
              <div className="space-y-4">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl">
                  Unlock Your Potential with Online Coaching
                </h1>
                <p className="text-slate-500 md:text-xl dark:text-slate-400">
                  Get personalized guidance and support to achieve your goals.
                </p>
              </div>
              <div className="mt-8">
                <Link
                  href="#"
                  className="inline-flex h-10 items-center justify-center rounded-md bg-slate-900 px-6 text-sm font-medium text-slate-50 shadow transition-colors hover:bg-slate-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-slate-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-slate-50 dark:text-slate-900 dark:hover:bg-slate-50/90 dark:focus-visible:ring-slate-300"
                  prefetch={false}
                >
                  Book a Call
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
