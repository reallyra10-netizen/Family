import ProductListComponent from "@/components/products/ProductsListComponent";
import { Metadata } from "next";
export const metadata: Metadata = {
  title: "Products",
  description: "Rules of Survival (ROS) was developed and published by NetEase Games, a massive multinational tech and gaming company headquartered in Guangzhou, China.",
  keywords:"Clothes for women, Clothes for men, Clothes for kid, E-commerce, discount, popular T-Shirt, online shop.",
  openGraph:{
    title: {
    template:'%s | FAMILY',
    default: 'FAMILY'
  },
    description: "We design clothing for the modern individual who values quality, longevity, and intentional style. By cutting out unnecessary middlemen and partnering exclusively with ethical, certified manufacturing partners, we deliver premium-grade apparel at a transparent price point.",
    images:['https://cdn.aptoide.com/imgs/6/8/e/68e623efeec40551639649fc9d7e9cac_screen.jpg']
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