import Link from "next/link";
import Image from "next/image";

export default function HeroAbout() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <div className="grid gap-6 lg:grid-cols-[500px_1fr] lg:gap-12 xl:grid-cols-[550px_1fr]">
          <Image
            src="/cbum2.jpg"
            alt="Picture of a landscape"
            width={500}
            height={600}
            className="mx-auto rounded-xl h-[700px] object-cover object-center sm:w-full lg:order-first"
          />
          <div className="flex flex-col justify-center space-y-4">
            <div className="space-y-2 ml-8">
              <h2 className="text-3xl font-extrabold tracking-tighter sm:text-5xl">
                About
              </h2>
              <p className="max-w-[600px] font-medium text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                Kyle Wells is a 27-year-old Personal Trainer & Fitness Coach who
                offers his expertise online and in-person. With a passion for
                fitness and a commitment to helping others achieve their health
                goals, Kyle brings a personalized and holistic approach to
                training.
              </p>
            </div>
            <ul className="grid gap-4">
              <li className="flex items-start gap-3">
                <CheckIcon className="mt-1 h-5 w-5 flex-shrink-0 text-gray-500 dark:text-gray-400" />
                <div>
                  <h3 className="text-lg font-medium">
                    12+ Years of Experience
                  </h3>
                  <p className="text-gray-500 font-medium dark:text-gray-400">
                    Starting to workout from a young age and absorbing all the
                    knowledge he could throughout the years, Kyle has developed
                    a deep understanding of fitness and nutrition.
                  </p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <CheckIcon className="mt-1 h-5 w-5 flex-shrink-0 text-gray-500 dark:text-gray-400" />
                <div>
                  <h3 className="text-lg font-medium">
                    Certified & Knowledgeable
                  </h3>
                  <p className="text-gray-500 font-medium dark:text-gray-400">
                    Certified by top fitness institutions, Kyle continuously
                    updates his knowledge to stay ahead in the industry and
                    provide the best guidance possible.
                  </p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <CheckIcon className="mt-1 h-5 w-5 flex-shrink-0 text-gray-500 dark:text-gray-400" />
                <div>
                  <h3 className="text-lg font-medium">Supportive Community</h3>
                  <p className="text-gray-500 font-medium dark:text-gray-400">
                    Join a community of like-minded individuals who support each
                    other on their fitness journeys. Kyle fosters a positive and
                    motivating environment for all clients.
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

function CheckIcon(props) {
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
