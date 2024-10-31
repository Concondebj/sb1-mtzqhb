import React from 'react';
import { NavLink } from 'react-router-dom';
import { Image as ImageIcon, Video, Info } from 'lucide-react';

export default function Navbar() {
  const linkClass = ({ isActive }: { isActive: boolean }) =>
    `flex items-center gap-2 px-4 py-2 rounded-lg transition-colors ${
      isActive
        ? 'bg-indigo-600 text-white'
        : 'text-gray-700 hover:bg-indigo-50'
    }`;

  return (
    <nav className="bg-white shadow-lg">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <NavLink to="/" className="text-2xl font-bold text-indigo-600">
            MediaGallery
          </NavLink>
          <div className="flex items-center gap-4">
            <NavLink to="/images" className={linkClass}>
              <ImageIcon size={20} />
              <span>Images</span>
            </NavLink>
            <NavLink to="/videos" className={linkClass}>
              <Video size={20} />
              <span>Vidéos</span>
            </NavLink>
            <NavLink to="/about" className={linkClass}>
              <Info size={20} />
              <span>À propos</span>
            </NavLink>
          </div>
        </div>
      </div>
    </nav>
  );
}