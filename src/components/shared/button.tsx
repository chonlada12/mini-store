import { cn } from "@/utils";

export const Button = ({ className, ...props }: React.ButtonHTMLAttributes<HTMLButtonElement>) => {
  return (
    <button
      {...props}
      className={cn(
        "flex items-center justify-center h-9 px-4 py-2 rounded-2xl text-sm font-medium bg-orange-500 hover:bg-orange-400 text-white cursor-pointer",
        className
      )}
    />
  );
};
