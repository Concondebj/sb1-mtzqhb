import { useState, useEffect } from 'react';

interface Image {
  id: string;
  url: string;
  title: string;
}

interface Video {
  id: string;
  url: string;
  thumbnail: string;
  title: string;
}

// Simulated data - replace with your actual data source
const sampleImages: Image[] = [
  {
    id: '1',
    url: 'https://images.unsplash.com/photo-1682687220566-5599dbbebf11?auto=format&fit=crop&w=1200&q=80',
    title: 'Nature paisible',
  },
  {
    id: '2',
    url: 'https://images.unsplash.com/photo-1682687221038-404670f01d03?auto=format&fit=crop&w=1200&q=80',
    title: 'Architecture moderne',
  },
  // Add more images as needed
];

const sampleVideos: Video[] = [
  {
    id: '1',
    url: 'https://example.com/video1.mp4',
    thumbnail: 'https://images.unsplash.com/photo-1682687221038-404670f01d03?auto=format&fit=crop&w=600&q=80',
    title: 'Tutoriel design',
  },
  {
    id: '2',
    url: 'https://example.com/video2.mp4',
    thumbnail: 'https://images.unsplash.com/photo-1682687220566-5599dbbebf11?auto=format&fit=crop&w=600&q=80',
    title: 'Voyage découverte',
  },
  // Add more videos as needed
];

export function useImages() {
  const [images, setImages] = useState<Image[]>(sampleImages);

  // Add your data fetching logic here
  useEffect(() => {
    // Fetch images from your API
  }, []);

  return images;
}

export function useImage(id: string) {
  return sampleImages.find((image) => image.id === id);
}

export function useVideos() {
  const [videos, setVideos] = useState<Video[]>(sampleVideos);

  // Add your data fetching logic here
  useEffect(() => {
    // Fetch videos from your API
  }, []);

  return videos;
}

export function useVideo(id: string) {
  return sampleVideos.find((video) => video.id === id);
}