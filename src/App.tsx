import Header from './Components/Header';
import Contact from './Components/Contact';
import Projects from './Components/Projects';
import Footer from './Components/Footer';
import AboutMe from './Components/AboutMe';

function App() {
	return (
		<div className="max-w-screen">
			<Header />
			<AboutMe />
			<Projects />
			<Contact />
			<Footer />
		</div>
	);
}

export default App;
