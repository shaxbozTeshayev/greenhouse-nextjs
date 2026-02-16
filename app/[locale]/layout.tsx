import "../globals.css";
import type { Metadata } from "next";
import { NextIntlClientProvider } from "next-intl";
import { getMessages, setRequestLocale } from "next-intl/server";
import { defaultLocale, locales } from "@/next-intl.config";

export const metadata: Metadata = {
  title: "Zamin Agro — Greenhouse supplies",
  description:
    "Issiqxona mahsulotlari: klipsa, hosil ipi, kapelniy lenta va boshqalar.",
};

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const locale = locales.includes(params.locale as any)
    ? (params.locale as (typeof locales)[number])
    : defaultLocale;

  setRequestLocale(locale);

  const messages = await getMessages();

  return (
    <html lang={locale} suppressHydrationWarning>
      <body className="antialiased">
        <NextIntlClientProvider locale={locale} messages={messages}>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
