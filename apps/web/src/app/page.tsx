import Link from "next/link";
import { Circle, Hourglass, Lightbulb, Rocket } from "lucide-react";

import { Avatar, AvatarFallback } from "@beamer/ui/components/avatar";
import { Badge } from "@beamer/ui/components/badge";
import { Button } from "@beamer/ui/components/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@beamer/ui/components/card";
import { Progress } from "@beamer/ui/components/progress";

import { env } from "@/lib/env";
import { FAQAccordions, FeatureCards, PricingCards } from "./components";

function HeroSection() {
  return (
    <section className="relative flex h-[600px] flex-col items-center justify-center bg-gradient-to-b from-white/10 via-white/10 to-white px-10 before:pointer-events-none before:absolute before:inset-0 before:-z-10 before:h-full before:w-full before:bg-[url(/images/bg.svg)] before:bg-cover before:bg-scroll before:bg-center before:bg-no-repeat before:opacity-10 before:backdrop-hue-rotate-90 sm:px-20">
      <div className="flex flex-col gap-7">
        <div className="flex flex-col gap-3 text-center">
          <h1 className="text-5xl font-bold tracking-tight">
            Email campaigns that convert
          </h1>
          <p className="text-xl font-medium text-zinc-600 md:text-2xl">
            Create, send, and analyze email campaigns that engage your audience
            and drive results. No technical skills required.
          </p>
        </div>

        <div className="flex items-center justify-center gap-6">
          <Button size="lg" asChild>
            <Link
              href={new URL(
                "/auth/sign-up",
                env.NEXT_PUBLIC_DASHBOARD_URL,
              ).toString()}
            >
              Get started
            </Link>
          </Button>
          <Button size="lg" variant="outline" asChild>
            <Link href="/#faq">Learn more</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}

function FeaturesSection() {
  return (
    <section
      id="features"
      className="flex flex-col items-center gap-12 bg-gradient-to-b from-white via-white to-sky-50 pb-10"
    >
      <div className="flex flex-col items-center gap-2 px-10 text-center">
        <Badge className="bg-sky-200 text-sky-800">Features</Badge>
        <h2 className="text-3xl font-bold tracking-tight">
          Everything You Need to Succeed
        </h2>
        <p className="text-lg font-medium text-zinc-600 sm:text-xl">
          Beamer provides all the tools you need to create, manage, and optimize
          your email campaigns.
        </p>
      </div>

      <FeatureCards />
    </section>
  );
}

function WhyBeamerSection() {
  return (
    <section
      id="why-beamer"
      className="flex flex-col items-center gap-12 bg-sky-50 py-40"
    >
      <div className="flex flex-col items-center gap-2 px-10 text-center">
        <Badge className="bg-sky-200 text-sky-800">Why Beamer?</Badge>
        <h2 className="text-3xl font-bold tracking-tight">
          Your Go-To Email Campaign Solution
        </h2>
        <p className="text-lg font-medium text-zinc-600 sm:text-xl">
          Don't let poor deliverability and complex tools hold back your email
          marketing success.
        </p>
      </div>

      <div className="flex w-10/12 flex-col items-center justify-center gap-10 px-4 sm:px-6 lg:w-9/12 lg:gap-20 lg:px-10 xl:flex-row xl:items-baseline">
        <div className="flex w-full shrink-0 flex-col gap-8 *:flex *:w-full *:gap-3 lg:items-center xl:w-[500px]">
          <div>
            <div className="mt-1 flex size-10 shrink-0 items-center justify-center rounded-md bg-sky-300 text-sky-700">
              <Rocket />
            </div>
            <div>
              <h3 className="text-lg font-semibold tracking-tight">
                Industry-Leading Deliverability
              </h3>
              <p className="font-medium text-zinc-600">
                With a 98% delivery rate and partnerships with major ISPs, your
                emails reach inboxes, not spam folders. Our dedicated IP warming
                and reputation management ensure maximum deliverability for your
                campaigns.
              </p>

              <div className="mt-2 flex gap-8 text-sm font-medium text-sky-800 *:flex *:items-center *:gap-1.5">
                <div>
                  <Circle size={12} />
                  <span>AWS SES Backend</span>
                </div>

                <div>
                  <Circle size={12} />
                  <span>Zero downtime</span>
                </div>
              </div>
            </div>
          </div>

          <div>
            <div className="mt-1 flex size-10 shrink-0 items-center justify-center rounded-md bg-sky-300 text-sky-700">
              <Lightbulb />
            </div>
            <div>
              <h3 className="text-lg font-semibold tracking-tight">
                Effortless Campaign Creation
              </h3>
              <p className="font-medium text-zinc-600">
                No technical expertise required. Our intuitive drag-and-drop
                editor, pre-built templates, and AI-powered suggestions make
                creating professional campaigns as simple as writing an email.
                Launch campaigns in minutes, not hours.
              </p>

              <div className="mt-2 flex gap-8 text-sm font-medium text-sky-800 *:flex *:items-center *:gap-1.5">
                <div>
                  <Hourglass size={12} />
                  <span>Average setup time: 5 mins</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex w-full flex-col gap-10 md:flex-row *:md:w-1/2 lg:flex-row lg:justify-center xl:flex-col *:xl:w-full">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center justify-between text-base">
                <h5>Delivery Success Rate</h5>
                <h4 className="text-xl text-sky-700">98.2%</h4>
              </CardTitle>
            </CardHeader>
            <CardContent className="flex flex-col gap-4">
              <Progress value={98.2} indicatorClassName="bg-sky-700" />
              <div className="flex items-center gap-10 *:flex *:flex-col">
                <div>
                  <h5 className="font-medium">Inbox placement</h5>
                  <p className="text-teal-600">94.2%</p>
                </div>

                <div>
                  <h5 className="font-medium">Spam rate</h5>
                  <p className="text-red-600">{"<0.1%"}</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="gap-4">
              <CardTitle>What Our Users Say</CardTitle>
              <CardDescription className="font-medium italic">
                "Switched from our previous provider and saw immediate
                improvements. Setup was incredibly easy, and our open rates
                increased by 37% in the first month."
              </CardDescription>
            </CardHeader>
            <CardFooter className="gap-2 text-xs">
              <Avatar>
                <AvatarFallback className="bg-sky-200 font-semibold !text-sky-700">
                  MS
                </AvatarFallback>
              </Avatar>
              <div className="">
                <h6 className="font-semibold tracking-tight">Mohsin Sait</h6>
                <span className="font-medium text-zinc-600">
                  CEO, Meritzeal
                </span>
              </div>
            </CardFooter>
          </Card>
        </div>
      </div>
    </section>
  );
}

function PricingSection() {
  return (
    <section
      id="pricing"
      className="flex flex-col items-center gap-12 bg-gradient-to-b from-sky-50 via-white to-white pb-40"
    >
      <div className="flex flex-col items-center gap-2 px-10 text-center">
        <Badge className="bg-sky-200 text-sky-800">Pricing</Badge>
        <h2 className="text-3xl font-bold tracking-tight">
          Simple, Transparent Pricing
        </h2>
        <p className="text-lg font-medium text-zinc-600 sm:text-xl">
          Choose the plan that's right for your business. All plans include a
          14-day free trial.
        </p>
      </div>

      <PricingCards />
    </section>
  );
}

function FAQSection() {
  return (
    <section id="faq" className="flex flex-col items-center gap-12 pb-40">
      <div className="flex flex-col items-center gap-2 px-10 text-center">
        <Badge className="bg-sky-200 text-sky-800">FAQ</Badge>
        <h2 className="text-3xl font-bold tracking-tight">
          Frequently Asked Questions
        </h2>
        <p className="text-lg font-medium text-zinc-600 sm:text-xl">
          Find answers to common questions about our platform.
        </p>
      </div>

      <FAQAccordions />
    </section>
  );
}

export default function Home() {
  return (
    <div className="flex flex-col">
      <HeroSection />

      <FeaturesSection />

      <WhyBeamerSection />

      <PricingSection />

      <FAQSection />
    </div>
  );
}
