export interface GalleryImage {
  id: number;
  src: string;
  alt: string;
  category: string;
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
  category: 'camera' | 'lens' | 'drone' | 'accessory';
  description: string;
  specs?: string[];
}

export interface SocialLink {
  name: string;
  url: string;
  icon: string;
}
