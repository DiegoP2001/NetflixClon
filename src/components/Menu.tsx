interface MenuItem {
  id: number;
  text: string;
  href: string;
}

interface MenuProps {
  className?: string;
}

const menuItems: MenuItem[] = [
  {
    id: 1,
    text: "Inicio",
    href: "#",
  },
  {
    id: 2,
    text: "Series",
    href: "#",
  },
  {
    id: 3,
    text: "Películas",
    href: "#",
  },
  {
    id: 4,
    text: "Juegos",
    href: "#",
  },
  {
    id: 5,
    text: "Novedades más vistas",
    href: "#",
  },
  {
    id: 6,
    text: "Mi lista",
    href: "#",
  },
  {
    id: 7,
    text: "Explorar por idiomas",
    href: "#",
  },
];

export const Menu = ({ className }: MenuProps) => {
  return (
    <ul className={`flex gap-4 ml-2 -mt-10 ${className}`}>
      {menuItems.map((item) => (
        <li key={item.id} className="text-xxs lg:text-sm">
          <a href={item.href}>{item.text}</a>
        </li>
      ))}
    </ul>
  );
};
