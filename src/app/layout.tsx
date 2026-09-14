import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import FooterComponents from "@/components/layout/FooterComponents";
import NavbarComponents from "@/components/layout/NavbarComponents";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// static metadata & open
// static metadata & opengraph
export const metadata: Metadata = {
  title: {
    template:'%s | RULES OF SURVIVAL',
    default: 'RULES OF SURVIVAL'
  },
  description: "LEGOBiz is the platform which review about the e-commerce products which supported with the store of clothes, trouser, for Cambodia.",
  keywords:"Clothes for women, Clothes for men, Clothes for kid, E-commerce, discount, popular T-Shirt, online shop.",
  openGraph:{
    title: {
    template:'%s | FAMILY',
    default: 'FAMILY'
  },
    description: "Quality Over Quantity: Every garment undergoes rigorous wear-testing to ensure it holds its shape, color, and hand-feel wash after wash.",
    images:['https://cdn.aptoide.com/imgs/6/8/e/68e623efeec40551639649fc9d7e9cac_screen.jpg']
  }
};


export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}
        <NavbarComponents/>
        <FooterComponents/>
      </body>
    </html>
  );
}
