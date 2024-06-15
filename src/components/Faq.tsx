import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Card, CardContent } from "@/components/ui/card"

export default function FAQ() {
  return (
    <section className="w-full py-12 md:py-12 lg:py-12 bg-gray-100 dark:bg-gray-800">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <h1 className="text-3xl font-extrabold tracking-tighter sm:text-5xl xl:text-5xl/none">
            Frequently Asked Questions
          </h1>
          <p></p>
          <div className="flex justify-center items-center">
            <Card className="shadow-lg w-[600px]">
              <CardContent className="">
                <Accordion
                  className="w-full"
                  type="multiple"
                  
                >
                  <AccordionItem value="item-1">
                    <AccordionTrigger className="hover:underline-none">
                      Question 1
                    </AccordionTrigger>
                    <AccordionContent>
                      Because it clears the memory and starts the system from
                      scratch.
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-2">
                    <AccordionTrigger className="hover:underline-none">
                      Question 1
                    </AccordionTrigger>
                    <AccordionContent>
                      As tempting as it is to weave them into artistic
                      sculptures, those cables are essential for connecting,
                      charging, and beaming digital magic.
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-3">
                    <AccordionTrigger className="hover:underline-none">
                      Question 1
                    </AccordionTrigger>
                    <AccordionContent>
                      Yes but you might end up inadvertently dodging invisible
                      dance partners or trying to high-five digital confetti.
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-4">
                    <AccordionTrigger className="hover:underline-none">
                      Question 1
                    </AccordionTrigger>
                    <AccordionContent>
                      It's recommended to keep your software up to date to
                      ensure you have the latest security patches and features.
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem className="border-b-0" value="item-5">
                    <AccordionTrigger className="hover:underline-none">
                      Question 1
                    </AccordionTrigger>
                    <AccordionContent>
                      Devices can generate heat during operation, especially
                      when running intensive tasks. This is normal, but if it
                      gets too hot, it may indicate a problem.
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
