
import Link from "next/link";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export default function Component() {
  return (
    <div className="w-full max-w-4xl mx-auto py-12 md:py-20">
      <div className="space-y-6 text-center">
        <h1 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
          Personal Training
        </h1>
        <p className="max-w-[700px] mx-auto text-gray-500 dark:text-gray-400 md:text-xl">
          Take your fitness to the next level with personalized attention and
          expert guidance from our certified personal trainers. Achieve your
          goals faster and stay motivated with a customized program tailored to
          your needs.
        </p>
        <Link
          href="#"
          className="inline-flex h-10 items-center justify-center rounded-md bg-gray-900 px-6 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
          prefetch={false}
        >
          Book Now
        </Link>
      </div>
      <div id="booking-form" className="mt-12 md:mt-20">
        <Card>
          <CardHeader>
            <CardTitle>Book Your Personal Training Session</CardTitle>
            <CardDescription>
              Fill out the form below to schedule your personal training
              session.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div className="space-y-2">
                <Label htmlFor="name">Name</Label>
                <Input id="name" placeholder="Enter your name" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" placeholder="Enter your email" />
              </div>
            </div>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div className="space-y-2">
                <Label htmlFor="phone">Phone</Label>
                <Input id="phone" placeholder="Enter your phone number" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="schedule">Preferred Training Time</Label>
                <Input
                  id="schedule"
                  placeholder="Enter your preferred training schedule"
                />
              </div>
            </div>
          </CardContent>
          <CardFooter>
            <Button type="submit" className="ml-auto">
              Book Now
            </Button>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
}
