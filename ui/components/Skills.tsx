import {
	SiReact,
	SiTypescript,
	SiJavascript,
	SiNextdotjs,
	SiTailwindcss,
	SiNodedotjs,
	SiGooglecloud,
	SiRedux,
	SiMongodb,
} from '@icons-pack/react-simple-icons';
export default function Skills() {
	return (
		<section className="mx-20 text-center">
			<h1 className="my-20 text-4xl">Skills</h1>
			<div className=" grid grid-cols-3 items-center justify-items-center gap-10">
				<div className="flex flex-col items-center">
					<SiTypescript size={54} className="my-5" />
					<h3>TypeScript</h3>
				</div>
				<div className="flex flex-col items-center">
					<SiReact size={54} className="my-5" />
					<h3>React.js</h3>
				</div>
				<div className="flex flex-col items-center">
					<SiJavascript size={54} className="my-5" />
					<h3>JavaScript</h3>
				</div>
				<div className="flex flex-col items-center">
					<SiNextdotjs size={54} className="my-5" />
					<h3>Next.js</h3>
				</div>
				<div className="flex flex-col items-center">
					<SiTailwindcss size={54} className="my-5" />
					<h3>TailwindCSS</h3>
				</div>
				<div className="flex flex-col items-center">
					<SiMongodb size={54} className="my-5" />
					<h3>MongoDB</h3>
				</div>
				<div className="flex flex-col items-center">
					<SiNodedotjs size={54} className="my-5" />
					<h3>Node.js</h3>
				</div>

				<div className="flex flex-col items-center">
					<SiGooglecloud size={54} className="my-5" />
					<h3>Google Cloud</h3>
				</div>
				<div className="flex flex-col items-center">
					<SiRedux size={54} className="my-5" />
					<h3>Redux</h3>
				</div>
			</div>
		</section>
	);
}
