
export interface VideoMetadata {
  id: string;
  title: string;
  category: string;
  thumbnail: string;
}

export interface PortfolioData {
  name: string;
  role: string;
  bio: string;
  videos: VideoMetadata[];
}
