import { useEffect, useState } from 'react';
// import Header from './components/Header';
import Navigation from './components/Navigation';
import Landing from './components/Landing';
import About from './components/About';
import Projects from './components/Projects';
import Connect from './components/Connect';
import Resume from './components/Resume';
import Footer from './components/Footer';

function App() {

  const [displayPage, setDisplay] = useState('landing');

  const updatePage = (page) => {
    setDisplay(page);
  }

  const pageToRender = () => {
    switch(displayPage) {
      case 'landing':
        return <Landing />;
      case 'about':
        return <About />;
      case 'projects':
        return <Projects />;
      case 'connect':
        return <Connect />;
      case 'resume':
        return <Resume />;
    }
  }

  useEffect(() => {
    document.body.classList.add('bg-gray-900', 'text-cyan-50')
  }, [])

  return (
    <div className="max-w-screen-lg mx-auto min-h-screen">
      <Navigation updatePage={updatePage} />
      <main>
        {pageToRender()}
      </main>
      <Footer />
    </div>
  );
}

export default App;
