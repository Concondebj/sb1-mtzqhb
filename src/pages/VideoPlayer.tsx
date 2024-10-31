import React from 'react';
import { useParams } from 'react-router-dom';
import { SkipBack, SkipForward, Rewind, FastForward } from 'lucide-react';
import CommentSection from '../components/CommentSection';

export default function VideoPlayer() {
  const { id } = useParams();
  const videoRef = React.useRef<HTMLVideoElement>(null);

  const demoVideos = [
    {
      id: '1',
      title: 'Mountain Stream',
      url: 'https://example.com/video1.mp4',
      thumbnail: 'https://images.unsplash.com/photo-1518791841217-8f162f1e1131',
    },
    {
      id: '2',
      title: 'Ocean Waves',
      url: 'https://example.com/video2.mp4',
      thumbnail: 'https://images.unsplash.com/photo-1505118380757-91f5f5632de0',
    },
    {
      id: '3',
      title: 'Forest Wildlife',
      url: 'https://example.com/video3.mp4',
      thumbnail: 'https://images.unsplash.com/photo-1516298773066-c48f8e9bd92b',
    },
  ];

  const currentVideo = demoVideos.find(video => video.id === id);
  const currentIndex = demoVideos.findIndex(video => video.id === id);

  const handleSkip = (seconds: number) => {
    if (videoRef.current) {
      videoRef.current.currentTime += seconds;
    }
  };

  if (!currentVideo) return <div>Vidéo non trouvée</div>;

  return (
    <div className="space-y-8">
      <div className="flex gap-6">
        <div className="flex-grow">
          <div className="bg-black rounded-lg overflow-hidden">
            <video
              ref={videoRef}
              src={currentVideo.url}
              poster={currentVideo.thumbnail}
              controls
              className="w-full"
            />
          </div>
          <div className="mt-4 flex justify-center gap-4">
            <button
              className="p-3 rounded-full bg-indigo-600 text-white hover:bg-indigo-700"
              onClick={() => window.history.pushState({}, '', `/videos/${demoVideos[currentIndex - 1]?.id}`)}
              disabled={currentIndex === 0}
            >
              <SkipBack size={24} />
            </button>
            <button
              className="p-3 rounded-full bg-indigo-600 text-white hover:bg-indigo-700"
              onClick={() => handleSkip(-5)}
            >
              <Rewind size={24} />
            </button>
            <button
              className="p-3 rounded-full bg-indigo-600 text-white hover:bg-indigo-700"
              onClick={() => handleSkip(5)}
            >
              <FastForward size={24} />
            </button>
            <button
              className="p-3 rounded-full bg-indigo-600 text-white hover:bg-indigo-700"
              onClick={() => window.history.pushState({}, '', `/videos/${demoVideos[currentIndex + 1]?.id}`)}
              disabled={currentIndex === demoVideos.length - 1}
            >
              <SkipForward size={24} />
            </button>
          </div>
        </div>
        <div className="w-80">
          <h2 className="text-xl font-bold mb-4">À suivre</h2>
          <div className="space-y-4">
            {demoVideos
              .filter(video => video.id !== id)
              .map(video => (
                <div
                  key={video.id}
                  className="cursor-pointer group"
                  onClick={() => window.history.pushState({}, '', `/videos/${video.id}`)}
                >
                  <div className="relative">
                    <img
                      src={video.thumbnail}
                      alt={video.title}
                      className="w-full h-40 object-cover rounded"
                    />
                    <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-20 transition-opacity" />
                  </div>
                  <h3 className="mt-2 font-medium group-hover:text-indigo-600">
                    {video.title}
                  </h3>
                </div>
              ))}
          </div>
        </div>
      </div>

      <CommentSection mediaId={id} mediaType="video" />
    </div>
  );
}