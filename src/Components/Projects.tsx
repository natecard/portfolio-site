import { SiReact, SiTypescript, SiTailwindcss } from '@icons-pack/react-simple-icons';
import { projects } from './Interfaces';
import Link from 'next/link';
import { ParallaxBanner, ParallaxBannerLayer } from 'react-scroll-parallax';

export default function Projects(props: projects) {
	return (
		<div className="mx-2 flex flex-col rounded-lg bg-white/10 backdrop-blur-lg md:mx-12 ">
			<h2 className="py-8 text-center text-3xl font-semibold md:text-5xl">{props.title}</h2>
			<div className="flex items-center">
				{typeof window !== 'undefined' && window.innerWidth < 805 ? (
					<ParallaxBanner style={{ aspectRatio: '5/3' }}>
						<ParallaxBannerLayer
							image={props.img}
							// shouldAlwaysCompleteAnimation={true}
							// shouldDisableScalingTranslations={true}
							translateY={[-40, 0, 'easeOutCubic']}
							// easing={'easeOut'}
							// speed={-20}
							// expanded={true}
						/>
					</ParallaxBanner>
				) : (
					<ParallaxBanner style={{ aspectRatio: '5/3' }}>
						<ParallaxBannerLayer
							image={props.img}
							// shouldAlwaysCompleteAnimation={true}
							// shouldDisableScalingTranslations={true}
							translateY={[-40, 0, 'easeOutCubic']}
							// easing={'easeOut'}
							// speed={-20}
							// expanded={true}
						/>
					</ParallaxBanner>
				)}
			</div>
			<div className=" mt-4 flex flex-row justify-evenly">
				<div className="flex flex-col items-center">
					<Link href={`https://www.typescriptlang.org/`}>
						{typeof window !== 'undefined' && window.innerWidth < 540 ? (
							<SiTypescript size={24} />
						) : (
							<SiTypescript size={48} />
						)}
					</Link>
					<h2 className="text-lg md:text-xl">{props.language1}</h2>
				</div>
				<div className="flex flex-col items-center">
					<Link href={`https://reactjs.org/`}>
						{typeof window !== 'undefined' && window.innerWidth < 540 ? (
							<SiReact size={24} />
						) : (
							<SiReact size={48} />
						)}
					</Link>
					<h2 className="text-lg md:text-xl">{props.language2}</h2>
				</div>
				<div className="flex flex-col items-center">
					<Link href={`https://tailwindcss.com/`}>
						{typeof window !== 'undefined' && window.innerWidth < 540 ? (
							<SiTailwindcss size={24} />
						) : (
							<SiTailwindcss size={48} />
						)}
					</Link>
					<h2 className="text-lg md:text-xl">{props.language3}</h2>
				</div>
			</div>
			<div className="flex flex-col items-center py-8">
				<div className="w-3/5 pb-8">{props.readme}</div>
				<div className="flex flex-row">
					<button className="m-4 flex h-8 w-3/6 items-center justify-center rounded-md border-2 p-3 hover:bg-white hover:text-black md:w-48 lg:p-5 lg:text-2xl">
						<Link href={props.githubUrl}> Code</Link>
					</button>
					<button className="m-4 flex h-8 w-3/6 items-center justify-center rounded-md border-2 p-3 hover:bg-white hover:text-black md:w-48 lg:p-5 lg:text-2xl">
						<Link href={props.liveDemo}>Demo</Link>
					</button>
				</div>
			</div>
		</div>
	);
}
