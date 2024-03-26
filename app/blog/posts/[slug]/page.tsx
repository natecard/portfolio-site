import client from '@/tina/__generated__/client';
import BlogPost from '@/components/BlogPost';
import { BlogLayoutProps } from '@/Interfaces';

export default async function DisplayPost({ params }: { params: { slug: string } }) {
	const { slug } = params;
	const postsResponse = await client.queries.post({ relativePath: `${slug}` });
	const { data } = postsResponse;
	const post = data.post;
	let tags: string[] = [];
	if (post.tags) {
		tags = post.tags.split(',');
	}
	return (
		<main>
			<article>
				<BlogPost
					key={post.id}
					title={post.title}
					body={post.body}
					author={post.author}
					date={post.date}
					excerpt={post.excerpt}
					coverImage={post.coverImage}
					slug={post.slug!}
					tags={tags.map((tag) => tag || '') || []}
					id={post.id}
				/>
			</article>
		</main>
	);
}

export async function generateStaticParams() {
	const results = await client.queries.postConnection();

	return results.data.postConnection.edges!.map((edge) => ({
		slug: edge!.node!.slug,
		tags: edge!.node!.tags,
	}));
}
