import { MoviesList } from "@/components/MoviesList";

const pages = Array.from({ length: 5 }, (_, index) => index + 1);

const HeroSection = () => {
  return (
    <div className="flex flex-col gap-15">
      {pages.map((page) => (
        <MoviesList pageOfMovies={page} />
      ))}
    </div>
  );
};

export default HeroSection;
