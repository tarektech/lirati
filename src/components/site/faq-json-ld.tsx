import ar from "@/locales/ar";
import en from "@/locales/en";

type FaqKey = "1" | "2" | "3" | "4" | "5" | "6";
type LocaleBundle = typeof en | typeof ar;

const FAQ_KEYS = [
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
] as const satisfies readonly FaqKey[];

function faqAnswerPlain(t: LocaleBundle, key: FaqKey): string {
  if (key === "6") {
    return `${t.faq["6"].aBefore}support@tarekzein.com${t.faq["6"].aAfter}`;
  }
  if (key === "2") {
    return `${t.faq["2"].aBefore}${t.faq["2"].aLinkLabel}${t.faq["2"].aAfter}`;
  }
  if (key === "1") {
    return `${t.faq["1"].a} ${t.faq["1"].ar}`;
  }
  return t.faq[key].a;
}

export function FaqJsonLd({ locale }: { locale: "ar" | "en" }) {
  const t = locale === "en" ? en : ar;
  const mainEntity = FAQ_KEYS.map((key) => ({
    "@type": "Question" as const,
    name: t.faq[key].q,
    acceptedAnswer: {
      "@type": "Answer" as const,
      text: faqAnswerPlain(t, key),
    },
  }));

  const data = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity,
  };

  return (
    <script
      type="application/ld+json"
      // biome-ignore lint/security/noDangerouslySetInnerHtml: JSON-LD from static locale bundles only
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
