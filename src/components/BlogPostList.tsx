import { BlogListProps } from '@/Interfaces';
import Link from 'next/link';
import Image from 'next/image';
import { format } from '@formkit/tempo';

function BlogPostList({ id, title, coverImage, author, excerpt, slug, date }: BlogListProps) {
	return (
		<div className="container mx-auto max-w-4xl p-4">
			<article className="group cursor-pointer rounded-lg border border-gray-200 p-6 transition-shadow hover:shadow-lg">
				<Link href={`/blog/posts/${slug}`} className="block">
					{coverImage && (
						<div className="relative mb-4 h-48 overflow-hidden rounded-lg">
							<Image
								src={coverImage}
								alt={title}
								fill
								className="object-cover transition-transform group-hover:scale-105"
								priority={false}
							/>
						</div>
					)}
					<h2 className="mb-2 text-2xl font-bold hover:text-blue-600">{title}</h2>
					<div className="mb-4 text-sm text-gray-600">
						<span>{author}</span>
						<span className="mx-2">•</span>
						<time>{format(date, { date: 'medium' })}</time>
					</div>
					<p className="text-gray-700">{excerpt}</p>
				</Link>
			</article>
		</div>
	);
}

export default BlogPostList;
