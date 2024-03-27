import Image from 'next/image';
import { TinaMarkdown } from 'tinacms/dist/rich-text';
import { BlogLayoutProps } from '@/Interfaces';
import { format } from '@formkit/tempo';
import Link from 'next/link';

export default function BlogPost(props: BlogLayoutProps) {
	let tags: string[] = [];
	tags = props.tags.join(',').split(',');

	return (
		<div className="mx-auto flex w-4/5 flex-col items-center pb-20" id={props.id}>
			{props.coverImage && (
				<Image
					className=" self-center"
					src={props.coverImage}
					alt={props.title}
					width={400}
					height={200}
					loading="lazy"
				/>
			)}
			<h1 className=" text-center text-6xl">{props.title}</h1>
			<div className="flex w-full flex-col">
				<h2 className=" flex self-end">{`Written by: ${props.author}`}</h2>
				<h3 className="flex self-end">
					{format(props.date, { date: 'full', time: 'short' }).substring(
						0,
						format(props.date, { date: 'full', time: 'short' }).lastIndexOf(','),
					)}
				</h3>
			</div>
			<p className=" flex-col justify-start py-20 text-3xl font-semibold">{props.excerpt}</p>
			<div className="mx-auto w-full">
				<TinaMarkdown content={props.body} />
			</div>
			<div className="flex self-end pt-20">
				<p>{`Tags:`}</p>
				{Number(tags) > 2 ? (
					props.tags.map((tag: string) => (
						<Link key={props.id} href={`website/blog/${tag}`}>
							{tag}
						</Link>
					))
				) : (
					<Link href={`${tags}`}>{tags}</Link>
				)}
			</div>
		</div>
	);
}
