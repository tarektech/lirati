type LocaleDocumentProps = {
  locale: "ar" | "en";
};

/** Syncs `<html lang/dir>` before paint when root layout lacks route context (SSG). */
export function LocaleDocument({ locale }: LocaleDocumentProps) {
  const dir = locale === "en" ? "ltr" : "rtl";

  return (
    <script
      // biome-ignore lint/security/noDangerouslySetInnerHtml: sync html lang/dir before paint
      dangerouslySetInnerHTML={{
        __html: `document.documentElement.lang=${JSON.stringify(locale)};document.documentElement.dir=${JSON.stringify(dir)};`,
      }}
    />
  );
}
