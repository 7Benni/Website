import { GearItem } from "@/types";

// Aggregated gear based on photos in data/gallery.ts
export const gearList: GearItem[] = [
  {
    id: 1,
    name: "Canon EOS 200D",
    category: "camera",
    description: "Compact DSLR used throughout the gallery (portrait and wildlife shots).",
    specs: ["Used in 5 photos", "See gallery for example settings"]
  },
  {
    id: 2,
    name: "Canon EOS R8",
    category: "camera",
    description: "Mirrorless camera used for action and telephoto shots in the gallery.",
    specs: ["Used in 4 photos", "See gallery for example settings"]
  },
  {
    id: 3,
    name: "28-135mm",
    category: "lens",
    description: "Standard zoom lens used for general purpose shots in the gallery.",
    specs: ["Used in 1 photo", "Versatile focal range"]
  },
  {
    id: 4,
    name: "TAMRON SP 70-200mm F/2.8",
    category: "lens",
    description: "Telephoto zoom used for wildlife and sports-style shots in the gallery.",
    specs: ["Used in 6 photos", "Fast f/2.8 aperture for subject separation"]
  },
  {
    id: 5,
    name: "EF50mm f/1.8 STM",
    category: "lens",
    description: "50mm prime used for shallow-depth portraits and low-light shots.",
    specs: ["Used in 2 photos", "Compact and lightweight prime"]
  }
];
