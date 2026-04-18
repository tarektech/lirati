"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";

export function LocaleHtmlAttributes() {
  const pathname = usePathname();
  const locale = pathname?.startsWith("/en") ? "en" : "ar";

  useEffect(() => {
    const root = document.documentElement;
    root.lang = locale;
    root.dir = locale === "ar" ? "rtl" : "ltr";
  }, [locale]);

  return null;
}
