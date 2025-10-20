"use client";
import { Button, Loading } from "@/components/shared";
import { Rating } from "@/components/shared/rating";
import { useProductAction } from "@/hook/use-product-action";
import { Product } from "@/types";
import { cn, formatUSD } from "@/utils";
import { ChevronLeft } from "lucide-react";
import Image from "next/image";
import { notFound, useRouter } from "next/navigation";
import { useCallback, useEffect, useState } from "react";

export const ProductDetail = ({ id }: { id: string }) => {
  const [product, setProduct] = useState<Product | undefined>();
  const [error, setError] = useState<string | undefined>();
  const [loading, setLoading] = useState(true);

  const getProduct = useCallback(async () => {
    try {
      setLoading(true);
      const res = await fetch("https://fakestoreapi.com/products");
      if (!res.ok) throw new Error("Network error");
      const data: Product[] = await res.json();

      const findProduct = data.find((item) => item.id === Number(id));
      setProduct(findProduct);
    } catch (error: Error | unknown) {
      setError(error instanceof Error ? error.message : "An unknown error occurred");
    } finally {
      setLoading(false);
    }
  }, [id]);

  useEffect(() => {
    if (id) {
      getProduct();
    }
  }, [getProduct, id]);

  if (loading) {
    return <Loading />;
  }

  if (error) {
    return notFound();
  }

  return (
    <section className="h-full ">
      <div className="p-6">{product && <DetailItem product={product} />}</div>
    </section>
  );
};

const DetailItem = ({ product }: { product: Product }) => {
  const router = useRouter();
  const { addToCart } = useProductAction();

  const onBack = () => {
    router.back();
  };

  const onClickAddToCart = () => {
    addToCart(product);
  };

  return (
    <>
      <h1
        className={cn("text-xl font-bold flex flex-row gap-1 items-center cursor-pointer pb-6 text-black")}
        onClick={onBack}
      >
        <ChevronLeft /> Detail
      </h1>

      <section className="grid grid-cols-1 md:grid-cols-2 gap-10">
        <div className="flex items-center justify-center rounded-2xl border border-neutral-200 bg-white p-4 shadow-sm">
          <Image
            src={product.image}
            alt={product.title}
            width={400}
            height={400}
            className="h-auto w-auto object-contain"
          />
        </div>

        <div className="flex flex-col justify-between">
          <div>
            <h2 className="text-xl font-bold text-neutral-900 mb-2">{product.title}</h2>
            <Rating value={product.rating?.rate ?? 0} />
            <p className="mt-4 text-2xl font-semibold text-neutral-800">{formatUSD(product.price)}</p>
            <p className="mt-6 text-neutral-700">{product.description}</p>
          </div>

          <div className="mt-8 flex items-center gap-4">
            <Button className="flex-1" onClick={onClickAddToCart}>
              Add to Cart
            </Button>
          </div>
        </div>
      </section>

      <section className="mt-12 border-t pt-8 text-sm border-neutral-200">
        <h2 className="text-lg font-semibold text-neutral-800 mb-3">Product Details</h2>
        <ul className="space-y-1 list-disc list-inside text-neutral-600">
          <li>Category: {product.category}</li>
          <li>Product ID: {product.id}</li>
          <li>Rate: {product.rating?.rate ?? 0}</li>
          <li>Rating Count: {product.rating?.count ?? 0}</li>
        </ul>
      </section>
    </>
  );
};
