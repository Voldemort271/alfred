import "@/styles/globals.scss";
import SaleBanner from "@/components/navbar/sale-banner";
import Navbar from "@/components/navbar/navbar";
import Footer from "@/components/footer/footer";

// TODO: Integrate GitHub CI

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <>
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
    </>
  );
}
