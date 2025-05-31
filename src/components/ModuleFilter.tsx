
import React from 'react';
import { Button } from '@/components/ui/button';

interface ModuleFilterProps {
  categories: string[];
  activeCategory: string;
  onCategoryChange: (category: string) => void;
}

const ModuleFilter = ({ categories, activeCategory, onCategoryChange }: ModuleFilterProps) => {
  return (
    <div className="flex flex-wrap gap-3 justify-center mb-12">
      {categories.map((category) => (
        <Button
          key={category}
          variant={activeCategory === category ? "default" : "outline"}
          onClick={() => onCategoryChange(category)}
          className={`px-6 py-2 rounded-full transition-all duration-300 ${
            activeCategory === category
              ? "bg-gradient-to-r from-fuchsia-500 to-fuchsia-600 text-white shadow-lg hover:shadow-fuchsia-500/25"
              : "border-slate-600 text-slate-300 hover:bg-slate-800 hover:border-fuchsia-500/50"
          }`}
        >
          {category}
        </Button>
      ))}
    </div>
  );
};

export default ModuleFilter;
