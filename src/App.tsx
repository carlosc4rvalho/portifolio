import React, { useEffect, useState } from 'react';
import "./App.css"
import LoadingScreen from './components/loadingScreen/LoadingScreen';
import Dashboard from './components/dashboard/Dashboard';
import CursorBall from './components/cursorBall/CursosBall';
import Home from './components/home/Home';
import About from './components/about/About';
import Skills from './components/skills/Skills';
import Projects from './components/projects/Projects';
import Contact from './components/contact/Contact';
import Footer from './components/footer/Footer';
import ScrollUp from './components/scrollup/ScrollUp';

function App() {
  const [lastScrollTop, setLastScrollTop] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      let st = window.pageYOffset || document.documentElement.scrollTop;
      if (st > lastScrollTop) {
        window.scrollTo(0, window.innerHeight + lastScrollTop);
      } else {
        window.scrollTo(0, lastScrollTop - window.innerHeight);
      }
      setLastScrollTop(st <= 0 ? 0 : st);
    };

    window.addEventListener("scroll", onScroll);

    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, [lastScrollTop]);

  return (
    <>
      <LoadingScreen />
      <main className="main">
        <Dashboard />
        <CursorBall />
        <Home />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>
      <Footer />
      <ScrollUp />
    </>
  );
}

export default App;
