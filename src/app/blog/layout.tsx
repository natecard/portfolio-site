import Footer from "@/components/Footer";
import Header from '@/components/Header';

export default function BlogLayout({ children }: React.PropsWithChildren<{}>) {
	return (
		<>
			<main>
				<Header />
				<div className="flex min-h-screen flex-col items-center">{children}</div>
				<Footer />
			</main>
		</>
	);
}
