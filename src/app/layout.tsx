import type { Metadata } from "next";
import { DM_Serif_Display, Plus_Jakarta_Sans } from "next/font/google";
import { Providers } from "@/components/providers";
import "./globals.css";

const dmSerif = DM_Serif_Display({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-dm-serif",
  display: "swap",
});

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-jakarta",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Web Design in Gloucester Point, VA | Pointe Web Co.",
  description:
    "Custom websites for local businesses starting at $500. No contracts, no surprises. Serving Gloucester Point, Yorktown, Hampton, Newport News & Hampton Roads.",
  metadataBase: new URL("https://pointewebco.com"),
  openGraph: {
    title: "Web Design in Gloucester Point, VA | Pointe Web Co.",
    description:
      "Custom websites for local businesses starting at $500. No contracts, no surprises.",
    type: "website",
    locale: "en_US",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${dmSerif.variable} ${plusJakarta.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-body bg-background text-foreground">
        <a href="#main-content" className="skip-to-content">Skip to content</a>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
