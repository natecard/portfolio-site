export interface Post {
  title: string;
  description?: string;
  date: string;
  slug: string;
  content: string;
  image?: {
    url: string;
    alt?: string;
  };
}

export interface BlogListProps {
  posts: Post[];
}

export interface BlogPostProps {
  post: Post;
}
