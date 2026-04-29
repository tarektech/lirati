"use client";

import { ChevronDown } from "lucide-react";
import Link from "next/link";
import { useI18n } from "@/locales/client";

export function SiteFaq() {
  const t = useI18n();
  const items = ["1", "2", "3", "4", "5", "6"] as const;

  return (
    <section id="faq">
      <div className="wrap">
        <div className="section-head">
          <div className="eyebrow">{t("faq.eye")}</div>
          <h2>{t("faq.title")}</h2>
        </div>
        <div className="faq-list">
          {items.map((k, i) => (
            <details key={k} className="faq-item" open={i === 0}>
              <summary>
                {t(`faq.${k}.q`)}
                <span className="chev">
                  <ChevronDown size={18} aria-hidden />
                </span>
              </summary>
              <div className="content">
                {k === "1" ? (
                  <>
                    <p>{t("faq.1.a")}</p>
                    <div className="ar" dir="rtl">
                      {t("faq.1.ar")}
                    </div>
                  </>
                ) : k === "2" ? (
                  <p>
                    {t("faq.2.aBefore")}
                    <Link
                      href="https://sp-today.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{
                        color: "var(--accent-brand)",
                        fontWeight: 600,
                      }}
                    >
                      {t("faq.2.aLinkLabel")}
                    </Link>
                    {t("faq.2.aAfter")}
                  </p>
                ) : k === "6" ? (
                  <p>
                    {t("faq.6.aBefore")}
                    <Link
                      href="mailto:support@tarekzein.com"
                      style={{
                        color: "var(--accent-brand)",
                        fontWeight: 600,
                      }}
                    >
                      support@tarekzein.com
                    </Link>
                    {t("faq.6.aAfter")}
                  </p>
                ) : (
                  <p>{t(`faq.${k}.a`)}</p>
                )}
              </div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
