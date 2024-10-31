import React from 'react';
import { useParams } from 'react-router-dom';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import CommentSection from '../components/CommentSection';

export default function ImageViewer() {
  const { id } = useParams();

  const demoImages = [
    {
      id: '1',
      title: 'Mountain Landscape',
      url: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4',
    },
    {
      id: '2',
      title: 'Ocean Sunset',
      url: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e',
    },
    {
      id: '3',
      title: 'Forest Path',
      url: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e',
    },
  ];

  const currentImage = demoImages.find(img => img.id === id);
  const currentIndex = demoImages.findIndex(img => img.id === id);
  const nextImage = demoImages[currentIndex + 1];
  const prevImage = demoImages[currentIndex - 1];

  if (!currentImage) return <div>Image non trouvée</div>;

  return (
    <div className="space-y-8">
      <div className="flex gap-6">
        <div className="flex-grow">
          <div className="relative bg-black rounded-lg overflow-hidden">
            <img
              src={currentImage.url}
              alt={currentImage.title}
              className="w-full h-auto"
            />
            <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-black/50 to-transparent" />
            <div className="absolute inset-0 flex items-center justify-between p-4">
              {prevImage && (
                <button
                  className="p-2 rounded-full bg-white/80 hover:bg-white shadow-lg"
                  onClick={() => window.history.pushState({}, '', `/images/${prevImage.id}`)}
                >
                  <ChevronLeft size={24} />
                </button>
              )}
              {nextImage && (
                <button
                  className="p-2 rounded-full bg-white/80 hover:bg-white shadow-lg"
                  onClick={() => window.history.pushState({}, '', `/images/${nextImage.id}`)}
                >
                  <ChevronRight size={24} />
                </button>
              )}
            </div>
          </div>
        </div>
        <div className="w-80 space-y-4">
          <h2 className="text-xl font-bold">{currentImage.title}</h2>
          <div className="grid grid-cols-2 gap-2">
            {demoImages
              .filter(img => img.id !== id)
              .map(img => (
                <img
                  key={img.id}
                  src={img.url}
                  alt={img.title}
                  className="w-full h-24 object-cover rounded cursor-pointer hover:opacity-75"
                  onClick={() => window.history.pushState({}, '', `/images/${img.id}`)}
                />
              ))}
          </div>
        </div>
      </div>
      
      <CommentSection mediaId={id} mediaType="image" />
    </div>
  );
}