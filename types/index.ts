export interface GalleryImage {
  id: number;
  src: string;
  alt: string;
  category: string;
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
