import React, { useRef } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import {
  ChevronLeft,
  ChevronRight,
  Rewind,
  FastForward,
} from 'lucide-react';
import { useVideo, useVideos } from '../hooks/useMedia';
import MediaCard from '../components/MediaCard';

function VideoView() {
  const { id } = useParams();
  const navigate = useNavigate();
  const videoRef = useRef<HTMLVideoElement>(null);
  const video = useVideo(id!);
  const videos = useVideos();
  const currentIndex = videos.findIndex((v) => v.id === id);

  const handlePrevious = () => {
    if (currentIndex > 0) {
      navigate(`/videos/${videos[currentIndex - 1].id}`);
    }
  };

  const handleNext = () => {
    if (currentIndex < videos.length - 1) {
      navigate(`/videos/${videos[currentIndex + 1].id}`);
    }
  };

  const handleRewind = () => {
    if (videoRef.current) {
      videoRef.current.currentTime -= 5;
    }
  };

  const handleFastForward = () => {
    if (videoRef.current) {
      videoRef.current.currentTime += 5;
    }
  };

  if (!video) return null;

  return (
    <div className="flex flex-col lg:flex-row gap-8">
      <div className="lg:w-3/4 space-y-4">
        <div className="relative bg-black rounded-lg overflow-hidden">
          <video
            ref={videoRef}
            src={video.url}
            controls
            className="w-full h-auto"
          />
          <div className="absolute bottom-16 left-1/2 transform -translate-x-1/2 flex gap-4">
            <button
              onClick={handleRewind}
              className="p-2 bg-white/80 rounded-lg"
            >
              <Rewind size={24} />
            </button>
            <button
              onClick={handleFastForward}
              className="p-2 bg-white/80 rounded-lg"
            >
              <FastForward size={24} />
            </button>
          </div>
        </div>
        <div className="flex justify-between">
          <button
            onClick={handlePrevious}
            disabled={currentIndex === 0}
            className="flex items-center gap-2 px-4 py-2 bg-indigo-600 text-white rounded-lg disabled:opacity-50"
          >
            <ChevronLeft size={20} />
            <span>Précédent</span>
          </button>
          <button
            onClick={handleNext}
            disabled={currentIndex === videos.length - 1}
            className="flex items-center gap-2 px-4 py-2 bg-indigo-600 text-white rounded-lg disabled:opacity-50"
          >
            <span>Suivant</span>
            <ChevronRight size={20} />
          </button>
        </div>
        <h1 className="text-2xl font-bold text-gray-900">{video.title}</h1>
      </div>
      <div className="lg:w-1/4 space-y-4">
        <h2 className="text-xl font-semibold text-gray-900">Vidéos suivantes</h2>
        <div className="space-y-4">
          {videos
            .slice(currentIndex + 1, currentIndex + 4)
            .map((nextVideo) => (
              <MediaCard
                key={nextVideo.id}
                id={nextVideo.id}
                type="video"
                thumbnail={nextVideo.thumbnail}
                title={nextVideo.title}
              />
            ))}
        </div>
      </div>
    </div>
  );
}