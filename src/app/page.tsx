'use client';
import AboutMe from '@/components/AboutMe';
import Footer from '@/components/Footer';
import Header from '@/components/Header';
import Landing from '@/components/Landing';
import Skills from '@/components/Skills';

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
