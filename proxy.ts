import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";
import { createI18nMiddleware } from "next-international/middleware";

/** Shared handler: root `/` must be in `matcher` or Next never runs the proxy there (→ 404 with only `app/[locale]`). */
const intlMiddleware = createI18nMiddleware({
  locales: ["ar", "en"],
  defaultLocale: "ar",
  urlMappingStrategy: "redirect",
  /** Without this, Accept-Language often yields `en` → redirect to `/en` instead of `/ar`. */
  resolveLocaleFromRequest: () => null,
});

const PATHNAME_HEADER = "x-pathname";

function withPathnameForRsc(request: NextRequest, response: NextResponse) {
  if (response.status >= 300 && response.status < 400) {
    return response;
  }

  const pathname = request.nextUrl.pathname;
  const requestHeaders = new Headers(request.headers);
  requestHeaders.set(PATHNAME_HEADER, pathname);

  const nextResponse = NextResponse.next({
    request: { headers: requestHeaders },
  });

  for (const c of response.cookies.getAll()) {
    nextResponse.cookies.set(c.name, c.value, c);
  }

  const localeFromIntl = response.headers.get("X-Next-Locale");
  if (localeFromIntl) {
    nextResponse.headers.set("X-Next-Locale", localeFromIntl);
  }

  return nextResponse;
}

function proxyHandler(request: NextRequest) {
  const response = intlMiddleware(request);
  return withPathnameForRsc(request, response);
}

export default proxyHandler;
/** Next.js 16 `proxy.ts` prefers this named export over `default`. */
export const proxy = proxyHandler;

export const config = {
  matcher: ["/", "/((?!api|_next/static|_next/image|favicon.ico|.*\\..*).*)"],
};
