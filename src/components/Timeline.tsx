import React from 'react';
import TimelineItem from './TimelineItem';
import { timelineData } from '../data/timelineData';

const Timeline: React.FC = () => {
  return (
    <section id="timeline" className="timeline-container container mx-auto px-4">
      <div className="progress-line h-full"></div>
      
      {timelineData.map((item, index) => (
        <TimelineItem
          key={index}
          year={item.year}
          title={item.title}
          description={item.description}
          image={item.image}
          alignment={index % 2 === 0 ? 'right' : 'left'}
          animationEffect={item.animationEffect}
          animationDelay={index * 100}
          technologies={item.technologies}
        />
      ))}
    </section>
  );
};

export default Timeline;