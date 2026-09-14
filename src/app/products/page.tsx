import ProductListComponent from "@/components/products/ProductsListComponent";
import { Metadata } from "next";
export const metadata: Metadata = {
  title: "Shop Products - ROS Store",
  description: "Browse our extensive collection of quality products. Find everything you need with fast shipping and competitive prices.",
  keywords:"products, shopping, buy online, deals, discounts, quality items, categories",
  openGraph:{
    title: "Shop Products - ROS Store",
    description: "Browse our extensive collection of quality products with fast shipping and great prices.",
    images:['/Thumbernail.jpg']
  }
};


export default function ProductPage() {
  return (
    <section>
      {/* display all product cards */}
      <ProductListComponent />
    </section>
  );
}