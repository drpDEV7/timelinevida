import React from 'react';

interface TimelineItemProps {
  year: string;
  title: string;
  description: string;
  image?: string;
  alignment?: 'left' | 'right';
  animationEffect?: string;
  animationDelay?: number;
  technologies?: string[];
}

const TimelineItem: React.FC<TimelineItemProps> = ({
  year,
  title,
  description,
  image,
  alignment = 'right',
  animationEffect = 'fade-up',
  animationDelay = 0,
  technologies = [],
}) => {
  return (
    <div className="py-12 md:py-24 relative">
      <div className="timeline-dot"></div>
      
      <div 
        className="max-w-4xl mx-auto"
        data-aos={animationEffect}
        data-aos-delay={animationDelay}
        data-aos-duration="800"
      >
        <div className="timeline-card group">
          <div className="flex flex-col md:flex-row gap-6">
            {image && (
              <div className="md:w-2/5">
                <div className="relative h-48 md:h-64 overflow-hidden rounded-md border border-timeline-gray-light">
                  <img 
                    src={image} 
                    alt={title} 
                    className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-150" 
                  />
                </div>
              </div>
            )}
            
            <div className={`${image ? 'md:w-3/5' : 'w-full'}`}>
              <div className="bg-timeline-orange/20 px-3 py-1 rounded-full inline-block mb-3">
                <span className="text-timeline-orange font-tech">{year}</span>
              </div>
              
              <h3 className="section-title">{title}</h3>
              <p className="section-text">{description}</p>
              
              {technologies.length > 0 && (
                <div className="mt-4">
                  {technologies.map((tech, index) => (
                    <span key={index} className="tech-badge">
                      {tech}
                    </span>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TimelineItem;