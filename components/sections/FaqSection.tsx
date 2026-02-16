"use client";

import { faqs } from "@/components/data/site-data";
import { Reveal } from "@/components/motion/reveal";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Separator } from "@/components/ui/separator";
import { useTranslations } from "next-intl";

export function FAQSection() {
  const t = useTranslations();

  return (
    <section
      id="faq"
      className="mx-auto max-w-6xl px-4 py-12 sm:py-14 md:py-20"
    >
      <Reveal>
        <div className="text-sm text-muted-foreground">
          {t("faqSection.kicker")}
        </div>
        <h2 className="mt-1 text-3xl font-semibold tracking-tight">
          {t("faqSection.title")}
        </h2>
        <p className="mt-2 max-w-2xl text-sm text-muted-foreground">
          {t("faqSection.hint")}
        </p>
      </Reveal>

      <Separator className="my-6" />

      <Reveal>
        <Accordion type="single" collapsible className="w-full">
          {faqs.map((f, idx) => (
            <AccordionItem key={idx} value={`item-${idx}`}>
              <AccordionTrigger>{t(f.qKey)}</AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                {t(f.aKey)}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </Reveal>
    </section>
  );
}
