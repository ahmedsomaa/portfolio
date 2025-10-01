import type { Metadata } from "next";
import { Figtree, Karla, DM_Mono } from "next/font/google";

import "./globals.css";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { ThemeProvider } from "@/components/shared/theme-provider";
import { MaxWidthWrapper } from "@/components/layout/max-width-wrapper";
import { FreePalestineBanner } from "@/components/banners/free-palestine";

// --------- FONTS ---------
const dmMono = DM_Mono({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  variable: "--font-logo",
});

const fontLogo = dmMono;
const fontMono = dmMono;

const fontDisplay = Figtree({
  subsets: ["latin"],
  variable: "--font-display",
});

const fontSans = Karla({
  subsets: ["latin"],
  variable: "--font-sans",
});

// --------- METADATA ---------
export const metadata: Metadata = {
  metadataBase: new URL("https://som3aware.netlify.app/"),
  title: { default: "Som3aware", template: "%s | Som3aware" },
  description: "Crafting elegant products that captivate and delight users ✨",
  keywords: [
    "Som3aware",
    "Software Engineering",
    "Career",
    "Events",
    "Blog",
    "About",
    "Contact",
  ],
  openGraph: {
    title: "Som3aware",
    description:
      "Crafting elegant products that captivate and delight users ✨",
    url: "https://som3aware.netlify.app/",
    siteName: "Som3aware",
    locale: "en_US",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  twitter: {
    title: "Som3aware",
    site: "Som3aware",
    creator: "@som3aware",
    description:
      "Crafting elegant products that captivate and delight users ✨",
    card: "summary_large_image",
  },
};

// --------- LAYOUT ---------
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${fontSans.variable} ${fontDisplay.variable} ${fontMono.variable} ${fontLogo.variable} font-sans bg-zinc-50 selection:bg-zinc-200 dark:bg-zinc-900 dark:selection:bg-zinc-700 scroll-smooth antialiased`}
      >
        <ThemeProvider
          enableSystem
          attribute="class"
          defaultTheme="system"
          disableTransitionOnChange
        >
          <div className="relative flex min-h-screen flex-col overflow-hidden supports-[overflow:clip]:overflow-clip mb-6">
            <FreePalestineBanner />
            <Header />
            <MaxWidthWrapper>{children}</MaxWidthWrapper>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
