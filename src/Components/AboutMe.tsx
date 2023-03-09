import { Parallax } from 'react-parallax';
export default function AboutMe() {
	return (
		<Parallax>
			<div className="bg-secondary pb-48">
				<h1 className="text-center align-middle text-6xl">About Me</h1>
				<p className="px-3 text-xl">
					Hi!
					<br />
					My name is Nate, as a career-transitioning web developer, I have developed a range of
					skills that will enable me to excel in this industry. These skills include
					troubleshooting, problem-solving, identifying and understanding complex systems,
					communication, and strategic thinking.
				</p>
			</div>
		</Parallax>
	);
}
