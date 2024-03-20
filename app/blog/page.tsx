'use client';
import BlogPostList from '@/components/BlogPostList';
import client from '@/tina/__generated__/client';

export default async function BlogMainPage(props: { query: any; variables: any; data: any }) {
	const postsResponse = await client.queries.postConnection();
	postsResponse.data.postConnection.edges!.map((post) => console.log(post?.node?.title));

	return (
		<div>
			{postsResponse.data.postConnection.edges! ? (
				postsResponse.data.postConnection.edges!.map((post) => (
					<article key={post?.node?.id}>
						<div key={post?.node?.id}>
							<h1>{post?.node?.title}</h1>
							<p>{post?.node?.excerpt}</p>
						</div>
					</article>
				))
			) : (
				<></>
			)}
		</div>
	);
}
