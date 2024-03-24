import Image from 'next/image';
import { TinaMarkdown } from 'tinacms/dist/rich-text';
import { BlogLayoutProps } from '@/Interfaces';
import { TinaMarkdownContent } from 'tinacms/dist/rich-text'; // Import TinaMarkdownContent
import { format } from '@formkit/tempo';

export default function BlogPost(props: BlogLayoutProps) {
	const blog = (props: { body: string }) => {
		return <p>{props.body}</p>;
	};

	return (
		<div id={props.id}>
			{props.coverImage && (
				<Image src={props.coverImage} alt={props.title} width={200} height={200} />
			)}
			<h1 className=" text-6xl">{props.title}</h1>
			<h2>{props.author}</h2>
			<h3>{format(props.date, { date: 'full', time: 'short' })}</h3>
			<p>{props.excerpt}</p>
			<TinaMarkdown content={props.body} />
			<p>{props.slug}</p>
		</div>
	);
}
