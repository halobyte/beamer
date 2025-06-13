import React from "react";

export { default as PageTitle } from "./page-title";
export function OrderedList({
  children,
  ...props
}: React.ComponentProps<"ol">) {
  return (
    <ol
      {...props}
      className="flex list-decimal flex-col gap-8 marker:text-lg marker:font-semibold"
    >
      {children}
    </ol>
  );
}

export function UnorderedList({
  children,
  ...props
}: React.ComponentProps<"ul">) {
  return (
    <ul {...props} className="list-disc pl-4">
      {children}
    </ul>
  );
}

export function ListItem({ children, ...props }: React.ComponentProps<"li">) {
  return (
    <li {...props} className="flex flex-col gap-3">
      {children}
    </li>
  );
}

export function ListHeading({
  children,
  ...props
}: React.ComponentProps<"h2">) {
  return (
    <h2 {...props} className="text-2xl font-semibold tracking-tight">
      {children}
    </h2>
  );
}

export function ListSubheading({
  children,
  ...props
}: React.ComponentProps<"h3">) {
  return (
    <h3 {...props} className="text-lg font-medium tracking-tight">
      {children}
    </h3>
  );
}

export function Paragraph({ children, ...props }: React.ComponentProps<"p">) {
  return (
    <p {...props} className="font-medium">
      {children}
    </p>
  );
}
