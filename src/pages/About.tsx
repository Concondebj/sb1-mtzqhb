import React from 'react';
import { Info } from 'lucide-react';

export default function About() {
  return (
    <div className="max-w-3xl mx-auto">
      <div className="bg-white rounded-lg shadow-lg p-8">
        <div className="flex items-center gap-4 mb-6">
          <Info size={32} className="text-indigo-600" />
          <h1 className="text-3xl font-bold text-gray-900">À propos</h1>
        </div>
        <div className="prose prose-indigo max-w-none">
          <p className="text-lg text-gray-700 leading-relaxed">
            Notre galerie multimédia est une plateforme interactive permettant de découvrir et 
            partager des images et vidéos de haute qualité. Conçue pour offrir une expérience 
            utilisateur optimale, elle propose une navigation fluide entre les différents médias 
            et une interface intuitive.
          </p>
          <h2 className="text-xl font-semibold mt-6 mb-4">Fonctionnalités principales</h2>
          <ul className="space-y-2 text-gray-700">
            <li>Galerie d'images avec navigation intuitive</li>
            <li>Lecteur vidéo avec contrôles avancés</li>
            <li>Interface responsive et moderne</li>
            <li>Gestion automatique des médias</li>
            <li>Navigation fluide entre les contenus</li>
          </ul>
        </div>
      </div>
    </div>
  );
}