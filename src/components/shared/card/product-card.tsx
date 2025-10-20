"use client";
import { useProductAction } from "@/hook/use-product-action";
import { Product } from "@/types";
import { formatUSD } from "@/utils";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { Button } from "..";
import { Rating } from "../rating";
import { Card } from "./card";

interface ProductCardProps {
  product: Product;
}

export const ProductCard = ({ product }: ProductCardProps) => {
  const { id, title, image, price, rating, description } = product;
  const router = useRouter();
  const { addToCart } = useProductAction();

  const onClickCard = () => {
    router.push(`/product/${id}`);
  };

  const onClickAddToCart = () => {
    addToCart(product);
  };

  return (
    <Card className="p-1.5  md:p-0 flex flex-col gap-1.5 h-full justify-between group">
      <div onClick={onClickCard} className="md:px-1 md:pt-1 ">
        <div className="md:p-3">
          <div className="w-full flex justify-center  h-[150px] ">
            <Image
              src={image}
              alt={title}
              width={400}
              height={500}
              className="h-full w-full object-contain transition duration-300 group-hover:scale-[1.02]"
            />
          </div>
        </div>
        <div className="p-1.5 md:p-3 flex flex-col gap-1.5">
          <h2 className="line-clamp-2 text-xs md:text-base font-semibold text-black ">{title}</h2>
          <div className=" text-xs md:text-base text-red-500">{formatUSD(price)}</div>
          <div className="flex items-center gap-1 text-sm text-neutral-500">
            <Rating value={rating.rate} />
          </div>
          <p className="text-xs md:text-sm line-clamp-2 text-neutral-700">{description}</p>
        </div>
      </div>
      <div className="flex justify-end flex-col md:px-3 md:pb-3">
        <Button type="button" className="cursor-pointer w-full" onClick={onClickAddToCart}>
          Add to Cart
        </Button>
      </div>
    </Card>
  );
};
