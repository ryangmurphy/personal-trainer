import Link from "next/link";
import Image from "next/image";
import { JSX, SVGProps } from "react";

export default function About() {
  return (
    <div className="flex flex-col">
      <section className="w-full py-12  md:py-24 lg:py-32 ">
        <div className="container grid gap-6 px-4 md:px-6 lg:grid-cols-2 lg:gap-12">
          <Image
            src="/cbumabout.jpg"
            width="550"
            height="550"
            alt="Coach"
            className="mx-auto aspect-square overflow-hidden rounded-xl object-cover sm:w-full"
          />
          <div className="space-y-4">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Meet <span className="text-red-800">Kyle Wells</span>
              </h1>
              <p className="text-gray-500  pt-6 md:text-xl dark:text-gray-400">
                Kyle Wells is a dedicated and passionate personal trainer with a
                wealth of experience and knowledge in the fitness industry. With
                a commitment to helping clients achieve their health and fitness
                goals, Kyle combines personalized training programs with expert
                nutritional advice to ensure sustainable results.
                <br />
                <br />
                Kyle&apos;s diverse qualifications highlight his expertise in
                various aspects of fitness and wellness, making him a versatile
                and reliable choice for anyone looking to improve their physical
                health. Whether you&apos;re just starting your fitness journey
                or looking to take your training to the next level, Kyle is here
                to support and guide you every step of the way.
              </p>
            </div>
            <div className="space-y-2 pt-6">
              <h3 className="text-2xl font-bold">
                Qualifications and Certifications
              </h3>
              <ul className="space-y-1 text-gray-500 dark:text-gray-400">
                <li>
                  <CheckIcon className="mr-2 inline-block h-5 w-5 text-green-500" />
                  Certified Personal Trainer (NASM)
                </li>
                <li>
                  <CheckIcon className="mr-2 inline-block h-5 w-5 text-green-500" />
                  Certified Online Personal Trainer (NASM)
                </li>
                <li>
                  <CheckIcon className="mr-2 inline-block h-5 w-5 text-green-500" />
                  Nutrition Specialist (ISSA)
                </li>
                <li>
                  <CheckIcon className="mr-2 inline-block h-5 w-5 text-green-500" />
                  CPR and AED Certification
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <section className="w-full py-6 md:py-12 lg:py-18 rounded-xl bg-slate-300 dark:bg-gray-800">
        <div className="container grid gap-6 px-4 md:px-6 lg:grid-cols-2 lg:gap-12">
          <div className="space-y-4">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold sm:text-4xl md:text-5xl pb-4">
                About <span className="text-red-800">Kyle</span>
              </h2>
              <p className="text-gray-500 md:text-xl dark:text-gray-400">
                Kyle is a certified personal trainer with over 10 years of
                experience in the fitness industry. He is passionate about
                helping people achieve their health and wellness goals through
                personalized training programs and a holistic approach to
                fitness.
              </p>
            </div>
            <div className="space-y-2">
              <h3 className="text-2xl font-bold pb-2">Coaching Philosophy</h3>
              <p className="text-gray-500 md:text-xl dark:text-gray-400">
                Kyle believes that fitness is not just about physical
                transformation, but also about improving overall health,
                well-being, and quality of life. He works closely with each
                client to develop a personalized plan that addresses their
                unique needs, goals, and lifestyle. Kyle&apos;s coaching style
                emphasizes proper form, progressive overload, and a balanced
                approach to nutrition and recovery.
              </p>
            </div>
          </div>
          <div className="space-y-4">
            <div className="space-y-2">
              <h3 className="text-2xl font-bold pt-8 pb-2">
                Specialties and Expertise
              </h3>
              <p className="text-gray-500 md:text-xl dark:text-gray-400">
                Kyle specializes in strength training, weight loss, and sports
                performance. He has extensive experience working with clients
                who have specific health conditions or injuries, and he
                collaborates closely with healthcare professionals to ensure
                safe and effective training programs.
              </p>
            </div>
            <div className="space-y-2">
              <h3 className="text-2xl font-bold">Outside the Gym</h3>
              <p className="text-gray-500 md:text-xl pb-2 dark:text-gray-400">
                When he&apos;s not in the gym, Kyle enjoys spending time
                outdoors, hiking, and exploring new trails. He is also an avid
                reader and loves to learn about the latest advancements in
                exercise science and nutrition. Kyle is committed to continuous
                professional development and staying up-to-date with the
                industry&apos;s best practices.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}


function CheckIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
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
      <path d="M20 6 9 17l-5-5" />
    </svg>
  );
}