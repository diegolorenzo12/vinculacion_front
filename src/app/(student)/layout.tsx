import type { Metadata } from "next";
import { Providers } from "../providers";
import Header from "../components/Header";
import Footer from "../components/Footer";



export const metadata: Metadata = {
  title: "Vinculacion",
  description: "CETYS Universidad",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <Providers>
      <div className="p-4">
        <Header />
      </div>
      {children}
    <Footer />
    </Providers>
  );
}
