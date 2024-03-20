import Footer from '@/components/Footer';
import Header from '@/components/Header';

export default function BlogLayout({ children }: React.PropsWithChildren<{}>) {
	return (
		<>
			<main className="h-screen">
				<Header />
				{children}
				<Footer />
			</main>
		</>
	);
}
