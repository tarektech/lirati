"use client";

import { useMemo, useState } from "react";
import { DEMO_RATE } from "@/lib/demo-data";
import { useCurrentLocale, useI18n } from "@/locales/client";

function parseNum(s: string) {
  return Number.parseFloat(String(s).replace(/,/g, "")) || 0;
}

function fmt(n: number) {
  return n.toLocaleString("en-US", { maximumFractionDigits: 2 });
}

export function SiteConverter() {
  const t = useI18n();
  const locale = useCurrentLocale();
  const [oldToNew, setOldToNew] = useState(true);
  const [input, setInput] = useState("250,000");

  const v = useMemo(() => parseNum(input), [input]);

  const { out, usd } = useMemo(() => {
    if (oldToNew) {
      const newL = v / 100;
      return { out: fmt(newL), usd: (newL / DEMO_RATE).toFixed(2) };
    }
    const oldL = v * 100;
    return { out: fmt(oldL), usd: (v / DEMO_RATE).toFixed(2) };
  }, [v, oldToNew]);

  const onInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const raw = e.target.value.replace(/\D/g, "");
    if (raw) {
      const formatted = Number.parseInt(raw, 10).toLocaleString("en-US");
      setInput(formatted);
    } else {
      setInput("");
    }
  };

  const swap = () => {
    setOldToNew((o) => {
      const next = !o;
      setInput(next ? "250,000" : "2,500");
      return next;
    });
  };

  const labelIn =
    locale === "ar"
      ? oldToNew
        ? "المبلغ بالليرة القديمة"
        : "المبلغ بالليرة الجديدة"
      : oldToNew
        ? "Old lira amount"
        : "New lira amount";

  const outLabel =
    locale === "ar"
      ? oldToNew
        ? "النتيجة بالليرة الجديدة"
        : "النتيجة بالليرة القديمة"
      : oldToNew
        ? "New lira — result"
        : "Old lira — result";

  const sufIn = oldToNew ? "ل.س قديمة" : "ل.س جديدة";
  const unitOut = oldToNew ? "ل.س جديدة" : "ل.س قديمة";

  return (
    <section id="converter" className="demo">
      <div className="wrap demo-grid">
        <div className="demo-left">
          <div className="eyebrow">{t("conv.eye")}</div>
          <h2>{t("conv.title")}</h2>
          <p>{t("conv.p")}</p>
          <div className="demo-checks">
            {(["c1", "c2", "c3", "c4"] as const).map((k) => (
              <div key={k} className="check">
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
                <span>{t(`conv.${k}`)}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="converter-card">
          <div className="conv-live-rate">
            <span className="l">
              <span className="live-dot" />
              <span>{t("conv.live")}</span>
            </span>
            <span className="v">
              $1 = <span>{DEMO_RATE.toFixed(2)}</span>{" "}
              <span className="text-xs font-semibold">{t("conv.unit")}</span>
            </span>
          </div>

          <div className="conv-input-wrap">
            <label htmlFor="conv-in">{labelIn}</label>
            <input
              id="conv-in"
              type="text"
              className="conv-input"
              value={input}
              inputMode="numeric"
              onChange={onInput}
            />
            <span className="suf">{sufIn}</span>
          </div>

          <button
            type="button"
            className="conv-swap"
            onClick={swap}
            aria-label="Swap direction"
          >
            <svg
              width="22"
              height="22"
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
          </button>

          <div className="conv-result">
            <div className="l">{outLabel}</div>
            <div className="big">
              <span>{out}</span> <span className="unit">{unitOut}</span>
            </div>
            <div className="badges">
              <span className="live">{t("conv.live2")}</span>
              <span>
                USD $<span>{usd}</span>
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
