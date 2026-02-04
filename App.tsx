
import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Team from './pages/Team';
import Contact from './pages/Contact';

const App: React.FC = () => {
  const [route, setRoute] = useState(window.location.hash || '#/');

  useEffect(() => {
    const handleHashChange = () => {
      setRoute(window.location.hash || '#/');
      window.scrollTo(0, 0);
    };
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const renderContent = () => {
    switch (route) {
      case '#/':
        return <Home />;
      case '#/sobre':
        return <About />;
      case '#/equipe':
        return <Team />;
      case '#/contato':
        return <Contact />;
      case '#/areas':
        return <Home />; // In a full app this would be a separate page
      default:
        return <Home />;
    }
  };

  return (
    <div className="min-h-screen bg-background-dark text-white selection:bg-primary selection:text-background-dark overflow-x-hidden">
      <Header />
      <main className="flex-grow">
        {renderContent()}
      </main>
      <Footer />
    </div>
  );
};

export default App;
