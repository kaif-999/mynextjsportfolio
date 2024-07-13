import Header from "./components/Header";
import Footer from "./components/Footer";

import Image from "next/image";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between ${inter.className}`}
    >
      <Header />
      <Footer/>
    </main>
  );
}
