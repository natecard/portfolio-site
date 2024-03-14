import client from '@/tina/__generated__/client';
import { Collection, Post, Node, Query } from '@/tina/__generated__/types';

export default async function BlogMainPage() {
	const postsResponse = await client.queries.postConnection();
	postsResponse.data.postConnection.edges!.map((post) => console.log(post?.node?.title));
	return (
		<div>
			{postsResponse.data.postConnection.edges! ? (
				postsResponse.data.postConnection.edges!.map((post) => (
					<div key={JSON.stringify(post?.node?.id)}>
						<h1>{JSON.stringify(post?.node?.title)}</h1>
						<p>{JSON.stringify(post?.node?.excerpt)}</p>
					</div>
				))
			) : (
				<></>
			)}
		</div>
	);
}
