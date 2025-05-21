import axiosInstance from "@/config/axiosConfig";
import { Movie, RequestResponse } from "@/interfaces/global.interfaces";

interface GetTopRatedMovieProps {
  page: number;
}

type GetTopRatedMovies = ({
  page,
}: GetTopRatedMovieProps) => Promise<RequestResponse<Movie[]>>;

export const getTopRatedMovies: GetTopRatedMovies = async ({
  page,
}: GetTopRatedMovieProps) => {
  const response = await axiosInstance
    .get(`/top_rated?page=${page}&append_to_response=videos`)
    .then((response) => {
      console.log(response.data.results);
      return {
        error: false,
        data: response.data.results,
        status: response.status,
      };
    })
    .catch((error) => {
      return { error: true, data: [], status: error.response.status };
    });

  return response;
};

interface GetMoviesVideosProps {
  movieID: number;
}

export const getMoviesVideos = async ({ movieID }: GetMoviesVideosProps) => {
  const response = axiosInstance
    .get(`/${movieID}?append_to_response=videos`)
    .then((response) => {
      console.log(response.data);
      return { error: false, data: response.data, status: response.status };
    })
    .catch((error) => {
      console.log(error);
      return { error: true, data: [], status: error.response.status };
    });

  return response;
};
