import BlogPostList from '@/components/BlogList';
import { useTina } from 'tinacms/dist/react';

export default async function BlogMainPage(props: { query: any; variables: any; data: any }) {
	const { data } = useTina({
		query: props.query,
		variables: props.variables,
		data: props.data,
	});
	return (
		<div>
			{data.postConnection.edges?.map((node: any) => {
				return (
					<article key={node.id}>
						<BlogPostList
							title={node.title}
							body={node.body}
							author={node.author}
							date={node.date}
							excerpt={node.excerpt}
							slug={node.slug}
							id={node.id}
						/>
					</article>
				);
			})}
		</div>
	);
}
