import { BlogListProps } from '@/Interfaces';
import Link from 'next/link';
import Image from 'next/image';

function BlogPostList(props: BlogListProps) {
	return (
		<div className="">
			<div key={props.id}>
				<Link href={`/blog/posts/${props.slug}`}>
					<h2>{props.title}</h2>
				</Link>
				{props.coverImage && (
					<Image src={props.coverImage} alt={props.title} width={200} height={200} />
				)}
				<p>{props.author}</p>
				<p>{props.excerpt}</p>
			</div>
		</div>
	);
}

export default BlogPostList;
