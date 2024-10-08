import "@/styles/globals.scss";
import { Jost } from "next/font/google";
import { type Metadata } from "next";
import { TRPCReactProvider } from "@/trpc/react";
import SaleBanner from "@/components/navbar/sale-banner";
import Navbar from "@/components/navbar/navbar";
import Footer from "@/components/footer/footer";

// TODO: Integrate GitHub CI

const jost = Jost({
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Alfred | Quality apparel from Scandinavia",
  description: "Some metadata for now uwu",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${jost.className}`}>
      <body>
        <TRPCReactProvider>
          <div className="w-screen">
            <SaleBanner />
          </div>
          <div className="sticky top-0 z-50 h-full w-screen">
            <Navbar />
          </div>
          {children}
          <div className="w-screen">
            <Footer />
          </div>
        </TRPCReactProvider>
      </body>
    </html>
  );
}
