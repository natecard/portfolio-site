// import { format } from "@formkit/tempo";
// import DOMPurify from "isomorphic-dompurify";
// import { marked } from "marked";
// import Image from "next/image";
// import Link from "next/link";

// import type { BlogLayoutProps } from "@/types/Interfaces";
// import "@/styles/markdown.css";

// export default function BlogPost({
//   id,
//   title,
//   coverImage,
//   author,
//   date,
//   excerpt,
//   body,
//   tags,
// }: BlogLayoutProps) {
//   const formattedDate = format(date, { date: "full" });
//   const tagList = Array.isArray(tags)
//     ? tags
//     : (tags ?? "").split(",").map((tag: string) => tag.trim());
//   const cleanBody = DOMPurify.sanitize(body);
//   return (
//     <article className="prose prose-lg mx-auto max-w-4xl px-4 py-8">
//       <header className="mb-8 text-center">
//         {coverImage && (
//           <div className="relative mb-6 h-64 w-full overflow-hidden rounded-lg sm:h-124">
//             <Image
//               src={coverImage.startsWith("http") ? coverImage : coverImage}
//               alt={title}
//               fill
//               className="object-cover"
//               priority
//               sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
//             />
//           </div>
//         )}
//         <h1 className="mb-4 text-4xl font-bold text-stone-600 dark:text-stone-300 sm:text-5xl">
//           {title}
//         </h1>
//         <div className="mb-4 dark:text-slate-100 text-slate-600 ">
//           <span>By {author}</span>
//           <span className="mx-2">•</span>
//           <time>{formattedDate}</time>
//         </div>
//         {excerpt && (
//           <p className="text-xl font-medium text-slate-600 dark:text-slate-200">
//             {excerpt}
//           </p>
//         )}
//       </header>
//       <div
//         className="markdown-content text-black"
//         dangerouslySetInnerHTML={{ __html: marked(cleanBody) }}
//       />
//       {tagList.length > 0 && (
//         <footer className="mt-8 border-t pt-4">
//           <div className="flex flex-wrap gap-2">
//             {tagList.map((tag: string) => (
//               <Link
//                 key={`${id}-${tag}`}
//                 href={`/blog/tag/${tag.toLowerCase()}`}
//                 className="rounded-full dark:bg-gray-600 bg-slate-200 px-3 py-1 text-sm hover:text-gray-600 hover:bg-gray-200"
//               >
//                 {tag}
//               </Link>
//             ))}
//           </div>
//         </footer>
//       )}
//     </article>
//   );
// }
