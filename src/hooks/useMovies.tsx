import { useQuery } from "@tanstack/react-query";
import { getTopRatedMovies } from "@/services/serviceGET";
import { Movie } from "@/interfaces/global.interfaces";

interface MainFilmProps {
  page: number;
}

export const useMovies = ({ page }: MainFilmProps) => {
  const {
    isLoading: loadingFilms,
    isError: errorFetchingFilms,
    error: errorMessageFilms,
    data: films,
  } = useQuery<Movie[]>({
    queryKey: ["getMainFilm", page],
    queryFn: async () => (await getTopRatedMovies({ page: page })).data,
    staleTime: 1000 * 60 * 60,
  });

  return { loadingFilms, errorFetchingFilms, errorMessageFilms, films };
};
