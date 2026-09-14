import { Metadata } from "next";
import Image from "next/image";
export const metadata: Metadata = {
  title: 'HomePage',
  description: "LEGOBiz is the platform which review about the e-commerce products which supported with the store of clothes, trouser, for Cambodia.",
  keywords:"Clothes for women, Clothes for men, Clothes for kid, E-commerce, discount, popular T-Shirt, online shop.",
  openGraph:{
    title: {
    template:'%s | FAMILY',
    default: 'FAMILY'
  },
    description: "From our factory floors to your doorstep, we believe in open communication about how and where your clothes are made.",
    images:['https://cdn.aptoide.com/imgs/6/8/e/68e623efeec40551639649fc9d7e9cac_screen.jpg']
  }
};

export default function Home() {
  return (
    <main className="dark:bg-gray-800 bg-white relative overflow-hidden h-screen">
  <header className="h-24 sm:h-32 flex items-center z-30 w-full">
    <div className="container mx-auto px-6 flex items-center justify-between">
      <div className="uppercase text-gray-800 dark:text-white font-black text-3xl">
        Watch.ME
      </div>
      <div className="flex items-center">
        <nav className="font-sen text-gray-800 dark:text-white uppercase text-lg lg:flex items-center hidden">
          <a href="#" className="py-2 px-6 flex">
            Home
          </a>
          <a href="#" className="py-2 px-6 flex">
            Watch
          </a>
          <a href="#" className="py-2 px-6 flex">
            Product
          </a>
          <a href="#" className="py-2 px-6 flex">
            Contact
          </a>
          <a href="#" className="py-2 px-6 flex">
            Carrer
          </a>
        </nav>
        <button className="lg:hidden flex flex-col ml-4">
          <span className="w-6 h-1 bg-gray-800 dark:bg-white mb-1"></span>
          <span className="w-6 h-1 bg-gray-800 dark:bg-white mb-1"></span>
          <span className="w-6 h-1 bg-gray-800 dark:bg-white mb-1"></span>
        </button>
      </div>
    </div>
  </header>
  <div className="bg-white dark:bg-gray-800 flex relative z-20 items-center overflow-hidden">
    <div className="container mx-auto px-6 flex relative py-16">
      <div className="sm:w-2/3 lg:w-2/5 flex flex-col relative z-20">
        <span className="w-20 h-2 bg-gray-800 dark:bg-white mb-12"></span>
        <h1 className="font-bebas-neue uppercase text-6xl sm:text-8xl font-black flex flex-col leading-none dark:text-white text-gray-800">
          Be on
          <span className="text-5xl sm:text-7xl">Time</span>
        </h1>
        <p className="text-sm sm:text-base text-gray-700 dark:text-white">
          Dimension of reality that makes change possible and understandable. An
          indefinite and homogeneous environment in which natural events and
          human existence take place.
        </p>
        <div className="flex mt-8">
          <a
            href="#"
            className="uppercase py-2 px-4 rounded-lg bg-pink-500 border-2 border-transparent text-white text-md mr-4 hover:bg-pink-400"
          >
            Get started
          </a>
          <a
            href="#"
            className="uppercase py-2 px-4 rounded-lg bg-transparent border-2 border-pink-500 text-pink-500 dark:text-white hover:bg-pink-500 hover:text-white text-md"
          >
            Read more
          </a>
        </div>
      </div>
      <div className="hidden sm:block sm:w-1/3 lg:w-3/5 relative">
        <img
          src="https://www.tailwind-kit.com/images/object/10.png"
          className="max-w-xs md:max-w-sm m-auto"
        />
      </div>
    </div>
  </div>
</main>

  );
}
