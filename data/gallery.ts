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
    category: "nature",
    settings: {
      aperture: "5.6",
      shutter: "1/500",
      iso: 100,
      focalLength: "135",
      camera: "Canon EOS 200D",
      lens: "28-135mm"
    }
  },
  {
    id: 2,
    src: "/Website/images/photo2.JPG",
    alt: "Photo 2",
    category: "nature",
    settings: {
      aperture: "3.2",
      shutter: "1/800",
      iso: 800,
      focalLength: "109",
      camera: "Canon EOS R8",
      lens: "TAMRON SP 70-200mm F/2.8"
    }
  },
  {
    id: 3,
    src: "/Website/images/photo3.JPG",
    alt: "Photo 3",
    category: "wildlife",
    settings: {
      aperture: "3.2",
      shutter: "1/1600",
      iso: 1600,
      focalLength: "200",
      camera: "Canon EOS 200D",
      lens: "TAMRON SP 70-200mm F/2.8"
    }
  },
  {
    id: 4,
    src: "/Website/images/photo4.JPG",
    alt: "Photo 4",
    category: "wildlife",
    settings: {
      aperture: "2.8",
      shutter: "1/1000",
      iso: 1600,
      focalLength: "134",
      camera: "Canon EOS 200D",
      lens: "TAMRON SP 70-200mm F/2.8"
    }
  },
  {
    id: 5,
    src: "/Website/images/photo5.JPG",
    alt: "Photo 5",
    category: "nature",
    settings: {
      aperture: "3.5",
      shutter: "1/2000",
      iso: 160,
      focalLength: "200",
      camera: "Canon EOS R8",
      lens: "TAMRON SP 70-200mm F/2.8"
    }
  },
  {
    id: 6,
    src: "/Website/images/photo6.JPG",
    alt: "Photo 6",
    category: "dogs",
    settings: {
      aperture: "3.5",
      shutter: "1/2000",
      iso: 160,
      focalLength: "200",
      camera: "Canon EOS R8",
      lens: "TAMRON SP 70-200mm F/2.8"
    }
  },
  {
    id: 7,
    src: "/Website/images/photo7.JPG",
    alt: "Photo 7",
    category: "nature",
    settings: {
      aperture: "2.2",
      shutter: "1/1000",
      iso: 200,
      focalLength: "50",
      camera: "Canon EOS 200D",
      lens: "EF50mm f/1.8 STM"
    }
  },
  {
    id: 8,
    src: "/Website/images/photo8.JPG",
    alt: "Photo 8",
    category: "nature",
    settings: {
      aperture: "1.8",
      shutter: "1/800",
      iso: 100,
      focalLength: "50",
      camera: "Canon EOS 200D",
      lens: "EF50mm f/1.8 STM"
    }
  },
  {
    id: 9,
    src: "/Website/images/photo9.jpg",
    alt: "Photo 9",
    category: "wildlife",
    settings: {
      aperture: "3.5",
      shutter: "1/1000",
      iso: 1000,
      focalLength: "200",
      camera: "Canon EOS R8",
      lens: "TAMRON SP 70-200mm F/2.8"
    }
  }
];
