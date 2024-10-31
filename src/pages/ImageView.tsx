import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useImage, useImages } from '../hooks/useMedia';
import MediaCard from '../components/MediaCard';

function ImageView() {
  const { id } = useParams();
  const navigate = useNavigate();
  const image = useImage(id!);
  const images = useImages();
  const currentIndex = images.findIndex((img) => img.id === id);

  const handlePrevious = () => {
    if (currentIndex > 0) {
      navigate(`/images/${images[currentIndex - 1].id}`);
    }
  };

  const handleNext = () => {
    if (currentIndex < images.length - 1) {
      navigate(`/images/${images[currentIndex + 1].id}`);
    }
  };

  if (!image) return null;

  return (
    <div className="flex flex-col lg:flex-row gap-8">
      <div className="lg:w-3/4 space-y-4">
        <div className="relative bg-black rounded-lg overflow-hidden">
          <img
            src={image.url}
            alt={image.title}
            className="w-full h-auto"
          />
          <div className="absolute inset-y-0 left-0 flex items-center">
            <button
              onClick={handlePrevious}
              disabled={currentIndex === 0}
              className="p-2 bg-white/80 rounded-r-lg disabled:opacity-50"
            >
              <ChevronLeft size={24} />
            </button>
          </div>
          <div className="absolute inset-y-0 right-0 flex items-center">
            <button
              onClick={handleNext}
              disabled={currentIndex === images.length - 1}
              className="p-2 bg-white/80 rounded-l-lg disabled:opacity-50"
            >
              <ChevronRight size={24} />
            </button>
          </div>
        </div>
        <h1 className="text-2xl font-bold text-gray-900">{image.title}</h1>
      </div>
      <div className="lg:w-1/4 space-y-4">
        <h2 className="text-xl font-semibold text-gray-900">Images suivantes</h2>
        <div className="space-y-4">
          {images
            .slice(currentIndex + 1, currentIndex + 4)
            .map((nextImage) => (
              <MediaCard
                key={nextImage.id}
                id={nextImage.id}
                type="image"
                thumbnail={nextImage.url}
                title={nextImage.title}
              />
            ))}
        </div>
      </div>
    </div>
  );
}