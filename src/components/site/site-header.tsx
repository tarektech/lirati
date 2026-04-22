"use client";

import { Globe, Moon, Sun } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";
import { useChangeLocale, useCurrentLocale, useI18n } from "@/locales/client";
import { RichHtml } from "./rich-html";
import { toggleTheme } from "./theme-provider";

/** DOM order — last id whose top has passed the activation line wins */
const NAV_SCROLL_IDS = [
  "features",
  "converter",
  "validator",
  "denoms",
  "faq",
  "download",
] as const;

function readActiveSectionId(): (typeof NAV_SCROLL_IDS)[number] | "" {
  if (typeof document === "undefined") return "";
  const header = document.querySelector<HTMLElement>(".nav");
  const offset = (header?.offsetHeight ?? 70) + 12;
  let active: (typeof NAV_SCROLL_IDS)[number] | "" = "";
  for (const id of NAV_SCROLL_IDS) {
    const el = document.getElementById(id);
    if (!el) continue;
    if (el.getBoundingClientRect().top <= offset) active = id;
  }
  return active;
}

export function SiteHeader() {
  const t = useI18n();
  const changeLocale = useChangeLocale();
  const currentLocale = useCurrentLocale();
  const [isDark, setIsDark] = useState(true);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState<
    (typeof NAV_SCROLL_IDS)[number] | ""
  >("");
  const navLinksRef = useRef<HTMLElement | null>(null);
  const [navIndicator, setNavIndicator] = useState<{
    left: number;
    width: number;
    visible: boolean;
  }>({ left: 0, width: 0, visible: false });

  const measureNavIndicatorRef = useRef<() => void>(() => {});
  measureNavIndicatorRef.current = () => {
    const nav = navLinksRef.current;
    if (!nav) return;
    if (!activeSection) {
      setNavIndicator((prev) => ({ ...prev, visible: false }));
      return;
    }
    const active = nav.querySelector<HTMLElement>(
      `a[href="#${activeSection}"]`,
    );
    if (!active) {
      setNavIndicator((prev) => ({ ...prev, visible: false }));
      return;
    }
    const navRect = nav.getBoundingClientRect();
    const linkRect = active.getBoundingClientRect();
    setNavIndicator({
      left: linkRect.left - navRect.left,
      width: linkRect.width,
      visible: true,
    });
  };

  // biome-ignore lint/correctness/useExhaustiveDependencies: measure reads activeSection via ref assignment each render; rerun on section/locale
  useLayoutEffect(() => {
    measureNavIndicatorRef.current();
  }, [activeSection, currentLocale]);

  useEffect(() => {
    const nav = navLinksRef.current;
    if (!nav) return;
    const onResize = () => measureNavIndicatorRef.current();
    window.addEventListener("resize", onResize);
    const resizeObserver = new ResizeObserver(onResize);
    resizeObserver.observe(nav);
    document.fonts?.ready?.then(() => measureNavIndicatorRef.current());
    return () => {
      window.removeEventListener("resize", onResize);
      resizeObserver.disconnect();
    };
  }, []);

  useEffect(() => {
    setIsDark(document.documentElement.classList.contains("dark"));
  }, []);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 8);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    let raf = 0;
    const run = () => {
      setActiveSection(readActiveSectionId());
    };
    const onFrame = () => {
      raf = 0;
      run();
    };
    const schedule = () => {
      if (!raf) raf = requestAnimationFrame(onFrame);
    };
    run();
    window.addEventListener("scroll", schedule, { passive: true });
    window.addEventListener("resize", schedule);
    window.addEventListener("hashchange", schedule);
    return () => {
      window.removeEventListener("scroll", schedule);
      window.removeEventListener("resize", schedule);
      window.removeEventListener("hashchange", schedule);
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);

  const onTheme = () => {
    const next = toggleTheme();
    setIsDark(next === "dark");
  };

  const onLang = () => {
    changeLocale(currentLocale === "ar" ? "en" : "ar");
  };

  const langLabel = currentLocale === "ar" ? "English" : "العربية";

  return (
    <header className={scrolled ? "nav is-scrolled" : "nav"}>
      <Link href={`/${currentLocale}`} className="brand">
        <Image
          src="/assets/logo/syp-logo-transparent.png"
          alt="Lirati"
          width={36}
          height={36}
        />
        <div className="word">
          <RichHtml html={String(t("brand"))} />
        </div>
      </Link>
      <nav
        ref={navLinksRef}
        className="nav-links"
        dir={currentLocale === "en" ? "ltr" : "rtl"}
        aria-label="Page sections"
      >
        <span
          className="nav-links-indicator"
          aria-hidden
          style={{
            left: navIndicator.left,
            width: navIndicator.width,
            opacity: navIndicator.visible ? 0.95 : 0,
          }}
        />
        <Link
          href="#features"
          className={cn(activeSection === "features" && "is-active")}
          aria-current={activeSection === "features" ? "true" : undefined}
        >
          {t("nav.features")}
        </Link>
        <Link
          href="#converter"
          className={cn(activeSection === "converter" && "is-active")}
          aria-current={activeSection === "converter" ? "true" : undefined}
        >
          {t("nav.converter")}
        </Link>
        <Link
          href="#validator"
          className={cn(activeSection === "validator" && "is-active")}
          aria-current={activeSection === "validator" ? "true" : undefined}
        >
          {t("nav.validator")}
        </Link>
        <Link
          href="#denoms"
          className={cn(activeSection === "denoms" && "is-active")}
          aria-current={activeSection === "denoms" ? "true" : undefined}
        >
          {t("nav.denoms")}
        </Link>
        <Link
          href="#faq"
          className={cn(activeSection === "faq" && "is-active")}
          aria-current={activeSection === "faq" ? "true" : undefined}
        >
          {t("nav.faq")}
        </Link>
      </nav>
      <div className="nav-right">
        <button
          type="button"
          className="lang-pill"
          onClick={onLang}
          aria-label="Switch language"
        >
          <Globe size={14} aria-hidden />
          <span>{langLabel}</span>
        </button>
        <button
          type="button"
          className="icon-btn"
          onClick={onTheme}
          aria-label="Toggle theme"
          title="Toggle theme"
        >
          {isDark ? (
            <Sun size={18} aria-hidden />
          ) : (
            <Moon size={18} aria-hidden />
          )}
        </button>
        <Link
          href="#download"
          className={cn("nav-cta", activeSection === "download" && "is-active")}
          aria-current={activeSection === "download" ? "true" : undefined}
        >
          <svg
            width="14"
            height="14"
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
          {t("nav.cta")}
        </Link>
      </div>
    </header>
  );
}
