import { HeaderContent } from "@/components/layout/header";
import { ProductActionProvider } from "@/hook/use-product-action";

export default function MainLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ProductActionProvider>
      <div className="flex flex-col w-screen h-screen overflow-hidden">
        <HeaderContent title="Mini Store" />
        {children}
      </div>
    </ProductActionProvider>
  );
}
