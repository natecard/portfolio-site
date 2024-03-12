import Image from 'next/image';
import { BlogLayoutProps } from '@/Interfaces';

export default function BlogPost(props: BlogLayoutProps) {
	return (
		<div id={props.id}>
			<Image src={props.coverImage} alt={props.title} width={200} height={200} />
			<h1>{props.title}</h1>
			<h2>{props.author}</h2>
			<h3>{props.date}</h3>
			<p>{props.excerpt}</p>
			<p>{props.body}</p>
			<p>{props.slug}</p>
		</div>
	);
}
