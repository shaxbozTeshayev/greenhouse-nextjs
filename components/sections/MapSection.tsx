"use client";

import { Reveal } from "@/components/motion/reveal";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { useTranslations } from "next-intl";

export function MapSection() {
  const t = useTranslations("mapSection");

  const yandexEmbedSrc =
    "https://yandex.uz/map-widget/v1/?display-text=zamin%20agro&ll=64.383298%2C39.942667&mode=search&sctx=ZAAAAAgBEAAaKAoSCcueBDbnUVFAERGPxMvTp0RAEhIJj3IwmwDD3j8Re0%2FltKfkzD8iBgABAgMEBSgKOABA8%2BcLSAFqAnV6nQHNzMw9oAEAqAEAvQEwA4f3wgEGqeLS0e0FggIKemFtaW4gYWdyb4oCAJICAJoCDGRlc2t0b3AtbWFwcw%3D%3D&sll=64.383298%2C39.942667&sspn=0.002637%2C0.001264&text=zamin%20agro&whatshere%5Bpoint%5D=64.382939%2C39.942755&whatshere%5Bzoom%5D=17&z=19.51";

  return (
    <section id="map" className="bg-muted/30">
      <div className="mx-auto max-w-6xl px-4 py-12 sm:py-14 md:py-20">
        <Reveal>
          <div className="text-sm text-muted-foreground">{t("kicker")}</div>
          <h2 className="mt-1 text-3xl font-semibold tracking-tight">
            {t("title")}
          </h2>
          <p className="mt-2 max-w-2xl text-sm text-muted-foreground">
            {t("hint")}
          </p>
        </Reveal>

        <Separator className="my-6" />

        <div className="grid gap-4 lg:grid-cols-[1.4fr_0.6fr]">
          <Reveal>
            <Card className="overflow-hidden">
              <div className="aspect-[16/12] w-full sm:aspect-[16/10]">
                <iframe
                  title="Zamin Agro map"
                  src={yandexEmbedSrc}
                  className="h-full w-full"
                  loading="lazy"
                  allowFullScreen
                />
              </div>
            </Card>
          </Reveal>

          <Reveal delay={0.05}>
            <Card>
              <CardHeader>
                <div className="text-base font-semibold">{t("side.title")}</div>
                <div className="text-sm text-muted-foreground">
                  {t("side.subtitle")}
                </div>
              </CardHeader>
              <CardContent className="space-y-3 text-sm text-muted-foreground">
                <div>
                  <div className="font-medium text-foreground">
                    {t("side.hoursTitle")}
                  </div>
                  <div>{t("side.hoursText")}</div>
                </div>
                <div>
                  <div className="font-medium text-foreground">
                    {t("side.deliveryTitle")}
                  </div>
                  <div>{t("side.deliveryText")}</div>
                </div>
                <div>
                  <div className="font-medium text-foreground">
                    {t("side.wholesaleTitle")}
                  </div>
                  <div>{t("side.wholesaleText")}</div>
                </div>
              </CardContent>
            </Card>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
