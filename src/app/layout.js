import { Geist, Geist_Mono } from "next/font/google";
import "./styles/globals.css";
import Navbar from "@/app/Components/shared/Navbar";
import Footer from "@/app/components/shared/Footer";
import View from "@/app/Components/shared/View Pricing/View";
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Orbit",
  description: "Made By Orbit",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      
      <body className="min-h-full flex flex-col">
        <Navbar/>
        {children}
        <View/>
        <Footer/>
        </body>
    </html>
  );
}
