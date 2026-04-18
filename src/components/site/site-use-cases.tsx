"use client";

import { Building2, Clock, LayoutGrid, ShoppingBag } from "lucide-react";
import { useI18n } from "@/locales/client";

const icons = [ShoppingBag, Building2, Clock, LayoutGrid] as const;

export function SiteUseCases() {
  const t = useI18n();
  const keys = ["1", "2", "3", "4"] as const;

  return (
    <section className="usecases">
      <div className="wrap">
        <div className="section-head">
          <div className="eyebrow">{t("uc.eye")}</div>
          <h2>{t("uc.title")}</h2>
          <p>{t("uc.p")}</p>
        </div>
        <div className="uc-grid">
          {keys.map((k, i) => {
            const Icon = icons[i] ?? ShoppingBag;
            return (
              <div key={k} className="uc">
                <div className="ic">
                  <Icon size={28} strokeWidth={2.2} aria-hidden />
                </div>
                <h4>{t(`uc.${k}.t`)}</h4>
                <p>{t(`uc.${k}.p`)}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
