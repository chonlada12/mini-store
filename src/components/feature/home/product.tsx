"use client";

import { Product } from "@/types";
import { notFound } from "next/navigation";
import { useEffect, useState } from "react";
import { Loading, ProductCard } from "../../shared";

export const ProductContent = () => {
  const [products, setProducts] = useState<Product[] | undefined>();
  const [error, setError] = useState<string | undefined>();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getProducts();
  }, []);

  const getProducts = async () => {
    try {
      setLoading(true);
      const res = await fetch("https://fakestoreapi.com/products");
      if (!res.ok) throw new Error("Network error");
      const data: Product[] = await res.json();

      setProducts(data);
    } catch (error: Error | unknown) {
      setError(error instanceof Error ? error.message : "An unknown error occurred");
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return <Loading />;
  }

  if (error) {
    return notFound();
  }

  return (
    <section className="h-full">
      <div className="p-6">
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-6">
          {products && products.map((product) => <ProductCard key={product.id} product={product} />)}
        </div>
      </div>
    </section>
  );
};
