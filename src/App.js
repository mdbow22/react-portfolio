import { useEffect } from 'react';
import Header from './components/Header';
import Landing from './components/Landing';

function App() {

  useEffect(() => {
    document.body.classList.add('bg-gray-900', 'text-cyan-50')
  }, [])

  return (
    <div className="max-w-screen-lg mx-auto min-h-screen">
      <Header />
      <main>
        <Landing />
      </main>
    </div>
  );
}

export default App;
