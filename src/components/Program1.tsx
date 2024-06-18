import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { JSX, SVGProps } from "react";

export default function Program1() {
  return (
    <div className="bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-50">
      <section className="container mx-auto py-12 md:py-20 px-4 md:px-6">
        <div className="grid md:grid-cols-2 gap-8 md:gap-12">
          <div className="flex justify-center">
            <Image
              src=""
              width={400}
              height={600}
              alt="Book Cover"
              className="rounded-lg shadow-lg"
            />
          </div>
          <div className="space-y-4 md:space-y-6">
            <h1 className="text-3xl md:text-4xl font-bold">
              Hypertrophy Program
            </h1>
            <p className="text-slate-500 dark:text-slate-400 text-lg md:text-xl">
              By Kyle Wells
            </p>
            <p className="text-slate-700 dark:text-slate-300 text-base md:text-lg">
              Unlock your full fitness potential with this comprehensive guide
              to strength training, cardio, and nutrition. Packed with expert
              advice and easy-to-follow workouts, this book will transform your
              body and mind.
            </p>
            <h2 className="text-slate-950 text-2xl font-bold md:text-lg">
              What&apos;s Included:
            </h2>
            <ul className="text-slate-700 font-medium">
              <li>Two 12-week training programs (over 5 months of training)</li>
              <li>Session and Weekly Volume Tables</li>
              <li>Warmup Routine</li>
              <li>Specific Exercises and Substitutions</li>
              <li>Exact Sets, Reps, Rest Periods, and Intensity</li>
              <li>Coaching Notes</li>
            </ul>
            <Button className="border-slate-400 bg-gradient-to-r from-slate-800 to-slate-900 hover:from-red-700 hover:to-red-800">
              Buy Now
            </Button>
          </div>
        </div>
      </section>
      <section className="bg-slate-200 dark:bg-slate-800 py-12 md:py-20">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-2xl md:text-3xl font-bold mb-6 md:mb-8">
            Program Details
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">
            <div className="bg-slate-50 dark:bg-slate-950 rounded-lg shadow-lg p-4 md:p-6">
              <h3 className="text-lg md:text-xl font-medium mb-2">Pages</h3>
              <p>30</p>
            </div>
            <div className="bg-slate-50 dark:bg-slate-950 rounded-lg shadow-lg p-4 md:p-6">
              <h3 className="text-lg md:text-xl font-medium mb-2">
                Dimensions
              </h3>
              <p>8 x 10 inches</p>
            </div>
            <div className="bg-slate-50 dark:bg-slate-950 rounded-lg shadow-lg p-4 md:p-6">
              <h3 className="text-lg md:text-xl font-medium mb-2">Published</h3>
              <p>January 1, 2024</p>
            </div>
          </div>
        </div>
      </section>
      <section className="container mx-auto py-12 md:py-20 px-4 md:px-6">
        <h2 className="text-2xl md:text-3xl font-bold mb-6 md:mb-8">
          Table of Contents
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">
          <div className="bg-slate-200 dark:bg-slate-950 rounded-lg shadow-lg p-4 md:p-6">
            <h3 className="text-lg md:text-xl font-medium mb-2">
              Part 1: Strength Training
            </h3>
            <ul className="space-y-2 text-slate-800 dark:text-slate-300">
              <li>Chapter 1: Fundamentals of Strength Training</li>
              <li>Chapter 2: Compound Exercises</li>
              <li>Chapter 3: Isolation Exercises</li>
              <li>Chapter 4: Workout Routines</li>
            </ul>
          </div>

          <div className="bg-slate-200 dark:bg-slate-950 rounded-lg shadow-lg p-4 md:p-6">
            <h3 className="text-lg md:text-xl font-medium mb-2">
              Part 2: Nutrition
            </h3>
            <ul className="space-y-2 text-slate-800 dark:text-slate-300">
              <li>Chapter 9: Macronutrients</li>
              <li>Chapter 10: Meal Planning</li>
              <li>Chapter 11: Supplements</li>
              <li>Chapter 12: Nutrition Strategies</li>
            </ul>
          </div>
        </div>
      </section>
      <section className="bg-slate-200 dark:bg-slate-800 py-12 md:py-20">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-2xl md:text-3xl font-bold mb-6 md:mb-8">
            Client Reviews
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            <div className="bg-slate-50 dark:bg-slate-950 rounded-lg shadow-lg p-4 md:p-6">
              <div className="flex items-center mb-2">
                <div className="flex items-center space-x-1 text-yellow-500">
                  <StarIcon className="w-5 h-5" />
                  <StarIcon className="w-5 h-5" />
                  <StarIcon className="w-5 h-5" />
                  <StarIcon className="w-5 h-5" />
                  <StarIcon className="w-5 h-5" />
                </div>
                <p className="ml-2 text-slate-500 dark:text-slate-400 text-sm">
                  5.0
                </p>
              </div>
              <p className="text-slate-700 dark:text-slate-300 mb-2">
                This book is a game-changer! The workouts are challenging but
                effective, and the nutrition advice is spot-on. Highly
                recommended for anyone looking to take their fitness to the next
                level.
              </p>
              <p className="text-slate-500 dark:text-slate-400 text-sm">
                - Jane Doe
              </p>
            </div>
            <div className="bg-slate-50 dark:bg-slate-950 rounded-lg shadow-lg p-4 md:p-6">
              <div className="flex items-center mb-2">
                <div className="flex items-center space-x-1 text-yellow-500">
                  <StarIcon className="w-5 h-5" />
                  <StarIcon className="w-5 h-5" />
                  <StarIcon className="w-5 h-5" />
                  <StarIcon className="w-5 h-5" />
                  <StarIcon className="w-5 h-5" />
                </div>
                <p className="ml-2 text-slate-500 dark:text-slate-400 text-sm">
                  4.9
                </p>
              </div>
              <p className="text-slate-700 dark:text-slate-300 mb-2">
                I&apos;ve been using the workouts in this book for the past few
                months and have seen incredible results. The instructions are
                clear and the progressions are well-designed. Highly
                recommended!
              </p>
              <p className="text-slate-500 dark:text-slate-400 text-sm">
                - John Smith
              </p>
            </div>
            <div className="bg-slate-50 dark:bg-slate-950 rounded-lg shadow-lg p-4 md:p-6">
              <div className="flex items-center mb-2">
                <div className="flex items-center space-x-1 text-yellow-500">
                  <StarIcon className="w-5 h-5" />
                  <StarIcon className="w-5 h-5" />
                  <StarIcon className="w-5 h-5" />
                  <StarIcon className="w-5 h-5" />
                  <StarIcon className="w-5 h-5" />
                </div>
                <p className="ml-2 text-slate-500 dark:text-slate-400 text-sm">
                  4.8
                </p>
              </div>
              <p className="text-slate-700 dark:text-slate-300 mb-2">
                This book is a must-have for anyone serious about fitness. The
                nutrition advice has helped me clean up my diet, and the
                workouts have taken my strength and endurance to new levels.
                Highly recommended!
              </p>
              <p className="text-slate-500 dark:text-slate-400 text-sm">
                - Sarah Lee
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

function StarIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="currentColor"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
    </svg>
  );
}
