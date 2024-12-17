"use client";
import AboutMe from "@/components/AboutMe";
import Chat from "@/components/Chat";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Landing from "@/components/Landing";
import Skills from "@/components/Skills";

export default function App() {
  return (
    <div className=" max-w-full min-h-screen bg-gradient-to-r from-slate-200 to-slate-400 dark:bg-gradient-to-r dark:from-slate-900 dark:to-slate-500">
      <div className="sticky text-slate-600 dark:text-slate-100 top-0 z-50">
        <Header />
      </div>
      <div className="min-h-screen pb-36">
        <Landing />
      </div>
      <div>
        <Chat />
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
