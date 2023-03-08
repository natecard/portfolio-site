import { SiReact, SiTypescript, SiTailwindcss } from '@icons-pack/react-simple-icons';
import image from '../img/subforuma.png';
import { projects } from './Interfaces';
import { Link } from 'react-router-dom';

export default function Projects(props: projects) {
	return (
		<div className="flex flex-col justify-center px-2">
			<div className="flex grow flex-col pt-16">
				<h2 className="pb-8 text-5xl">{props.title}</h2>
				<img className="flex h-3/6 w-5/6" src={props.img} alt="project screen shot" />
				<div className=" flex flex-row justify-center">
					<div className="m-4 h-8 w-24 rounded-md">
						<SiReact />
					</div>
					<div className=" m-4 h-8 w-24 rounded-md">
						<SiTypescript />
					</div>
					<div className="m-4 h-8 w-24 rounded-md">
						<SiTailwindcss />
					</div>
				</div>
				<p className="w-80">
					Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sodales arcu in eros
					interdum aliquet. Maecenas vitae rutrum metus, sed tincidunt justo. Donec sollicitudin,
					dolor auctor cursus imperdiet, lacus arcu posuere eros, vitae gravida mauris lorem vitae
					felis. Phasellus nunc lectus, tincidunt eu enim ut, pretium tristique metus. Cras rhoncus
					justo mauris, vulputate commodo eros laoreet vitae...
				</p>
				<button
					Link={props.githubUrl}
					className="text-whiteish h-8 w-2/6 rounded-md border-2 p-3 text-center align-middle"
				>
					Github Repo
				</button>
			</div>
		</div>
	);
}
