import { SiReact, SiTypescript, SiTailwindcss } from '@icons-pack/react-simple-icons';
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
						<Link to={`https://reactjs.org/`}>
							<SiReact />
						</Link>
					</div>
					<div className=" m-4 h-8 w-24 rounded-md">
						<Link to={`https://www.typescriptlang.org/`}>
							<SiTypescript />
						</Link>
					</div>
					<div className="m-4 h-8 w-24 rounded-md">
						<Link to={`https://tailwindcss.com/`}>
							<SiTailwindcss />
						</Link>
					</div>
				</div>
				<p className="w-80">{props.readme}</p>
				<button className="h-8 w-2/6 rounded-md border-2 p-3">
					<Link to={props.githubUrl}> Github Repo</Link>
				</button>
			</div>
		</div>
	);
}
