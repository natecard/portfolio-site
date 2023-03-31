/* eslint-disable react/no-unescaped-entities */
export default function Landing() {
	return (
		<div className=" flex min-h-screen items-center justify-center">
			{window.innerWidth < 805 ? (
				<h1 className="text-3xl uppercase md:text-4xl">
					Hi, I'm
					<br />
					<span className="bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-5xl font-extrabold text-transparent motion-safe:animate-pulse md:text-7xl lg:text-8xl">
						Nate Card
					</span>
					<span className=" text-5xl lg:text-8xl">.</span>
					<br />
					I'm a software developer.
				</h1>
			) : (
				<div className=" absolute top-1/2 left-1/2 max-w-none -translate-x-1/2 -translate-y-1/2">
					<div className=" w-full animate-typing overflow-hidden whitespace-nowrap border-r-2 border-black font-mono text-xl font-semibold text-white">
						<h1 className="text-3xl uppercase leading-loose xl:text-5xl">
							Hi, I'm{' '}
							<span className="bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-5xl font-extrabold text-transparent motion-safe:animate-pulse lg:text-6xl xl:text-7xl">
								Nate Card
							</span>
							. I'm a software developer.
						</h1>
					</div>
				</div>
			)}
		</div>
	);
}
