"use client";

import { gearList } from "@/data/gear";
import { Camera, Aperture, Plane, Package } from "lucide-react";
import { useState } from "react";

const categoryIcons = {
  camera: Camera,
  lens: Aperture,
  drone: Plane,
  accessory: Package,
};

const categoryNames = {
  camera: "Cameras",
  lens: "Lenses",
  drone: "Drones",
  accessory: "Accessories",
};

export default function GearPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");

  const categories = ["all", "camera", "lens", "drone", "accessory"];
  
  const filteredGear = selectedCategory === "all"
    ? gearList
    : gearList.filter(item => item.category === selectedCategory);

  // Group by category for display
  const groupedGear = gearList.reduce((acc, item) => {
    if (!acc[item.category]) {
      acc[item.category] = [];
    }
    acc[item.category].push(item);
    return acc;
  }, {} as Record<string, typeof gearList>);

  return (
    <div className="min-h-screen py-20 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-5xl md:text-6xl font-bold mb-4">My Gear</h1>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            The equipment I use to capture stunning images and videos
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-3 mb-16">
          {categories.map((category) => {
            const Icon = category !== "all" ? categoryIcons[category as keyof typeof categoryIcons] : Package;
            return (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`flex items-center px-6 py-2 rounded-lg font-medium capitalize transition-all ${
                  selectedCategory === category
                    ? "bg-white text-black"
                    : "bg-white/10 hover:bg-white/20 text-white"
                }`}
              >
                {category !== "all" && <Icon size={18} className="mr-2" />}
                {category === "all" ? "All Gear" : categoryNames[category as keyof typeof categoryNames]}
              </button>
            );
          })}
        </div>

        {/* Gear Cards - Filtered View */}
        {selectedCategory !== "all" && (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredGear.map((item) => {
              const Icon = categoryIcons[item.category];
              return (
                <div
                  key={item.id}
                  className="group bg-white/5 border border-white/10 rounded-xl p-6 hover:bg-white/10 hover:border-white/20 transition-all"
                >
                  <div className="flex items-start justify-between mb-4">
                    <div className="p-3 bg-white/10 rounded-lg group-hover:bg-white/20 transition-colors">
                      <Icon size={24} />
                    </div>
                    <span className="text-xs uppercase tracking-wide text-gray-500 font-medium">
                      {item.category}
                    </span>
                  </div>
                  
                  <h3 className="text-xl font-semibold mb-2">{item.name}</h3>
                  <p className="text-gray-400 text-sm mb-4">{item.description}</p>
                  
                  {item.specs && (
                    <ul className="space-y-2">
                      {item.specs.map((spec, index) => (
                        <li key={index} className="text-sm text-gray-500 flex items-start">
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

        {/* Gear Cards - Categorized View */}
        {selectedCategory === "all" && (
          <div className="space-y-16">
            {Object.entries(groupedGear).map(([category, items]) => {
              const Icon = categoryIcons[category as keyof typeof categoryIcons];
              return (
                <div key={category}>
                  <div className="flex items-center mb-8">
                    <Icon size={28} className="mr-3" />
                    <h2 className="text-3xl font-bold capitalize">
                      {categoryNames[category as keyof typeof categoryNames]}
                    </h2>
                    <div className="ml-4 h-px flex-grow bg-white/20"></div>
                  </div>
                  
                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {items.map((item) => (
                      <div
                        key={item.id}
                        className="group bg-white/5 border border-white/10 rounded-xl p-6 hover:bg-white/10 hover:border-white/20 transition-all"
                      >
                        <div className="flex items-start justify-between mb-4">
                          <div className="p-3 bg-white/10 rounded-lg group-hover:bg-white/20 transition-colors">
                            <Icon size={24} />
                          </div>
                        </div>
                        
                        <h3 className="text-xl font-semibold mb-2">{item.name}</h3>
                        <p className="text-gray-400 text-sm mb-4">{item.description}</p>
                        
                        {item.specs && (
                          <ul className="space-y-2">
                            {item.specs.map((spec, index) => (
                              <li key={index} className="text-sm text-gray-500 flex items-start">
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
