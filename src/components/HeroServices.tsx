import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";


export default function HeroServices() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-slate-200 dark:bg-gray-800">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Time to Make a
              <span className="font-bold text-red-800"> Change</span>
            </h2>
            <p className="max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
              Personalized Services to Optimize Your Goals
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 py-12 sm:grid-cols-2 lg:gap-10">
          <div className="flex flex-col items-center space-y-4 rounded-lg bg-white p-6 shadow-md transition-all hover:scale-105 hover:shadow-lg dark:bg-gray-950 dark:text-gray-50">
            <Image
              src="/coaching.webp"
              width={300}
              height={200}
              alt="Consulting"
              className="w-full rounded-lg object-cover aspect-[4/3]"
            />
            <h3 className="text-xl font-bold">Coaching</h3>
            <p className="text-gray-500 text-center dark:text-gray-400">
              Personalized coaching that goes with your lifestyle.
            </p>
            <Button >Enroll Now</Button>
          </div>
          <div className="flex flex-col items-center space-y-4 rounded-lg bg-white p-6 shadow-md transition-all hover:scale-105 hover:shadow-lg dark:bg-gray-950 dark:text-gray-50">
            <Image
              src="/programs.png"
              width={300}
              height={200}
              alt="Development"
              className="w-full rounded-lg object-cover aspect-[4/3]"
            />
            <h3 className="text-xl font-bold">Programs</h3>
            <p className="text-gray-500 text-center dark:text-gray-400">
              There are a variety of training programs that will fit a persons
              goals and implement into your lifestyle.
            </p>
            <Button>Buy Now</Button>
          </div>
        </div>
      </div>
    </section>
  );
}