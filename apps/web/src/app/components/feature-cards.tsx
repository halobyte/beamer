import { Bot, ChartArea, LayoutTemplate, SquarePen } from "lucide-react";

import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@beamer/ui/components/card";

const features = [
  {
    title: "Powerful Editor",
    description:
      "Create beautiful emails with our powerful AI-powered drag and drop editor. No coding required.",
    icon: SquarePen,
  },
  {
    title: "Detailed Analytics",
    description:
      "Track opens, clicks, and conversions with detailed reports and insights.",
    icon: ChartArea,
  },
  {
    title: "Automation",
    description:
      "Set up automated email sequences triggered by subscriber actions.",
    icon: Bot,
  },
  {
    title: "Template Library",
    description:
      "Choose from hundreds of professionally designed email templates.",
    icon: LayoutTemplate,
  },
];

export default function FeatureCards() {
  return (
    <div className="grid grid-cols-1 gap-10 px-4 *:w-80 sm:grid-cols-2 sm:gap-6 *:sm:w-72 md:gap-10 *:md:w-80 xl:grid-cols-4 xl:gap-8 *:xl:w-72">
      {features.map((feat, i) => (
        <Card
          key={i}
          className="cursor-default transition-all hover:border-sky-700 hover:ring-4 hover:ring-sky-300"
        >
          <CardHeader className="gap-2 *:justify-self-center *:text-center">
            <div className="rounded-md bg-sky-300 p-2 text-xs text-sky-700">
              <feat.icon />
            </div>
            <CardTitle className="flex items-center gap-3 text-xl tracking-tight">
              {feat.title}
            </CardTitle>
            <CardDescription className="text-sm sm:text-base">
              {feat.description}
            </CardDescription>
          </CardHeader>
        </Card>
      ))}
    </div>
  );
}
