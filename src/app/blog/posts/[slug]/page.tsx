import BlogPost from '@/components/BlogPost';
import { getAllPosts, getPostBySlug } from '@/utils/blog';
import { BlogListProps } from '@/types/Interfaces';
import { Metadata } from 'next';
import ErrorBoundary from "@/components/ErrorBoundary";
import {marked} from 'marked';

export default async function DisplayPost({ params }: { params: { slug: string } }) {
  const post = await getPostBySlug(params.slug);
  const tagList = Array.isArray(post.tags) 
    ? post.tags 
    : (post.tags ?? '').split(',').map((tag: string) => tag.trim());

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
            slug={post.slug}
            tags={tagList}
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
  const post = await getPostBySlug(params.slug);
  const plainTextBody = post.body ? marked(post.body).replace(/<[^>]*>/g, '') : '';
  const description = plainTextBody.substring(0, 160) || post.excerpt || 'No description available';

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
