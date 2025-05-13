export default function Head() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Helm Textile Mills",
    url: "https://helmtex.co.za",
    logo: "https://helmtex.co.za/images/helm.png",
    description:
      "Helm Textile Mills produces high-quality fabrics for upholstery, automotive, and industrial applications across South Africa.",
    address: {
      "@type": "PostalAddress",
      streetAddress: "1 Fabric Lane",
      addressLocality: "Cape Town",
      addressRegion: "Western Cape",
      postalCode: "8000",
      addressCountry: "ZA",
    },
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+27 21 123 4567",
      contactType: "Customer Service",
      areaServed: "ZA",
      availableLanguage: ["en"],
    },
    sameAs: [
      "https://www.facebook.com/HelmTextileMills",
      "https://www.instagram.com/HelmTextileMills",
    ],
  };

  return (
    <>
      <meta name="robots" content="index, follow" />
      <meta name="author" content="Helm Textile Mills" />
      <script
        type="application/ld+json"
        // biome-ignore lint/security/noDangerouslySetInnerHtml: <explanation>
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </>
  );
}
