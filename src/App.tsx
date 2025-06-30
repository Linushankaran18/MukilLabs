import React from 'react';
import Header from './components/Header.tsx';
import Hero from './components/Hero.tsx';
import About from './components/About.tsx';
import Services from './components/Services.tsx';
import Work from './components/Work.tsx';
import Contact from './components/Contact.tsx';
import Footer from './components/Footer.tsx';
import CustomCursor from './components/CustomCursor.tsx';

function App() {
  return (
    <div className="min-h-screen bg-white font-inter">
      <CustomCursor />
      <Header />
      <main>
        <Hero />
        <About />
        <Services />
        <Work />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;