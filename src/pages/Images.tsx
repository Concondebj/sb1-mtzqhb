import React from 'react';
import MediaCard from '../components/MediaCard';
import { useImages } from '../hooks/useMedia';

function Images() {
  const images = useImages();

  return (
    <div className="space-y-8">
      <h1 className="text-4xl font-bold text-gray-900">Galerie d'images</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {images.map((image) => (
          <MediaCard
            key={image.id}
            id={image.id}
            type="image"
            thumbnail={image.url}
            title={image.title}
          />
        ))}
      </div>
    </div>
  );
}