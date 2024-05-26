interface Snippet {
  publishedAt: string;
  channelId: string;
  title: string;
  description: string;
  thumbnails: Thumbnails;
  channelTitle: string;
  tags: string[];
  categoryId: string;
  liveBroadcastContent: string;
  localized: Localized;
  defaultLanguage: string;
}

interface Statistics {
  viewCount: string;
  likeCount: string;
  dislikeCount: string;
  favoriteCount: string;
  commentCount: string;
}

interface Localized {
  title: string;
  description: string;
}

interface ImageInfo {
  url: string;
  width: number;
  height: number;
}

interface Thumbnails {
  default: ImageInfo;
  medium: ImageInfo;
  high: ImageInfo;
  standard: ImageInfo;
  maxres: ImageInfo;
}

export interface ResponseItem {
  kind: string;
  etag: string;
  id: string;
  snippet: Snippet;
  statistics: Statistics;
}
