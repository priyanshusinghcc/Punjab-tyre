import * as React from "react";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

export function Accordion({ children }: { children: React.ReactNode }) {
  return <div className="space-y-4">{children}</div>;
}

export function AccordionItem({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return <div className={cn("rounded-2xl border border-black/10 bg-white", className)} {...props} />;
}

export function AccordionTrigger({
  children,
  className
}: React.HTMLAttributes<HTMLButtonElement>) {
  return (
    <summary
      className={cn(
        "flex cursor-pointer list-none items-center justify-between gap-4 rounded-2xl px-5 py-4 text-left text-sm font-semibold",
        className
      )}
    >
      <span>{children}</span>
      <ChevronDown className="h-4 w-4 shrink-0 text-black/50" />
    </summary>
  );
}

export function AccordionContent({ children, className }: React.HTMLAttributes<HTMLDivElement>) {
  return <div className={cn("px-5 pb-5 text-sm leading-7 text-black/70", className)}>{children}</div>;
}

export function DetailsAccordion({
  title,
  children
}: {
  title: React.ReactNode;
  children: React.ReactNode;
}) {
  return (
    <details className="rounded-2xl border border-black/10 bg-white">
      <AccordionTrigger>{title}</AccordionTrigger>
      <AccordionContent>{children}</AccordionContent>
    </details>
  );
}
