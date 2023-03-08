import { Parallax } from 'react-scroll-parallax';

export default function AboutMe() {
	return (
		<Parallax speed={-10} translateY={[-100, 50]}>
			<div>
				<h1 className="text-6xl">About Me</h1>
				<p className="text-xl">
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
