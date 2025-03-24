"use client";
import React from "react";
import { Button } from "../ui/button";
import Image from "next/image";
import { useRouter } from "next/navigation";

function Products() {
  const products = [
    { id: 1, title: "Customised Fabrics", imageUrl: "/assets/customise.jpg" },
    { id: 2, title: "Diamond Range", imageUrl: "/assets/diamond.jpg" },
    { id: 3, title: "Domestic Range", imageUrl: "/assets/domestic.jpg" },
    { id: 4, title: "Studio Explore", imageUrl: "/assets/explore.jpg" },
    { id: 5, title: "The Great Outdoor", imageUrl: "/assets/outdoor.jpg" },
    { id: 6, title: "The Great Plains", imageUrl: "/assets/plains.jpg" },
    { id: 7, title: "Scape Range", imageUrl: "/assets/scape.jpg" },
    { id: 8, title: "Slub Plain", imageUrl: "/assets/slub.jpg" },
    { id: 9, title: "Studio Range", imageUrl: "/assets/studio.jpg" },
    { id: 10, title: "Tailor Range", imageUrl: "/assets/tailor.jpg" },
    { id: 11, title: "Valley Range", imageUrl: "/assets/valley.jpg" },
    { id: 12, title: "Westcliff Range", imageUrl: "/assets/westcliff.jpg" },
    { id: 13, title: "@Work Range", imageUrl: "/assets/workrange.jpg" },
  ];

  const router = useRouter();

  const handleDetailsClick = (id, title) => {
    const product = products.find((p) => p.id === id);
    if (product && product.imageUrl) {
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
            <div
              onClick={() => handleDetailsClick(items.id, items.title)}
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
