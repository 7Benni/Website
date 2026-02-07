import { GalleryImage } from "@/types";

// Images go in public/images/ folder
// Add your photos there and they'll automatically appear in the gallery
// Supported formats: .jpg, .png, .webp
// Example: public/images/photo1.jpg -> displays as /Website/images/photo1.jpg

export const galleryImages: GalleryImage[] = [
  {
    id: 1,
    src: "/Website/images/photo1.JPG",
    alt: "Photo 1",
    category: "landscape"
  },
  {
    id: 2,
    src: "/Website/images/photo2.JPG",
    alt: "Photo 2",
    category: "landscape"
  },
  {
    id: 3,
    src: "/Website/images/photo3.JPG",
    alt: "Photo 3",
    category: "aerial"
  },
  {
    id: 4,
    src: "/Website/images/photo4.JPG",
    alt: "Photo 4",
    category: "nature"
  },
  {
    id: 5,
    src: "/Website/images/photo5.JPG",
    alt: "Photo 5",
    category: "landscape"
  },
  {
    id: 6,
    src: "/Website/images/photo6.JPG",
    alt: "Photo 6",
    category: "nature"
  },
  {
    id: 7,
    src: "/Website/images/photo7.JPG",
    alt: "Photo 7",
    category: "landscape"
  },
  {
    id: 8,
    src: "/Website/images/photo8.JPG",
    alt: "Photo 8",
    category: "landscape"
  },
  {
    id: 9,
    src: "/Website/images/photo9.jpg",
    alt: "Photo 9",
    category: "seascape"
  }
];
