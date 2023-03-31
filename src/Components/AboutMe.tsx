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
				<p className="mt-20 px-2 text-2xl font-extralight leading-10 subpixel-antialiased md:mx-14 lg:mx-24 lg:text-3xl">
					Hi there! My name is Nate I'm a software developer who loves creating innovative solutions
					that make a positive impact on products. As an entrepreneur, I was always fascinated by
					how technology can transform our lives and solve complex problems. That's what motivated
					me to pursue a career in software development.
					<br />
					<br />
					I learned Full Stack Development through The Odin Project, an open source coding
					curriculum that taught me everything I needed to know to build awesome websites and apps.
					I learned skills like React, JavaScript, HTML, CSS, and Node.js.
					<br />
					<br />
					Before becoming a software developer, I co-founded Wild Card Brewing Co., a craft brewery
					that produces high-quality beers with local ingredients and innovative recipes. I also
					worked as a finance coordinator and a waste auditor at MASS Environmental Services Inc., a
					leading provider of waste diversion and recycling solutions in Canada.
					<br />
					<br />
					I am currently looking to work as either a Front End or Full Stack developer, and look
					forward to working with a great team to move their product forward.
					<br />
					<br />
				</p>
			</div>
		</div>
	);
}
