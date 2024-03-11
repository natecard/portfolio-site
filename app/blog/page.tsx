import BlogList from '@/components/BlogList';
import client from '@/tina/__generated__/client';
import { Collection, Post, Node } from '@/tina/__generated__/types';

export default async function BlogMainPage() {
	const postsList = await client.queries.postConnection();
	const posts =
		postsList.data.postConnection.edges?.map((post) => {
			return {
				id: post?.node?.id!,
				title: post?.node?.title,
				body: post?.node?.body,
			};
		}) ?? [];

	return posts.map((post) => {
		<BlogList {...post} />;
	});
}
