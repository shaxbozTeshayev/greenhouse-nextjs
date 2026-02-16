import { getRequestConfig } from "next-intl/server";
import { defaultLocale, locales } from "@/next-intl.config";

export default getRequestConfig(async ({ locale }) => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const safeLocale = locales.includes(locale as any)
    ? (locale as (typeof locales)[number])
    : defaultLocale;

  return {
    locale: safeLocale,
    messages: (await import(`../messages/${safeLocale}.json`)).default,
  };
});
