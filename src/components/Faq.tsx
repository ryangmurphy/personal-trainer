import {
  Collapsible,
  CollapsibleTrigger,
  CollapsibleContent,
} from "@/components/ui/collapsible";

import { Card, CardContent } from "@/components/ui/card";
import { JSX, SVGProps } from "react";

export default function FAQ() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-slate-200 dark:bg-gray-800">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
              Frequently Asked Questions
            </h2>
            <p className="max-w-[900px] text-slate-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
              Got any questions? Check out below or reach out!
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl gap-6 py-12">
          <Collapsible className="rounded-lg bg-slate-50 p-6 shadow-sm dark:bg-gray-950">
            <CollapsibleTrigger className="flex w-full items-center justify-between">
              <h3 className="text-lg font-bold">
                How do I know which program is right for me?
              </h3>
              <ChevronDownIcon className="h-5 w-5 transition-all" />
            </CollapsibleTrigger>
            <CollapsibleContent>
              <p className="text-slate-500 dark:text-gray-400">
                Our fitness experts will work with you to assess your goals,
                fitness level, and preferences to recommend the best program for
                you. We offer a free consultation to help you get started.
              </p>
            </CollapsibleContent>
          </Collapsible>
          <Collapsible className="rounded-lg bg-slate-50 p-6 shadow-sm dark:bg-gray-950">
            <CollapsibleTrigger className="flex w-full items-center justify-between">
              <h3 className="text-lg font-bold">
                How often should I do the workouts?
              </h3>
              <ChevronDownIcon className="h-5 w-5 transition-all" />
            </CollapsibleTrigger>
            <CollapsibleContent>
              <p className="text-slate-500 dark:text-gray-400">
                The recommended frequency for our fitness programs varies
                depending on the program, your fitness level, and your goals.
                Generally, we recommend 3-5 workouts per week for optimal
                results.
              </p>
            </CollapsibleContent>
          </Collapsible>
          <Collapsible className="rounded-lg bg-slate-50 p-6 shadow-sm dark:bg-gray-950">
            <CollapsibleTrigger className="flex w-full items-center justify-between">
              <h3 className="text-lg font-bold">
                Do I need any special equipment?
              </h3>
              <ChevronDownIcon className="h-5 w-5 transition-all" />
            </CollapsibleTrigger>
            <CollapsibleContent>
              <p className="text-slate-500 dark:text-gray-400">
                The equipment needed for our fitness programs varies, but we try
                to keep it minimal and accessible. Most of our programs can be
                done with just a set of dumbbells or resistance bands. We
                provide a full list of recommended equipment for each program.
              </p>
            </CollapsibleContent>
          </Collapsible>
          <Collapsible className="rounded-lg bg-slate-50 p-6 shadow-sm dark:bg-gray-950">
            <CollapsibleTrigger className="flex w-full items-center justify-between">
              <h3 className="text-lg font-bold">
                Can I cancel my subscription at any time?
              </h3>
              <ChevronDownIcon className="h-5 w-5 transition-all" />
            </CollapsibleTrigger>
            <CollapsibleContent>
              <p className="text-slate-500 dark:text-gray-400">
                Yes, you can cancel your subscription at any time. We don&apos;t
                believe in locking you into long-term contracts. Your
                satisfaction is our top priority, so we want you to feel
                empowered to make the best decision for your fitness journey.
              </p>
            </CollapsibleContent>
          </Collapsible>
        </div>
      </div>
    </section>
  );
}


function ChevronDownIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
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
      <path d="m6 9 6 6 6-6" />
    </svg>
  );
}