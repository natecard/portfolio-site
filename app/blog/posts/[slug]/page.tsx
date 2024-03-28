'use client';
import client from '@/tina/__generated__/client';
import BlogPost from '@/components/BlogPost';
import { BlogLayoutProps } from '@/Interfaces';
import { useTina } from 'tinacms/dist/react';

export default async function DisplayPost(
	// { params }: { params: { slug: string } }
	props: any,
) {
	// const { slug } = params;
	// const postsResponse = await client.queries.post({ relativePath: `${slug}.md` });
	// const { data } = postsResponse;
	// const post = data.post;
	const { data } = useTina({
		query: props.query,
		variables: props.variables,
		data: props.data,
	});
	let tags: string[] = [];
	if (data) {
		tags = data.post.tags.split(',');
	}
	return (
		<main>
			<article>
				<BlogPost
					key={data.post.id}
					title={data.post.title}
					body={data.post.body}
					author={data.post.author}
					date={data.post.date}
					excerpt={data.post.excerpt}
					coverImage={data.post.coverImage}
					slug={data.post.slug!}
					tags={tags.map((tag) => tag || '') || []}
					id={data.post.id}
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
