import { ParallaxBanner } from 'react-scroll-parallax';
import background from '../img/bg-landing.png';
import foreground from '../img/foreground-landing.png';

export default function AboutMe() {
	return (
		<div>
			<ParallaxBanner
				layers={[
					{ image: background, speed: -40 },
					{
						speed: -10,
						children: (
							<div className="absolute inset-0 flex justify-center pt-44 lg:pt-56">
								<h1 className="bg-gradient-to-l from-blue-400 to-red-400 bg-clip-text text-5xl font-extrabold text-transparent lg:text-6xl">
									About Me
								</h1>
							</div>
						),
					},
					{ image: foreground, speed: -20 },
				]}
				className=" aspect-video"
			/>
			<div className=" mx-5  md:mx-20">
				<p className="mt-20 px-2 text-2xl font-extralight subpixel-antialiased md:mx-24 lg:mx-24 lg:text-4xl">
					Hi!
					<br />
					My name is Nate, as a career transitioning web developer, I have developed a range of
					skills that will enable me to excel in this industry. These skills include
					troubleshooting, problem-solving, identifying and understanding complex systems,
					communication, and strategic thinking.
				</p>
			</div>
		</div>
	);
}
