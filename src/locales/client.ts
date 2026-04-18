"use client";

import { createI18nClient } from "next-international/client";

export const {
  I18nProviderClient,
  useI18n,
  useScopedI18n,
  useChangeLocale,
  useCurrentLocale,
} = createI18nClient({
  en: () => import("./en"),
  ar: () => import("./ar"),
});
