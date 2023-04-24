import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import Navigation from "@/components/Navigation";
import Slides from "@/components/Slides";
import ProductList from "@/components/ProductList";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div className="">
      <Navigation />
      <main className="">
        <Slides />
        <ProductList />
      </main>
    </div>
  );
}
