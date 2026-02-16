"use client";

import { Reveal } from "@/components/motion/reveal";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { PhoneCall, Send, Instagram } from "lucide-react";
import { useTranslations } from "next-intl";

export function CTASection() {
  const t = useTranslations("cta");

  const phone = "+998 94 544 44 49";
  const telegram = "https://t.me/zamin_agroo";
  const instagram = "https://instagram.com/zamin_agroo"; // replace if needed

  return (
    <section
      id="contacts"
      className="mx-auto max-w-6xl px-4 py-12 sm:py-14 md:py-20"
    >
      <Reveal>
        <Card className="relative overflow-hidden p-6 md:p-10">
          <div className="pointer-events-none absolute inset-0">
            <div className="absolute -right-24 -top-24 h-64 w-64 rounded-full bg-green-500/15 blur-3xl" />
            <div className="absolute -left-24 -bottom-24 h-64 w-64 rounded-full bg-emerald-500/10 blur-3xl" />
          </div>

          <div className="relative gap-6 md:items-center">
            <div>
              <div className="text-sm text-muted-foreground">{t("kicker")}</div>
              <h3 className="mt-1 text-2xl font-semibold tracking-tight md:text-3xl">
                {t("title")}
              </h3>
              <p className="mt-2 text-sm text-muted-foreground">
                {t("subtitle")}
              </p>

              <div className="mt-5 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                {/* Phone */}
                <Button asChild size="lg" className="w-full sm:w-auto">
                  <a href={`tel:${phone.replace(/\s/g, "")}`}>
                    <PhoneCall className="mr-2 h-4 w-4" />
                    {t("call")} {phone}
                  </a>
                </Button>

                {/* Telegram */}
                <Button
                  asChild
                  size="lg"
                  variant="secondary"
                  className="w-full sm:w-auto"
                >
                  <a href={telegram} target="_blank" rel="noreferrer">
                    <Send className="mr-2 h-4 w-4" />
                    {t("telegram")}
                  </a>
                </Button>
                <Button
                  asChild
                  size="lg"
                  variant="secondary"
                  className="w-full sm:w-auto"
                >
                  <a href={instagram} target="_blank" rel="noreferrer">
                    <Instagram className="mr-2 h-4 w-4" />
                    {t("instagram")}
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </Card>
      </Reveal>
    </section>
  );
}
