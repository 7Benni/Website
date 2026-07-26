import type { PhotoCategoryKey } from "@/types";

const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";
const assetPath = (path: string) => `${basePath}${path.startsWith("/") ? path : `/${path}`}`;

export type HeroSlide = {
  src: string;
  alt: string;
  objectPosition?: string;
};

type HeroSlideOption = {
  alt: string;
  objectPosition?: string;
};

export type PhotoCategory = {
  key: PhotoCategoryKey;
  label: string;
  description: string;
  featured?: boolean;
  accent: string;
};

const heroSlideOptions: Record<string, HeroSlideOption> = {
  wildlife: {
    alt: "Wildlife portrait",
    objectPosition: "center 35%",
  },
  dogs: {
    alt: "Dog portrait",
    objectPosition: "center 38%",
  },
  nature: {
    alt: "Nature landscape",
    objectPosition: "center center",
  },
};

// Edit this list to cherry-pick which images appear in the hero.
const heroSlideKeys = ["wildlife", "dogs"] as const;

export const heroSlides: HeroSlide[] = heroSlideKeys.map((key) => ({
  src: assetPath(`/images/${key === "wildlife" ? "photo9.jpg" : key === "dogs" ? "photo5.JPG" : "photo4.JPG"}`),
  ...heroSlideOptions[key],
}));

export const photoCategories: PhotoCategory[] = [
  {
    key: "dogs",
    label: "Dogs",
    description: "Portraits and candid moments of dogs — capturing personality, emotion, and movement",
    featured: true,
    accent: "from-amber-400/20 to-orange-500/5",
  },
  {
    key: "nature",
    label: "Nature",
    description: "Landscapes and natural scenes — celebrating form, light, and the quiet moments in wild places",
    featured: true,
    accent: "from-emerald-400/20 to-lime-500/5",
  },
  {
    key: "wildlife",
    label: "Wildlife",
    description: "Candid and dynamic wildlife photography — emphasizing behavior, habitat, and conservation-minded storytelling",
    featured: true,
    accent: "from-sky-400/20 to-cyan-500/5",
  },
];

export const featuredPhotoCategories = photoCategories.filter((category) => category.featured);
export const featuredCategories = featuredPhotoCategories;

export const photoCategoryMap = Object.fromEntries(
  photoCategories.map((category) => [category.key, category]),
) as Record<PhotoCategoryKey, PhotoCategory>;

export const getPhotoCategoryLabel = (category: string) => {
  return photoCategoryMap[category as PhotoCategory["key"]]?.label ?? category;
};
