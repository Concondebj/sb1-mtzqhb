import React from 'react';
import MediaCard from '../components/MediaCard';

const demoVideos = [
  {
    id: '1',
    title: 'Mountain Stream',
    thumbnail: 'https://images.unsplash.com/photo-1518791841217-8f162f1e1131',
  },
  {
    id: '2',
    title: 'Ocean Waves',
    thumbnail: 'https://images.unsplash.com/photo-1505118380757-91f5f5632de0',
  },
  {
    id: '3',
    title: 'Forest Wildlife',
    thumbnail: 'https://images.unsplash.com/photo-1516298773066-c48f8e9bd92b',
  },
];

export default function VideoGallery() {
  return (
    <div>
      <h1 className="text-3xl font-bold text-gray-900 mb-8">Galerie vidéos</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {demoVideos.map((video) => (
          <MediaCard
            key={video.id}
            id={video.id}
            type="video"
            thumbnail={video.thumbnail}
            title={video.title}
          />
        ))}
      </div>
    </div>
  );
}