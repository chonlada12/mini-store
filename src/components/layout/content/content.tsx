import { cn } from "@/utils";

export const Content = ({
  children,
  className,
}: Readonly<{
  children: React.ReactNode;
  className?: string;
}>) => {
  return <div className={cn("h-[calc(100vh-64px)] flex justify-center bg-neutral-50", className)}>{children}</div>;
};
