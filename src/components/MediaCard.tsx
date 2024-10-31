import React from 'react';
import { Link } from 'react-router-dom';
import { Play, Image as ImageIcon } from 'lucide-react';

interface MediaCardProps {
  id: string;
  type: 'image' | 'video';
  thumbnail: string;
  title: string;
}

export default function MediaCard({ id, type, thumbnail, title }: MediaCardProps) {
  return (
    <Link
      to={`/${type}s/${id}`}
      className="group relative overflow-hidden rounded-lg shadow-lg transition-transform hover:scale-105"
    >
      <div className="aspect-video relative">
        <img
          src={thumbnail}
          alt={title}
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-40 transition-opacity" />
        <div className="absolute top-2 right-2 bg-white/90 p-2 rounded-full shadow">
          {type === 'video' ? (
            <Play className="text-indigo-600" size={20} />
          ) : (
            <ImageIcon className="text-indigo-600" size={20} />
          )}
        </div>
      </div>
      <div className="p-4 bg-white">
        <h3 className="text-lg font-semibold text-gray-800 truncate">
          {title}
        </h3>
      </div>
    </Link>
  );
}