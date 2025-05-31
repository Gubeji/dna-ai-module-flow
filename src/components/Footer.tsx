
import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-slate-900 via-gray-900 to-black border-t border-slate-800/50">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-gradient-to-r from-fuchsia-500 to-fuchsia-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">DNA</span>
              </div>
              <span className="text-xl font-bold text-slate-100">DNA AI</span>
            </div>
            <p className="text-slate-400 mb-6">
              Potencia tu marketing con módulos de IA descargables y listos para usar.
            </p>
            <div className="flex gap-4">
              <a href="#" className="text-slate-400 hover:text-fuchsia-400 transition-colors duration-200">
                Twitter
              </a>
              <a href="#" className="text-slate-400 hover:text-fuchsia-400 transition-colors duration-200">
                LinkedIn
              </a>
              <a href="#" className="text-slate-400 hover:text-fuchsia-400 transition-colors duration-200">
                GitHub
              </a>
            </div>
          </div>

          {/* Product */}
          <div>
            <h3 className="text-slate-100 font-semibold mb-4">Producto</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-slate-400 hover:text-fuchsia-400 transition-colors duration-200">Módulos</a></li>
              <li><a href="#" className="text-slate-400 hover:text-fuchsia-400 transition-colors duration-200">Características</a></li>
              <li><a href="#" className="text-slate-400 hover:text-fuchsia-400 transition-colors duration-200">Precios</a></li>
              <li><a href="#" className="text-slate-400 hover:text-fuchsia-400 transition-colors duration-200">API</a></li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-slate-100 font-semibold mb-4">Recursos</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-slate-400 hover:text-fuchsia-400 transition-colors duration-200">Documentación</a></li>
              <li><a href="#" className="text-slate-400 hover:text-fuchsia-400 transition-colors duration-200">Tutoriales</a></li>
              <li><a href="#" className="text-slate-400 hover:text-fuchsia-400 transition-colors duration-200">Blog</a></li>
              <li><a href="#" className="text-slate-400 hover:text-fuchsia-400 transition-colors duration-200">Soporte</a></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-slate-100 font-semibold mb-4">Empresa</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-slate-400 hover:text-fuchsia-400 transition-colors duration-200">Acerca de</a></li>
              <li><a href="#" className="text-slate-400 hover:text-fuchsia-400 transition-colors duration-200">Careers</a></li>
              <li><a href="#" className="text-slate-400 hover:text-fuchsia-400 transition-colors duration-200">Contacto</a></li>
              <li><a href="#" className="text-slate-400 hover:text-fuchsia-400 transition-colors duration-200">Privacidad</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-8 border-t border-slate-800/50 flex flex-col md:flex-row justify-between items-center">
          <p className="text-slate-500 text-sm">
            © 2024 DNA AI. Todos los derechos reservados.
          </p>
          <p className="text-slate-500 text-sm mt-4 md:mt-0">
            Construido con 🤍 para el futuro del marketing
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
