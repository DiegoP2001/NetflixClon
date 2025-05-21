import Avatar from "@/components/Avatar";
import { Menu } from "@/components/Menu";
import { Logo } from "@/components/Logo";
import { Icon } from "@/components/Icon";
import { MainFilm } from "@/components/MainFilm";

const Header = () => {
  return (
    <>
      <header className="relative min-h-90 sm:min-h-70 md:min-h-120 lg:min-h-[100dvh]">
        <MainFilm className="absolute top-0 left-0 right-0" />
        <nav className="w-full flex justify-between bg-gradient-to-b from-black/90 to-black/0 text-white z-10">
          <div className="relative flex justify-center items-center gap-4 ml-10">
            <div className="-mt-10">
              <Logo />
            </div>
            <Menu />
          </div>
          <div className="flex justify-between">
            <ul className="rightSide">
              <li>
                <Icon name="lupa" type="svg" />
              </li>
              <li>Infantil</li>
              <li>
                <svg
                  height="21"
                  viewBox="0 0 21 21"
                  width="21"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="m2.41547595 3.5h10.16904815c.9116644 0 1.6507144.73905002 1.6507144 1.65071443 0 .299182-.0813106.59273912-.2352385.84928557-.9815222 1.63587038-1.5 3.50773964-1.5 5.4154759v1.0845241c0 2.209139-1.790861 4-4 4h-2c-2.209139 0-4-1.790861-4-4v-1.0845241c0-1.90773626-.51847777-3.77960552-1.5-5.4154759-.46904747-.78174578-.2155554-1.79571405.56619038-2.26476152.25654645-.15392786.55010357-.23523848.84928557-.23523848zm2.58452405-1.5c.66666667-1 1.5-1.5 2.5-1.5s1.83333333.5 2.5 1.5"
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    transform="matrix(-1 0 0 -1 18 19)"
                  />
                </svg>
              </li>
              <li>
                <Avatar />
              </li>
            </ul>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Header;
