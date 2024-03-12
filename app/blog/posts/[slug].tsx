import Footer from '@/components/Footer';
import Header from '@/components/Header';
import client from '@/tina/__generated__/client';
import { Post } from '@/tina/__generated__/types';
import BlogPost from '@/components/BlogLayout';

export default async function DisplayPost() {
	const post = await client.queries.post({ relativePath: '/working.md' });
	return (
		<div>
			<Header />
			<article>
				<BlogPost
					key={post.data.post.id}
					title={post.data.post.title}
					body={post.data.post.body}
					author={post.data.post.author}
					date={post.data.post.date}
					excerpt={post.data.post.excerpt}
					coverImage={post.data.post.coverImage}
					slug={post.data.post.slug}
					id={post.data.post.id}
				/>
			</article>
			<Footer />
		</div>
	);
}
