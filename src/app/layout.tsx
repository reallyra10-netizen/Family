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
    template:'%s | RULES OF SURVIVAL',
    default: 'RULES OF SURVIVAL'
  },
    description: "AI Mode conversation: rule of survivalrule of survivalRules of Survival (ROS) was a highly popular free-to-play mobile and PC battle royale game developed and published by NetEase Games. First released globally in November 2017, it gained massive traction as one of the earliest mobile clones of PlayerUnknown's Battlegrounds (PUBG). [1] (https://rules-of-survival.en.uptodown.com/windows), [2] (https://www.neteasegames.com/news/20230612/37000_1000521.html), [3] (https://www.youtube.com/watch?v=HSYHNXLPAEw&t=528)Notably, NetEase officially shut down the Rules of Survival servers on June 27, 2022, meaning the original game is no longer playable online. However, the franchise saw a brief continuation with the launch of Rules of Survival 2.0 in early 2022. [1] (https://www.youtube.com/watch?v=-pO1AIal01I), [2] (https://rules-of-survival.en.aptoide.com/app), [3] (https://rules-of-survival-2-0.en.uptodown.com/windows), [4] (https://www.neteasegames.com/news/20230612/37000_1000521.html)",
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
