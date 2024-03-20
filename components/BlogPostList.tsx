import { BlogListProps } from '@/Interfaces';

function BlogPostList(props: BlogListProps) {
	return (
		<div className="">
			<div key={props.id}>
				<h2>{props.title}</h2>
				<p>{props.author}</p>
				<p>{props.excerpt}</p>
			</div>
		</div>
	);
}

export default BlogPostList;
