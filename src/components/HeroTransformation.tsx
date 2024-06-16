import React from "react";
import BeforeAfterSlider from "@/components/BeforeAfterSlider";

export default function HeroTransformation() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 dark:bg-gray-800">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold uppercase tracking-tighter sm:text-4xl md:text-5xl">
              Real
              <span className="font-bold text-red-800"> Results</span>
            </h2>
            <p className="max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
              See transformations and progress from previous clients.
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl min-w-2xl grid-cols-1 gap-6 py-12 sm:grid-cols-2 lg:grid-cols-3 lg:gap-10">
          <div className="bg-slate-300 dark:bg-gray-900 rounded-lg shadow-lg p-4">
            <BeforeAfterSlider
              beforeImage="/before.webp"
              afterImage="/after.jpg"
              alt="Client 1"
            />
          </div>
          <div className="bg-slate-300 dark:bg-gray-900 rounded-lg shadow-lg p-4">
            <BeforeAfterSlider
              beforeImage="/before.webp"
              afterImage="/after.jpg"
              alt="Client 2"
            />
          </div>
          <div className="bg-slate-300 dark:bg-gray-900 rounded-lg shadow-lg p-4">
            <BeforeAfterSlider
              beforeImage="/before.webp"
              afterImage="/after.jpg"
              alt="Client 3"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
