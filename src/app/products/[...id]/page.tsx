import { Metadata } from "next";
import ProductDetailListComponent from "@/components/products/ProductsListDetailComponent";

export const metadata: Metadata = {
  title: "Product Details - ROS Store",
  description: "View detailed information about this product including specifications, pricing, and customer reviews.",
  keywords:"product details, specifications, price, reviews, description",
  openGraph:{
    title: "Product Details - ROS Store",
    description: "Discover this premium product with complete details and specifications.",
    images:['/Thumbernail.jpg']
  }
};

export default async function DetailProductPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  return (
    <div>
      {/* Product ID = {id} */}
      <ProductDetailListComponent id={Number(id)} />
    </div>
  );
}