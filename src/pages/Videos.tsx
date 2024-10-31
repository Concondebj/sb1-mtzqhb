import React from 'react';
import MediaCard from '../components/MediaCard';
import { useVideos } from '../hooks/useMedia';

function Videos() {
  const videos = useVideos();

  return (
    <div className="space-y-8">
      <h1 className="text-4xl font-bold text-gray-900">Galerie vidéo</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {videos.map((video) => (
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