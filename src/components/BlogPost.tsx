import Image from 'next/image';
import { TinaMarkdown } from 'tinacms/dist/rich-text';
import { BlogLayoutProps } from '@/types/Interfaces';
import { format } from '@formkit/tempo';
import Link from 'next/link';

export default function BlogPost({
	id,
	title,
	coverImage,
	author,
	date,
	excerpt,
	body,
	tags,
}: BlogLayoutProps) {
	const formattedDate = format(date, { date: 'full' });
	const tagList = Array.isArray(tags) 
	? tags 
	: (tags ?? '').split(',').map((tag: string) => tag.trim());

	return (
		<article className="prose prose-lg mx-auto max-w-4xl px-4 py-8">
			<header className="mb-8 text-center">
				{coverImage && (
					<div className="relative mb-6 h-64 w-full overflow-hidden rounded-lg sm:h-96">
						<Image src={coverImage} alt={title} fill className="object-cover" priority />
					</div>
				)}
				<h1 className="mb-4 text-4xl font-bold sm:text-5xl">{title}</h1>
				<div className="mb-4 text-gray-600">
					<span>By {author}</span>
					<span className="mx-2">•</span>
					<time>{formattedDate}</time>
				</div>
				{excerpt && <p className="text-xl font-medium text-gray-700">{excerpt}</p>}
			</header>

			<div className="markdown-content">
				<TinaMarkdown content={body} />
			</div>

			{tagList.length > 0 && (
				<footer className="mt-8 border-t pt-4">
					<div className="flex flex-wrap gap-2">
						{tagList.map((tag: string) => (
							<Link
								key={`${id}-${tag}`}
								href={`/blog/tag/${tag.toLowerCase()}`}
								className="rounded-full bg-gray-100 px-3 py-1 text-sm hover:bg-gray-200"
							>
								#{tag}
							</Link>
						))}
					</div>
				</footer>
			)}
		</article>
	);
}
