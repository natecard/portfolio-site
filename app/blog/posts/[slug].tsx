import Footer from '@/components/Footer';
import Header from '@/components/Header';
import client from '@/tina/__generated__/client';
import { Post } from '@/tina/__generated__/types';
import BlogPost from '@/components/BlogLayout';
import { useTina } from 'tinacms/dist/react';
import { GetStaticProps, InferGetStaticPropsType } from 'next';

export default async function DisplayPost(props: { query: any; variables: any; data: any }) {
	const { data } = useTina({
		query: props.query,
		variables: props.variables,
		data: props.data,
	});

	return (
		<div>
			<Header />
			<article>
				<BlogPost
					key={data.id}
					title={data.title}
					body={data.body}
					author={data.author}
					date={data.date}
					excerpt={data.excerpt}
					coverImage={data.coverImage}
					slug={data.slug}
					id={data.id}
				/>
			</article>
			<Footer />
		</div>
	);
}
export const getStaticPaths = async () => {
	const connection = await client.queries.postConnection();
	const paths = connection.data.postConnection.edges!.map((post) => {
		return { params: { slug: post?.node?._sys.filename } };
	});
	return {
		paths,
		fallback: false,
	};
};

const getStaticProps: GetStaticProps = async (x) => {
	const variables = { relativePath: `blog/posts/${x.params?.slug}` };

	let pageResponse = {};
	try {
		pageResponse = await client.queries.post(variables);
	} catch (e) {
		console.error(e);
	}
	return {
		props: {
			data: pageResponse.data,
			query: pageResponse.query,
			variables: pageResponse.variables,
		},
	};
};
export { getStaticProps };
