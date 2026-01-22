
import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import PracticeAreas from './components/PracticeAreas';
import About from './components/About';
import Testimonials from './components/Testimonials';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';

const App: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col overflow-x-hidden">
      <Header />
      <main className="flex-grow">
        <section id="inicio">
          <Hero />
        </section>
        <section id="expertise">
          <PracticeAreas />
        </section>
        <section id="sobre">
          <About />
        </section>
        <section id="depoimentos">
          <Testimonials />
        </section>
        <section id="contato">
          <ContactForm />
        </section>
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default App;
