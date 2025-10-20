import { ProductDetail } from "@/components/feature/product/product-detail";
import { Content } from "@/components/layout/content";
import { notFound } from "next/navigation";

interface Props {
  params: Promise<{ id: string }>;
}

export default async function ProductDetailPage(props: Props) {
  const { id } = await props.params;

  if (!id) {
    return notFound();
  }

  return (
    <Content className="overflow-auto">
      <ProductDetail id={id} />
    </Content>
  );
}
