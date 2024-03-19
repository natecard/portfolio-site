import Footer from '@/components/Footer';
import Header from '@/components/Header';
import client from '@/tina/__generated__/client';
import { Post } from '@/tina/__generated__/types';
import BlogPost from '@/components/BlogLayout';
import { useTina } from 'tinacms/dist/react';
import { GetStaticProps } from 'next';

export default async function DisplayPost(props: { query: any; variables: any; data: any }) {
	const { data } = useTina({
		query: props.query,
		variables: props.variables,
		data: props.data,
	});
	console.log('Data received in DisplayPost component:', data);

	return (
		<div>
			<Header />
			<article>
				<BlogPost {...data.post} />
			</article>
			<Footer />
		</div>
	);
}
export const getStaticPaths = async () => {
	const connection = await client.queries.postConnection();
	console.log('postConnection data:', connection.data); // Log the data returned by postConnection

	return {
		paths: connection.data.postConnection.edges!.map((post) => ({
			params: { slug: post?.node?._sys.filename },
		})),
		fallback: false,
	};
};

export const getStaticProps: GetStaticProps = async (x) => {
	const tinaProps = await client.queries.post({
		relativePath: `blog/posts/${x.params?.slug}`,
	});
	console.log('post data:', tinaProps.data); // Log the data returned by the post query

	return {
		props: {
			data: tinaProps.data,
			query: tinaProps.query,
			variables: tinaProps.variables,
		},
	};
};
