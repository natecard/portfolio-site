import { BlogListProps } from '@/Interfaces';
import Link from 'next/link';
import Image from 'next/image';

function BlogPostList(props: BlogListProps) {
	return (
		<div className="flex flex-col items-center py-5 ">
			<div key={props.id}>
				<Link href={`/blog/posts/${props.slug}`}>
					<h2 className="prose">{props.title}</h2>
				</Link>
				{props.coverImage && (
					<Image className="" src={props.coverImage} alt={props.title} width={200} height={200} />
				)}
				<p>{props.author}</p>
				<p className="prose max-w-64 text-wrap">{props.excerpt}</p>
			</div>
		</div>
	);
}

export default BlogPostList;
