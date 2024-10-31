import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export interface MediaItem {
  id: string;
  type: 'image' | 'video';
  title: string;
  url: string;
  thumbnail: string;
  timestamp: string;
}

interface MediaStore {
  items: MediaItem[];
  addMedia: (media: Omit<MediaItem, 'id' | 'timestamp'>) => void;
  removeMedia: (id: string) => void;
}

export const useMediaStore = create<MediaStore>()(
  persist(
    (set) => ({
      items: [
        {
          id: '1',
          type: 'image',
          title: 'Mountain Landscape',
          url: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4',
          thumbnail: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400',
          timestamp: new Date().toISOString(),
        },
        {
          id: '2',
          type: 'video',
          title: 'Ocean Waves',
          url: 'https://example.com/video1.mp4',
          thumbnail: 'https://images.unsplash.com/photo-1505118380757-91f5f5632de0',
          timestamp: new Date().toISOString(),
        },
      ],
      addMedia: (media) =>
        set((state) => ({
          items: [
            {
              ...media,
              id: Math.random().toString(36).substring(7),
              timestamp: new Date().toISOString(),
            },
            ...state.items,
          ],
        })),
      removeMedia: (id) =>
        set((state) => ({
          items: state.items.filter((item) => item.id !== id),
        })),
    }),
    {
      name: 'media-storage',
    }
  )
);