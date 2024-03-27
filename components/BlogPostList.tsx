import { BlogListProps } from '@/Interfaces';
import Link from 'next/link';
import Image from 'next/image';

function BlogPostList(props: BlogListProps) {
	return (
		<div className="mx-auto flex flex-col items-center py-5 ">
			<div key={props.id}>
				<Link href={`/blog/posts/${props.slug}`}>
					<h2 className="prose py-3 text-5xl">{props.title}</h2>
				</Link>
				{props.coverImage && (
					<Image className="" src={props.coverImage} alt={props.title} width={500} height={200} />
				)}
				<p>{props.author}</p>
				<p className="prose max-w-lg text-wrap text-2xl">{props.excerpt}</p>
			</div>
		</div>
	);
}

export default BlogPostList;
