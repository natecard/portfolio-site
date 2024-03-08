'use client';
import { ParallaxBanner, ParallaxBannerLayer } from 'react-scroll-parallax';
import Image from 'next/image';
import foreground from '@/public/img/foreground-landing.png';
import background from '@/public/img/bg-landing.png';
export default function Scroll() {
	const isMobile = typeof window !== 'undefined' && window.innerWidth <= 800;
	return (
		<div>
			{isMobile ? (
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
			)}
		</div>
	);
}
