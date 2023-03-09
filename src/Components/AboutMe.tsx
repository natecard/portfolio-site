import { ScrollParallax } from 'react-just-parallax';

export default function AboutMe() {
	return (
		<ScrollParallax>
			<div className=" mt-96 mb-96 snap-y snap-mandatory overflow-hidden bg-secondary pb-96 pt-96">
				<h1 className="text-center text-6xl">About Me</h1>
				<p className="px-3 text-xl">
					Hi!
					<br />
					My name is Nate, as a career-transitioning web developer, I have developed a range of
					skills that will enable me to excel in this industry. These skills include
					troubleshooting, problem-solving, identifying and understanding complex systems,
					communication, and strategic thinking.
				</p>
			</div>
		</ScrollParallax>
	);
}
