"use client";
import React from "react";
import { Button } from "../ui/button";
import Image from "next/image";
import { useRouter } from "next/navigation";

function Products() {
  const products = [
    { id: 13, title: "@Work Range", imageUrl: "/assets/wallpaper/WorkDisplay.png" },
    // { id: 2, title: "Diamond Range", imageUrl: "/assets/wallpaper/DiamondDisplay.png" },
    { id: 7, title: "Scape Range", imageUrl: "/assets/wallpaper/ScapeRange.jpg" },
    { id: 8, title: "Slub Plain", imageUrl: "/assets/wallpaper/SlubDisplay.png" },
    { id: 4, title: "Studio Explore", imageUrl: "/assets/wallpaper/StudioExploreDisplay.png" },
    { id: 9, title: "Studio Range", imageUrl: "/assets/wallpaper/StudioRangeDisplay.png" },
    { id: 10, title: "Tailor Range", imageUrl: "/assets/wallpaper/TailorRangeDisplay.png" },
    { id: 5, title: "The Great Outdoor", imageUrl: "/assets/wallpaper/GreatOutdoorDisplay.png" },
    { id: 6, title: "The Great Plains", imageUrl: "/assets/wallpaper/GreatPlainsDisplay.png" },
    { id: 11, title: "Valley Range", imageUrl: "/assets/wallpaper/ValleyDisplay.png" },
    { id: 12, title: "Westcliff Range", imageUrl: "/assets/wallpaper/WestcliffDisplay.png" },
    { id: 1, title: "Create Your Own", imageUrl: "/assets/wallpaper/Customise.jpg" },
  ];

  const router = useRouter();

  const handleDetailsClick = (id, title) => {
    const product = products.find((p) => p.id === id);
    if (product?.imageUrl) {
      router.push(
        `/collections/?title=${encodeURIComponent(
          title
        )}&imageUrl=${encodeURIComponent(product.imageUrl)}`
      );
    } else {
      return;
    }
  };

  return (
    <div className="container mx-auto px-4 py-6">
      <header className="mb-6 text-center">
        <h1 className="text-3xl font-bold">Product Ranges</h1>
      </header>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {products.map((items, index) => {
          return (
            // biome-ignore lint/a11y/useKeyWithClickEvents: <explanation>
            <div
              onClick={() => handleDetailsClick(items.id, items.title)}
              // biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
              key={index}
              className="border rounded-xl p-4 cursor-pointer"
            >
              <Image
                src={items.imageUrl}
                alt={items.title}
                className="w-full h-48 object-cover mb-4 rounded-lg"
                priority={true}
                quality={100}
                width={600}
                height={600}
              />
              <h2 className="font-bold text-md mb-2">{items.title}</h2>
              <div className="flex justify-end items-center">
                <Button
                  className="bg-blue-500/80 hover:bg-blue-500 text-white rounded-xl"
                  onClick={handleDetailsClick}
                >
                  More Details
                </Button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Products;
