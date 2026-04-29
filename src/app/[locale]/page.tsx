import { AppJsonLd } from "@/components/site/app-json-ld";
import { FaqJsonLd } from "@/components/site/faq-json-ld";
import { SiteLanding } from "@/components/site/site-landing";

const locales = ["ar", "en"] as const;
type AppLocale = (typeof locales)[number];

function isAppLocale(s: string): s is AppLocale {
  return (locales as readonly string[]).includes(s);
}

export default async function Home({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale: raw } = await params;
  const locale = isAppLocale(raw) ? raw : "ar";

  return (
    <>
      <FaqJsonLd locale={locale} />
      <AppJsonLd locale={locale} />
      <SiteLanding />
    </>
  );
}
