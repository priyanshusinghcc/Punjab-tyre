import * as React from "react";
import { cn } from "@/lib/utils";

export function Select({
  className,
  value,
  onChange,
  children,
  ...props
}: React.SelectHTMLAttributes<HTMLSelectElement>) {
  return (
    <select
      className={cn(
          "h-11 w-full rounded-2xl border border-black/10 bg-white px-4 text-sm text-black placeholder:text-gray-400 outline-none transition focus:border-[#E53935] focus:ring-2 focus:ring-[#E53935]/10",        className
      )}
      value={value}
      onChange={onChange}
      {...props}
    >
      {children}
    </select>
  );
}
