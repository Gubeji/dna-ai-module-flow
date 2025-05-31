
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-slate-900/80 backdrop-blur-md border-b border-slate-800/50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-gradient-to-r from-fuchsia-500 to-fuchsia-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">DNA</span>
            </div>
            <span className="text-xl font-bold text-slate-100">DNA AI</span>
          </div>

          {/* Desktop menu */}
          <div className="hidden md:flex items-center gap-8">
            <a href="#modules" className="text-slate-300 hover:text-fuchsia-400 transition-colors duration-200">
              Módulos
            </a>
            <a href="#features" className="text-slate-300 hover:text-fuchsia-400 transition-colors duration-200">
              Características
            </a>
            <a href="#pricing" className="text-slate-300 hover:text-fuchsia-400 transition-colors duration-200">
              Precios
            </a>
            <a href="#docs" className="text-slate-300 hover:text-fuchsia-400 transition-colors duration-200">
              Documentación
            </a>
            <Button 
              className="bg-gradient-to-r from-fuchsia-500 to-fuchsia-600 hover:from-fuchsia-600 hover:to-fuchsia-700 text-white rounded-lg"
            >
              Comenzar gratis
            </Button>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden text-slate-300 hover:text-fuchsia-400"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-slate-800/50">
            <div className="flex flex-col gap-4">
              <a href="#modules" className="text-slate-300 hover:text-fuchsia-400 transition-colors duration-200">
                Módulos
              </a>
              <a href="#features" className="text-slate-300 hover:text-fuchsia-400 transition-colors duration-200">
                Características
              </a>
              <a href="#pricing" className="text-slate-300 hover:text-fuchsia-400 transition-colors duration-200">
                Precios
              </a>
              <a href="#docs" className="text-slate-300 hover:text-fuchsia-400 transition-colors duration-200">
                Documentación
              </a>
              <Button 
                className="bg-gradient-to-r from-fuchsia-500 to-fuchsia-600 hover:from-fuchsia-600 hover:to-fuchsia-700 text-white rounded-lg w-full"
              >
                Comenzar gratis
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
