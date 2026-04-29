import type { Metadata, Viewport } from "next";
import { Inter, Tajawal } from "next/font/google";
import { headers } from "next/headers";
import "./globals.css";
import { Analytics } from "@vercel/analytics/next";
import { DataBuddyTracker } from "@/components/data-buddy-tracker";
import { ThemeProvider } from "@/components/site/theme-provider";
import { getSiteUrl } from "@/lib/site-url";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const tajawal = Tajawal({
  subsets: ["arabic"],
  weight: ["400", "500", "700", "800"],
  variable: "--font-tajawal",
});

export const viewport: Viewport = {
  themeColor: "#0e3c36",
};

export const metadata: Metadata = {
  metadataBase: new URL(getSiteUrl()),
  manifest: "/site.webmanifest",
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "48x48" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      {
        url: "/android-chrome-192x192.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        url: "/android-chrome-512x512.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
  },
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = (await headers()).get("x-pathname") ?? "/ar";
  const isEn = pathname.startsWith("/en");
  const lang = isEn ? "en" : "ar";
  const dir = isEn ? "ltr" : "rtl";

  return (
    <html
      lang={lang}
      dir={dir}
      className={`dark ${inter.variable} ${tajawal.variable}`}
      data-theme="dark"
      data-accent="damask"
      data-hero="converter"
      suppressHydrationWarning
    >
      <body className="min-h-full antialiased">
        <ThemeProvider>
          {children}
          <DataBuddyTracker />
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  );
}
