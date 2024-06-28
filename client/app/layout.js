import { Inter } from "next/font/google";
import "./globals.css";
import MainHeader from "@/components/MainHeader";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "fit-science",
  description: "information and studies about Exercise and wellness",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
         <MainHeader/>
        {children}
        </body>
    </html>
  );
}
