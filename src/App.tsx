import React, { useEffect, useMemo, useState } from 'react';
import './App.css';
import Hero from './components/Hero';
import Features from './components/Features';
import Reviews from './components/Reviews';
import About from './components/About';
import Gallery from './components/Gallery';
import FAQ from './components/FAQ';
import Footer from './components/Footer';
import ReserveForm from './components/ReserveForm';
import ThanksPage from './components/ThanksPage';

function App() {
  const [hash, setHash] = useState<string>(() => window.location.hash);
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries, obs) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            obs.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    const targets = document.querySelectorAll('section, footer');
    targets.forEach(el => {
      el.classList.add('reveal');
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const onHashChange = () => setHash(window.location.hash);
    window.addEventListener('hashchange', onHashChange);
    return () => window.removeEventListener('hashchange', onHashChange);
  }, []);

  const isReserve = useMemo(() => hash === '#/reserve', [hash]);
  const isThanks = useMemo(() => hash === '#/thanks', [hash]);

  return (
    <div className="App mobile-centered">
      {isReserve ? (
        <ReserveForm />
      ) : isThanks ? (
        <ThanksPage />
      ) : (
        <>
          <Hero />
          <Features />
          <Reviews />
          <About />
          <FAQ />
          <Gallery />
          <Footer />
        </>
      )}
    </div>
  );
}

export default App;
