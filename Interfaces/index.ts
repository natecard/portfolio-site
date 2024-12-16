export interface BlogListProps {
	id: string;
	title: string;
	coverImage: string;
	author: string;
	date: string;
	excerpt: string;
	slug: string;
	tags?: string[] | string;
	body?: any;
}

export interface BlogLayoutProps extends BlogListProps {
	body: any;
}
