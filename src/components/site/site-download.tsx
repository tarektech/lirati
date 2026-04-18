"use client";

import Link from "next/link";
import { useI18n } from "@/locales/client";
import { RichHtml } from "./rich-html";

function AppleIcon() {
  return (
    <svg
      width="22"
      height="22"
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden
    >
      <title>Apple</title>
      <path d="M16.365 1.43c0 1.14-.493 2.27-1.177 3.08-.744.9-1.99 1.57-2.987 1.57-.12 0-.23-.02-.3-.03-.01-.06-.04-.22-.04-.39 0-1.15.572-2.27 1.206-2.98.804-.94 2.142-1.64 3.248-1.68.03.13.05.28.05.43zm4.565 15.71c-.03-3.13 2.55-4.66 2.66-4.74-1.44-2.13-3.7-2.42-4.5-2.45-1.92-.19-3.74 1.13-4.71 1.13-.97 0-2.46-1.09-4.05-1.06-2.08.03-4.04 1.21-5.12 3.07-2.18 3.78-.55 9.36 1.57 12.42 1.04 1.5 2.27 3.18 3.87 3.12 1.55-.06 2.14-1.01 4.02-1.01 1.88 0 2.41 1.01 4.05.97 1.67-.02 2.73-1.52 3.75-3.04 1.18-1.74 1.67-3.43 1.69-3.52-.04-.02-3.23-1.24-3.26-4.92z" />
    </svg>
  );
}

function PlayIcon() {
  return (
    <svg
      width="22"
      height="22"
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden
    >
      <title>Google Play</title>
      <path d="M3.609 1.814 13.792 12 3.61 22.186a.996.996 0 0 1-.61-.92V2.734c0-.376.232-.7.61-.92zm10.89 10.893 2.302 2.302-10.937 6.333zM6.864 1.658l10.937 6.333-2.302 2.302zm10.082 4.578 3.563 2.063c.95.55.95 1.95 0 2.5l-3.563 2.063L14.499 12z" />
    </svg>
  );
}

function QrSvg() {
  return (
    <svg
      viewBox="0 0 100 100"
      width="100%"
      height="100%"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
    >
      <title>QR</title>
      <rect width="100" height="100" fill="#fff" />
      <g fill="#00160A">
        <rect x="6" y="6" width="20" height="20" />
        <rect x="10" y="10" width="12" height="12" fill="#fff" />
        <rect x="14" y="14" width="4" height="4" />
        <rect x="74" y="6" width="20" height="20" />
        <rect x="78" y="10" width="12" height="12" fill="#fff" />
        <rect x="82" y="14" width="4" height="4" />
        <rect x="6" y="74" width="20" height="20" />
        <rect x="10" y="78" width="12" height="12" fill="#fff" />
        <rect x="14" y="82" width="4" height="4" />
        <rect x="32" y="6" width="4" height="4" />
        <rect x="40" y="6" width="4" height="4" />
        <rect x="48" y="10" width="4" height="4" />
        <rect x="56" y="6" width="4" height="4" />
        <rect x="6" y="34" width="4" height="4" />
        <rect x="14" y="32" width="4" height="4" />
        <rect x="22" y="36" width="4" height="4" />
        <rect x="34" y="20" width="4" height="4" />
        <rect x="42" y="24" width="4" height="4" />
        <rect x="52" y="20" width="4" height="4" />
        <rect x="60" y="26" width="4" height="4" />
        <rect x="68" y="22" width="4" height="4" />
        <rect x="32" y="32" width="4" height="4" />
        <rect x="40" y="36" width="4" height="4" />
        <rect x="48" y="32" width="4" height="4" />
        <rect x="56" y="38" width="4" height="4" />
        <rect x="64" y="34" width="4" height="4" />
        <rect x="32" y="44" width="4" height="4" />
        <rect x="40" y="48" width="4" height="4" />
        <rect x="52" y="44" width="4" height="4" />
        <rect x="60" y="48" width="4" height="4" />
        <rect x="68" y="44" width="4" height="4" />
        <rect x="34" y="56" width="4" height="4" />
        <rect x="42" y="60" width="4" height="4" />
        <rect x="50" y="56" width="4" height="4" />
        <rect x="58" y="62" width="4" height="4" />
        <rect x="32" y="68" width="4" height="4" />
        <rect x="44" y="68" width="4" height="4" />
        <rect x="54" y="72" width="4" height="4" />
        <rect x="66" y="68" width="4" height="4" />
        <rect x="36" y="78" width="4" height="4" />
        <rect x="48" y="82" width="4" height="4" />
        <rect x="58" y="78" width="4" height="4" />
        <rect x="70" y="82" width="4" height="4" />
        <rect x="34" y="88" width="4" height="4" />
        <rect x="44" y="90" width="4" height="4" />
        <rect x="56" y="88" width="4" height="4" />
        <rect x="68" y="92" width="4" height="4" />
        <rect x="80" y="34" width="4" height="4" />
        <rect x="88" y="40" width="4" height="4" />
        <rect x="82" y="48" width="4" height="4" />
        <rect x="90" y="54" width="4" height="4" />
        <rect x="80" y="60" width="4" height="4" />
        <rect x="88" y="66" width="4" height="4" />
      </g>
    </svg>
  );
}

export function SiteDownload() {
  const t = useI18n();

  return (
    <section id="download" className="download">
      <div className="wrap download-inner">
        <div>
          <div className="eyebrow">{t("dl.eye")}</div>
          <h2>
            <RichHtml html={String(t("dl.title"))} />
          </h2>
          <p>{t("dl.p")}</p>
          <div className="store-row">
            <Link className="store-btn" href="#">
              <AppleIcon />
              <div>
                <span className="sm">{t("dl.iosSm")}</span>
                <span className="lg">{t("dl.iosLg")}</span>
              </div>
            </Link>
            <Link className="store-btn" href="#">
              <PlayIcon />
              <div>
                <span className="sm">{t("dl.playSm")}</span>
                <span className="lg">{t("dl.playLg")}</span>
              </div>
            </Link>
          </div>
        </div>
        <div className="qr-card">
          <div className="qr">
            <QrSvg />
          </div>
          <h4>{t("dl.qrT")}</h4>
          <p>{t("dl.qrP")}</p>
        </div>
      </div>
    </section>
  );
}
