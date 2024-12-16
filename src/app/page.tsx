'use client';
import Header from '@/src/components/Header';
import Landing from '@/src/components/Landing';
import Footer from '@/src/components/Footer';
import AboutMe from '@/src/components/AboutMe';
import Skills from '@/src/components/Skills';

export default function App() {
	return (
		<div className=" max-w-full snap-y">
			<Header />
			<div className="min-h-screen snap-y snap-center snap-always pb-36">
				<Landing />
			</div>
			{/* <Suspense> */}
			<div className="my-48 snap-center snap-always">
				<AboutMe />
			</div>
			<div className="my-48 snap-center snap-always">
				<Skills />
			</div>
			<Footer />
			{/* </Suspense> */}
		</div>
	);
}
