import {
	SiReact,
	SiTypescript,
	SiHtml5,
	SiCss3,
	SiJavascript,
	SiNextdotjs,
	SiTailwindcss,
	SiGit,
	SiPostgresql,
	SiNodedotjs,
	SiJson,
	SiJest,
	SiGooglecloud,
	SiRedux,
	SiWebpack,
	SiVite,
	SiVitess,
	SiNpm,
	SiFirebase,
	SiMongodb,
} from '@icons-pack/react-simple-icons';
export default function Skills() {
	return (
		<section className="mx-20 text-center">
			<h1 className="my-20 text-4xl">Skills</h1>
			<div className=" grid grid-cols-4 items-center justify-items-center gap-10">
				<div className="flex flex-col items-center">
					<SiHtml5 size={54} className="my-5" />
					<h3>HTML5</h3>
				</div>
				<div className="flex flex-col items-center">
					<SiCss3 size={54} className="my-5" />
					<h3>CSS3</h3>
				</div>
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
					<SiGit size={54} className="my-5" />
					<h3>Git</h3>
				</div>
				<div className="flex flex-col items-center">
					<SiPostgresql size={54} className="my-5" />
					<h3>PostgreSQL</h3>
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
					<SiJson size={54} className="my-5" />
					<h3>JSON</h3>
				</div>
				<div className="flex flex-col items-center">
					<SiJest size={54} className="my-5" />
					<h3>Jest</h3>
				</div>
				<div className="flex flex-col items-center">
					<SiGooglecloud size={54} className="my-5" />
					<h3>Google Cloud</h3>
				</div>
				<div className="flex flex-col items-center">
					<SiRedux size={54} className="my-5" />
					<h3>Redux</h3>
				</div>
				<div className="flex flex-col items-center">
					<SiWebpack size={54} className="my-5" />
					<h3>Webpack</h3>
				</div>
				<div className="flex flex-col items-center">
					<SiVite size={54} className="my-5" />
					<h3>Vite.js</h3>
				</div>
				<div className="flex flex-col items-center">
					<SiVitess size={54} className="my-5" />
					<h3>Vitess</h3>
				</div>
				<div className="flex flex-col items-center">
					<SiNpm size={54} className="my-5" />
					<h3>NPM</h3>
				</div>
				<div className="flex flex-col items-center">
					<SiFirebase size={54} className="my-5" />
					<h3>Firebase</h3>
				</div>
			</div>
		</section>
	);
}
