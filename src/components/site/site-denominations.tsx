"use client";

import Image from "next/image";
import { DENOMINATIONS } from "@/lib/demo-data";
import { useI18n } from "@/locales/client";

export function SiteDenominations() {
  const t = useI18n();

  return (
    <section id="denoms" className="denoms">
      <div className="wrap">
        <div className="denom-head">
          <div>
            <div className="eyebrow">{t("den.eye")}</div>
            <h2>{t("den.title")}</h2>
          </div>
          <p>{t("den.p")}</p>
        </div>
        <div className="denom-grid">
          {DENOMINATIONS.map((d) => (
            <div
              key={d.amount}
              className="denom-card"
              style={{ borderColor: d.border }}
            >
              <div className="relative h-40 min-h-[160px] w-full overflow-hidden bg-muted sm:h-44">
                <Image
                  alt={t(`den.${d.amount}` as "den.500")}
                  className="object-fill"
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1200px) 50vw, 420px"
                  src={d.image}
                />
              </div>
              <div className="info">
                <span className="name">
                  {t(`den.${d.amount}` as "den.500")}
                </span>
                <span className="val" style={{ background: d.border }}>
                  {d.amount}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
