import Script from "next/script";

export default function BlogSchema({
  title,
  description,
  url,
  image,
  datePublished,
  author,
}: {
  title: string;
  description: string;
  url: string;
  image: string;
  datePublished: string;
  author: string;
}) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: title,
    description: description,
    image: image,
    author: {
      "@type": "Person",
      name: author,
    },
    publisher: {
      "@type": "Organization",
      name: "MyPageSEO",
      logo: {
        "@type": "ImageObject",
        url: "https://mypageseo.com/assets/logo.png",
      },
    },
    mainEntityOfPage: url,
    datePublished,
  };

  return (
    <Script
      id="blog-schema"
      type="application/ld+json"
      strategy="afterInteractive"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
