"use client";

import { Button } from "@/components/ui/button";
import { useLocale } from "next-intl";
import { usePathname, useRouter } from "next/navigation";

function replaceLocale(pathname: string, nextLocale: string) {
  const parts = pathname.split("/");
  if (parts.length > 1) parts[1] = nextLocale;
  const nextPath = parts.join("/");
  return nextPath || `/${nextLocale}`;
}

export function LanguageSwitch() {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  const nextLocale = locale === "uz" ? "ru" : "uz";

  return (
    <Button
      variant="secondary"
      size="sm"
      onClick={() => router.push(replaceLocale(pathname, nextLocale))}
      className="min-w-16"
    >
      {locale === "uz" ? "RU" : "UZ"}
    </Button>
  );
}
