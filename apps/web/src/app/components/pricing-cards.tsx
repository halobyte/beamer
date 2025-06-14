import { CircleCheckBig } from "lucide-react";

import { Button } from "@beamer/ui/components/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@beamer/ui/components/card";

const plans = [
  {
    title: "Starter",
    price: 19.99,
    description: "Perfect for individuals and startups.",
    features: [
      "60,000 emails",
      "Analytics and delivery optimisation",
      "Limited to one active campaign at a time",
    ],
  },
  {
    title: "Pro",
    price: 79.99,
    description: "Ideal for growing businesses.",
    features: [
      "175,000 emails",
      "Analytics and delivery optimisation",
      "Limited to 10 active campaigns at a time",
      "Access to AI Editor",
      "Access to dedicated IPs",
      "Organization management",
    ],
  },
  {
    title: "Enterprise",
    price: 134.99,
    description: "For large organizations with advanced needs.",
    features: [
      "250,000 emails",
      "Analytics and delivery optimisation",
      "Unlimited active campaigns at a time",
      "Access to AI Editor",
      "Access to dedicated IPs",
      "Organization management",
      "Dedicated customer support",
    ],
  },
] as const;

export default function PricingCards() {
  return (
    <div className="flex flex-col gap-2 px-4">
      <div className="mx-auto grid w-full grid-cols-1 justify-center gap-10 md:grid-cols-2 md:gap-6 xl:grid-cols-3">
        {plans.map((plan, i) => (
          <Card key={i} className="justify-between">
            <div className="flex flex-col gap-6">
              <CardHeader>
                <CardTitle className="flex flex-col gap-3 text-lg">
                  <h3>{plan.title}</h3>
                  <div className="flex items-baseline">
                    <h1 className="text-3xl">${plan.price}</h1>
                    <span className="text-sm font-medium text-zinc-600">
                      /month
                    </span>
                  </div>
                </CardTitle>
                <CardDescription>{plan.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="flex flex-col gap-2">
                  {plan.features.map((feat, i) => (
                    <li key={i} className="flex items-baseline gap-2">
                      <CircleCheckBig
                        className="shrink-0 pt-1 text-sky-700"
                        size={15}
                      />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </div>
            <CardFooter>
              <Button size="lg" className="w-full">
                Get started
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
      <div className="flex w-full justify-end">
        <span className="text-xs font-medium text-zinc-600 italic before:text-red-500 before:content-['*']">
          Subscription prices are listed in USD
        </span>
      </div>
    </div>
  );
}
