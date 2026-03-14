import Script from "next/script";

export default function ProductSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: "MyPageSEO",
    description:
      "Local SEO reporting software for agencies with white-label reporting, local rank tracking, and GBP audits.",
    brand: {
      "@type": "Brand",
      name: "MyPageSEO",
    },
    offers: {
      "@type": "Offer",
      url: "https://mypageseo.com/pricing",
      priceCurrency: "USD",
      availability: "https://schema.org/InStock",
    },
  };

  return (
    <Script
      id="product-schema"
      type="application/ld+json"
      strategy="afterInteractive"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
