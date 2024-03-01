import type { Metadata } from "next";
import Navbar from "../components/Navbar";


export const metadata: Metadata = {
  title: "Vinculacion Admin",
  description: "CETYS Universidad",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Navbar></Navbar>
      {children}
    </>
  );
}
