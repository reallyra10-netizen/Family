import { Metadata } from 'next';
import React from 'react'

// static metadata & opengraph
export const metadata: Metadata = {
  title: "AboutPage",
  description: "Explore our complete lineup of contemporary clothing, elevated basics, and seasonal drops.",
  keywords:"Clothes for women, Clothes for men, Clothes for kid, E-commerce, discount, popular T-Shirt, online shop.",
  openGraph:{
    title: {
    template:'%s | FAMILY',
    default: 'FAMILY'
  },
    description: "Rules of Survival (ROS) was developed and published by NetEase Games, a massive multinational tech and gaming company headquartered in Guangzhou, China.",
    images:['https://cdn.aptoide.com/imgs/6/8/e/68e623efeec40551639649fc9d7e9cac_screen.jpg']
  }
};

export default function page() {
  return (
    ''
  )
}
