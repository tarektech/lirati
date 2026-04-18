"use client";

import { useI18n } from "@/locales/client";

import { SiteTicker } from "./site-ticker";

function FeatIconConvert() {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      <title>Convert</title>
      <path d="M21 8H3" />
      <polyline points="7 4 3 8 7 12" />
      <path d="M3 16h18" />
      <polyline points="17 20 21 16 17 12" />
    </svg>
  );
}

function FeatIconShield() {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      <title>Check</title>
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      <path d="m9 12 2 2 4-4" />
    </svg>
  );
}

function FeatIconRates() {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      <title>Rates</title>
      <polyline points="22 7 13.5 15.5 8.5 10.5 2 17" />
      <polyline points="16 7 22 7 22 13" />
    </svg>
  );
}

export function SiteFeatures() {
  const t = useI18n();

  const cards = [
    { className: "feat", icon: <FeatIconConvert /> },
    { className: "feat red", icon: <FeatIconShield /> },
    { className: "feat gold", icon: <FeatIconRates /> },
  ] as const;

  const keys = ["1", "2", "3"] as const;

  return (
    <section id="features">
      <SiteTicker />
      <div className="wrap">
        <div className="section-head">
          <div className="eyebrow">{t("feat.eye")}</div>
          <h2>{t("feat.title")}</h2>
          <p>{t("feat.lead")}</p>
        </div>
        <div className="feat-grid">
          {keys.map((k, i) => (
            <div key={k} className={cards[i]?.className}>
              <div className="feat-icon">{cards[i]?.icon}</div>
              <h3>{t(`feat.${k}.t` as "feat.1.t")}</h3>
              <p>{t(`feat.${k}.p` as "feat.1.p")}</p>
              <div className="feat-ar" dir="rtl">
                {t(`feat.${k}.ar` as "feat.1.ar")}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
