export interface LandingProps {
	className: string;
}
export interface AboutMeProps {
	className: string;
}

export interface BlogListProps {
	coverImage: string;
	id: string;
	title: string;
	date: string;
	author: string;
	excerpt: string;
	body: [];
	tags?: string[];
	slug: string;
}

export interface BlogLayoutProps {
	id: string;
	coverImage: string;
	title: string;
	date: string;
	author: string;
	excerpt: string;
	body: string;
	tags?: string[];
	slug: string;
}
export interface Post {
	__typename: "Post";
	id: string;
	title: string;
	excerpt: string;
	coverImage: string;
	date: string;
	author: string;
	slug: string;
	tags: string[];
	body: any;
	_sys: {
	  __typename?: "SystemInfo";
	  filename: string;
	  extension: string;
	};
  }

export interface BlogPostProps {
	id: string;
	title: string;
	body: any;
	author: string;
	date: string;
	excerpt: string;
	coverImage: string;
	slug: string;
	tags?: string[];
}