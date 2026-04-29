/**
 * Canonical origin for metadata, sitemap, and JSON-LD (no trailing slash).
 *
 * Production: set `NEXT_PUBLIC_SITE_URL` to your live origin (match www vs apex in DNS + Vercel + Google Search Console).
 */
export function getSiteUrl(): string {
  const fromEnv = process.env.NEXT_PUBLIC_SITE_URL;
  if (fromEnv) {
    return fromEnv.replace(/\/$/, "");
  }
  if (process.env.VERCEL_URL) {
    return `https://${process.env.VERCEL_URL}`.replace(/\/$/, "");
  }
  return "http://localhost:3000";
}
