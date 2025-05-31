
import React, { useState } from 'react';
import ModuleCard from './ModuleCard';
import ModuleFilter from './ModuleFilter';

// Sample modules data
const modules = [
  {
    id: '1',
    title: 'Social Media Generator',
    description: 'Genera contenido automático para todas tus redes sociales con IA avanzada.',
    category: 'Redes Sociales',
    icon: '📱',
    features: [
      'Generación automática de posts',
      'Optimización por plataforma',
      'Análisis de engagement',
      'Programación inteligente'
    ],
    downloadCount: 15420,
    longDescription: 'Revoluciona tu estrategia de redes sociales con nuestro generador de contenido basado en IA. Crea posts únicos, optimizados para cada plataforma y diseñados para maximizar el engagement.',
    techSpecs: ['Node.js 18+', 'API REST', 'Webhook support', 'JSON output'],
    rating: 4.9
  },
  {
    id: '2',
    title: 'Landing Page Builder',
    description: 'Construye landing pages de alta conversión en minutos con plantillas optimizadas.',
    category: 'Landing Pages',
    icon: '🎯',
    features: [
      'Plantillas de alta conversión',
      'A/B testing automático',
      'Integración con analytics',
      'Optimización móvil'
    ],
    downloadCount: 23140,
    longDescription: 'Crea landing pages que convierten con nuestro builder inteligente. Incluye plantillas probadas, testing automático y optimización continua.',
    techSpecs: ['React 18+', 'TailwindCSS', 'Responsive design', 'SEO optimized'],
    rating: 4.8
  },
  {
    id: '3',
    title: 'SEO Optimizer Pro',
    description: 'Optimiza tu SEO automáticamente con análisis en tiempo real y sugerencias IA.',
    category: 'SEO',
    icon: '🔍',
    features: [
      'Análisis de keywords en tiempo real',
      'Optimización de meta tags',
      'Auditoría técnica SEO',
      'Recomendaciones IA'
    ],
    downloadCount: 18750,
    longDescription: 'Domina los rankings de búsqueda con nuestro optimizador SEO basado en IA. Análisis completo, recomendaciones automáticas y mejoras continuas.',
    techSpecs: ['Python 3.9+', 'REST API', 'WebSocket support', 'Database integration'],
    rating: 4.7
  },
  {
    id: '4',
    title: 'Image AI Generator',
    description: 'Crea imágenes únicas y profesionales para tu marketing con IA generativa.',
    category: 'Imágenes',
    icon: '🎨',
    features: [
      'Generación de imágenes IA',
      'Estilos personalizables',
      'Resolución 4K',
      'Batch processing'
    ],
    downloadCount: 31250,
    longDescription: 'Genera imágenes profesionales para cualquier campaña de marketing. Desde banners hasta posts sociales, todo con la potencia de la IA generativa.',
    techSpecs: ['GPU required', 'CUDA support', 'Python API', 'Cloud deployment'],
    rating: 4.9
  },
  {
    id: '5',
    title: 'Video Creator Suite',
    description: 'Produce videos de marketing automáticamente con templates y voiceover IA.',
    category: 'Videos',
    icon: '🎬',
    features: [
      'Templates de video profesionales',
      'Voiceover IA multilingual',
      'Edición automática',
      'Exportación HD/4K'
    ],
    downloadCount: 12890,
    longDescription: 'Crea videos de marketing impactantes sin conocimientos técnicos. Incluye templates profesionales, voiceover en múltiples idiomas y edición automática.',
    techSpecs: ['FFmpeg integration', 'Cloud rendering', 'API REST', 'Webhook callbacks'],
    rating: 4.6
  },
  {
    id: '6',
    title: 'Email Campaign AI',
    description: 'Automatiza tus campañas de email con personalización IA y análisis predictivo.',
    category: 'Email Marketing',
    icon: '📧',
    features: [
      'Personalización IA automática',
      'Análisis predictivo',
      'Segmentación inteligente',
      'A/B testing avanzado'
    ],
    downloadCount: 20350,
    longDescription: 'Revoluciona tus campañas de email con personalización automática basada en IA. Cada mensaje se adapta al receptor para maximizar conversiones.',
    techSpecs: ['SMTP integration', 'CRM connectors', 'Analytics API', 'Real-time tracking'],
    rating: 4.8
  }
];

const categories = ['Todos', 'Redes Sociales', 'Landing Pages', 'SEO', 'Imágenes', 'Videos', 'Email Marketing'];

interface ModuleGalleryProps {
  onModuleSelect: (module: any) => void;
}

const ModuleGallery = ({ onModuleSelect }: ModuleGalleryProps) => {
  const [activeCategory, setActiveCategory] = useState('Todos');

  const filteredModules = activeCategory === 'Todos' 
    ? modules 
    : modules.filter(module => module.category === activeCategory);

  return (
    <section className="py-20 bg-gradient-to-br from-slate-900 via-gray-900 to-black">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-slate-200 via-slate-100 to-fuchsia-300 bg-clip-text text-transparent">
            Módulos Disponibles
          </h2>
          <p className="text-xl text-slate-400 max-w-3xl mx-auto">
            Cada módulo es una herramienta completa que puedes descargar e integrar inmediatamente en tu workflow de marketing
          </p>
        </div>

        {/* Filter */}
        <ModuleFilter 
          categories={categories}
          activeCategory={activeCategory}
          onCategoryChange={setActiveCategory}
        />

        {/* Modules grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 animate-fade-in">
          {filteredModules.map((module, index) => (
            <div
              key={module.id}
              className="animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <ModuleCard 
                module={module} 
                onClick={() => onModuleSelect(module)}
              />
            </div>
          ))}
        </div>

        {/* Stats section */}
        <div className="mt-20 grid md:grid-cols-3 gap-8 text-center">
          <div className="animate-fade-in">
            <div className="text-4xl font-bold text-fuchsia-400 mb-2">50+</div>
            <div className="text-slate-400">Módulos disponibles</div>
          </div>
          <div className="animate-fade-in delay-300">
            <div className="text-4xl font-bold text-fuchsia-400 mb-2">100K+</div>
            <div className="text-slate-400">Descargas totales</div>
          </div>
          <div className="animate-fade-in delay-500">
            <div className="text-4xl font-bold text-fuchsia-400 mb-2">4.8★</div>
            <div className="text-slate-400">Rating promedio</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ModuleGallery;
