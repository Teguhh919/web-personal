import Link from "next/link";
import { BsWhatsapp, BsInstagram } from "react-icons/bs";
import { MdEmail } from "react-icons/md";
import { SiTypescript, SiJavascript, SiPython } from "react-icons/si";

const Closing = () => {
  return (
    <div className="flex w-full h-200 items-center border-t-2 mt-5">
      <div className="m-auto">
        <h1 className="md:text-sm text-white text-center mt-2 text-xxs">
          Contact Me
        </h1>
        <Link
          href="https://wa.link/wz5jnb"
          className=" flex md:text-sm text-gray-400 hover:text-orange-400 mt-2 text-xxs"
        >
          <BsWhatsapp className="m-1" /> Whatsapp
        </Link>
        <Link
          href="https://wa.link/wz5jnb"
          className=" flex md:text-sm text-gray-400 hover:text-orange-400 text-xxs"
        >
          <MdEmail className="m-1" /> Email
        </Link>
        <Link
          href="https://wa.link/wz5jnb"
          className=" flex md:text-sm text-gray-400 hover:text-orange-400 text-xxs"
        >
          <BsInstagram className="m-1" /> Instagram
        </Link>
      </div>
      <div className="m-auto">
        <h1 className="md:text-sm text-white text-center text-xxs">
          Dwonload Game
        </h1>
        <Link
          href="https://store.steampowered.com/app/240/CounterStrike_Source/"
          className=" flex md:text-sm text-gray-400 hover:text-orange-400 mt-2 text-xxs"
        >
          - Counter Strike Source
        </Link>
        <Link
          href="https://www.minecraft.net/en-us"
          className=" flex md:text-sm text-gray-400 hover:text-orange-400 text-xxs"
        >
          - Minecraft
        </Link>
        <Link
          href="https://store.steampowered.com/app/1778820/TEKKEN_8/"
          className=" flex md:text-sm text-gray-400 hover:text-orange-400 text-xxs"
        >
          - Tekken 8
        </Link>
      </div>
      <div className="m-auto">
        <h1 className="md:text-sm text-white text-center text-xxs">Music</h1>
        <Link
          href="https://open.spotify.com/"
          className=" flex md:text-sm text-gray-400 hover:text-orange-400 mt-2 text-xxs"
        >
          - Go To Spotify
        </Link>
      </div>
      <div className="m-auto">
        <h1 className="md:text-sm text-white text-center text-xxs">
          Programing
        </h1>
        <Link
          href="https://www.javascript.com/"
          className="  flex md:text-sm text-gray-400 hover:text-orange-400 mt-2 text-xxs"
        >
          <SiJavascript className="m-1" /> Javascript
        </Link>
        <Link
          href="https://www.typescriptlang.org/"
          className="flex md:text-sm text-gray-400 hover:text-orange-400 text-xxs"
        >
          <SiTypescript className="m-1" /> Typescript
        </Link>
        <Link
          href="https://www.python.org/"
          className=" flex md:text-sm text-gray-400 hover:text-orange-400 text-xxs"
        >
          <SiPython className="m-1" /> Python
        </Link>
      </div>
    </div>
  );
};

export default Closing;
