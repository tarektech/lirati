import { setStaticParamsLocale } from "next-international/server";
import { LocaleHtmlAttributes } from "@/components/site/locale-html";
import { I18nProviderClient } from "@/locales/client";
import { getStaticParams } from "@/locales/server";

export function generateStaticParams() {
  return getStaticParams();
}

export default async function LocaleLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}>) {
  const { locale } = await params;
  setStaticParamsLocale(locale);

  return (
    <I18nProviderClient locale={locale} fallback={null}>
      <LocaleHtmlAttributes />
      {children}
    </I18nProviderClient>
  );
}
