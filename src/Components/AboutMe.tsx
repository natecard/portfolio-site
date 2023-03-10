import { ParallaxBanner } from 'react-scroll-parallax';
import background from '../img/bg-landing.png';
import foreground from '../img/foreground-landing.png';

export default function AboutMe() {
	return (
		<div>
			{window.innerWidth < 805 ? (
				<ParallaxBanner
					layers={[
						{ image: background, speed: -40 },
						{
							speed: -50,
							children: (
								<div className="absolute inset-0 flex justify-center pt-80 md:pt-96">
									<h1 className="bg-gradient-to-l from-blue-400 to-red-400 bg-clip-text text-5xl font-extrabold text-transparent lg:text-8xl">
										About Me
									</h1>
								</div>
							),
						},
						{ image: foreground, speed: -25 },
					]}
					className=" aspect-[5/2]"
				/>
			) : (
				<ParallaxBanner
					layers={[
						{ image: background, speed: -40 },
						{
							speed: -45,
							easing: 'easeOutQuad',
							children: (
								<div className="absolute inset-0 flex justify-center pt-80">
									<h1 className="bg-gradient-to-l from-blue-400 to-red-400 bg-clip-text text-6xl font-extrabold text-transparent lg:text-8xl">
										About Me
									</h1>
								</div>
							),
						},
						{ image: foreground, speed: -15, easing: 'easeOutCirc' },
					]}
					className=" aspect-[5/3]"
				/>
			)}
			<div className=" mx-5  md:mx-20">
				<p className="lg:mx-18 mt-20 px-2 text-2xl font-extralight subpixel-antialiased md:mx-14 lg:text-4xl">
					My name is Nate, as a former brewery owner, and now turned software engineer, I bring a
					unique blend of communication, problem-solving, and technical expertise to the table.
					<br />
					<br />
					My experience in the brewing, finance, and environmental industries taught me how to make
					strategic decisions, work within a team, and a great set of problem solving skills.
					<br />
					<br />
					Now as a web developer, I have further developed this range of skills that will enable me
					to excel in tech. These skills include troubleshooting, problem-solving, identifying and
					understanding complex systems, communication, and strategic thinking.
					<br />
					<br />
					I am looking to work as either a Front End or Full Stack developer, and look forward to
					working with a great team to move their product forward.
					<br />
					<br />
				</p>
			</div>
		</div>
	);
}
