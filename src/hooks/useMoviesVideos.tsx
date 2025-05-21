import { useQuery } from "@tanstack/react-query";
import { getMoviesVideos } from "@/services/serviceGET";

interface MoviesVideosProps {
  movieID: number;
}

export const useMoviesVideos = ({ movieID }: MoviesVideosProps) => {
  const {
    isLoading: loadingVideos,
    isError: errorFetchingVideos,
    error: errorMessageVideos,
    data: videos,
  } = useQuery({
    queryKey: [`getMoviesVideos-${movieID}`],
    queryFn: async () => (await getMoviesVideos({ movieID: movieID })).data,
    staleTime: 1000 * 60 * 60,
  });

  return { loadingVideos, errorFetchingVideos, errorMessageVideos, videos };
};
