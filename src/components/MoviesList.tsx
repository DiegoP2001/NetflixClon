import { useMovies } from "@/hooks/useMovies";
import { useMoviesVideos } from "@/hooks/useMoviesVideos";
import { MoonLoader } from "react-spinners";
import { IMAGE_ROOT_URL_CARD } from "@/constants/consts";
import { Icon } from "@/components/Icon";
import { useEffect } from "react";

interface MovieProps {
  pageOfMovies: number;
}

export const MoviesList = ({ pageOfMovies }: MovieProps) => {
  const { loadingFilms, errorFetchingFilms, errorMessageFilms, films } =
    useMovies({
      page: pageOfMovies,
    });

  // const { loadingVideos, errorFetchingVideos, errorMessageVideos, videos } =
  //   useMoviesVideos({ movieID: 1 });

  // useEffect(() => {
  //   console.log(videos);
  // }, [videos]);

  if (loadingFilms) {
    return (
      <div className="w-full flex justify-center items-center ">
        <MoonLoader size={20} color="white" />
      </div>
    );
  }

  return (
    <div className="flex gap-2 ml-10 -mt-11 mb-11 overflow-x-hidden">
      {errorFetchingFilms ? (
        <span className="text-red-400 text-xxs">
          {errorMessageFilms?.message}
        </span>
      ) : (
        films?.map((film) => (
          <div key={film.id} className="relative">
            <img
              loading="lazy"
              className="min-w-50 w-50 h-30 object-cover rounded-xs"
              src={`${IMAGE_ROOT_URL_CARD + film.backdrop_path}`}
              alt={`Imagen de ${film.original_title}`}
              width={200}
            />
            <Icon
              className="absolute top-1 w-5"
              name="netflix-logo-icon"
              type="svg"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
            <span className="absolute bottom-1 left-2 text-xxs text-white font-semibold">
              {film.original_title}
            </span>
          </div>
        ))
      )}
    </div>
  );
};
