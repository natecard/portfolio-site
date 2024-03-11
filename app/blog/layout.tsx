import Footer from '@/components/Footer';
import Header from '@/components/Header';

export default function BlogLayout({ children }: React.PropsWithChildren<{}>) {
	return (
		<>
			<Header />
			<main>{children}</main>
			<Footer />
		</>
	);
}
