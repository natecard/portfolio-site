import { SiReact, SiTypescript, SiTailwindcss } from '@icons-pack/react-simple-icons';
import { projects } from './Interfaces';
import { Link } from 'react-router-dom';

export default function Projects(props: projects) {
	return (
		<div className="mx-2 flex flex-col rounded-lg bg-white/20 backdrop-blur-lg md:mx-12 ">
			<div className="flex flex-col items-center">
				<h2 className="pb-8 text-5xl">{props.title}</h2>
				<img
					className="flex h-3/6 w-5/6 items-center rounded-lg"
					src={props.img}
					alt="project screen shot"
				/>
			</div>
			<div className=" flex flex-row justify-evenly pt-4">
				<div className="flex flex-col items-center">
					<Link to={`https://www.typescriptlang.org/`}>
						<SiTypescript />
					</Link>
					<h2>{props.language1}</h2>
				</div>
				<div className="flex flex-col items-center">
					<Link to={`https://reactjs.org/`}>
						<SiReact />
					</Link>
					<h2>{props.language2}</h2>
				</div>
				<div className="flex flex-col items-center">
					<Link to={`https://tailwindcss.com/`}>
						<SiTailwindcss />
					</Link>
					<h2>{props.language3}</h2>
				</div>
			</div>
			<div className="flex flex-col items-center py-8">
				<div className="w-3/5 pb-8 text-lg">{props.readme}</div>
				<button className="flex h-8 w-2/6 items-center justify-center rounded-md border-2 p-3 hover:bg-white hover:text-black md:w-48">
					<Link to={props.githubUrl}> Github Repo</Link>
				</button>
			</div>
		</div>
	);
}
