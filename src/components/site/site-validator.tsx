"use client";

import { Shield } from "lucide-react";
import { useI18n } from "@/locales/client";

export function SiteValidator() {
  const t = useI18n();

  return (
    <section id="validator" className="validator">
      <div className="wrap validator-grid">
        <div className="validator-card">
          <div className="shield">
            <Shield size={22} strokeWidth={2.4} aria-hidden />
          </div>
          <h3>{t("val.t")}</h3>
          <div className="sub">{t("val.sub")}</div>
          <div className="v-row">
            <div className="v-input">
              <div className="l">{t("val.from")}</div>
              <div className="n">
                20,000 <small>ل.س</small>
              </div>
            </div>
            <div className="v-input">
              <div className="l">{t("val.to")}</div>
              <div className="n">
                40,000 <small>ل.س</small>
              </div>
            </div>
          </div>
          <div className="v-input">
            <div className="l">{t("val.ask")}</div>
            <div className="n">
              300 <small>ل.س</small>
            </div>
          </div>
          <div className="v-result">
            <div className="ring">
              <svg
                width="22"
                height="22"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.8"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden
              >
                <polyline points="20 6 9 17 4 12" />
              </svg>
            </div>
            <div className="vt">{t("val.fair")}</div>
            <div className="vrow">
              <span>{t("val.range")}</span>
              <b>200 – 400</b>
            </div>
            <div className="vrow">
              <span>{t("val.seller")}</span>
              <b>300</b>
            </div>
          </div>
        </div>

        <div className="validator-left">
          <div className="eyebrow">{t("val.eye")}</div>
          <h2>{t("val.title")}</h2>
          <p>{t("val.p")}</p>
          <p>{t("val.p2")}</p>
          <div className="verdict-list">
            <div className="verdict fair">
              <div className="ic">
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden
                >
                  <polyline points="20 6 9 17 4 12" />
                </svg>
              </div>
              <div className="txt">
                <strong>{t("vd.fair")}</strong>
                <small>{t("vd.fairS")}</small>
              </div>
            </div>
            <div className="verdict suspicious">
              <div className="ic">
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.6"
                  strokeLinecap="round"
                  aria-hidden
                >
                  <circle cx="12" cy="12" r="10" />
                  <line x1="12" y1="8" x2="12" y2="12" />
                  <line x1="12" y1="16" x2="12.01" y2="16" />
                </svg>
              </div>
              <div className="txt">
                <strong>{t("vd.susp")}</strong>
                <small>{t("vd.suspS")}</small>
              </div>
            </div>
            <div className="verdict over">
              <div className="ic">
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden
                >
                  <polyline points="18 15 12 9 6 15" />
                </svg>
              </div>
              <div className="txt">
                <strong>{t("vd.over")}</strong>
                <small>{t("vd.overS")}</small>
              </div>
            </div>
            <div className="verdict under">
              <div className="ic">
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden
                >
                  <polyline points="6 9 12 15 18 9" />
                </svg>
              </div>
              <div className="txt">
                <strong>{t("vd.under")}</strong>
                <small>{t("vd.underS")}</small>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
