"use client";

import Image from "next/image";
import { useEffect } from "react";
import { X, ArrowLeft, ArrowRight } from "lucide-react";

interface LightboxProps {
  images: { src: string; alt?: string }[];
  index: number;
  onClose: () => void;
  onChange: (newIndex: number) => void;
}

export default function Lightbox({ images, index, onClose, onChange }: LightboxProps) {
  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") onChange(Math.max(0, index - 1));
      if (e.key === "ArrowRight") onChange(Math.min(images.length - 1, index + 1));
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [index, images.length, onChange, onClose]);

  const img = images[index];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4">
      <button
        onClick={onClose}
        className="absolute top-6 right-6 p-2 rounded-md hover:bg-white/10"
        aria-label="Close"
      >
        <X size={22} />
      </button>

      <button
        onClick={() => onChange(Math.max(0, index - 1))}
        className="absolute left-6 top-1/2 -translate-y-1/2 p-2 rounded-md hover:bg-white/10"
        aria-label="Previous"
      >
        <ArrowLeft size={22} />
      </button>

      <div className="max-w-[90vw] max-h-[90vh] w-full h-full flex items-center justify-center">
        <div className="relative w-full h-full">
          <Image
            src={img.src}
            alt={img.alt || ""}
            fill
            sizes="(max-width: 1024px) 90vw, 100vw"
            className="object-contain"
          />
        </div>
      </div>

      <button
        onClick={() => onChange(Math.min(images.length - 1, index + 1))}
        className="absolute right-6 top-1/2 -translate-y-1/2 p-2 rounded-md hover:bg-white/10"
        aria-label="Next"
      >
        <ArrowRight size={22} />
      </button>
    </div>
  );
}
