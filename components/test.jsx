"use client";

import React, { useEffect, useState } from "react";
import subset from "@/lib/subset";
import Image from "next/image";

const Test = () => {
  const [subsetDoc, setSubsetDoc] = useState([]);

  useEffect(() => {
    setSubsetDoc(subset);
    console.log("My Subsets", subset);
  }, []);

  return (
    <div className="flex h-screen w-full flex-col gap-4 p-4">
      {subsetDoc.map((range, index) => {
        const category = Object.keys(range)[0];
        const items = range[category];
        return (
          <div
            className="text-black rounded-lg border p-4 shadow-sm"
            key={index}
          >
            <h2 className="text-2xl font-bold mb-4">{category}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {Object.entries(items).map(([key, value]) => (
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
              ))}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Test;
