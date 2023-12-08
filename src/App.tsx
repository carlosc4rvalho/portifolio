import React, { useEffect, useState } from 'react';
import "./App.css"
import LoadingScreen from './components/loadingScreen/LoadingScreen';
import Header from './components/header/Header';
import Home from './components/home/Home';
import About from './components/about/About';
import Projects from './components/projects/Projects';
import Section from './components/section/Section';
import Footer from './components/footer/Footer';

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
      <Header />
      <Home />
      <About />
      <Projects />
      <Section />
      <Footer />
    </>
  );
}

export default App;