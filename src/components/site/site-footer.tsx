"use client";

import Image from "next/image";
import Link from "next/link";
import { useI18n } from "@/locales/client";

export function SiteFooter() {
  const t = useI18n();

  return (
    <footer className="foot">
      <div className="foot-grid">
        <div className="brand-block">
          <div className="brand mb-3.5">
            <Image
              src="/assets/logo/syp-logo-transparent.png"
              alt=""
              width={40}
              height={40}
              className="rounded-[10px]"
            />
            <div className="word">
              Lirati <small className="text-white/40">ليرتي</small>
            </div>
          </div>
          <p className="copy">{t("foot.copy")}</p>
          <p className="copy" dir="rtl">
            {t("foot.copyAr")}
          </p>
        </div>
        <div>
          <h4>{t("foot.hApp")}</h4>
          <ul>
            <li>
              <Link href="#features">{t("foot.lFeat")}</Link>
            </li>
            <li>
              <Link href="#converter">{t("foot.lConv")}</Link>
            </li>
            <li>
              <Link href="#validator">{t("foot.lVal")}</Link>
            </li>
            <li>
              <Link href="#denoms">{t("foot.lDen")}</Link>
            </li>
            <li>
              <Link href="#download">{t("foot.lDl")}</Link>
            </li>
          </ul>
        </div>
        <div>
          <h4>{t("foot.hSup")}</h4>
          <ul>
            <li>
              <Link href="#">{t("foot.lAbout")}</Link>
            </li>
            <li>
              <Link href="#faq">{t("foot.lFaq")}</Link>
            </li>
            <li>
              <Link href="mailto:support@tarekzein.com">
                support@tarekzein.com
              </Link>
            </li>
            <li>
              <Link href="#">{t("foot.lPriv")}</Link>
            </li>
            <li>
              <Link href="#">{t("foot.lTerms")}</Link>
            </li>
          </ul>
        </div>
        <div>
          <h4>{t("foot.hMore")}</h4>
          <ul>
            <li>
              <Link href="/ar">{t("foot.lAr")}</Link>
            </li>
            <li>
              <Link href="/en">{t("foot.lEn")}</Link>
            </li>
            <li>
              <Link href="#">{t("foot.lOpen")}</Link>
            </li>
            <li>
              <Link href="#">{t("foot.lChangelog")}</Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="foot-bottom">
        <span>© 2026 Lirati · Version 1.3.0</span>
        <div className="swatches">
          <span>{t("foot.palette")}</span>
          <span className="sw" style={{ background: "var(--color-forest)" }} />
          <span
            className="sw"
            style={{ background: "var(--color-golden-wheat)" }}
          />
          <span
            className="sw"
            style={{ background: "var(--color-damask-red)" }}
          />
        </div>
      </div>
    </footer>
  );
}
