import '../../styles/globals.css';

export const metadata = {
	title: 'Nate Card Portfolio',
	description: 'Next13 app for Portfolio Site',
	charset: 'UTF-8',
	name: 'viewport',
	content: 'width=device-width, initial-scale=1.0',
	rel: 'stylesheet',
	href: 'https://rsms.me/inter/inter.css',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang="en">
			<body>{children}</body>
		</html>
	);
}
