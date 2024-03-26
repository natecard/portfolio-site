import { BlogListProps } from '@/Interfaces';
import BlogPostList from '@/components/BlogPostList';
import PythonCodeBlock from '@/components/PythonCodeBlock';
import client from '@/tina/__generated__/client';

export default async function BlogMainPage() {
	const postsResponse = await client.queries.postConnection();
	const { data } = postsResponse;
	const posts = data.postConnection;

	return (
		<div className="">
			<div>
				{posts && posts.edges && posts.edges.length > 0 ? (
					posts.edges?.map((post: any) => {
						console.log(post.node.tags);
						return (
							<BlogPostList
								id={post.node.id}
								title={post.node.title}
								author={post.node.author}
								date={post.node.date}
								excerpt={post.node.excerpt}
								tags={post.node.tags}
								body={post.node.body}
								key={post.node.id}
								coverImage={post.node.coverImage}
							/>
						);
					})
				) : (
					<p>No posts available</p>
				)}
			</div>
		</div>
	);
}
