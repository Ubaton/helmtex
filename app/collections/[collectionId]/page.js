"use client";
import Image from "next/image";
import { useSearchParams } from "next/navigation";
import { React, useEffect, useState } from "react";

const Page = () => {
  const [productDetails, setProductDetails] = useState({
    id: null,
    title: null,
    imageUrl: null,
  });
  const searchParams = useSearchParams();

  useEffect(() => {
    const title = searchParams.get("title");
    const imageUrl = searchParams.get("imageUrl");
    const id = window.location.pathname.split("/").pop();

    if (title && id && imageUrl) {
      setProductDetails({ id, title, imageUrl });
    }
  }, [searchParams]);

  return (
    <div className="p-24">
      {productDetails.id && productDetails.title ? (
        <div className="max-w-2xl mx-auto">
          <h1 className="text-3xl font-bold mb-6">{productDetails.title}</h1>
          {productDetails.imageUrl && (
            <Image
              src={productDetails.imageUrl}
              alt={productDetails.title}
              width={800}
              height={600}
              className="w-full h-96 object-cover rounded-lg shadow-lg mb-6"
            />
          )}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold mb-2">Collection Details</h2>
            <p className="text-gray-600">Collection ID: {productDetails.id}</p>
            <p className="text-gray-600">
              Collection Name: {productDetails.title}
            </p>
          </div>
        </div>
      ) : (
        <p>Loading collection details...</p>
      )}
    </div>
  );
};

export default Page;
