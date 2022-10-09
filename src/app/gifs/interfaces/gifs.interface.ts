export interface GifsSearchResponse {
  data: Gif[];
  pagination: Pagination;
  meta: Meta;
}

export interface Gif {
  type: Type;
  id: string;
  url: string;
  slug: string;
  bitly_gif_url: string;
  bitly_url: string;
  embed_url: string;
  username: string;
  source: string;
  title: Title;
  rating: Rating;
  content_url: string;
  source_tld: string;
  source_post_url: string;
  is_sticker: number;
  import_datetime: Date;
  trending_datetime: TrendingDatetime;
  images: Images;
  analytics_response_payload: string;
  analytics: Analytics;
}

export interface Analytics {
  onload: Onclick;
  onclick: Onclick;
  onsent: Onclick;
}

export interface Onclick {
  url: string;
}

export interface Images {
  downsized_large: Downsized;
  downsized_medium: Downsized;
  fixed_height: FixedHeight;
  fixed_height_downsampled: FixedHeight;
  fixed_height_small: FixedHeight;
  fixed_width: FixedHeight;
  fixed_width_downsampled: FixedHeight;
  fixed_width_small: FixedHeight;
  original: FixedHeight;
}

export interface Downsized {
  height: string;
  size: string;
  url: string;
  width: string;
}

export interface FixedHeight {
  height: string;
  width: string;
  size: string;
  url: string;
  mp4_size?: string;
  mp4?: string;
  webp_size: string;
  webp: string;
  frames?: string;
  hash?: string;
}

export enum Rating {
  G = 'g',
  PG = 'pg',
  PG13 = 'pg-13',
}

export enum Title {
  GIF = 'gif',
}

export enum TrendingDatetime {
  The00000000000000 = '0000-00-00 00:00:00',
}

export enum Type {
  Sticker = 'sticker',
}

export interface Meta {
  status: number;
  msg: string;
  response_id: string;
}

export interface Pagination {
  total_count: number;
  count: number;
  offset: number;
}
