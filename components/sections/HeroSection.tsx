"use client";

import { Reveal } from "@/components/motion/reveal";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Leaf, Package, ShieldCheck, Truck } from "lucide-react";
import { useTranslations } from "next-intl";

export function HeroSection() {
  const t = useTranslations("hero");

  const perks = [
    { icon: ShieldCheck, title: t("perks.p1.title"), desc: t("perks.p1.desc") },
    { icon: Package, title: t("perks.p2.title"), desc: t("perks.p2.desc") },
    { icon: Truck, title: t("perks.p3.title"), desc: t("perks.p3.desc") },
    { icon: Leaf, title: t("perks.p4.title"), desc: t("perks.p4.desc") },
  ];

  return (
    <section className="relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0 -z-10">
        {/* FIXED classes + better sizing */}
        <div className="absolute left-1/2 -top-56 h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-green-500/15 blur-3xl" />
        <div className="absolute right-[-180px] top-[120px] h-[420px] w-[420px] rounded-full bg-emerald-500/10 blur-3xl" />
      </div>

      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-12 sm:py-14 md:grid-cols-2 md:py-20">
        <div>
          <Reveal>
            <Badge className="mb-4" variant="secondary">
              {t("badge")}
            </Badge>
          </Reveal>

          <Reveal delay={0.05}>
            <h1 className="text-balance text-4xl font-semibold tracking-tight md:text-5xl">
              {t("title")}
            </h1>
          </Reveal>

          <Reveal delay={0.1}>
            <p className="mt-4 max-w-xl text-pretty text-base text-muted-foreground md:text-lg">
              {t("subtitle")}
            </p>
          </Reveal>

          <Reveal delay={0.15} className="mt-7 flex flex-wrap gap-3">
            <Button asChild size="lg">
              <a href="#products">{t("primaryCta")}</a>
            </Button>
            <Button asChild size="lg" variant="secondary">
              <a href="#map">{t("secondaryCta")}</a>
            </Button>
          </Reveal>

          {/* Better grid behavior on small screens */}
          <Reveal
            delay={0.2}
            className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4"
          >
            {perks.map((p) => (
              <div key={p.title} className="rounded-xl border bg-card p-3">
                <p.icon className="h-5 w-5 text-green-600" />
                <div className="mt-2 text-sm font-medium">{p.title}</div>
                <div className="text-xs text-muted-foreground">{p.desc}</div>
              </div>
            ))}
          </Reveal>
        </div>

        <Reveal delay={0.08} className="relative">
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-120px" }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="relative overflow-hidden rounded-2xl border bg-card"
          >
            <div className="p-6">
              <div className="text-sm text-muted-foreground">
                {t("card.kicker")}
              </div>
              <div className="mt-1 text-xl font-semibold">
                {t("card.title")}
              </div>
              <p className="mt-2 text-sm text-muted-foreground">
                {t("card.subtitle")}
              </p>

              <div className="mt-6 grid gap-3">
                {t.raw("card.items").map((x: string) => (
                  <div
                    key={x}
                    className="flex items-center justify-between rounded-xl border bg-background px-4 py-3"
                  >
                    <span className="text-sm font-medium">{x}</span>
                    <span className="text-xs text-muted-foreground">
                      {t("card.available")}
                    </span>
                  </div>
                ))}
              </div>

              <div className="mt-6 flex flex-wrap gap-3">
                <Button asChild>
                  <a href="#contacts">{t("card.primary")}</a>
                </Button>
                <Button asChild variant="secondary">
                  <a href="#products">{t("card.secondary")}</a>
                </Button>
              </div>
            </div>

            <div className="h-12 bg-gradient-to-r from-green-500/10 via-emerald-500/10 to-transparent" />
          </motion.div>
        </Reveal>
      </div>
    </section>
  );
}
