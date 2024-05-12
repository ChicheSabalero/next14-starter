import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar/Navbar";
import Footer from "@/components/footer/Footer";
// import ClientSideProvidertest from "@/components/clientSideProvidertest";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Next App",
  description: "Next.js starter app",
};

export default function RootLayout({ children }) {
  return (
    <>
      <html lang="en">
        <body className={inter.className}>
          {/* <ClientSideProvidertest> */}
          <div className="container">
            <Navbar />
            {children}
            <Footer />
          </div>
          {/* </ClientSideProvidertest> */}
        </body>
      </html>
    </>
  );
}
