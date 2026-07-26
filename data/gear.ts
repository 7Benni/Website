import type { GearCategoryKey, GearItem } from "@/types";

export const gearCategories = [
  { key: "camera", label: "Cameras" },
  { key: "lens", label: "Lenses" },
  { key: "drone", label: "Drones" },
  { key: "accessory", label: "Accessories" },
] as const;

export const gearCategoryMap = Object.fromEntries(
  gearCategories.map((category) => [category.key, category]),
) as Record<GearCategoryKey, (typeof gearCategories)[number]>;

export const getGearCategoryLabel = (category: string) => {
  return gearCategoryMap[category as GearCategoryKey]?.label ?? category;
};

export const gearList: GearItem[] = [
  {
    id: 2,
    name: "Canon EOS R8",
    category: "camera",
    description: "Primary mirrorless body for portraits, wildlife, and telephoto work.",
    specs: ["Fast autofocus", "Strong low-light performance", "Used throughout the gallery"]
  },
  {
    id: 3,
    name: "24-105mm f/4L IS USM",
    category: "lens",
    description: "Versatile standard zoom for all-purpose shooting and travel.",
    specs: ["Flexible focal range", "Optical image stabilization", "Useful for everyday coverage"]
  },
  {
    id: 4,
    name: "Canon Rf 100-400mm f/5.6-8 IS USM",
    category: "lens",
    description: "Lightweight telephoto zoom for wildlife and distant subjects.",
    specs: ["Long reach in a compact body", "Image stabilization", "Well suited to wildlife and action"]
  },
];
