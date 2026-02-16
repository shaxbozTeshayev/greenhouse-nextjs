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

type Locale = (typeof locales)[number];

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale: paramLocale } = await params;

  const locale: Locale = locales.includes(paramLocale as Locale)
    ? (paramLocale as Locale)
    : defaultLocale;

  setRequestLocale(locale);

  const messages = await getMessages({ locale });

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
