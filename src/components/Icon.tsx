interface IconProps {
  name: string;
  type: string;
  className?: string;
}

export const Icon = ({ name, type, className }: IconProps) => {
  return (
    <img
      className={`${className}`}
      src={`/${name}.${type}`}
      alt={`Icono de ${name}`}
    />
  );
};
