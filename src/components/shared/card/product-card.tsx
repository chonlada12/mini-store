"use client";
import { useProductAction } from "@/hook/use-product-action";
import { Product } from "@/types";
import { formatTHB } from "@/utils";
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
    <Card className="p-0 flex flex-col gap-2 h-full justify-between group">
      <div onClick={onClickCard} className="px-1 pt-1 ">
        <div className="p-3">
          <div className="w-full flex justify-center h-[150px] ">
            <Image
              src={image}
              alt={title}
              width={400}
              height={500}
              className="h-full w-full object-contain transition duration-300 group-hover:scale-[1.02]"
            />
          </div>
        </div>
        <div className="p-3 flex flex-col gap-2">
          <h2 className="line-clamp-2 text-base font-semibold ">{title}</h2>
          <div className="text-red-500">{formatTHB(price)}</div>
          <div className="flex items-center gap-1 text-sm text-neutral-500">
            <Rating value={rating.rate} />
          </div>
          <p className="text-sm line-clamp-2 text-neutral-700">{description}</p>
        </div>
      </div>
      <div className="flex justify-end flex-col px-3 pb-3">
        <Button type="button" className="cursor-pointer w-full" onClick={onClickAddToCart}>
          Add to Cart
        </Button>
      </div>
    </Card>
  );
};
