import type { Metadata } from "next";
import Footer from "../components/layout/Footer";
import Navbar from "../components/layout/Navbar";
import "./globals.css";
import { Providers } from "./providers";

import { Albert_Sans } from "next/font/google";

const albertSans = Albert_Sans({
  subsets: ["latin"], // Or other desired subsets
  display: "swap", // Recommended for font loading optimization
  // You can also specify weights if you are not using a variable font
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  title: "jamichek-weight-loss",
  description: "jamichek-weight-loss website",
  // metadataBase: new URL(""),
  alternates: {
    canonical: "/",
    languages: {
      "en-US": "/en-US",
    },
  },
  openGraph: {
    images: "/", //opengraph-image.png
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={albertSans.className}>
      <body className="">
        <Providers>
          <Navbar />
          <main className="">{children}</main>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
