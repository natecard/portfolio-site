import BlogPost from '@/components/BlogLayout';
import client from '@/tina/__generated__/client';
import { Collection, Post, Node, Query } from '@/tina/__generated__/types';
import { useTina } from 'tinacms/dist/react';

export default async function BlogMainPage(props) {
	return (
		<div>
			<BlogPost
				key={props.id}
				id={props.id!}
				coverImage={props.coverImage!}
				title={props.title!}
				author={props.author!}
				date={props.date!}
				excerpt={props.excerpt!}
				body={props.body!}
				slug={props.slug!}
			/>
		</div>
	);
}
