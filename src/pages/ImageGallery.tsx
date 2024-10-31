import React from 'react';
import MediaCard from '../components/MediaCard';

const demoImages = [
  {
    id: '1',
    title: 'Mountain Landscape',
    thumbnail: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4',
  },
  {
    id: '2',
    title: 'Ocean Sunset',
    thumbnail: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e',
  },
  {
    id: '3',
    title: 'Forest Path',
    thumbnail: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e',
  },
];

export default function ImageGallery() {
  return (
    <div>
      <h1 className="text-3xl font-bold text-gray-900 mb-8">Galerie d'images</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {demoImages.map((image) => (
          <MediaCard
            key={image.id}
            id={image.id}
            type="image"
            thumbnail={image.thumbnail}
            title={image.title}
          />
        ))}
      </div>
    </div>
  );
}