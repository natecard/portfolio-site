import BlogList from '@/components/BlogList';
import { BlogListProps } from '@/components/Interfaces';
import client from '@/tina/__generated__/client';
import { Collection, Post, Node, Query } from '@/tina/__generated__/types';

export default async function BlogMainPage() {
	const postsList = await client.queries.postConnection({ first: 5 });
	return (
		<div>
			{postsList.map((post: BlogListProps) => (
				<BlogList key={post.id} title={post.title} body={post.body} id={post.id} />
			))}
		</div>
	);
}
