import { ProductContent } from "@/components/feature/home/product";
import { Content } from "@/components/layout/content";

export default function HomePage() {
  return (
    <Content className=" overflow-auto">
      <ProductContent />
    </Content>
  );
}
