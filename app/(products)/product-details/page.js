import React from "react";
import { collections } from "../../../components/ProductCard/Collection/data";
import { notFound } from "next/navigation";
import Products from "../../../components/ProductCard/Products";
import Image from "next/image";
import Script from "next/script";


// Dynamic SEO metadata
export async function generateMetadata({ params }) {
  const { collectionId, productId } = params;
  const collection = collections.find((c) => c.id === collectionId);
  if (!collection) return notFound();

  const product = collection.products.find((p) => p.id === productId);
  if (!product) return notFound();

  const pageUrl = `https://www.helmtex.co.za/products/${collectionId}/${productId}`;

  return {
    title: `${product.title} | ${collection.name} | Helm Textile Mills`,
    description: `Explore ${product.title}, part of the ${collection.name} fabric collection by Helmtex. Designed for upholstery, curtains, and outdoor applications.`,
    keywords: [
      "Helmtex",
      "fabric supplier South Africa",
      "bulk fabrics",
      collection.name,
      product.title,
      "contractor textile collection",
    ],
    openGraph: {
      title: `${product.title} | ${collection.name} Collection`,
      description: `Discover premium fabrics like ${product.title} under the ${collection.name} range by Helm Textile Mills.`,
      url: pageUrl,
      type: "article",
      images: [
        {
          url: `https://www.helmtex.co.za${product.imageUrl}`,
          width: 1200,
          height: 630,
          alt: `${product.title} - ${collection.name}`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${product.title} | Helmtex`,
      description: `Premium contractor-grade fabric under ${collection.name}. Learn more about ${product.title} today.`,
      images: [`https://www.helmtex.co.za${product.imageUrl}`],
    },
  };
}


export default function Page({ params }) {
  const { collectionId, productId } = params;
  const collection = collections.find((c) => c.id === collectionId);

  if (!collection) return notFound();

  const product = collection.products.find((p) => p.id === productId);
  if (!product) return notFound();

  return (
    <div className="p-8">
      {/* ✅ Breadcrumbs */}
      <nav className="text-sm text-gray-600 mb-4">
        <a href="/products" className="hover:underline">Products</a> &raquo;{" "}
        <a href={`/products/${collectionId}`} className="hover:underline">
          {collection.name}
        </a> &raquo;{" "}
        <span className="font-semibold">{product.title}</span>
      </nav>

      <h1 className="text-2xl font-bold mb-4">{product.title}</h1>
      <Image
        src={product.imageUrl}
        alt={product.title}
        className="w-full h-96 object-cover mb-4 rounded-lg"
        width={1200}
        height={500}
      />
      <p className="text-lg mb-4">
        Explore premium textile quality and design with <strong>{product.title}</strong> — a proud part of the <strong>{collection.name}</strong> collection at Helm Textile Mills.
      </p>

      <h2 className="text-xl font-semibold mb-4">
        More from the {collection.name} Collection
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {collection.products
          .filter((p) => p.id !== productId) // Exclude current product
          .map((relatedProduct) => (
            <Products key={relatedProduct.id} {...relatedProduct} />
          ))}
      </div>

      {/* Optional SEO Structured Data */}
      <Script
        id="my-inline-script"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Product",
            name: product.title,
            image: `https://www.helmtex.co.za${product.imageUrl}`,
            description: `Premium contractor-grade fabric: ${product.title} from ${collection.name}`,
            brand: {
              "@type": "Brand",
              name: "Helm Textile Mills",
            },
          }),
        }}
      />
    </div>
  );
}