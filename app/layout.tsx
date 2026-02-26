import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";
import { Providers } from "./providers";

import Footer from "@/components/shared/Footer";
import Navbar from "@/components/shared/Navbar";
import { Albert_Sans } from "next/font/google";

const albertSans = Albert_Sans({
  subsets: ["latin"], // Or other desired subsets
  display: "swap", // Recommended for font loading optimization
  // You can also specify weights if you are not using a variable font
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  title: "Jachimek Chiropractic",
  description: "Jachimek Chiropractic website",
  metadataBase: new URL("https://www.jachimekchiro.com"),
  alternates: {
    canonical: "/",
    languages: {
      "en-US": "/en-US",
    },
  },

  openGraph: {
    images: "/opengraph-image.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={albertSans.className}>
    <Script src="https://cdn.userway.org/widget.js" data-account="Ns4hfOuAF8" data-position="3" strategy="afterInteractive" />
      <body className="bg-white   text-[#0B0C0E]">
        <Providers>
          <Navbar />
          <main className="">{children}</main>
          <Footer />
        </Providers>
      </body> 
    </html>
  );
}
