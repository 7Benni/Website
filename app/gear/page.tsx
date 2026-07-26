"use client";

import { gearCategories, gearList, getGearCategoryLabel } from "@/data/gear";
import type { GearCategoryKey } from "@/types";
import { useState } from "react";

export default function GearPage() {
  const [selectedCategory, setSelectedCategory] = useState<GearCategoryKey | "all">("all");

  const categories = [{ key: "all" as const, label: "All Gear" }, ...gearCategories];

  const filteredGear = selectedCategory === "all"
    ? gearList
    : gearList.filter((item) => item.category === selectedCategory);

  return (
    <div className="min-h-screen py-20 px-4">
      <div className="max-w-[1680px] mx-auto">
        <div className="flex items-end justify-between gap-6 mb-10">
          <div className="max-w-2xl">
            <h1 className="text-5xl md:text-6xl font-semibold mb-4">My Gear</h1>
            <p className="text-[var(--muted)] text-lg">
              The core equipment behind the portfolio, grouped by role.
            </p>
          </div>
        </div>

        <div className="flex flex-wrap justify-start gap-3 mb-16">
          {categories.map((category) => (
            <button
              key={category.key}
              onClick={() => setSelectedCategory(category.key)}
              className={`px-6 py-2 rounded-md font-medium capitalize transition-all border ${
                selectedCategory === category.key
                  ? "bg-white text-black border-white"
                  : "bg-white/5 border-white/10 hover:bg-white/10 text-white"
              }`}
            >
              {category.label}
            </button>
          ))}
        </div>

        {selectedCategory !== "all" && (
          <div className="grid md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-6">
            {filteredGear.map((item) => {
              return (
                <div
                  key={item.id}
                  className="group relative overflow-hidden rounded-lg border border-white/10 bg-white/[0.04] p-6 transition-all hover:-translate-y-1 hover:bg-white/[0.07] hover:border-white/15"
                >
                  <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
                  <div className="flex items-start justify-between mb-4">
                    <span className="text-xs uppercase tracking-wide text-[var(--muted)] font-medium">
                      {item.category}
                    </span>
                  </div>
                  
                  <h3 className="text-xl font-semibold mb-2">{item.name}</h3>
                  <p className="text-[var(--muted)] text-sm mb-4">{item.description}</p>
                  
                  {item.specs && (
                    <ul className="space-y-2">
                      {item.specs.map((spec, index) => (
                        <li key={index} className="text-sm text-[var(--muted)] flex items-start">
                          <span className="mr-2">•</span>
                          <span>{spec}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              );
            })}
          </div>
        )}

        {selectedCategory === "all" && (
          <div className="space-y-16">
            {gearCategories.map((category) => {
              const items = gearList.filter((item) => item.category === category.key);
              return (
                <div key={category.key}>
                  <div className="flex items-center mb-8">
                    <h2 className="text-3xl font-semibold capitalize">
                      {getGearCategoryLabel(category.key)}
                    </h2>
                    <div className="ml-4 h-px flex-grow bg-gradient-to-r from-white/20 to-transparent"></div>
                  </div>
                  
                  <div className="grid md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-6">
                    {items.map((item) => (
                      <div
                        key={item.id}
                        className="group relative overflow-hidden rounded-lg border border-white/10 bg-white/[0.04] p-6 transition-all hover:-translate-y-1 hover:bg-white/[0.07] hover:border-white/15"
                      >
                        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
                        <div className="mb-4">
                          <p className="text-xs uppercase tracking-wide text-[var(--muted)] font-medium">{category.label}</p>
                        </div>

                        <h3 className="text-xl font-semibold mb-2">{item.name}</h3>
                        <p className="text-[var(--muted)] text-sm mb-4">{item.description}</p>
                        
                        {item.specs && (
                          <ul className="space-y-2">
                            {item.specs.map((spec, index) => (
                                <li key={index} className="text-sm text-[var(--muted)] flex items-start">
                                <span className="mr-2">•</span>
                                <span>{spec}</span>
                              </li>
                            ))}
                          </ul>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
}
