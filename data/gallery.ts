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
      aperture: "2.8",
      shutter: "1/250",
      iso: 100,
      focalLength: "35",
      camera: "Canon EOS R",
      lens: "35mm f/1.8"
    }
  },
  {
    id: 2,
    src: "/Website/images/photo2.JPG",
    alt: "Photo 2",
    category: "nature",
    settings: {
      aperture: "4",
      shutter: "1/125",
      iso: 200,
      focalLength: "50",
      camera: "Sony A7 III",
      lens: "50mm f/1.8"
    }
  },
  {
    id: 3,
    src: "/Website/images/photo3.JPG",
    alt: "Photo 3",
    category: "wildlife",
    settings: {
      aperture: "5.6",
      shutter: "1/500",
      iso: 100,
      focalLength: "24",
      camera: "DJI Air 2S",
      lens: "Integrated"
    }
  },
  {
    id: 4,
    src: "/Website/images/photo4.JPG",
    alt: "Photo 4",
    category: "wildlife",
    settings: {
      aperture: "8",
      shutter: "1/60",
      iso: 200,
      focalLength: "70",
      camera: "Nikon Z6",
      lens: "70-200mm"
    }
  },
  {
    id: 5,
    src: "/Website/images/photo5.JPG",
    alt: "Photo 5",
    category: "nature",
    settings: {
      aperture: "11",
      shutter: "1/30",
      iso: 100,
      focalLength: "24",
      camera: "Canon EOS R5",
      lens: "24-70mm"
    }
  },
  {
    id: 6,
    src: "/Website/images/photo6.JPG",
    alt: "Photo 6",
    category: "dogs",
    settings: {
      aperture: "4",
      shutter: "1/200",
      iso: 400,
      focalLength: "85",
      camera: "Sony A7R IV",
      lens: "85mm f/1.4"
    }
  },
  {
    id: 7,
    src: "/Website/images/photo7.JPG",
    alt: "Photo 7",
    category: "nature",
    settings: {
      aperture: "6.3",
      shutter: "1/160",
      iso: 200,
      focalLength: "35",
      camera: "Fujifilm X-T4",
      lens: "35mm f/2"
    }
  },
  {
    id: 8,
    src: "/Website/images/photo8.JPG",
    alt: "Photo 8",
    category: "nature",
    settings: {
      aperture: "9",
      shutter: "1/80",
      iso: 100,
      focalLength: "16",
      camera: "Olympus OM-D",
      lens: "16-35mm"
    }
  },
  {
    id: 9,
    src: "/Website/images/photo9.jpg",
    category: "wildlife",
    category: "seascape",
    settings: {
      aperture: "11",
      shutter: "1/125",
      iso: 100,
      focalLength: "24",
      camera: "Canon 5D Mark IV",
      lens: "24-70mm"
    }
  }
];
