
import React, { useState } from 'react';
import { Play, X } from 'lucide-react';

interface VideoItem {
  id: string;
  youtubeId: string;
  title: string;
}

/** 
 * EDIT VIDEOS HERE 
 * Simply change the youtubeId and title. 
 * Thumbnails will update automatically.
 */
const videos: VideoItem[] = [
  {
    id: '1',
    youtubeId: 'R9_uR9F8Y_E', 
    title: 'Extreme Obby Run',
  },
  {
    id: '2',
    youtubeId: 'dQw4w9WgXcQ', 
    title: 'Bedwars Highlights',
  },
  {
    id: '3',
    youtubeId: 'R9_uR9F8Y_E', 
    title: 'Blox Fruit Tips',
  },
  {
    id: '4',
    youtubeId: 'dQw4w9WgXcQ', 
    title: 'Brookhaven RP Story',
  },
];

const VideoGallery: React.FC = () => {
  const [activeVideoId, setActiveVideoId] = useState<string | null>(null);

  // Function to get the YouTube thumbnail automatically
  const getThumbnail = (id: string) => `https://i.ytimg.com/vi/${id}/hqdefault.jpg`;

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
      {videos.map((video) => (
        <div 
          key={video.id} 
          className="relative aspect-[9/16] glass rounded-[32px] overflow-hidden group border-white/40 shadow-xl shadow-blue-500/5 hover:shadow-blue-500/10 transition-all duration-500"
        >
          {activeVideoId === video.id ? (
            <div className="w-full h-full relative bg-black">
              <iframe
                className="w-full h-full"
                src={`https://www.youtube.com/embed/${video.youtubeId}?autoplay=1&modestbranding=1&rel=0`}
                title={video.title}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              ></iframe>
              <button 
                onClick={(e) => {
                  e.stopPropagation();
                  setActiveVideoId(null);
                }}
                className="absolute top-4 right-4 z-20 p-2 glass rounded-full text-white hover:bg-red-500 transition-colors"
              >
                <X size={20} />
              </button>
            </div>
          ) : (
            <div 
              className="relative w-full h-full cursor-pointer"
              onClick={() => setActiveVideoId(video.id)}
            >
              {/* Automatic Thumbnail Image */}
              <img 
                src={getThumbnail(video.youtubeId)} 
                alt={video.title}
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
              />
              
              {/* Modern Overlay */}
              <div className="absolute inset-0 bg-slate-900/10 group-hover:bg-slate-900/40 transition-colors duration-500"></div>
              
              {/* Play Button Centered */}
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <div className="w-16 h-16 glass rounded-full flex items-center justify-center text-white/90 group-hover:bg-blue-600 group-hover:text-white transition-all duration-500 transform group-hover:scale-110 group-active:scale-95 shadow-lg">
                  <Play fill="currentColor" size={28} className="ml-1" />
                </div>
              </div>

              {/* Title Overlay on Hover */}
              <div className="absolute bottom-6 left-6 right-6 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                <p className="text-white font-bold text-lg drop-shadow-lg">{video.title}</p>
                <p className="text-blue-400 text-xs uppercase tracking-widest font-bold">YouTube Short</p>
              </div>

              {/* Glass Sparkle Effect on Hover */}
              <div className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-700 bg-gradient-to-tr from-white/10 to-transparent"></div>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default VideoGallery;