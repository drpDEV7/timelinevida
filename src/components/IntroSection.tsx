import React from 'react';
import { ChevronDown } from 'lucide-react';

const IntroSection: React.FC = () => {
  const scrollToTimeline = () => {
    const timelineElement = document.getElementById('timeline');
    if (timelineElement) {
      timelineElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="h-screen flex items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-timeline-darker/90"></div>
        <div className="absolute inset-0 bg-grid-pattern"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10 text-center" data-aos="fade-in">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-tech font-bold mb-6">
          <span className="text-timeline-orange">Eduardo</span> Prates
        </h1>
        <p className="text-xl md:text-2xl max-w-2xl mx-auto mb-8 text-gray-300">
          Uma jornada interativa através dos momentos que moldaram minha história na tecnologia
        </p>
        
        <div className="inline-block relative">
          <button 
            onClick={scrollToTimeline}
            className="bg-timeline-orange hover:bg-timeline-orange-light text-white 
                     font-bold py-3 px-8 rounded-full transition-all duration-300
                     shadow-lg hover:shadow-timeline-hover"
          >
            Explorar Minha Jornada
          </button>
          <div className="absolute -bottom-20 left-1/2 transform -translate-x-1/2 animate-bounce">
            <ChevronDown size={32} className="text-timeline-orange" />
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-timeline-dark to-transparent"></div>
    </section>
  );
};

export default IntroSection