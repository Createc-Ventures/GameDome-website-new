
import React from 'react';
import { LucideIcon } from 'lucide-react';

interface ServiceCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ 
  title, 
  description, 
  icon: Icon 
}) => {
  return (
    <div className="glass-panel p-6 hover-scale group">
      <div className="w-16 h-16 rounded-full bg-gaming-light flex items-center justify-center mb-6 mx-auto group-hover:bg-neon/20 transition-colors duration-300">
        <Icon size={32} className="text-neon" />
      </div>
      <h3 className="text-xl font-bold mb-3 text-center group-hover:text-neon transition-colors duration-300">
        {title}
      </h3>
      <p className="text-base mb-3 text-center ">
        {description}
      </p>
    </div>
  );
};

export default ServiceCard;
