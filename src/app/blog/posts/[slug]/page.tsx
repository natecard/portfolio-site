import client from '../../../../../tina/__generated__/client'
import BlogPost from '@/components/BlogPost';
import { getAllPosts } from '@/utils/blog';
import { BlogListProps } from '@/types/Interfaces';
import { Metadata } from 'next';
import ErrorBoundary from "@/components/ErrorBoundary";

export default async function DisplayPost({
	id,
	title,
	coverImage,
	author,
	date,
	excerpt,
	body,
	tags,
	slug
}: BlogListProps) {
  const postsResponse = await client.queries.post({ relativePath: `${slug}.md` });
  const { data } = postsResponse;
  const post = data.post;
  const tagList = Array.isArray(tags) 
  ? tags 
  : (tags ?? '').split(',').map((tag: string) => tag.trim());
  tagList.map((tag: string) => (tag.toLowerCase()))
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
            tags={tagList.map((tag: string) => tag || '') || []}
            id={post.id}
          />
        </article>
      </ErrorBoundary>
    </main>
  );
}

export async function generateStaticParams() {
  const posts = await getAllPosts();
  return posts.map((post) => ({
    slug: post.slug,
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
