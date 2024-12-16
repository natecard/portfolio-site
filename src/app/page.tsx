'use client';
import Header from '@/src/components/Header';
import Landing from '@/src/components/Landing';
import Footer from '@/src/components/Footer';
import AboutMe from '@/src/components/AboutMe';
import Skills from '@/src/components/Skills';

export default function App() {
	return (
		<div className=" max-w-full min-h-screen bg-gradient-to-r from-slate-900 to-slate-600">
			<Header />
			<div className="min-h-screen pb-36">
				<Landing />
			</div>
			{/* <Suspense> */}
			<div className="my-48">
				<AboutMe />
			</div>
			<div className="my-48">
				<Skills />
			</div>
			<Footer />
			{/* </Suspense> */}
		</div>
	);
}
