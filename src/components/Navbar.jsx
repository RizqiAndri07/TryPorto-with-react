import { useState,useEffect} from "react";

const Navbar = () => {
  const [active, setActive] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 150) {
        setActive(true);
      } else setActive(false);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  },[]);

  return (
    <div className="navbar flex items-center justify-between py-7">
      <div className="logo">
        <h1 className="text-3xl font-bold bg-white text-black md:text-white md:bg-transparent">
          Portofolio
        </h1>
      </div>
      <ul
        className={`menu bg-white/30 md:bg-transparent backdrop-blur-md p-4 rounded-br-2xl rounded-bl-2xl flex gap-4 font-medium text-md  fixed left-1/2 -translate-x-1/2 md:static md:translate-x-0 md:opacity-100 transition-all md:transition-none ${
          active ? "top-0 opacity-100" : "-top-10 opacity-0"
        }`}
      >
        <li>
          <a href="#">Beranda</a>
        </li>
        <li>
          <a href="#">Tentang</a>
        </li>
        <li>
          <a href="#">Project</a>
        </li>
        <li>
          <a href="#">Kontak</a>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
