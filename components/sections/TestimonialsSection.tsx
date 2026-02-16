"use client";

import { testimonials } from "@/components/data/site-data";
import { Reveal } from "@/components/motion/reveal";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { useTranslations } from "next-intl";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";

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

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((it, idx) => (
            <Reveal key={it.textKey} delay={0.04 * idx}>
              <Card className="h-full transition hover:shadow-md">
                <CardHeader className="flex flex-row items-center gap-4">
                  <Avatar className="h-12 w-12">
                    <AvatarImage
                      src={`https://i.pravatar.cc/150?img=${idx + 10}`}
                      alt={t(it.nameKey)}
                    />
                    <AvatarFallback>{t(it.nameKey).charAt(0)}</AvatarFallback>
                  </Avatar>

                  <div>
                    <div className="text-base font-semibold">
                      {t(it.nameKey)}
                    </div>
                    <div className="text-xs text-muted-foreground">
                      {t(it.roleKey)}
                    </div>
                  </div>
                </CardHeader>

                <CardContent className="text-sm text-muted-foreground leading-relaxed">
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
