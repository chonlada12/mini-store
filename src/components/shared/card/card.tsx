import { cn } from "@/utils";
import React from "react";

export const Card = ({ children, className }: { children: React.ReactNode; className?: string }) => {
  return (
    <div
      className={cn(
        "hover:shadow-md transition-shadow shadow-sm p-0 flex flex-col gap-2 h-full bg-white border border-neutral-200 rounded-2xl",
        className
      )}
    >
      {children}
    </div>
  );
};
