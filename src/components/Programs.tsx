
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";


export default function Programs() {
  return (
    <div className="flex flex-col min-h-[100dvh]">
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
            <Image
              src="/cbum-workout.png"
              width="550"
              height="550"
              alt="Fitness Programs"
              className="mx-auto aspect-video overflow-hidden rounded-xl object-cover sm:w-full lg:order-last lg:aspect-square"
            />
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                  Reach Your Fitness Goals with My Programs
                </h1>
                <p className="max-w-[600px] text-slate-600 md:text-xl dark:text-gray-400">
                  Discover the perfect fitness program to transform your body
                  and improve your overall health. Our expert-designed plans
                  will help you achieve your goals.
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Link
                  href="#"
                  className="inline-flex h-10 items-center justify-center rounded-md bg-gray-900 px-8 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
                  prefetch={false}
                >
                  Buy Now
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="w-full py-12 md:py-24 lg:py-32 bg-slate-200 rounded-lg dark:bg-gray-800">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                Training Programs
              </h2>
              <p className="max-w-[900px] text-slate-600 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                Choose from our wide range of fitness programs designed to help
                you achieve your goals, whether you&apos;re a beginner or an
                experienced athlete.
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 py-12 sm:grid-cols-2 lg:grid-cols-3">
            <div className="flex flex-col rounded-lg bg-white p-6 shadow-sm transition-all hover:scale-105 hover:shadow-md dark:bg-gray-950 dark:hover:shadow-lg">
              <Image
                src=""
                width="300"
                height="200"
                alt="Aesthetic Training"
                className="mx-auto aspect-video overflow-hidden rounded-lg object-cover"
              />
              <div className="mt-4 space-y-2">
                <h3 className="text-xl font-bold">Strength Training</h3>
                <p className="text-slate-600 dark:text-gray-400 pb-4">
                  Build muscle, increase strength, and improve overall fitness
                  with our expert-designed strength training program.
                </p>
              </div>
              <Link href="/Programs/Program1">
                <Button size="sm" variant="default">
                  Buy Now
                </Button>
              </Link>
            </div>
            <div className="flex flex-col rounded-lg bg-white p-6 shadow-sm transition-all hover:scale-105 hover:shadow-md dark:bg-gray-950 dark:hover:shadow-lg">
              <Image
                src=""
                width="300"
                height="200"
                alt="Cardio Blast"
                className="mx-auto aspect-video overflow-hidden rounded-lg object-cover"
              />
              <div className="mt-4 space-y-2">
                <h3 className="text-xl font-bold">Men&apos;s Training</h3>
                <p className="text-slate-600 dark:text-gray-400 pb-4">
                  Build muscle, increase strength, and improve overall fitness
                  with our expert-designed strength training program.
                </p>
              </div>
              <Button size="xs" variant="default">
                Buy Now
              </Button>
            </div>
            <div className="flex flex-col rounded-lg bg-white p-6 shadow-sm transition-all hover:scale-105 hover:shadow-md dark:bg-gray-950 dark:hover:shadow-lg">
              <Image
                src=""
                width="300"
                height="200"
                alt="Yoga Flow"
                className="mx-auto aspect-video overflow-hidden rounded-lg object-cover"
              />
              <div className="mt-4 space-y-2">
                <h3 className="text-xl font-bold">Women&apos;s Training</h3>
                <p className="text-slate-600 dark:text-gray-400 pb-4">
                  Build muscle, increase strength, and improve overall fitness
                  with our expert-designed strength training program.
                </p>
              </div>
              <Button size="xs" variant="default">
                Buy Now
              </Button>
            </div>
          </div>
        </div>
      </section>
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                What My Clients Say
              </h2>
              <p className="max-w-[900px] text-slate-600 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                Hear from real people who have transformed their bodies and
                lives with my fitness programs.
              </p>
            </div>
            <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 py-12 sm:grid-cols-2 lg:grid-cols-3">
              <div className="flex flex-col rounded-lg bg-slate-300 p-6 shadow-sm transition-all hover:scale-105 hover:shadow-md dark:bg-gray-950 dark:hover:shadow-lg">
                <div className="mb-4 flex items-center justify-center space-x-4">
                  <div>
                    <h4 className="text-lg font-bold">John Doe</h4>
                    <p className="text-slate-600 dark:text-gray-400">
                      Strength Training Client
                    </p>
                  </div>
                </div>
                <p className="text-slate-600 dark:text-gray-400">
                  &quot;I&apos;ve been using the Strength Training program for 6
                  months\n and I&apos;ve seen incredible results. The workouts
                  are challenging\n but effective, and the support from the
                  trainers has been\n invaluable.&quot;
                </p>
              </div>
              <div className="flex flex-col rounded-lg bg-slate-300 p-6 shadow-sm transition-all hover:scale-105 hover:shadow-md dark:bg-gray-950 dark:hover:shadow-lg">
                <div className="mb-4 flex items-center justify-center space-x-4">
                  <div className="text-center">
                    <h4 className="text-lg font-bold">Jane Smith</h4>
                    <p className="text-slate-600 dark:text-gray-400">
                      Cardio Blast Client
                    </p>
                  </div>
                </div>
                <p className="text-slate-600 dark:text-gray-400">
                  &quot;The Cardio Blast program has completely transformed my\n
                  fitness level. I&apos;ve never felt more energized and
                  confident.\n The workouts are challenging but the results
                  speak for\n themselves.&quot;
                </p>
              </div>
              <div className="flex flex-col rounded-lg bg-slate-300 p-6 shadow-sm transition-all hover:scale-105 hover:shadow-md dark:bg-gray-950 dark:hover:shadow-lg">
                <div className="mb-4 flex items-center justify-center space-x-4">
                  <div>
                    <h4 className="text-lg font-bold">Bob Johnson</h4>
                    <p className="text-slate-600 dark:text-gray-400">
                      Yoga Flow Client
                    </p>
                  </div>
                </div>
                <p className="text-slate-600 dark:text-gray-400">
                  &quot;The Yoga Flow program has been a game-changer for me.
                  Not\n only has it improved my flexibility and balance, but
                  it&apos;s also\n helped me manage my stress and improve my
                  overall well-being.&quot;
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

