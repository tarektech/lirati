"use client";

import { useReducedMotion } from "motion/react";
import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import { DEMO_RATE, HERO_CYCLE } from "@/lib/demo-data";
import { useI18n } from "@/locales/client";
import { RichHtml } from "./rich-html";

export function SiteHero() {
  const t = useI18n();
  const reduceMotion = useReducedMotion();
  const [idx, setIdx] = useState(0);
  const [fade, setFade] = useState(true);

  const example = HERO_CYCLE[idx] ?? HERO_CYCLE[0];

  useEffect(() => {
    if (reduceMotion) return;
    const id = window.setInterval(() => {
      setFade(false);
      window.setTimeout(() => {
        setIdx((i) => (i + 1) % HERO_CYCLE.length);
        setFade(true);
      }, 200);
    }, 3200);
    return () => window.clearInterval(id);
  }, [reduceMotion]);

  const amountStr = useMemo(
    () => example.old.toLocaleString("en-US"),
    [example.old],
  );
  const resultStr = useMemo(
    () => example.new.toLocaleString("en-US"),
    [example.new],
  );
  const usdStr = `USD $${example.usd.toFixed(2)}`;

  return (
    <section className="hero">
      <div className="wrap hero-grid">
        <div>
          <div className="eyebrow">{t("hero.eyebrow")}</div>
          <h1>
            <RichHtml html={String(t("hero.title"))} />
          </h1>
          <p className="lead">{t("hero.lead")}</p>
          <p className="ar-lead" dir="rtl">
            {t("hero.arLead")}
          </p>
          <div className="hero-actions">
            <Link href="#download" className="btn-primary">
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.4"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden
              >
                <title>Download</title>
                <path d="M12 3v12" />
                <polyline points="7 10 12 15 17 10" />
                <path d="M5 21h14" />
              </svg>
              {t("hero.cta1")}
            </Link>
            <Link href="#converter" className="btn-secondary">
              {t("hero.cta2")}
            </Link>
          </div>
          <div className="hero-meta">
            <span className="inline-flex items-center gap-2">
              <span className="dot" />
              <span>{t("hero.meta1")}</span>
            </span>
            <span>{t("hero.meta2")}</span>
          </div>
        </div>

        <div className="hero-phone-col">
          <div className="phone-cluster">
            <div className="float-badge f1">
              <div className="fb-ic">
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.4"
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
              </div>
              <div>
                <b>{t("float.convert")}</b>
                <small>{t("float.convertSub")}</small>
              </div>
            </div>
            <div className="float-badge red f2">
              <div className="fb-ic">
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.4"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden
                >
                  <title>Verdict</title>
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                  <path d="m9 12 2 2 4-4" />
                </svg>
              </div>
              <div>
                <b>{t("float.verdict")}</b>
                <small>{t("float.verdictSub")}</small>
              </div>
            </div>

            <div className="phone p2">
              <div className="phone-screen">
                <div className="status">
                  <span className="moon">
                    <svg
                      width="12"
                      height="12"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      aria-hidden
                    >
                      <title>Mode</title>
                      <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
                    </svg>
                  </span>
                  <span className="text-[10px] font-bold text-white/80 text-end leading-tight">
                    سعر مباشر
                    <br />
                    <span className="text-[9px] text-white/50 font-medium">
                      آخر تحديث 00:00
                    </span>
                  </span>
                </div>
                <div className="mc">
                  <div className="mc-eye">سعر الدولار الآن</div>
                  <div className="mc-rate">
                    <span className="text-white">1$ = </span>
                    <span>{DEMO_RATE}</span>
                    <span className="sy"> ل.س جديدة</span>
                  </div>
                  <div className="mc-help">مرجع مباشر للسوق فقط.</div>
                </div>
                <div className="mc">
                  <div className="mc-eye">أدخل المبلغ القديم</div>
                  <div className="mc-input">
                    <span className="num">{amountStr}</span>
                    <span className="suf">ل.س قديمة</span>
                  </div>
                </div>
                <div className="mc-fab">
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.4"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden
                  >
                    <title>Swap</title>
                    <path d="M21 8H3" />
                    <polyline points="7 4 3 8 7 12" />
                    <path d="M3 16h18" />
                    <polyline points="17 20 21 16 17 12" />
                  </svg>
                </div>
                <div className="mc mc-result">
                  <div className="mc-eye text-center">الناتج بعد حذف صفرين</div>
                  <div
                    className="big transition-opacity duration-200"
                    style={{ opacity: fade ? 1 : 0 }}
                  >
                    {resultStr}
                  </div>
                  <div className="mc-badges">
                    <span className="red">سعر حي</span>
                    <span>{usdStr}</span>
                  </div>
                </div>
                <div className="mc-tab">
                  <div className="t">
                    <svg
                      width="13"
                      height="13"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.2"
                      aria-hidden
                    >
                      <circle cx="12" cy="12" r="3" />
                      <path d="M12 1v6m0 10v6" />
                    </svg>
                    الإعدادات
                  </div>
                  <div className="t">
                    <svg
                      width="13"
                      height="13"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.2"
                      aria-hidden
                    >
                      <polyline points="22 7 13.5 15.5 8.5 10.5 2 17" />
                    </svg>
                    أسعار الصرف
                  </div>
                  <div className="t">
                    <svg
                      width="13"
                      height="13"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.2"
                      aria-hidden
                    >
                      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                    </svg>
                    فحص الأسعار
                  </div>
                  <div className="t active">
                    <svg
                      width="13"
                      height="13"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.4"
                      aria-hidden
                    >
                      <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
                    </svg>
                    الرئيسية
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
