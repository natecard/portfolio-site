import { BlogListProps } from '@/Interfaces';

const BlogPostList = (props: BlogListProps) => {
	return (
		<div>
			<div key={props.id}>
				<h2>{props.title}</h2>
				<p>{props.author}</p>
				<p>{props.body}</p>
			</div>
		</div>
	);
};

export default BlogPostList;
