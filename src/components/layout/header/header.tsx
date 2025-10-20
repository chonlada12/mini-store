"use client";

import { useProductAction } from "@/hook/use-product-action";
import { cn } from "@/utils";
import { ShoppingCartIcon } from "lucide-react";
import { useMemo } from "react";

interface HeaderContentProps {
  title: string;
}

export const HeaderContent = (props: HeaderContentProps) => {
  const { title } = props;

  const { cart } = useProductAction();
  const countCart = useMemo(() => cart.reduce((sum, item) => sum + (item.quantity || 0), 0), [cart]);

  return (
    <header className="h-16 bg-white border-b border-neutral-100 flex justify-center w-full  ">
      <div className=" w-full flex items-center justify-between p-4 lg:p-6 ">
        <div className={cn("sm:text-xl md:text-xl font-bold text-black")}>{title}</div>
        <div className="relative">
          <ShoppingCartIcon className="text-black" />
          {countCart > 0 && <Badge count={countCart || 0} />}
        </div>
      </div>
    </header>
  );
};

interface BadgeProps {
  count: number;
}

const Badge = ({ count }: BadgeProps) => {
  const checkedCount = count > 99 ? "99+" : count;
  return (
    <div className="absolute -top-2 -right-3 h-5 min-w-5 px-1 rounded-full bg-orange-500 text-white flex items-center justify-center text-xs">
      {checkedCount}
    </div>
  );
};
