export interface Movie {
  id: number;
  adult: boolean;
  original_title: string;
  poster_path: string;
  backdrop_path: string;
  video: boolean;
}

export interface MovieResponse {
  results: Movie[];
  total_pages: number;
}

export interface RequestResponse<T> {
    error: boolean,
    data: T,
    status: number
}