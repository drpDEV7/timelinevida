import React, { useState, useEffect } from 'react';

const ProgressBar: React.FC = () => {
  const [scrollProgress, setScrollProgress] = useState(0);
  
  useEffect(() => {
    const handleScroll = () => {
      const windowHeight = window.innerHeight;
      const documentHeight = document.body.scrollHeight - windowHeight;
      const scrollTop = window.scrollY;
      const progress = (scrollTop / documentHeight) * 100;
      setScrollProgress(progress);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  return (
    <div className="fixed right-2 top-1/2 -translate-y-1/2 h-[60vh] w-2 bg-timeline-gray rounded-full z-50 overflow-hidden">
      <div 
        className="w-full bg-timeline-orange rounded-full transition-all duration-200 ease-out"
        style={{ height: `${scrollProgress}%` }}
      />
      <div className="absolute -left-1 top-0 w-4 h-4 bg-timeline-orange rounded-full transform -translate-y-1/2"
        style={{ top: `${scrollProgress}%` }}
      />
    </div>
  );
};

export default ProgressBar;