import Image from 'next/image';
import { TinaMarkdown } from 'tinacms/dist/rich-text';
import { BlogLayoutProps } from '@/Interfaces';
import { TinaMarkdownContent } from 'tinacms/dist/rich-text'; // Import TinaMarkdownContent

export default function BlogPost(props: BlogLayoutProps) {
	const blog = (props: { body: string }) => {
		return <p>{props.body}</p>;
	};

	return (
		<div id={props.id}>
			<Image src={props.coverImage} alt={props.title} width={200} height={200} />
			<h1>{props.title}</h1>
			<h2>{props.author}</h2>
			<h3>{props.date}</h3>
			<p>{props.excerpt}</p>
			<TinaMarkdown content={[props.body] as TinaMarkdownContent[]} />{' '}
			{/* Convert props.body to an array */}
			<p>{props.slug}</p>
		</div>
	);
}
