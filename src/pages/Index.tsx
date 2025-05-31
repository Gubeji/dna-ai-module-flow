
import React, { useState } from 'react';
import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import ModuleGallery from '@/components/ModuleGallery';
import ModuleDetail from '@/components/ModuleDetail';
import Footer from '@/components/Footer';
import { toast } from '@/hooks/use-toast';

const Index = () => {
  const [selectedModule, setSelectedModule] = useState(null);

  const handleModuleSelect = (module: any) => {
    setSelectedModule(module);
  };

  const handleBackToGallery = () => {
    setSelectedModule(null);
  };

  const handleDownload = () => {
    toast({
      title: "¡Descarga iniciada!",
      description: `El módulo ${selectedModule?.title} se está descargando...`,
      duration: 3000,
    });
    console.log(`Downloading module: ${selectedModule?.title}`);
  };

  if (selectedModule) {
    return (
      <>
        <Navigation />
        <ModuleDetail 
          module={selectedModule}
          onBack={handleBackToGallery}
          onDownload={handleDownload}
        />
        <Footer />
      </>
    );
  }

  return (
    <>
      <Navigation />
      <Hero />
      <div id="modules">
        <ModuleGallery onModuleSelect={handleModuleSelect} />
      </div>
      <Footer />
    </>
  );
};

export default Index;
