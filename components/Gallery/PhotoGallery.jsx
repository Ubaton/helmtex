/* eslint-disable react-hooks/exhaustive-deps */
"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import Image from "next/image";
import {
  Dialog,
  DialogContent,
  DialogClose,
  DialogTitle,
} from "../../components/ui/dialog";
import { Button } from "../../components/ui/button";
import { ChevronLeft, ChevronRight, X, Loader2 } from "lucide-react";

// Generate placeholder image data
const generateImages = (count) => {
  return Array.from({ length: count }, (_, i) => ({
    id: i + 1,
    src: `/placeholder.svg?height=${300 + (i % 3) * 100}&width=${
      400 + (i % 4) * 100
    }`,
    alt: `Photo ${i + 1}`,
    // Create varying sizes for bento grid effect
    size: i % 9 === 0 ? "large" : i % 5 === 0 ? "medium" : "small",
  }));
};

const PhotoGalleryInfiniteScroll = () => {
  const allImages = generateImages(120);
  const [visibleCount, setVisibleCount] = useState(20);
  const [selectedImage, setSelectedImage] = useState(null);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);

  const imagesPerLoad = 20;
  const hasMoreImages = visibleCount < allImages.length;
  const loaderRef = useRef(null);

  // Get current visible images
  const visibleImages = allImages.slice(0, visibleCount);

  const loadMoreImages = useCallback(() => {
    if (loading || !hasMoreImages) return;

    setLoading(true);
    // Simulate network delay
    setTimeout(() => {
      setVisibleCount((prev) =>
        Math.min(prev + imagesPerLoad, allImages.length)
      );
      setLoading(false);
    }, 800);
  }, [loading, hasMoreImages, allImages.length, imagesPerLoad]);

  const handleImageClick = (src, index) => {
    setSelectedImage(src);
    setSelectedIndex(index);
    setOpen(true);
  };

  const handlePrevImage = () => {
    const prevIndex =
      selectedIndex > 0 ? selectedIndex - 1 : allImages.length - 1;
    setSelectedIndex(prevIndex);
    setSelectedImage(allImages[prevIndex].src);
  };

  const handleNextImage = () => {
    const nextIndex =
      selectedIndex < allImages.length - 1 ? selectedIndex + 1 : 0;
    setSelectedIndex(nextIndex);
    setSelectedImage(allImages[nextIndex].src);
  };

  // Intersection Observer for infinite scroll
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          loadMoreImages();
        }
      },
      { threshold: 0.1 }
    );

    if (loaderRef.current) {
      observer.observe(loaderRef.current);
    }

    return () => {
      if (loaderRef.current) {
        observer.unobserve(loaderRef.current);
      }
    };
  }, [loadMoreImages]);

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8 text-center">Photo Gallery</h1>

      {/* Bento Grid Layout */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
        {visibleImages.map((image, index) => (
          <div
            key={image.id}
            className={`
              overflow-hidden rounded-lg cursor-pointer transition-transform hover:scale-[1.02] shadow-md
              ${
                image.size === "large"
                  ? "col-span-2 row-span-2"
                  : image.size === "medium"
                  ? "col-span-2"
                  : ""
              }
            `}
            onClick={() => handleImageClick(image.src, index)}
          >
            <div className="relative w-full h-full">
              <Image
                src={image.src || "/placeholder.svg"}
                alt={image.alt}
                width={600}
                height={400}
                className="object-cover w-full h-full"
              />
            </div>
          </div>
        ))}
      </div>

      {/* Loader for Infinite Scroll */}
      {hasMoreImages && (
        <div ref={loaderRef} className="flex justify-center items-center py-8">
          {loading ? (
            <div className="flex items-center gap-2">
              <Loader2 className="h-5 w-5 animate-spin" />
              <span>Loading more images...</span>
            </div>
          ) : (
            <Button onClick={loadMoreImages} className="px-6 py-2">
              Load More ({allImages.length - visibleCount} remaining)
            </Button>
          )}
        </div>
      )}

      {/* Image Dialog */}
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="max-w-5xl p-0 overflow-hidden bg-background">
          <DialogTitle className="sr-only">Image Preview</DialogTitle>
          <div className="relative">
            <DialogClose className="absolute right-4 top-4 z-10 rounded-full bg-background/80 p-2" />

            {selectedImage && (
              <div className="flex items-center justify-center">
                <Button
                  variant="ghost"
                  className="absolute left-4 top-1/2 -translate-y-1/2 z-10 rounded-full bg-background/80 p-2"
                  onClick={(e) => {
                    e.stopPropagation();
                    handlePrevImage();
                  }}
                >
                  <ChevronLeft className="h-6 w-6" />
                  <span className="sr-only">Previous image</span>
                </Button>

                <div className="relative w-full aspect-[4/3]">
                  <Image
                    src={selectedImage || "/placeholder.svg"}
                    alt={`Photo ${selectedIndex + 1}`}
                    fill
                    className="object-contain"
                  />
                </div>

                <Button
                  variant="ghost"
                  className="absolute right-4 top-1/2 -translate-y-1/2 z-10 rounded-full bg-background/80 p-2"
                  onClick={(e) => {
                    e.stopPropagation();
                    handleNextImage();
                  }}
                >
                  <ChevronRight className="h-6 w-6" />
                  <span className="sr-only">Next image</span>
                </Button>
              </div>
            )}
          </div>

          <div className="p-4 text-center">
            <p className="text-sm text-muted-foreground">
              Image {selectedIndex + 1} of {allImages.length}
            </p>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default PhotoGalleryInfiniteScroll;
