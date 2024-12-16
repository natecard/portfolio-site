import client from '@/tina/__generated__/client';
import BlogPost from '@/src/components/BlogPost';
import { BlogLayoutProps } from '@/Interfaces';
import { Metadata } from 'next';
import ErrorBoundary from '@/src/components/ErrorBoundary';

export default async function DisplayPost({ params }: { params: { slug: string } }) {
	const { slug } = await params;
	const postsResponse = await client.queries.post({ relativePath: `${slug}.md` });
	const { data } = postsResponse;
	const post = data.post;
	let tags: string[] = [];
	if (post.tags) {
		tags = post.tags.split(',');
	}
	return (
		<main>
			<ErrorBoundary>
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
			</ErrorBoundary>
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

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
	const post = await getPost(await params.slug);
	// Get a plain text description from the rich text body
	const description = typeof post.body === 'string' 
		? post.body.substring(0, 160) 
		: post.excerpt || 'No description available';

	return {
		title: `${post.title} | Your Blog Name`,
		description: description,
		openGraph: {
			title: post.title,
			description: description,
			type: 'article',
			authors: [post.author],
		},
	};
}

async function getPost(slug: string) {
	const postResponse = await client.queries.post({ relativePath: `${slug}.md` });
	if (!postResponse.data.post) {
		throw new Error(`Post not found for slug: ${slug}`);
	}
	return postResponse.data.post;
}
