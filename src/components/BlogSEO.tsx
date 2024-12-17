import type { Metadata } from "next";

interface BlogSEOProps {
  title: string;
  description: string;
  image?: string;
  slug: string;
}

export function generateMetadata({
  title,
  description,
  image,
  slug,
}: BlogSEOProps): Metadata {
  return {
    title,
    description,
    openGraph: {
      title,
      description,
      images: image ? [image] : [],
      url: `https://yourdomain.com/blog/posts/${slug}`,
      type: "article",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: image ? [image] : [],
    },
  };
}
