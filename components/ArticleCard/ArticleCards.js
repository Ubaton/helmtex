import React from "react";
import Image from "next/image";
import Link from "next/link";

const ArticleCard = ({ title, description, image, slug }) => {
  return (
    <div className="w-full sm:w-96 bg-white shadow-lg rounded-lg overflow-hidden">
      {/* Image Section */}
      <div className="relative w-full h-48">
        <Image
          src={image}
          alt={title}
          layout="fill"
          objectFit="cover"
          className="rounded-t-lg"
        />
      </div>
      {/* Content Section */}
      <div className="p-4">
        <h2 className="text-xl font-semibold mb-2">{title}</h2>
        <p className="text-gray-600 mb-4">{description}</p>
        {/* Link to Blog */}
        <Link href={`/blog/${slug}`} className="text-blue-500 hover:underline">
          Read More
        </Link>
      </div>
    </div>
  );
};

export default ArticleCard;
