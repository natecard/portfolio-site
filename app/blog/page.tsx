import { BlogListProps } from '@/Interfaces';
import BlogPostList from '@/components/BlogPostList';
import client from '@/tina/__generated__/client';
import { PostConnectionEdges } from '@/tina/__generated__/types';

export default async function BlogMainPage(props: { query: any; variables: any; data: any }) {
	const postsResponse = await client.queries.postConnection();
	const { data } = postsResponse;
	const posts = data.postConnection;

	return (
		<div className="">
			{posts && posts.edges && posts.edges.length > 0 ? (
				posts.edges?.map((post: any) => (
					<BlogPostList
						id={post.node.id}
						title={post.node.title}
						author={post.node.author}
						body={post.node.body}
						date={post.node.date}
						excerpt={post.node.excerpt}
						slug={post.node.slug}
						key={post.node.id}
					/>
				))
			) : (
				<p>No posts available</p>
			)}
		</div>
	);
}

function renderBody(body: any) {
	// Check the type of content and render accordingly
	switch (body.type) {
		case 'root':
			// If it's a root type, render the children as paragraphs
			return body.children.map((child: any, index: number) => <p key={index}>{child.text}</p>);
		// Add cases for other types if necessary
		default:
			// Handle other types or unknown types
			return null;
	}
}
