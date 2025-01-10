"use client";
import Image from "next/image";
import { useSearchParams } from "next/navigation";
import { React, useEffect, useState } from "react";
import subset from "@/lib/subset";

const Page = () => {
  const [productDetails, setProductDetails] = useState({
    id: null,
    title: null,
    imageUrl: null,
  });
  const [matchedSubset, setMatchedSubset] = useState(null);
  const searchParams = useSearchParams();

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

  return (
    <div className="p-24">
      {matchedSubset ? (
        <div>
          <h2 className="text-2xl font-bold mb-4">{productDetails.title}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {Object.entries(matchedSubset[productDetails.title]).map(
              ([key, value]) => (
                <div key={key} className="p-4 border rounded">
                  <h3 className="text-xl mb-2">{value.title}</h3>
                  <p className="mb-4">{value.content}</p>
                  {value.image && (
                    <Image
                      src={value.image}
                      alt={value.title}
                      width={200}
                      height={200}
                      className="rounded-lg"
                    />
                  )}
                </div>
              )
            )}
          </div>
        </div>
      ) : (
        <p>No matching subset found.</p>
      )}
    </div>
  );
};

export default Page;
