"use client";

import { useI18n } from "@/locales/client";

export function SiteHow() {
  const t = useI18n();
  const keys = ["1", "2", "3"] as const;

  return (
    <section className="how">
      <div className="wrap">
        <div className="section-head">
          <div className="eyebrow">{t("how.eye")}</div>
          <h2>{t("how.title")}</h2>
          <p>{t("how.p")}</p>
        </div>
        <div className="steps">
          {keys.map((k) => (
            <div key={k} className="step">
              <h4>{t(`how.${k}.t`)}</h4>
              <p>{t(`how.${k}.p`)}</p>
              <div className="ar" dir="rtl">
                {t(`how.${k}.ar`)}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
