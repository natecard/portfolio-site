import { Post } from '@/tina/__generated__/types';

const BlogList = (props: Post) => {
	return (
		<div>
			<div key={props.id}>
				<h2>{props.title}</h2>
				<p>{props.body}</p>
			</div>
		</div>
	);
};

export default BlogList;
