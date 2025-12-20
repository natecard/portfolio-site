"use client";
import { format } from "@formkit/tempo";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";

import type { BlogListProps } from "@/types/Interfaces";

function BlogPostList({
  title,
  coverImage,
  author,
  excerpt,
  slug,
  date,
}: BlogListProps) {
  const router = useRouter();
  const [isExpanding, setIsExpanding] = useState(false);

  const handleClick = async (e: React.MouseEvent) => {
    e.preventDefault();
    setIsExpanding(true);
    await new Promise((resolve) => setTimeout(resolve, 700));
    router.push(`/blog/posts/${slug}`);
  };

  return (
    <div className="container mx-auto max-w-4xl p-4">
      <AnimatePresence>
        <motion.article
          initial={{ opacity: 1 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.5 } }}
          layout
          className={`group rounded-xl overflow-hidden ${
            isExpanding
              ? "fixed top-16 inset-x-0 z-50 mx-auto max-w-4xl px-4 py-8"
              : "border border-gray-200"
          }`}
          style={{
            backgroundColor: "var(--background)",
          }}
          onClick={handleClick}
        >
          <motion.div
            layout
            initial={false}
            animate={{
              padding: isExpanding ? "8rem 3rem" : "1.5rem",
            }}
            transition={{ duration: 0.5, ease: "easeIn" }}
            className="flex h-full w-full"
          >
            <motion.div layout initial={false} className="gap-6 w-full">
              {coverImage && (
                <motion.div
                  layout
                  initial={false}
                  className="relative overflow-hidden rounded-lg"
                  animate={{
                    width: "100%",
                    height: isExpanding ? "24rem" : "auto",
                    minHeight: "16rem",
                    order: isExpanding ? 0 : 2,
                  }}
                >
                  <Image
                    src={coverImage}
                    alt={title}
                    fill
                    className="object-cover"
                    priority
                  />
                </motion.div>
              )}
              <motion.div
                layout
                initial={false}
                className="flex flex-col flex-1"
              >
                <motion.h2 layout initial={false} className="mb-2 font-bold">
                  {title}
                </motion.h2>
                <motion.div layout initial={false} className="mb-4">
                  <span>{author}</span>
                  <span className="mx-2">•</span>
                  <time suppressHydrationWarning>
                    {date ? format(date, { date: "full" }) : "No date"}
                  </time>
                </motion.div>
                <motion.p layout initial={false}>
                  {excerpt}
                </motion.p>
              </motion.div>
            </motion.div>
          </motion.div>
        </motion.article>
      </AnimatePresence>
    </div>
  );
}

export default BlogPostList;
