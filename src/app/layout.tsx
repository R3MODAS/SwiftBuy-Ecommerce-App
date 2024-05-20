import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "../components/Navbar";
import Footer from "@/components/Footer";
import StoreProvider from "./StoreProvider";
import { Toaster } from "react-hot-toast";
import Sidebar from "@/components/Sidebar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "SwiftBuy | Online Ecommerce App",
  description: "Online Ecommerce app made by Sharadindu Das",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <StoreProvider>
          <Navbar />
          <Sidebar />
          {children}
          <Footer />
          <Toaster toastOptions={{ position: 'top-center', duration: 1500 }} />
        </StoreProvider>
      </body>
    </html>
  );
}
