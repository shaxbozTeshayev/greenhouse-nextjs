export type Product = {
  id: string;
  titleKey: string;
  priceKey: string;
  shortKey: string;
  bulletKeys: string[];
  tagKey?: string;
  image: {
    src: string;
    altKey: string; // translation key for alt text
  };
};

export const products: Product[] = [
  {
    id: "clip",
    titleKey: "products.clip.title",
    priceKey: "products.clip.price",
    shortKey: "products.clip.short",
    bulletKeys: [
      "products.clip.b1",
      "products.clip.b2",
      "products.clip.b3",
      "products.clip.b4",
    ],
    tagKey: "products.tags.top",
    image: { src: "/images/products/clip.jpg", altKey: "products.clip.title" },
  },
  {
    id: "twine",
    titleKey: "products.twine.title",
    priceKey: "products.twine.price",
    shortKey: "products.twine.short",
    bulletKeys: ["products.twine.b1", "products.twine.b2", "products.twine.b3"],
    image: {
      src: "/images/products/twine.jpg",
      altKey: "products.twine.title",
    },
  },
  {
    id: "drip-tape",
    titleKey: "products.drip.title",
    priceKey: "products.drip.price",
    shortKey: "products.drip.short",
    bulletKeys: ["products.drip.b1", "products.drip.b2", "products.drip.b3"],
    tagKey: "products.tags.bestSeller",
    image: { src: "/images/products/drip.jpg", altKey: "products.drip.title" },
  },
  {
    id: "binding-tape",
    titleKey: "products.binding.title",
    priceKey: "products.binding.price",
    shortKey: "products.binding.short",
    bulletKeys: [
      "products.binding.b1",
      "products.binding.b2",
      "products.binding.b3",
    ],
    image: {
      src: "/images/products/tape.jpg",
      altKey: "products.binding.title",
    },
  },
  {
    id: "profile",
    titleKey: "products.profile.title",
    priceKey: "products.profile.price",
    shortKey: "products.profile.short",
    bulletKeys: [
      "products.profile.b1",
      "products.profile.b2",
      "products.profile.b3",
    ],
    image: {
      src: "/images/products/profile.jpg",
      altKey: "products.profile.title",
    },
  },
  {
    id: "pipe-clip",
    titleKey: "products.pipeclip.title",
    priceKey: "products.pipeclip.price",
    shortKey: "products.pipeclip.short",
    bulletKeys: [
      "products.pipeclip.b1",
      "products.pipeclip.b2",
      "products.pipeclip.b3",
    ],
    image: {
      src: "/images/products/pipeclip.jpg",
      altKey: "products.pipeclip.title",
    },
  },
];

export type Testimonial = {
  nameKey: string;
  roleKey: string;
  textKey: string;
};

export const testimonials: Testimonial[] = [
  {
    nameKey: "testimonials.t1.name",
    roleKey: "testimonials.t1.role",
    textKey: "testimonials.t1.text",
  },
  {
    nameKey: "testimonials.t2.name",
    roleKey: "testimonials.t2.role",
    textKey: "testimonials.t2.text",
  },
  {
    nameKey: "testimonials.t3.name",
    roleKey: "testimonials.t3.role",
    textKey: "testimonials.t3.text",
  },
];

export type FAQ = { qKey: string; aKey: string };

export const faqs: FAQ[] = [
  { qKey: "faq.q1", aKey: "faq.a1" },
  { qKey: "faq.q2", aKey: "faq.a2" },
  { qKey: "faq.q3", aKey: "faq.a3" },
  { qKey: "faq.q4", aKey: "faq.a4" },
];
