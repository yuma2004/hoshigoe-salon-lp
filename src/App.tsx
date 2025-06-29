import React from 'react';
import './App.css';
import Hero from './components/Hero';
import Features from './components/Features';
import Reviews from './components/Reviews';
import About from './components/About';
import Gallery from './components/Gallery';
import FAQ from './components/FAQ';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
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
