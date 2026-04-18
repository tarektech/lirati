import { createI18nMiddleware } from "next-international/middleware";

/** Shared handler: root `/` must be in `matcher` or Next never runs the proxy there (→ 404 with only `app/[locale]`). */
const intlMiddleware = createI18nMiddleware({
  locales: ["ar", "en"],
  defaultLocale: "ar",
  urlMappingStrategy: "redirect",
  /** Without this, Accept-Language often yields `en` → redirect to `/en` instead of `/ar`. */
  resolveLocaleFromRequest: () => null,
});

export default intlMiddleware;
/** Next.js 16 `proxy.ts` prefers this named export over `default`. */
export const proxy = intlMiddleware;

export const config = {
  matcher: [
    "/",
    "/((?!api|_next/static|_next/image|favicon.ico|.*\\..*).*)",
  ],
};
