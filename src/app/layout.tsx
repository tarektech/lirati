import type { Metadata } from "next";
import { Inter, Tajawal } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/site/theme-provider";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const tajawal = Tajawal({
  subsets: ["arabic"],
  weight: ["400", "500", "700", "800"],
  variable: "--font-tajawal",
});

export const metadata: Metadata = {
  title: "Lirati — Convert your lira, check every price",
  description:
    "Convert old to new Syrian lira, check live rates, and validate prices — Arabic-first.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="ar"
      dir="rtl"
      className={`dark ${inter.variable} ${tajawal.variable}`}
      data-theme="dark"
      data-accent="damask"
      data-hero="converter"
      suppressHydrationWarning
    >
      <body className="min-h-full antialiased">
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
