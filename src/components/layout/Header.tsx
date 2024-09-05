import Image from "next/image";
import Logo from "@/assets/images/logo.png";

const Header = () => (
  <header className="grid grid-cols-layout grid-rows-1">
    <div className="bg-primary flex justify-between items-center p-4">
      <Image
        src={Logo}
        width={122}
        height={40}
        alt="Logo"
        fill={false}
        className="object-contain"
      />
      <button className="rounded-full group/icon bg-white/20 w-10 h-10 z-0 flex justify-center items-center hover:bg-white/100 transition-colors duration-300">
        <svg className="stroke-white w-5 h-5 group-hover/icon:stroke-primary transition-colors duration-300">
          <use href="/icons/menu.svg#Category" />
        </svg>
      </button>
    </div>
    <div className="px-8 py-4">Soy el header</div>
  </header>
);

export default Header;
