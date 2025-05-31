
import React from 'react';
import { Button } from '@/components/ui/button';
import { Download, ArrowLeft, Star } from 'lucide-react';

interface Module {
  id: string;
  title: string;
  description: string;
  category: string;
  icon: string;
  features: string[];
  downloadCount: number;
  longDescription?: string;
  techSpecs?: string[];
  rating?: number;
}

interface ModuleDetailProps {
  module: Module;
  onBack: () => void;
  onDownload: () => void;
}

const ModuleDetail = ({ module, onBack, onDownload }: ModuleDetailProps) => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-gray-900 to-black py-20">
      <div className="max-w-6xl mx-auto px-6">
        {/* Back button */}
        <Button
          variant="outline"
          onClick={onBack}
          className="mb-8 border-slate-600 text-slate-300 hover:bg-slate-800 hover:border-slate-500"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Volver a módulos
        </Button>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left column - Module info */}
          <div className="animate-fade-in">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-20 h-20 bg-gradient-to-br from-fuchsia-500 to-fuchsia-600 rounded-2xl flex items-center justify-center">
                <span className="text-3xl">{module.icon}</span>
              </div>
              <div>
                <h1 className="text-4xl font-bold text-slate-100 mb-2">{module.title}</h1>
                <div className="flex items-center gap-3">
                  <span className="px-3 py-1 bg-slate-700/50 text-slate-300 text-sm rounded-full">
                    {module.category}
                  </span>
                  {module.rating && (
                    <div className="flex items-center gap-1">
                      <Star className="w-4 h-4 text-yellow-400 fill-current" />
                      <span className="text-slate-400 text-sm">{module.rating}</span>
                    </div>
                  )}
                </div>
              </div>
            </div>

            <p className="text-xl text-slate-300 mb-6 leading-relaxed">
              {module.description}
            </p>

            {module.longDescription && (
              <p className="text-slate-400 mb-8 leading-relaxed">
                {module.longDescription}
              </p>
            )}

            {/* Download stats */}
            <div className="flex items-center gap-6 mb-8 p-4 bg-slate-800/30 rounded-xl">
              <div className="text-center">
                <div className="text-2xl font-bold text-fuchsia-400">{module.downloadCount.toLocaleString()}</div>
                <div className="text-sm text-slate-500">Descargas</div>
              </div>
              <div className="w-px h-12 bg-slate-700"></div>
              <div className="text-center">
                <div className="text-2xl font-bold text-slate-300">4.8</div>
                <div className="text-sm text-slate-500">Rating</div>
              </div>
              <div className="w-px h-12 bg-slate-700"></div>
              <div className="text-center">
                <div className="text-2xl font-bold text-slate-300">24h</div>
                <div className="text-sm text-slate-500">Soporte</div>
              </div>
            </div>

            {/* Download button */}
            <Button 
              onClick={onDownload}
              size="lg"
              className="w-full bg-gradient-to-r from-fuchsia-500 to-fuchsia-600 hover:from-fuchsia-600 hover:to-fuchsia-700 text-white py-4 text-lg font-semibold rounded-xl shadow-lg hover:shadow-fuchsia-500/25 transition-all duration-300"
            >
              <Download className="w-5 h-5 mr-2" />
              Descargar Módulo
            </Button>
          </div>

          {/* Right column - Features and specs */}
          <div className="animate-fade-in delay-300">
            {/* Features */}
            <div className="bg-gradient-to-br from-slate-800/30 to-slate-900/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-6 mb-6">
              <h3 className="text-xl font-bold text-slate-100 mb-4">Características principales</h3>
              <ul className="space-y-3">
                {module.features.map((feature, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-fuchsia-400 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-slate-300">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Tech specs */}
            {module.techSpecs && (
              <div className="bg-gradient-to-br from-slate-800/30 to-slate-900/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-6">
                <h3 className="text-xl font-bold text-slate-100 mb-4">Especificaciones técnicas</h3>
                <ul className="space-y-2">
                  {module.techSpecs.map((spec, index) => (
                    <li key={index} className="text-slate-400 text-sm">
                      {spec}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModuleDetail;
