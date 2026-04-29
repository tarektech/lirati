import { APPLE_STORE_URL, GOOGLE_PLAY_URL } from "@/lib/app-store-urls";
import { getSiteUrl } from "@/lib/site-url";
import ar from "@/locales/ar";
import en from "@/locales/en";

type AppLocale = "ar" | "en";

export function AppJsonLd({ locale }: { locale: AppLocale }) {
  const t = locale === "ar" ? ar : en;
  const base = getSiteUrl();
  const pageUrl = `${base}/${locale}`;

  const data = {
    "@context": "https://schema.org",
    "@type": "MobileApplication",
    name: "Lirati",
    alternateName: "ليرتي",
    applicationCategory: "FinanceApplication",
    operatingSystem: "iOS 15 or later, Android 8 or later",
    description: t.seo.description,
    url: pageUrl,
    downloadUrl: [APPLE_STORE_URL, GOOGLE_PLAY_URL],
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "USD",
    },
  };

  return (
    <script
      type="application/ld+json"
      // biome-ignore lint/security/noDangerouslySetInnerHtml: JSON-LD from static locale bundles only
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
