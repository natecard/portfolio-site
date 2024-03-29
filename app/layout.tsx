import '@/styles/globals.css';
import { Providers } from './providers';
import { SpeedInsights } from '@vercel/speed-insights/next';

export const metadata = {
	title: 'Nate Card Portfolio',
	description: 'A collection of projects and blog posts by Nate Card',
	charset: 'UTF-8',
	name: 'viewport',
	content: 'width=device-width, initial-scale=1.0',
	rel: 'stylesheet',
	href: 'https://rsms.me/inter/inter.css',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang="en">
			<body className="bg-gray-950 text-gray-50">
				<Providers>
					{children}
					<SpeedInsights />
				</Providers>
			</body>
		</html>
	);
}
