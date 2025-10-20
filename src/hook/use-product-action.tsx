"use client";
import { Product, ProductDetail } from "@/types";
import { getLocalStorage, setLocalStorage } from "@/utils";
import { createContext, ReactNode, useContext, useEffect, useState } from "react";

interface ProductActionContextProps {
  cart: ProductDetail[];
  addToCart: (product: Product) => void;
}

export const ProductActionContext = createContext<ProductActionContextProps | undefined>(undefined);

export const ProductActionProvider = ({ children }: { children: ReactNode }) => {
  const [cart, setCart] = useState<ProductDetail[]>([]);

  useEffect(() => {
    initialCartList();
  }, []);

  const initialCartList = () => {
    const initialCart = getLocalStorage("cart");
    if (initialCart && Array.isArray(initialCart)) {
      setCart(initialCart);
    } else {
      setCart([]);
    }
  };

  const addToCart = (product: Product) => {
    const cartData: ProductDetail[] = getLocalStorage("cart") || [];

    const findProduct = cartData.find((item) => item.id === product?.id);

    const updatedCart = findProduct
      ? cartData.map((item) => (item.id === product?.id ? { ...item, quantity: (item.quantity || 0) + 1 } : item))
      : [...cartData, { ...product, quantity: 1 }];

    setCart(updatedCart);
    setLocalStorage("cart", updatedCart);

    alert(`✅ เพิ่มสินค้าเรียบร้อย: ${product.title}`);
  };

  return <ProductActionContext.Provider value={{ cart, addToCart }}>{children}</ProductActionContext.Provider>;
};

export const useProductAction = () => {
  const context = useContext(ProductActionContext);
  if (!context) throw new Error("useCart must be used within CartProvider");
  return context;
};
