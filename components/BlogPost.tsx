import Image from 'next/image';
import { TinaMarkdown } from 'tinacms/dist/rich-text';
import { BlogLayoutProps } from '@/Interfaces';
import { TinaMarkdownContent } from 'tinacms/dist/rich-text'; // Import TinaMarkdownContent
import { format } from '@formkit/tempo';
import Link from 'next/link';

export default function BlogPost(props: BlogLayoutProps) {
	const blog = (props: { body: string }) => {
		return <p>{props.body}</p>;
	};

	return (
		<div className="flex w-4/5 flex-col" id={props.id}>
			{props.coverImage && (
				<Image
					className=" self-center"
					src={props.coverImage}
					alt={props.title}
					width={200}
					height={200}
				/>
			)}
			<h1 className=" text-center text-6xl">{props.title}</h1>
			<div className="flex w-5/6 flex-col">
				<h2 className=" flex justify-end">{props.author}</h2>
				<h3 className="flex justify-end">
					{format(props.date, { date: 'full', time: 'short' }).substring(
						0,
						format(props.date, { date: 'full', time: 'short' }).lastIndexOf(','),
					)}
				</h3>
			</div>
			<p className="text-3xl">{props.excerpt}</p>
			<TinaMarkdown content={props.body} />
			<p>{`Tags:`}</p>
			{Number(props.slug) > 0 ? (
				props.slug.map((tag: string) => (
					<Link key={props.id} href={`website/blog/${tag}`}>
						{tag}
					</Link>
				))
			) : (
				<></>
			)}
		</div>
	);
}
