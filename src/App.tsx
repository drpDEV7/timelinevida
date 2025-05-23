import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Navbar from './components/Navbar';
import IntroSection from './components/IntroSection';
import Timeline from './components/Timeline';
import ProgressBar from './components/ProgressBar';

function App() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: 'ease-out-cubic',
      once: false,
    });
  }, []);

  return (
    <div className="App bg-timeline-dark min-h-screen relative">
      {/* Custom gradient background effect */}
      <div className="fixed inset-0 bg-timeline-darker z-0">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_top_right,_rgba(255,107,0,0.15),_transparent_70%)]"></div>
        <div className="absolute bottom-0 right-0 w-full h-full bg-[radial-gradient(ellipse_at_bottom_left,_rgba(255,107,0,0.1),_transparent_70%)]"></div>
      </div>
      
      <div className="relative z-10">
        <Navbar />
        <ProgressBar />
        <IntroSection />
        <Timeline />
        
        <footer className="bg-timeline-darker py-8 text-center text-gray-400">
          <div className="container mx-auto px-4">
            <p className="font-tech">
              <span className="text-timeline-orange">EDUARDO PRATES</span> © {new Date().getFullYear()}
            </p>
            
          </div>
        </footer>
      </div>
    </div>
  );
}

export default App;