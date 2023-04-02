import './globals.css';

export const metadata = {
	title: 'Nate Card Portfolio',
	description: 'Next13 App for Portfolio Site',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang="en">
			<body>{children}</body>
		</html>
	);
}
