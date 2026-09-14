import ProductListComponent from "@/components/products/ProductsListComponent";
import { Metadata } from "next";
export const metadata: Metadata = {
  title: "Skins",
  description: "Rules of Survival (ROS) was developed and published by NetEase Games, a massive multinational tech and gaming company headquartered in Guangzhou, China.",
  keywords:"Clothes for women, Clothes for men, Clothes for kid, E-commerce, discount, popular T-Shirt, online shop.",
  openGraph:{
    title: {
    template:'%s | RULES OF SURVIVAL',
    default: 'RULES OF SURVIVAL'
  },
    description: "During its peak, Rules of Survival (ROS) was famous for its massive, incredibly deep library of cosmetics. NetEase heavily leaned into vibrant, animated, and sometimes wildly expensive character outfits, weapon designs, and vehicle wraps to set the game apart.",
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