import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import ImageGallery from './pages/ImageGallery';
import VideoGallery from './pages/VideoGallery';
import About from './pages/About';
import ImageViewer from './pages/ImageViewer';
import VideoPlayer from './pages/VideoPlayer';
import MediaUploader from './components/MediaUploader';

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-gray-50">
        <Navbar />
        <main className="container mx-auto px-4 py-8">
          <Routes>
            <Route path="/" element={<ImageGallery />} />
            <Route path="/images" element={<ImageGallery />} />
            <Route path="/images/:id" element={<ImageViewer />} />
            <Route path="/videos" element={<VideoGallery />} />
            <Route path="/videos/:id" element={<VideoPlayer />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </main>
        <MediaUploader />
      </div>
    </BrowserRouter>
  );
}

export default App;