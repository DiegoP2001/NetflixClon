import { Icon } from "@/components/Icon";

interface MainFilmProps {
  className?: string;
}

export const MainFilm = ({ className = "" }: MainFilmProps) => {
  return (
    <div className={`${className}`}>
      <div className="relative min-h-90 sm:min-h-70 md:min-h-120 lg:min-h-[100dvh] overflow-hidden">
        {/* <img
          className="absolute top-0 right-0 left-0 w-full object-cover opacity-45"
          src={`https://occ-0-3395-360.1.nflxso.net/dnm/api/v6/6AYY37jfdO6hpXcMjf9Yu5cnmO0/AAAABc_t5PeC7kM6wyrJlFj0FC7Wew-OT0IpCk54P3iuQSXIoa8B3fRGTznjdP8zmt3-JQKBF0_zSNJGxZYqI1hgFNYor8dhdIJP2Iv0.webp?r=a17`}
          alt="Imagen de película"
        /> */}
        <img
          className="absolute top-0 right-0 left-0 w-full object-cover opacity-100"
          src={`https://occ-0-3395-360.1.nflxso.net/dnm/api/v6/6AYY37jfdO6hpXcMjf9Yu5cnmO0/AAAABQMuVN-F7emn_-NV90uhSEUdl3j8dOJcK8N_LnDjVIuDGvfdQc4rf8jIql-0gYdl82-qxMNK0nKxCxb-wokMM5DcO46feHJTwopC.webp?r=95b`}
          alt="Imagen de película"
        />
        <div className="absolute flex flex-col top-25 lg:top-55 left-10 max-w-[33%]">
          <img
            className="object-cover w-50 sm:w-90 lg:w-180"
            src={`https://occ-0-3395-360.1.nflxso.net/dnm/api/v6/LmEnxtiAuzezXBjYXPuDgfZ4zZQ/AAAABVVdz5ijsHx4r5cyz0lMn-a01K27SPlIjrS_8YK9ga0-C5USjFPtWfWZY_DXqBxwq-hKyZ9CgH90-VFslNVXu3FtivUI_KAn9KVsZWffSkD5Z1gJGfTHMRXtepyuNrEhLYqBUqkzVd6K9vNsx8qIRwAV6OnCvppbtwdR_UE3UWfnASz9eBgnkQ.webp?r=cda`}
            alt="Imagen de texto de título"
          />
          <p className="text-xxs text-base mt-4 text-white">
            Cho Bo-ah (‘Tale of the Nine Tailed’) interpreta a una mujer de la
            dinastía Joseon cuyas dudas iniciales se transforman en afecto
            cuando su supuesto hermano reaparece en su vida.
          </p>
          <div className="flex gap-6 mt-4">
            <button className="flex text-black text-xs bg-white p-2 rounded-md font-bold gap-2 px-4">
              <Icon name="play" type="svg" className="w-4" /> Reproducir
            </button>
            <button className="flex text-white text-xs bg-[#535457] p-2 rounded-md font-bold gap-2 px-4">
              <Icon name="info" type="svg" className="w-4" /> Más información
            </button>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 w-full h-full bg-[linear-gradient(to_bottom,transparent_70%,black_100%)]" />{" "}
      </div>
    </div>
  );
};
