"use client";

import { ZaminAgroLogo } from "@/components/brand/logo";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import { LanguageSwitch } from "./LanguageSwitch";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

export function Header() {
  const t = useTranslations("nav");
  const [open, setOpen] = useState(false);

  const nav = [
    { label: t("products"), href: "#products" },
    { label: t("testimonials"), href: "#testimonials" },
    { label: t("faq"), href: "#faq" },
    { label: t("map"), href: "#map" },
    { label: t("contacts"), href: "#contacts" },
  ];

  return (
    <motion.header
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="sticky top-0 z-50 border-b bg-background/70 backdrop-blur"
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
        <a href="#" className="flex items-center">
          <ZaminAgroLogo />
        </a>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-6 md:flex">
          {nav.map((i) => (
            <a
              key={i.href}
              href={i.href}
              className="text-sm text-muted-foreground transition hover:text-foreground"
            >
              {i.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <LanguageSwitch />

          <Button asChild variant="secondary" className="hidden sm:inline-flex">
            <a href="#products">{t("seePrices")}</a>
          </Button>
          <Button asChild className="hidden sm:inline-flex">
            <a href="#contacts">{t("contact")}</a>
          </Button>

          {/* Mobile menu button */}
          <Button
            variant="secondary"
            size="icon"
            className="md:hidden"
            onClick={() => setOpen((v) => !v)}
            aria-label="Open menu"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>
      </div>

      {/* Mobile dropdown */}
      <div
        className={cn(
          "md:hidden overflow-hidden border-t bg-background/90 backdrop-blur",
          open ? "max-h-96" : "max-h-0",
        )}
      >
        <div className="mx-auto max-w-6xl px-4 py-4">
          <div className="flex flex-col gap-3">
            {nav.map((i) => (
              <a
                key={i.href}
                href={i.href}
                onClick={() => setOpen(false)}
                className="text-sm font-medium text-foreground"
              >
                {i.label}
              </a>
            ))}

            <div className="pt-2 flex gap-2">
              <Button asChild variant="secondary" className="w-full">
                <a href="#products" onClick={() => setOpen(false)}>
                  {t("seePrices")}
                </a>
              </Button>
              <Button asChild className="w-full">
                <a href="#contacts" onClick={() => setOpen(false)}>
                  {t("contact")}
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </motion.header>
  );
}
