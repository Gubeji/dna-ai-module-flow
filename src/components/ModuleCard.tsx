
import React from 'react';
import { Button } from '@/components/ui/button';
import { Download } from 'lucide-react';

interface Module {
  id: string;
  title: string;
  description: string;
  category: string;
  icon: string;
  features: string[];
  downloadCount: number;
}

interface ModuleCardProps {
  module: Module;
  onClick: () => void;
}

const ModuleCard = ({ module, onClick }: ModuleCardProps) => {
  return (
    <div 
      className="group relative bg-gradient-to-br from-slate-800/50 to-slate-900/80 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-6 hover:border-fuchsia-500/50 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-fuchsia-500/10 cursor-pointer"
      onClick={onClick}
    >
      {/* Glow effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-fuchsia-500/0 via-fuchsia-500/5 to-fuchsia-500/0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
      
      <div className="relative z-10">
        {/* Icon */}
        <div className="w-16 h-16 bg-gradient-to-br from-fuchsia-500 to-fuchsia-600 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
          <span className="text-2xl">{module.icon}</span>
        </div>

        {/* Category badge */}
        <div className="inline-block px-3 py-1 bg-slate-700/50 text-slate-300 text-sm rounded-full mb-3">
          {module.category}
        </div>

        {/* Title */}
        <h3 className="text-xl font-bold text-slate-100 mb-3 group-hover:text-fuchsia-300 transition-colors duration-300">
          {module.title}
        </h3>

        {/* Description */}
        <p className="text-slate-400 mb-4 leading-relaxed">
          {module.description}
        </p>

        {/* Features */}
        <ul className="space-y-1 mb-6">
          {module.features.slice(0, 3).map((feature, index) => (
            <li key={index} className="text-sm text-slate-500 flex items-center">
              <div className="w-1 h-1 bg-fuchsia-400 rounded-full mr-2"></div>
              {feature}
            </li>
          ))}
        </ul>

        {/* Footer */}
        <div className="flex items-center justify-between">
          <span className="text-sm text-slate-500">
            {module.downloadCount.toLocaleString()} descargas
          </span>
          <Button 
            size="sm" 
            className="bg-fuchsia-500 hover:bg-fuchsia-600 text-white opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0"
          >
            <Download className="w-4 h-4 mr-1" />
            Descargar
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ModuleCard;
