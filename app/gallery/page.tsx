"use client";

import Image from "next/image";
import { galleryImages as initialGallery } from "@/data/gallery";
import { useMemo, useState } from "react";
import { Edit3, Check, X, Tag } from "lucide-react";

export default function GalleryPage() {
  const [filter, setFilter] = useState<string>("all");

  // Local editable state for titles and categories (client-side only)
  const [titles, setTitles] = useState<Record<number, string>>(
    () => Object.fromEntries(initialGallery.map(i => [i.id, i.alt]))
  );
  const [cats, setCats] = useState<Record<number, string>>(
    () => Object.fromEntries(initialGallery.map(i => [i.id, i.category]))
  );
  const [editingId, setEditingId] = useState<number | null>(null);

  const availableCategories = useMemo(() => {
    const set = new Set<string>(Object.values(cats));
    return ["all", ...Array.from(set)];
  }, [cats]);

  const filteredImages = useMemo(() => {
    return filter === "all"
      ? initialGallery
      : initialGallery.filter(img => cats[img.id] === filter);
  }, [filter, cats]);

  const startEdit = (id: number) => setEditingId(id);
  const cancelEdit = () => setEditingId(null);
  const saveEdit = (id: number, newTitle: string, newCategory: string) => {
    setTitles(s => ({ ...s, [id]: newTitle }));
    setCats(s => ({ ...s, [id]: newCategory }));
    setEditingId(null);
  };

  return (
    <div className="min-h-screen py-20 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-5xl md:text-6xl font-bold mb-4">Gallery</h1>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            A collection of my favorite shots from around the world
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {availableCategories.map((category) => (
            <button
              key={category}
              onClick={() => setFilter(category)}
              className={`px-5 py-2 rounded-full font-medium capitalize transition-all text-sm ${
                filter === category
                  ? "bg-white text-black"
                  : "bg-white/6 hover:bg-white/12 text-white"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Masonry Grid */}
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4">
          {filteredImages.map((image, index) => (
            <div
              key={image.id}
              className="group relative break-inside-avoid overflow-hidden cursor-pointer"
            >
              <div className="relative aspect-[4/3] sm:aspect-auto">
                <Image
                  src={image.src}
                  alt={titles[image.id] || image.alt}
                  width={800}
                  height={600}
                  className="w-full h-auto object-cover transition-transform duration-300 group-hover:scale-105"
                  loading={index < 6 ? "eager" : "lazy"}
                />

                {/* Overlay on hover - now interactive */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex items-end">
                  <div className="w-full p-4">
                    {editingId === image.id ? (
                      <div className="bg-black/50 p-3 rounded-md flex flex-col sm:flex-row sm:items-center gap-3">
                        <input
                          aria-label="Edit title"
                          defaultValue={titles[image.id]}
                          className="flex-grow px-3 py-2 bg-white/5 border border-white/10 rounded-md text-white focus:outline-none"
                          onKeyDown={(e) => {
                            if (e.key === "Enter") {
                              const input = e.currentTarget as HTMLInputElement;
                              saveEdit(image.id, input.value, cats[image.id]);
                            }
                            if (e.key === "Escape") cancelEdit();
                          }}
                        />
                        <select
                          defaultValue={cats[image.id]}
                          className="px-3 py-2 bg-white/5 border border-white/10 rounded-md text-white"
                          onChange={(e) => setCats(s => ({ ...s, [image.id]: e.target.value }))}
                        >
                          {/* allow user to type categories by editing data later; show existing ones */}
                          {Array.from(new Set(Object.values(cats))).map(c => (
                            <option key={c} value={c}>{c}</option>
                          ))}
                        </select>
                        <div className="flex items-center gap-2">
                          <button onClick={() => {
                            const input = (document.activeElement as HTMLInputElement);
                            saveEdit(image.id, input?.value ?? titles[image.id], cats[image.id]);
                          }} className="p-2 bg-green-500 rounded-md">
                            <Check size={16} />
                          </button>
                          <button onClick={cancelEdit} className="p-2 bg-red-600 rounded-md">
                            <X size={16} />
                          </button>
                        </div>
                      </div>
                    ) : (
                      <div className="bg-black/40 p-3 rounded-md flex items-center justify-between">
                        <div>
                          <p className="text-white font-medium mb-1">{titles[image.id]}</p>
                          <span className="text-gray-300 text-sm capitalize flex items-center gap-2">
                            <Tag size={14} /> {cats[image.id]}
                          </span>
                        </div>

                        <div className="flex items-center gap-2">
                          <button onClick={() => startEdit(image.id)} className="p-2 bg-white/8 rounded-md hover:bg-white/12">
                            <Edit3 size={16} />
                          </button>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Empty State */}
        {filteredImages.length === 0 && (
          <div className="text-center py-20">
            <p className="text-gray-400 text-lg">No images found in this category</p>
          </div>
        )}
      </div>
    </div>
  );
}
