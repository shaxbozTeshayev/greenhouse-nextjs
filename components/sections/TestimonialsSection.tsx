// ==============================
// 5) TestimonialsSection.tsx (REPLACE FULL FILE)
// ==============================
"use client";

import { testimonials } from "@/components/data/site-data";
import { Reveal } from "@/components/motion/reveal";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { useTranslations } from "next-intl";

export function TestimonialsSection() {
  const t = useTranslations();

  return (
    <section id="testimonials" className="bg-muted/30">
      <div className="mx-auto max-w-6xl px-4 py-12 sm:py-14 md:py-20">
        <Reveal>
          <div className="text-sm text-muted-foreground">
            {t("testimonialsSection.kicker")}
          </div>
          <h2 className="mt-1 text-3xl font-semibold tracking-tight">
            {t("testimonialsSection.title")}
          </h2>
          <p className="mt-2 max-w-2xl text-sm text-muted-foreground">
            {t("testimonialsSection.hint")}
          </p>
        </Reveal>

        <Separator className="my-6" />

        {/* Better breakpoints for mobile + iPad */}
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((it, idx) => (
            <Reveal key={it.textKey} delay={0.04 * idx}>
              <Card className="h-full">
                <CardHeader>
                  <div className="text-base font-semibold">{t(it.nameKey)}</div>
                  <div className="text-xs text-muted-foreground">
                    {t(it.roleKey)}
                  </div>
                </CardHeader>
                <CardContent className="text-sm text-muted-foreground">
                  “{t(it.textKey)}”
                </CardContent>
              </Card>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
