import React from 'react';
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
import { useRoutePath } from './router/RouterProvider';
import { useRevealOnScroll } from './hooks/useRevealOnScroll';

function App() {
  const route = useRoutePath();
  useRevealOnScroll();

  return (
    <div className="App mobile-centered">
      {route === '/reserve' ? (
        <ReserveForm />
      ) : route === '/thanks' ? (
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
