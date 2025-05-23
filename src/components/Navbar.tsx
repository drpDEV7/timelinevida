import React, { useState, useEffect } from 'react';
import { Clock, Terminal } from 'lucide-react';

const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 20;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [scrolled]);

  return (
    <nav 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-timeline-darker/90 backdrop-blur-md shadow-md py-2' 
          : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <div className="flex items-center">
          <Clock className="h-6 w-6 text-timeline-orange mr-2" />
          <h1 className="text-xl font-tech font-bold">
            <span className="text-timeline-orange">Eduardo</span> Prates
          </h1>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;