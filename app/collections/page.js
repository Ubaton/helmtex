"use client";
import Image from "next/image";
import { useRouter, useSearchParams } from "next/navigation";
import { Suspense, useEffect, useState } from "react";
import subset from "../../lib/subset";
import { ArrowLeft, X } from "lucide-react";
import { Button } from "../../components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogClose,
  DialogTitle,
} from "../../components/ui/dialog";

const Collection = () => {
  const [productDetails, setProductDetails] = useState({
    id: null,
    title: null,
    imageUrl: null,
  });
  const [matchedSubset, setMatchedSubset] = useState(null);
  const [selectedImage, setSelectedImage] = useState(null);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const searchParams = useSearchParams();
  const imageUrl = searchParams.get("imageUrl");
  const title = searchParams.get("title");
  const router = useRouter();

  useEffect(() => {
    const title = searchParams.get("title");
    const imageUrl = searchParams.get("imageUrl");
    const id = window.location.pathname.split("/").pop();

    try {
      if (title && id && imageUrl) {
        setProductDetails({ id, title, imageUrl });
        const foundSubset = subset.find((range) => {
          const category = Object.keys(range)[0];
          return category === title;
        });
        setMatchedSubset(foundSubset);
      }
    } catch (error) {
      console.error(error);
    }
  }, [searchParams]);

  const handleClickBack = () => {
    router.push("/products");
  };

  const openImageDialog = (imageSrc, imageAlt) => {
    setSelectedImage({ src: imageSrc, alt: imageAlt });
    setIsDialogOpen(true);
  };

  return (
    <div className="p-4 sm:p-6 md:p-8 lg:p-12 xl:pt-24 xl:px-16 xl:pb-16 w-full pt-24">
      <div className="relative mb-4 sm:mb-6 md:mb-8">
        <div
          className="relative w-full h-32 sm:h-40 md:h-48 lg:h-56 xl:h-72 cursor-pointer"
          onClick={() =>
            openImageDialog(
              imageUrl || "/api/placeholder/800/400",
              title || "Collection image"
            )
          }
        >
          <Image
            src={imageUrl || "/api/placeholder/800/400"}
            alt={title || "Collection image"}
            className="object-cover w-full h-full rounded-lg"
            fill
            priority
            sizes="(max-width: 640px) 100vw, (max-width: 768px) 100vw, (max-width: 1024px) 100vw, 100vw"
          />
        </div>
        <div className="absolute top-2 sm:top-3 md:top-4 left-2 sm:left-3 md:left-4">
          <Button
            variant="outline"
            className="bg-white/80 hover:bg-blue-500 text-black hover:text-white rounded-xl h-8 w-8 p-0 sm:h-10 sm:w-10"
            onClick={handleClickBack}
          >
            <ArrowLeft className="h-4 w-4 sm:h-5 sm:w-5" />
          </Button>
        </div>
        <h2 className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-white text-center w-full px-4">
          {title}
        </h2>
      </div>
      {matchedSubset ? (
        <div className="w-full">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 sm:gap-4 w-full">
            {Object.entries(matchedSubset[productDetails.title]).map(
              ([key, value]) => (
                <div key={key} className="p-3 sm:p-4 border rounded-xl w-full">
                  {value.image && (
                    <div
                      className="relative w-full h-48 sm:h-56 md:h-64 cursor-pointer"
                      onClick={() =>
                        openImageDialog(
                          value.image,
                          value.title || "Product image"
                        )
                      }
                    >
                      <Image
                        src={value.image}
                        alt={value.title || "Product image"}
                        className="rounded-lg object-cover"
                        fill
                        sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                      />
                      <p className="absolute bottom-0 right-0 z-10 mb-2 mr-2 text-blue-500 bg-white/70 px-2 py-1 rounded text-sm">
                        {value.code}
                      </p>
                    </div>
                  )}
                  <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center pt-3 sm:pt-4 gap-2">
                    <p className="text-base sm:text-lg font-semibold line-clamp-2">
                      {value.content}
                    </p>
                    <h3 className="text-base sm:text-lg text-blue-500 whitespace-nowrap">
                      {value.title}
                    </h3>
                  </div>
                </div>
              )
            )}
          </div>
        </div>
      ) : (
        <div className="flex justify-center items-center h-32">
          <p className="text-gray-500">No matching subset found.</p>
        </div>
      )}

      {/* Image Zoom Dialog */}
      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent className="max-w-5xl w-full p-0 overflow-hidden bg-black/90">
          <DialogTitle className="sr-only">
            {selectedImage?.alt || "Image Preview"}
          </DialogTitle>
          <div className="absolute top-2 right-2 z-10">
            <DialogClose asChild>
              <Button
                variant="ghost"
                className="h-8 w-8 p-0 text-white hover:bg-white/20 rounded-full"
              >
                <X className="h-5 w-5" />
              </Button>
            </DialogClose>
          </div>
          <div className="relative w-full h-[80vh] flex items-center justify-center">
            {selectedImage && (
              <Image
                src={selectedImage.src}
                alt={selectedImage.alt}
                className="object-contain"
                fill
                sizes="100vw"
                priority
              />
            )}
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

const CollectionPage = () => {
  return (
    <Suspense
      fallback={
        <div className="flex justify-center items-center h-screen">
          Loading...
        </div>
      }
    >
      <Collection />
    </Suspense>
  );
};

export default CollectionPage;
