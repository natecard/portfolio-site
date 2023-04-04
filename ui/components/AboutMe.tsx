'use client';
/* eslint-disable react/no-unescaped-entities */
import { ParallaxBanner, ParallaxBannerLayer } from 'react-scroll-parallax';
import Image from 'next/image';
import foreground from '../../public/img/foreground-landing.png';
import background from '../../public/img/bg-landing.png';
export default function AboutMe() {
	const isMobile = typeof window !== 'undefined' && window.innerWidth <= 800;
	return (
		<div>
			{/* {isMobile ? (
				<ParallaxBanner className=" aspect-[5/2]">
					<ParallaxBannerLayer speed={-40}>
						<Image src={background} alt="night sky" />
					</ParallaxBannerLayer>
					<ParallaxBannerLayer speed={-50}>
						<div className="absolute inset-0 flex justify-center pt-80 md:pt-96">
							<h1 className="bg-gradient-to-l from-blue-400 to-red-400 bg-clip-text text-5xl font-extrabold text-transparent lg:text-8xl">
								About Me
							</h1>
						</div>
					</ParallaxBannerLayer>
					<ParallaxBannerLayer speed={-25}>
						<Image src={foreground} alt="desert dunes" />
					</ParallaxBannerLayer>
				</ParallaxBanner>
			) : (
				<ParallaxBanner className=" aspect-[5/3]">
					<ParallaxBannerLayer speed={-40}>
						<Image src={background} alt="night sky" />
					</ParallaxBannerLayer>
					<ParallaxBannerLayer speed={-45} easing={'easeOutQuad'}>
						<div className="absolute inset-0 flex justify-center pt-80">
							<h1 className="bg-gradient-to-l from-blue-400 to-red-400 bg-clip-text text-6xl font-extrabold text-transparent lg:text-8xl">
								About Me
							</h1>
						</div>
					</ParallaxBannerLayer>

					<ParallaxBannerLayer easing={'easeOutCirc'} speed={-15}>
						<Image src={foreground} alt="desert dunes" />
					</ParallaxBannerLayer>
				</ParallaxBanner>
			)} */}
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
