// pages/contact.js or pages/contact.tsx
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
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { JSX, SVGProps } from "react";

export default function Contact() {
  return (
    <div className="grid lg:grid-cols-2 gap-16 w-full max-w-5xl mx-auto py-24">
      <div className="space-y-4">
        <h2 className="text-3xl font-bold text-slate-950">Contact</h2>
        <p className="text-slate-700 dark:text-gray-400 font-semibold">
          Have a question or want to know more about coaching or the programs?
          Fill out the form and Kyle will get back to you as soon as possible.
        </p>
        <div className="space-y-2">
          <div className="flex items-center space-x-2">
            <MailIcon className="h-5 w-5 text-slate-700 dark:text-gray-400" />
            <span className="text-slate-700 dark:text-gray-400 font-semibold">
              kyle@kylewells.com
            </span>
          </div>
          <div className="flex items-center space-x-2">
            <PhoneIcon className="h-5 w-5 text-slate-700 dark:text-gray-400" />
            <span className="text-slate-700 dark:text-gray-400 font-semibold">
              +1 (902) 123-4567
            </span>
          </div>
          <div className="flex items-center space-x-2">
            <MapPinIcon className="h-5 w-5 text-slate-700 dark:text-gray-400" />
            <span className="text-slate-700 dark:text-gray-400 font-semibold">
              Dartmouth, Nova Scotia
            </span>
          </div>
          <div className="lg:col-span-2 pt-6">
            <div className="h-96 w-full">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d45387.500955008065!2d-63.6093325434928!3d44.68452161332713!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4b5a23ddf20334b3%3A0xda5007be195731e7!2sDartmouth%2C%20NS!5e0!3m2!1sen!2sca!4v1718559316306!5m2!1sen!2sca"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
      <Card>
        <CardHeader>
          <CardTitle className="font-bold text-slate-950">
            Get in Touch
          </CardTitle>
          <CardDescription className="text-slate-700 dark:text-gray-400 font-semibold pt-2">
            Get Started Today.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="first-name">First Name</Label>
              <Input id="first-name" type="text" placeholder="" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="last-name">Last Name</Label>
              <Input id="last-name" type="text" placeholder="" />
            </div>
            <div className="space-y-2 col-span-2">
              <Label htmlFor="email">Email</Label>
              <Input id="email" type="email" placeholder="" />
            </div>
            <div className="space-y-2 col-span-2">
              <Label htmlFor="phone">Phone</Label>
              <Input id="phone" type="tel" placeholder="" />
            </div>
            <div className="space-y-2 col-span-2">
              <Label htmlFor="message">Message</Label>
              <Textarea id="message" placeholder="" className="min-h-[120px]" />
            </div>
          </form>
        </CardContent>
        <CardFooter>
          <Button className="w-full">Submit</Button>
        </CardFooter>
      </Card>
    </div>
  );
}

function MailIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
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
      <rect width="20" height="16" x="2" y="4" rx="2" />
      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
    </svg>
  );
}

function MapPinIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
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
      <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  );
}

function PhoneIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
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
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
  );
}
