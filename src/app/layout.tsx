import type { Metadata } from "next";
import "./globals.css";
import {Providers} from "./providers";



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
    <html lang="en" className="white scroll-smooth">
      <body>
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  );
}
