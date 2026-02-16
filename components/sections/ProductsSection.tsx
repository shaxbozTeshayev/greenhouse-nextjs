"use client";

import Image from "next/image";
import { products } from "@/components/data/site-data";
import { Reveal } from "@/components/motion/reveal";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Check } from "lucide-react";
import { useTranslations } from "next-intl";

export function ProductsSection() {
  const t = useTranslations();

  return (
    <section
      id="products"
      className="mx-auto max-w-6xl px-4 py-12 sm:py-14 md:py-20"
    >
      <Reveal>
        <div className="flex items-end justify-between gap-4">
          <div>
            <div className="text-sm text-muted-foreground">
              {t("productsSection.kicker")}
            </div>
            <h2 className="mt-1 text-3xl font-semibold tracking-tight">
              {t("productsSection.title")}
            </h2>
            <p className="mt-2 max-w-2xl text-sm text-muted-foreground">
              {t("productsSection.hint")}
            </p>
          </div>

          <Button asChild variant="secondary" className="hidden sm:inline-flex">
            <a href="#contacts">{t("productsSection.wholesaleCta")}</a>
          </Button>
        </div>
      </Reveal>

      <Separator className="my-6" />

      {/* Better breakpoints for mobile/iPad */}
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {products.map((p, idx) => (
          <Reveal key={p.id} delay={0.03 * idx}>
            <Card className="h-full overflow-hidden pt-0">
              {/* Image: slightly better aspect on phones */}
              <div className="relative h-64 sm:h-72 w-full overflow-hidden bg-muted">
                <Image
                  src={p.image.src}
                  alt={t(p.image.altKey)}
                  fill
                  className="object-cover"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  priority={idx < 3}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-black/10 to-transparent" />

                {p.tagKey ? (
                  <div className="absolute right-3 top-3">
                    <Badge
                      variant="secondary"
                      className="bg-white/90 text-black"
                    >
                      {t(p.tagKey)}
                    </Badge>
                  </div>
                ) : null}
              </div>

              <div className="flex h-full flex-col">
                <CardHeader className="space-y-2">
                  <div className="flex items-center justify-between gap-2">
                    <div className="text-lg font-semibold">{t(p.titleKey)}</div>
                    {p.tagKey ? (
                      <Badge variant="secondary">{t(p.tagKey)}</Badge>
                    ) : null}
                  </div>

                  <div className="text-sm text-muted-foreground">
                    {t(p.shortKey)}
                  </div>

                  <div className="pt-2 text-xl font-semibold text-green-600">
                    {t(p.priceKey)}
                  </div>
                </CardHeader>

                <CardContent className="space-y-2">
                  {p.bulletKeys.map((k) => (
                    <div key={k} className="flex items-start gap-2 text-sm">
                      <Check className="mt-0.5 h-4 w-4 text-green-600" />
                      <span className="text-muted-foreground">{t(k)}</span>
                    </div>
                  ))}
                </CardContent>

                <CardFooter className="mt-auto flex gap-2">
                  <Button asChild className="w-full">
                    <a href="#contacts">{t("common.order")}</a>
                  </Button>
                  <Button asChild variant="secondary" className="w-full">
                    <a href="#map">{t("common.map")}</a>
                  </Button>
                </CardFooter>
              </div>
            </Card>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
