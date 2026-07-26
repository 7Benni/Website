export type PhotoCategoryKey = "dogs" | "nature" | "wildlife";

export type GearCategoryKey = "camera" | "lens" | "drone" | "accessory";

export interface GalleryImage {
  id: number;
  src: string;
  alt: string;
  category: PhotoCategoryKey;
  settings?: {
    aperture?: string; // e.g. "2.8"
    shutter?: string;  // e.g. "1/125"
    iso?: number | string; // e.g. 100
    focalLength?: string; // e.g. "35"
    camera?: string; // optional camera model
    lens?: string; // optional lens
  };
}

export interface GearItem {
  id: number;
  name: string;
  category: GearCategoryKey;
  description: string;
  specs?: string[];
}

export interface SocialLink {
  name: string;
  href: string;
  target?: "_blank" | "_self";
  rel?: string;
}
