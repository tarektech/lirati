import type { Metadata } from "next";
import { setStaticParamsLocale } from "next-international/server";
import { getSiteUrl } from "@/lib/site-url";
import { I18nProviderClient } from "@/locales/client";
import { getStaticParams } from "@/locales/server";

const locales = ["ar", "en"] as const;
type AppLocale = (typeof locales)[number];

function isAppLocale(s: string): s is AppLocale {
  return (locales as readonly string[]).includes(s);
}

export function generateStaticParams() {
  return getStaticParams();
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale: raw } = await params;
  const locale = isAppLocale(raw) ? raw : "ar";
  const base = new URL(getSiteUrl());

  const { default: en } = await import("@/locales/en");
  const { default: ar } = await import("@/locales/ar");
  const seo = locale === "ar" ? ar.seo : en.seo;

  const arUrl = new URL("/ar", base).toString();
  const enUrl = new URL("/en", base).toString();

  return {
    title: seo.title,
    description: seo.description,
    alternates: {
      canonical: `/${locale}`,
      languages: {
        ar: arUrl,
        en: enUrl,
        "x-default": arUrl,
      },
    },
    robots: {
      index: true,
      follow: true,
      googleBot: { index: true, follow: true },
    },
    openGraph: {
      type: "website",
      siteName: "Lirati",
      locale: locale === "ar" ? "ar_SY" : "en_US",
      alternateLocale: locale === "ar" ? ["en_US"] : ["ar_SY"],
      url: `/${locale}`,
      title: seo.title,
      description: seo.description,
      images: [
        {
          url: "/og-lirati.png",
          width: 1200,
          height: 630,
          alt: "Lirati — Syrian lira converter",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: seo.title,
      description: seo.description,
      images: ["/og-lirati.png"],
    },
  };
}

export default async function LocaleLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}>) {
  const { locale: raw } = await params;
  const locale = isAppLocale(raw) ? raw : "ar";
  setStaticParamsLocale(locale);

  return (
    <I18nProviderClient locale={locale} fallback={null}>
      {children}
    </I18nProviderClient>
  );
}
