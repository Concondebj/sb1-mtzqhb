import React from 'react';
import { Link } from 'react-router-dom';
import { Image as ImageIcon, Video, Info } from 'lucide-react';

function Home() {
  return (
    <div className="max-w-6xl mx-auto space-y-12">
      <div className="text-center space-y-4">
        <h1 className="text-5xl font-bold text-gray-900">
          Bienvenue sur MediaGallery
        </h1>
        <p className="text-xl text-gray-600">
          Explorez notre collection d'images et de vidéos
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <Link
          to="/images"
          className="group bg-white rounded-lg shadow-lg overflow-hidden transition-transform hover:scale-105"
        >
          <div className="p-6 space-y-4">
            <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center">
              <ImageIcon className="text-indigo-600" size={24} />
            </div>
            <h2 className="text-2xl font-bold text-gray-900">Images</h2>
            <p className="text-gray-600">
              Découvrez notre collection d'images captivantes
            </p>
          </div>
        </Link>

        <Link
          to="/videos"
          className="group bg-white rounded-lg shadow-lg overflow-hidden transition-transform hover:scale-105"
        >
          <div className="p-6 space-y-4">
            <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center">
              <Video className="text-indigo-600" size={24} />
            </div>
            <h2 className="text-2xl font-bold text-gray-900">Vidéos</h2>
            <p className="text-gray-600">
              Explorez nos vidéos soigneusement sélectionnées
            </p>
          </div>
        </Link>

        <Link
          to="/about"
          className="group bg-white rounded-lg shadow-lg overflow-hidden transition-transform hover:scale-105"
        >
          <div className="p-6 space-y-4">
            <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center">
              <Info className="text-indigo-600" size={24} />
            </div>
            <h2 className="text-2xl font-bold text-gray-900">À propos</h2>
            <p className="text-gray-600">
              En savoir plus sur notre plateforme
            </p>
          </div>
        </Link>
      </div>
    </div>
  );
}