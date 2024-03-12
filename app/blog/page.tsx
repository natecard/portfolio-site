// import BlogList from '@/components/BlogList';
// import { BlogListProps } from '@/components/Interfaces';
import client from '@/tina/__generated__/client';
import { Collection, Post, Node, Query } from '@/tina/__generated__/types';

export default async function BlogMainPage() {
	const post: Node & Post & { id: string } = await client.queries.post({
		relativePath: '/working.md',
	});
	return (
		<div>
			{/* {post.map((post) => ( */}
			<div id={post.id}>
				<h1>{post.title}</h1>
				<p>{post.body}</p>
			</div>
			{/* ))} */}
		</div>
	);
}
