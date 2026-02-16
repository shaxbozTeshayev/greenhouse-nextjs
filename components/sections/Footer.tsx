import { ZaminAgroLogo } from "@/components/brand/logo";
import { useTranslations } from "next-intl";

export function Footer() {
  const t = useTranslations("footer");
  const year = new Date().getFullYear();

  return (
    <footer className="border-t">
      <div className="mx-auto max-w-6xl px-4 py-10">
        <div className="flex flex-col gap-3 sm:gap-6 md:flex-row md:items-center md:justify-between">
          <ZaminAgroLogo />
          <div className="text-sm text-muted-foreground">
            © {year} Zamin Agro. {t("rights")}
          </div>
        </div>
      </div>
    </footer>
  );
}
