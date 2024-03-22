import { BlogListProps } from '@/Interfaces';
import Link from 'next/link';

function BlogPostList(props: BlogListProps) {
	return (
		<div className="">
			<div key={props.id}>
				<Link href={`/blog/posts/${props.slug}`}>
					<h2>{props.title}</h2>
				</Link>
				<p>{props.author}</p>
				<p>{props.excerpt}</p>
			</div>
		</div>
	);
}

export default BlogPostList;
