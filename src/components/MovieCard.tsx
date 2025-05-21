import { Movie } from "@/interfaces/global.interfaces";
import { Icon } from "@/components/Icon";

export const MovieCard = ({ id, backdrop_path, original_title }: Movie) => {
  return (
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
  );
};
