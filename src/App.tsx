import React, { useEffect } from 'react';
import './App.css';
import Hero from './components/Hero';
import Features from './components/Features';
import Reviews from './components/Reviews';
import About from './components/About';
import Gallery from './components/Gallery';
import FAQ from './components/FAQ';
import Footer from './components/Footer';

function App() {
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

  return (
    <div className="App mobile-centered">
      <Hero />
      <Features />
      <Reviews />
      <About />
      <FAQ />
      <Gallery />
      <Footer />
    </div>
  );
}

export default App;
